import { useEffect, useRef, useState } from 'react';
import { AudioEngine } from './audio/AudioEngine';
import { AudioAnalyser } from './audio/AudioAnalyser';
import { SceneManager } from './visuals/SceneManager';
import { ReactiveMesh } from './visuals/ReactiveMesh';
import { RecordingManager, RecordingQuality, RecordingFormat } from './recording/RecordingManager';
import { MIDIController, applyMIDIValueToParameter } from './midi/MIDIController';
import { AudioPlayer } from './ui/AudioPlayer';
import { ControlPanel } from './ui/ControlPanel';
import { HelpModal } from './ui/HelpModal';
import { FullscreenHUD } from './ui/FullscreenHUD';
import { SavePresetModal } from './ui/SavePresetModal';
import { MediaReactor } from './pages/MediaReactor';
import {
  GeometryType,
  RenderStyle,
  DetailLevel,
  MeshSettings,
  GlobalSettings,
  SmoothedParameters
} from './types/scene';
import { AudioSettings, AudioFeatures } from './types/audio';
import { Preset } from './types/preset';
import { MIDIState, MIDIDeviceInfo } from './types/midi';
import {
  loadMIDISettings,
  saveMIDISettings,
  addMIDIMapping,
  removeMIDIMapping,
  clearAllMIDIMappings,
  findMappingByCC
} from './utils/midiStorage';
import { updatePreset, initializePresets, getPresetById } from './utils/presetStorage';

const DEFAULT_MESH_SETTINGS: MeshSettings = {
  geometryType: GeometryType.SPHERE,
  detailLevel: DetailLevel.MEDIUM,
  renderStyle: RenderStyle.WIREFRAME,
  displacement: 0.5,
  noiseScale: 2.0,
  noiseSpeed: 0.5,
  subWeight: 0.3,
  bassWeight: 0.5,
  midsWeight: 0.3,
  highsWeight: 0.2,
  pulseOnPeak: true,
  baseColor: '#3b82f6',
  pointSize: 0.2,
  pointDensity: 0.3
};

const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  smoothing: 0.75,
  sensitivity: 1.0,
  peakThreshold: 0.5,
  peakCooldown: 200
};

const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  autoOrbit: false,
  orbitSpeed: 0.3,
  bloom: false,
  bloomStrength: 1.5,
  bloomRadius: 0.4,
  bloomThreshold: 0.85,
  parameterSmoothing: 0.2
};

const DEFAULT_AUDIO_FEATURES: AudioFeatures = {
  energy: 0,
  sub: 0,
  bass: 0,
  mids: 0,
  highs: 0,
  peakTrigger: false,
  timestamp: 0
};

function App() {
  const [mode, setMode] = useState<'visualizer' | 'mediaReactor'>('visualizer');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const audioAnalyserRef = useRef<AudioAnalyser | null>(null);
  const sceneManagerRef = useRef<SceneManager | null>(null);
  const reactiveMeshRef = useRef<ReactiveMesh | null>(null);
  const recordingManagerRef = useRef<RecordingManager | null>(null);
  const midiControllerRef = useRef<MIDIController | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const midiStateRef = useRef<MIDIState | null>(null);
  const smoothedParamsRef = useRef<SmoothedParameters>({});
  const prevMeshSettingsRef = useRef<MeshSettings>(DEFAULT_MESH_SETTINGS);

  const [meshSettings, setMeshSettings] = useState<MeshSettings>(DEFAULT_MESH_SETTINGS);
  const [audioSettings, setAudioSettings] = useState<AudioSettings>(DEFAULT_AUDIO_SETTINGS);
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(DEFAULT_GLOBAL_SETTINGS);
  const [audioFeatures, setAudioFeatures] = useState<AudioFeatures>(DEFAULT_AUDIO_FEATURES);

  const [midiState, setMidiState] = useState<MIDIState>({
    isSupported: false,
    hasAccess: false,
    isInitializing: false,
    devices: [],
    settings: loadMIDISettings(),
    lastActivity: 0,
    learningParameterId: null,
    learningContext: null
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [fps, setFps] = useState(30);
  const [includeAudio, setIncludeAudio] = useState(true);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  const [recordingQuality, setRecordingQuality] = useState<RecordingQuality>('high');
  const [recordingFormat, setRecordingFormat] = useState<RecordingFormat>('auto');

  const [showHelp, setShowHelp] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPreset, setCurrentPreset] = useState<Preset | null>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [pendingPreset, setPendingPreset] = useState<Preset | null>(null);

  const initSmoothedParam = (key: string, value: number) => {
    if (!smoothedParamsRef.current[key]) {
      smoothedParamsRef.current[key] = { target: value, smoothed: value };
    }
  };

  const setTargetValue = (key: string, value: number) => {
    if (!smoothedParamsRef.current[key]) {
      smoothedParamsRef.current[key] = { target: value, smoothed: value };
    } else {
      smoothedParamsRef.current[key].target = value;
    }
  };

  const getSmoothedValue = (key: string, fallback: number): number => {
    return smoothedParamsRef.current[key]?.smoothed ?? fallback;
  };

  const updateSmoothedParameters = (smoothingFactor: number) => {
    Object.keys(smoothedParamsRef.current).forEach((key) => {
      const param = smoothedParamsRef.current[key];
      const diff = param.target - param.smoothed;
      param.smoothed += diff * smoothingFactor;
    });
  };

  useEffect(() => {
    if (!canvasRef.current || mode !== 'visualizer') return;

    if (sceneManagerRef.current) {
      sceneManagerRef.current.cleanup();
    }
    if (reactiveMeshRef.current) {
      reactiveMeshRef.current.dispose();
    }

    audioEngineRef.current = new AudioEngine();
    sceneManagerRef.current = new SceneManager(canvasRef.current);
    reactiveMeshRef.current = new ReactiveMesh();
    recordingManagerRef.current = new RecordingManager();

    recordingManagerRef.current.setTimerCallback((seconds) => {
      setRecordingTime(seconds);
    });

    recordingManagerRef.current.setErrorCallback((message) => {
      setRecordingError(message);
      setIsRecording(false);
      setRecordingTime(0);
    });

    recordingManagerRef.current.setFormatWarningCallback((message) => {
      setRecordingError(message);
    });

    audioEngineRef.current.onPlay(() => setIsPlaying(true));
    audioEngineRef.current.onPause(() => setIsPlaying(false));
    audioEngineRef.current.onEnded(() => setIsPlaying(false));

    const initialObject = reactiveMeshRef.current.initialize(meshSettings);
    if (initialObject) {
      sceneManagerRef.current.setActiveVisual(initialObject);
    }

    const animate = () => {
      const time = performance.now();

      updateSmoothedParameters(globalSettings.parameterSmoothing);

      const effectiveMeshSettings: MeshSettings = {
        ...meshSettings,
        displacement: getSmoothedValue('displacement', meshSettings.displacement),
        noiseScale: getSmoothedValue('noiseScale', meshSettings.noiseScale),
        noiseSpeed: getSmoothedValue('noiseSpeed', meshSettings.noiseSpeed),
        subWeight: getSmoothedValue('subWeight', meshSettings.subWeight),
        bassWeight: getSmoothedValue('bassWeight', meshSettings.bassWeight),
        midsWeight: getSmoothedValue('midsWeight', meshSettings.midsWeight),
        highsWeight: getSmoothedValue('highsWeight', meshSettings.highsWeight),
        pointSize: getSmoothedValue('pointSize', meshSettings.pointSize),
        pointDensity: getSmoothedValue('pointDensity', meshSettings.pointDensity)
      };

      const effectiveAudioSettings: AudioSettings = {
        ...audioSettings,
        smoothing: getSmoothedValue('audioSmoothing', audioSettings.smoothing),
        sensitivity: getSmoothedValue('audioSensitivity', audioSettings.sensitivity),
        peakThreshold: getSmoothedValue('peakThreshold', audioSettings.peakThreshold),
        peakCooldown: getSmoothedValue('peakCooldown', audioSettings.peakCooldown)
      };

      if (sceneManagerRef.current && globalSettings.autoOrbit) {
        const smoothedOrbitSpeed = getSmoothedValue('orbitSpeed', globalSettings.orbitSpeed);
        sceneManagerRef.current.updateAutoOrbit(true, smoothedOrbitSpeed);
      }

      if (audioEngineRef.current) {
        audioEngineRef.current.updateCurrentTime();
        setCurrentTime(audioEngineRef.current.currentTime);

        const analyserNode = audioEngineRef.current.getAnalyserNode();
        if (analyserNode && audioAnalyserRef.current && audioEngineRef.current.isPlaying) {
          const features = audioAnalyserRef.current.analyse(effectiveAudioSettings);
          setAudioFeatures(features);

          if (reactiveMeshRef.current) {
            reactiveMeshRef.current.update(time, features, effectiveMeshSettings);
          }
        } else {
          const zeroFeatures = {
            energy: 0,
            bass: 0,
            mids: 0,
            highs: 0,
            sub: 0,
            peakTrigger: false,
            timestamp: time
          };

          if (reactiveMeshRef.current) {
            reactiveMeshRef.current.update(time, zeroFeatures, effectiveMeshSettings);
          }
        }
      }

      if (sceneManagerRef.current) {
        sceneManagerRef.current.render();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      recordingManagerRef.current?.dispose();
      audioEngineRef.current?.cleanup();
      sceneManagerRef.current?.cleanup();
      reactiveMeshRef.current?.dispose();
    };
  }, [mode]);

  useEffect(() => {
    initializePresets();
    const defaultPreset = getPresetById('default-1');
    if (defaultPreset) {
      applyPreset(defaultPreset);
    }
  }, []);

  useEffect(() => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.updateAutoOrbit(globalSettings.autoOrbit, globalSettings.orbitSpeed);
    }
  }, [globalSettings.autoOrbit]);

  useEffect(() => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.updateBloom(
        globalSettings.bloom,
        globalSettings.bloomStrength,
        globalSettings.bloomRadius,
        globalSettings.bloomThreshold
      );
    }
  }, [globalSettings.bloom, globalSettings.bloomStrength, globalSettings.bloomRadius, globalSettings.bloomThreshold]);

  useEffect(() => {
    const initMIDI = async () => {
      const controller = new MIDIController();
      const isSupported = controller.isSupported();

      console.log('MIDI supported:', isSupported);
      setMidiState((prev) => ({ ...prev, isSupported }));

      if (!isSupported) {
        console.log('MIDI not supported by browser');
        return;
      }

      if (midiState.settings.enabled) {
        console.log('Initializing MIDI...');
        const hasAccess = await controller.initialize();
        console.log('MIDI access granted:', hasAccess);

        if (hasAccess) {
          const devices = controller.getDevices();
          console.log('MIDI devices found:', devices);

          controller.setSelectedDevice(midiState.settings.selectedDeviceId);
          controller.setSmoothing(midiState.settings.smoothing);
          controller.setMessageCallback(handleMIDIMessage);

          setMidiState((prev) => ({
            ...prev,
            hasAccess: true,
            devices
          }));

          midiControllerRef.current = controller;
          console.log('MIDI initialized successfully');
        }
      } else {
        console.log('MIDI is disabled in settings');
      }
    };

    initMIDI();

    return () => {
      midiControllerRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    midiStateRef.current = midiState;
  }, [midiState]);

  useEffect(() => {
    setTargetValue('displacement', meshSettings.displacement);
    setTargetValue('noiseScale', meshSettings.noiseScale);
    setTargetValue('noiseSpeed', meshSettings.noiseSpeed);
    setTargetValue('subWeight', meshSettings.subWeight);
    setTargetValue('bassWeight', meshSettings.bassWeight);
    setTargetValue('midsWeight', meshSettings.midsWeight);
    setTargetValue('highsWeight', meshSettings.highsWeight);
    setTargetValue('pointSize', meshSettings.pointSize);
    setTargetValue('pointDensity', meshSettings.pointDensity);
  }, [
    meshSettings.displacement,
    meshSettings.noiseScale,
    meshSettings.noiseSpeed,
    meshSettings.subWeight,
    meshSettings.bassWeight,
    meshSettings.midsWeight,
    meshSettings.highsWeight,
    meshSettings.pointSize,
    meshSettings.pointDensity
  ]);

  useEffect(() => {
    setTargetValue('orbitSpeed', globalSettings.orbitSpeed);
  }, [globalSettings.orbitSpeed]);

  useEffect(() => {
    setTargetValue('audioSmoothing', audioSettings.smoothing);
    setTargetValue('audioSensitivity', audioSettings.sensitivity);
    setTargetValue('peakThreshold', audioSettings.peakThreshold);
    setTargetValue('peakCooldown', audioSettings.peakCooldown);
  }, [
    audioSettings.smoothing,
    audioSettings.sensitivity,
    audioSettings.peakThreshold,
    audioSettings.peakCooldown
  ]);

  useEffect(() => {
    saveMIDISettings(midiState.settings);
  }, [midiState.settings]);

  useEffect(() => {
    if (midiControllerRef.current) {
      midiControllerRef.current.setSmoothing(midiState.settings.smoothing);
    }
  }, [midiState.settings.smoothing]);

  useEffect(() => {
    if (midiControllerRef.current) {
      console.log('Changing selected MIDI device to:', midiState.settings.selectedDeviceId);
      midiControllerRef.current.setSelectedDevice(midiState.settings.selectedDeviceId);
    }
  }, [midiState.settings.selectedDeviceId]);

  useEffect(() => {
    const enableDisableMIDI = async () => {
      if (midiState.settings.enabled && !midiState.hasAccess && midiState.isSupported) {
        console.log('Enabling MIDI...');
        setMidiState((prev) => ({ ...prev, isInitializing: true }));

        const controller = midiControllerRef.current || new MIDIController();
        const hasAccess = await controller.initialize();
        console.log('MIDI initialization result:', hasAccess);

        if (hasAccess) {
          const devices = controller.getDevices();
          console.log('MIDI devices found:', devices);

          controller.setSelectedDevice(midiState.settings.selectedDeviceId);
          console.log('Selected device:', midiState.settings.selectedDeviceId);
          controller.setSmoothing(midiState.settings.smoothing);
          controller.setMessageCallback(handleMIDIMessage);
          console.log('MIDI callback registered');

          setMidiState((prev) => ({
            ...prev,
            hasAccess: true,
            isInitializing: false,
            devices
          }));

          midiControllerRef.current = controller;
          console.log('MIDI enabled successfully');
        } else {
          console.log('Failed to get MIDI access');
          setMidiState((prev) => ({
            ...prev,
            hasAccess: false,
            isInitializing: false
          }));
        }
      } else if (!midiState.settings.enabled && midiState.hasAccess) {
        console.log('Disabling MIDI...');
        midiControllerRef.current?.dispose();
        setMidiState((prev) => ({
          ...prev,
          hasAccess: false,
          isInitializing: false,
          devices: []
        }));
        midiControllerRef.current = null;
      }
    };

    enableDisableMIDI();
  }, [midiState.settings.enabled]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
        return;
      }

      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        if (fileName) {
          handlePlayPause();
        }
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (isRecording) {
          handleStopRecording();
        } else if (fileName) {
          handleStartRecording();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleFullscreen();
      } else if (e.key === 'Escape' && isRecording) {
        e.preventDefault();
        handleStopRecording();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRecording, fileName, isPlaying]);

  useEffect(() => {
    if (!sceneManagerRef.current || !reactiveMeshRef.current) return;

    const prev = prevMeshSettingsRef.current;
    const needsReinit =
      meshSettings.geometryType !== prev.geometryType ||
      meshSettings.detailLevel !== prev.detailLevel ||
      meshSettings.renderStyle !== prev.renderStyle ||
      meshSettings.pointDensity !== prev.pointDensity;

    if (needsReinit) {
      if (isRecording) {
        handleStopRecording();
      }

      reactiveMeshRef.current.dispose();
      const newObject = reactiveMeshRef.current.initialize(meshSettings);
      if (newObject) {
        sceneManagerRef.current.setActiveVisual(newObject);
      }
    } else {
      reactiveMeshRef.current.updateSettings(meshSettings);
    }

    prevMeshSettingsRef.current = meshSettings;
  }, [meshSettings]);

  const handleMIDIMessage = (ccNumber: number, value: number) => {
    console.log('🎛️ handleMIDIMessage called:', { ccNumber, value });
    setMidiState((prev) => ({ ...prev, lastActivity: Date.now() }));

    const currentState = midiStateRef.current;
    if (!currentState) {
      console.log('⚠️ No current MIDI state');
      return;
    }

    console.log('📋 Current MIDI settings:', currentState.settings);
    console.log('🎓 Learn mode:', currentState.settings.learnMode);
    console.log('🗺️ Mappings:', currentState.settings.mappings);

    const mapping = findMappingByCC(currentState.settings, ccNumber);
    if (!mapping) {
      console.log('No mapping found for CC', ccNumber);
      if (currentState.settings.learnMode && currentState.learningContext) {
        console.log('Learning mode active, creating mapping');
        const newMapping = {
          parameterId: currentState.learningContext.parameterId,
          parameterName: currentState.learningContext.parameterName,
          ccNumber,
          min: currentState.learningContext.min,
          max: currentState.learningContext.max,
          isToggle: currentState.learningContext.isToggle
        };

        const newSettings = addMIDIMapping(currentState.settings, newMapping);
        setMidiState((prev) => ({
          ...prev,
          settings: newSettings,
          learningParameterId: null,
          learningContext: null
        }));
      }
      return;
    }

    console.log('Found mapping:', mapping);
    const mappedValue = applyMIDIValueToParameter(value, mapping);
    console.log('Mapped value:', mappedValue);
    applyParameterValue(mapping.parameterId, mappedValue);
  };

  const applyParameterValue = (parameterId: string, value: number | boolean) => {
    switch (parameterId) {
      case 'displacement':
        setMeshSettings((prev) => ({ ...prev, displacement: value as number }));
        break;
      case 'noiseScale':
        setMeshSettings((prev) => ({ ...prev, noiseScale: value as number }));
        break;
      case 'noiseSpeed':
        setMeshSettings((prev) => ({ ...prev, noiseSpeed: value as number }));
        break;
      case 'subWeight':
        setMeshSettings((prev) => ({ ...prev, subWeight: value as number }));
        break;
      case 'bassWeight':
        setMeshSettings((prev) => ({ ...prev, bassWeight: value as number }));
        break;
      case 'midsWeight':
        setMeshSettings((prev) => ({ ...prev, midsWeight: value as number }));
        break;
      case 'highsWeight':
        setMeshSettings((prev) => ({ ...prev, highsWeight: value as number }));
        break;
      case 'pointSize':
        setMeshSettings((prev) => ({ ...prev, pointSize: value as number }));
        break;
      case 'pointDensity':
        setMeshSettings((prev) => ({ ...prev, pointDensity: value as number }));
        break;
      case 'pulseOnPeak':
        setMeshSettings((prev) => ({ ...prev, pulseOnPeak: value as boolean }));
        break;
      case 'audioSmoothing':
        setAudioSettings((prev) => ({ ...prev, smoothing: value as number }));
        break;
      case 'audioSensitivity':
        setAudioSettings((prev) => ({ ...prev, sensitivity: value as number }));
        break;
      case 'peakThreshold':
        setAudioSettings((prev) => ({ ...prev, peakThreshold: value as number }));
        break;
      case 'peakCooldown':
        setAudioSettings((prev) => ({ ...prev, peakCooldown: value as number }));
        break;
      case 'autoOrbit':
        setGlobalSettings((prev) => ({ ...prev, autoOrbit: value as boolean }));
        break;
      case 'orbitSpeed':
        setGlobalSettings((prev) => ({ ...prev, orbitSpeed: value as number }));
        break;
    }
  };

  const handleParameterClick = (
    parameterId: string,
    parameterName: string,
    min: number,
    max: number,
    isToggle?: boolean
  ) => {
    if (!midiState.settings.learnMode) return;

    setMidiState((prev) => ({
      ...prev,
      learningParameterId: parameterId,
      learningContext: {
        parameterId,
        parameterName,
        min,
        max,
        isToggle
      }
    }));
  };

  const handleMIDIEnableChange = (enabled: boolean) => {
    setMidiState((prev) => ({
      ...prev,
      settings: { ...prev.settings, enabled }
    }));
  };

  const handleMIDIDeviceChange = (deviceId: string | null) => {
    setMidiState((prev) => ({
      ...prev,
      settings: { ...prev.settings, selectedDeviceId: deviceId }
    }));
  };

  const handleMIDISmoothingChange = (smoothing: number) => {
    setMidiState((prev) => ({
      ...prev,
      settings: { ...prev.settings, smoothing }
    }));
  };

  const handleMIDILearnModeChange = (enabled: boolean) => {
    setMidiState((prev) => ({
      ...prev,
      settings: { ...prev.settings, learnMode: enabled },
      learningParameterId: null,
      learningContext: null
    }));
  };

  const handleMIDIRemoveMapping = (parameterId: string) => {
    const newSettings = removeMIDIMapping(midiState.settings, parameterId);
    setMidiState((prev) => ({
      ...prev,
      settings: newSettings
    }));
  };

  const handleMIDIClearMappings = () => {
    const newSettings = clearAllMIDIMappings(midiState.settings);
    setMidiState((prev) => ({
      ...prev,
      settings: newSettings
    }));
  };

  const handleFileUpload = async (file: File) => {
    if (!audioEngineRef.current) return;

    if (isRecording) {
      handleStopRecording();
    }

    setIsLoading(true);
    setError(null);

    try {
      await audioEngineRef.current.loadAudioFile(file);

      const analyserNode = audioEngineRef.current.getAnalyserNode();
      if (analyserNode) {
        audioAnalyserRef.current = new AudioAnalyser(
          analyserNode,
          audioEngineRef.current['audioContext']?.sampleRate || 44100
        );
      }

      setFileName(file.name);
      setDuration(audioEngineRef.current.duration);
      setCurrentTime(0);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load audio file');
      setIsLoading(false);
      console.error(err);
    }
  };

  const handlePlayPause = async () => {
    if (!audioEngineRef.current) return;

    if (isPlaying) {
      audioEngineRef.current.pause();
    } else {
      await audioEngineRef.current.play();
    }
  };

  const handlePlayFromBeginning = async () => {
    if (!audioEngineRef.current) return;

    audioEngineRef.current.seek(0);
    setCurrentTime(0);
    await audioEngineRef.current.play();
  };

  const handleSeek = (time: number) => {
    if (audioEngineRef.current) {
      audioEngineRef.current.seek(time);
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (vol: number) => {
    setVolume(vol);
    if (audioEngineRef.current) {
      audioEngineRef.current.setVolume(vol);
    }
  };

  const handleReset = () => {
    setMeshSettings(DEFAULT_MESH_SETTINGS);
    setAudioSettings(DEFAULT_AUDIO_SETTINGS);
    setGlobalSettings(DEFAULT_GLOBAL_SETTINGS);
    setCurrentPreset(null);
  };

  const hasPresetChanged = (): boolean => {
    if (!currentPreset) return false;

    const currentGlobalSettings = {
      ...currentPreset.globalSettings,
      parameterSmoothing: currentPreset.globalSettings.parameterSmoothing ?? 0.2,
      bloomStrength: currentPreset.globalSettings.bloomStrength ?? 1.5,
      bloomRadius: currentPreset.globalSettings.bloomRadius ?? 0.4,
      bloomThreshold: currentPreset.globalSettings.bloomThreshold ?? 0.85
    };

    return (
      JSON.stringify(meshSettings) !== JSON.stringify(currentPreset.meshSettings) ||
      JSON.stringify(audioSettings) !== JSON.stringify(currentPreset.audioSettings) ||
      JSON.stringify(globalSettings) !== JSON.stringify(currentGlobalSettings)
    );
  };

  const applyPreset = (preset: Preset) => {
    setMeshSettings(preset.meshSettings);
    setAudioSettings(preset.audioSettings);
    setGlobalSettings({
      ...preset.globalSettings,
      parameterSmoothing: preset.globalSettings.parameterSmoothing ?? 0.2,
      bloomStrength: preset.globalSettings.bloomStrength ?? 1.5,
      bloomRadius: preset.globalSettings.bloomRadius ?? 0.4,
      bloomThreshold: preset.globalSettings.bloomThreshold ?? 0.85
    });
    setCurrentPreset(preset);
  };

  const handleLoadPreset = (preset: Preset) => {
    if (isRecording) {
      handleStopRecording();
    }

    if (currentPreset?.id === preset.id) {
      return;
    }

    if (hasPresetChanged()) {
      setPendingPreset(preset);
      setShowSaveModal(true);
    } else {
      applyPreset(preset);
    }
  };

  const handleSaveChanges = () => {
    if (currentPreset) {
      updatePreset(currentPreset.id, {
        name: currentPreset.name,
        meshSettings,
        audioSettings,
        globalSettings
      });

      const updatedPreset: Preset = {
        ...currentPreset,
        meshSettings,
        audioSettings,
        globalSettings
      };
      setCurrentPreset(updatedPreset);
    }
    setShowSaveModal(false);
    if (pendingPreset) {
      applyPreset(pendingPreset);
      setPendingPreset(null);
    }
  };

  const handleDiscardChanges = () => {
    setShowSaveModal(false);
    if (pendingPreset) {
      applyPreset(pendingPreset);
      setPendingPreset(null);
    }
  };

  const handleCancelSave = () => {
    setShowSaveModal(false);
    setPendingPreset(null);
  };

  const handleStartRecording = () => {
    if (!canvasRef.current || !recordingManagerRef.current) return;

    setRecordingError(null);
    setRecordingTime(0);

    let audioStream: MediaStream | undefined;

    if (includeAudio && audioEngineRef.current) {
      const stream = audioEngineRef.current.createAudioStream();
      if (stream) {
        audioStream = stream;
      }
    }

    recordingManagerRef.current.startRecording(
      canvasRef.current,
      {
        fps,
        includeAudio,
        quality: recordingQuality,
        format: recordingFormat
      },
      audioStream
    );

    setIsRecording(true);
  };

  const handleStopRecording = () => {
    if (!recordingManagerRef.current) return;

    recordingManagerRef.current.stopRecording();
    setIsRecording(false);
    setRecordingTime(0);

    if (audioEngineRef.current) {
      audioEngineRef.current.disposeAudioStream();
    }
  };

  const handleFullscreen = () => {
    if (!canvasContainerRef.current) return;

    if (!document.fullscreenElement) {
      canvasContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Failed to enter fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  if (mode === 'mediaReactor') {
    return <MediaReactor onBack={() => setMode('visualizer')} />;
  }

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      <div ref={canvasContainerRef} className="absolute inset-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ touchAction: 'none' }}
        />
      </div>

      {!isFullscreen && (
        <>
          <AudioPlayer
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            volume={volume}
            fileName={fileName}
            isLoading={isLoading}
            error={error}
            isRecording={isRecording}
            recordingTime={recordingTime}
            fps={fps}
            includeAudio={includeAudio}
            recordingError={recordingError}
            recordingQuality={recordingQuality}
            recordingFormat={recordingFormat}
            audioFeatures={audioFeatures}
            onFileUpload={handleFileUpload}
            onPlayPause={handlePlayPause}
            onPlayFromBeginning={handlePlayFromBeginning}
            onSeek={handleSeek}
            onVolumeChange={handleVolumeChange}
            onStartRecording={handleStartRecording}
            onStopRecording={handleStopRecording}
            onFpsChange={setFps}
            onIncludeAudioChange={setIncludeAudio}
            onQualityChange={setRecordingQuality}
            onFormatChange={setRecordingFormat}
            onFullscreen={handleFullscreen}
          />

          <button
            onClick={() => setMode('mediaReactor')}
            className="absolute bottom-4 left-4 z-20 px-4 py-2 bg-blue-600 hover:bg-blue-700 border border-blue-400 rounded-lg transition-colors shadow-lg font-medium"
          >
            Media Reactor
          </button>
        </>
      )}

      {isFullscreen && (
        <FullscreenHUD
          isRecording={isRecording}
          recordingTime={recordingTime}
          canRecord={!!fileName}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />
      )}

      {!isFullscreen && (
        <ControlPanel
          meshSettings={meshSettings}
          audioSettings={audioSettings}
          globalSettings={globalSettings}
          audioFeatures={audioFeatures}
          midiState={midiState}
          onMeshSettingsChange={setMeshSettings}
          onAudioSettingsChange={setAudioSettings}
          onGlobalSettingsChange={setGlobalSettings}
          onHelpClick={() => setShowHelp(true)}
          onReset={handleReset}
          onLoadPreset={handleLoadPreset}
          onMIDIEnableChange={handleMIDIEnableChange}
          onMIDIDeviceChange={handleMIDIDeviceChange}
          onMIDISmoothingChange={handleMIDISmoothingChange}
          onMIDILearnModeChange={handleMIDILearnModeChange}
          onMIDIRemoveMapping={handleMIDIRemoveMapping}
          onMIDIClearMappings={handleMIDIClearMappings}
          onParameterClick={handleParameterClick}
        />
      )}

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />

      {showSaveModal && currentPreset && (
        <SavePresetModal
          presetName={currentPreset.name}
          onSave={handleSaveChanges}
          onDiscard={handleDiscardChanges}
          onCancel={handleCancelSave}
        />
      )}
    </div>
  );
}

export default App;
