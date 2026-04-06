import { useEffect, useRef, useState } from 'react';
import { AudioEngine } from './audio/AudioEngine';
import { AudioAnalyser } from './audio/AudioAnalyser';
import { SceneManager } from './visuals/SceneManager';
import { ReactiveMesh } from './visuals/ReactiveMesh';
import { ParticleSystem } from './visuals/ParticleSystem';
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
  SmoothedParameters,
  ParticleSettings,
  defaultParticleSettings
} from './types/scene';
import { AudioSettings, AudioFeatures } from './types/audio';
import { Preset } from './types/preset';
import { MIDIState } from './types/midi';
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
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const recordingManagerRef = useRef<RecordingManager | null>(null);
  const midiControllerRef = useRef<MIDIController | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const midiStateRef = useRef<MIDIState | null>(null);
  const smoothedParamsRef = useRef<SmoothedParameters>({});
  const prevMeshSettingsRef = useRef<MeshSettings>(DEFAULT_MESH_SETTINGS);
  const prevRenderStyleRef = useRef<RenderStyle>(RenderStyle.WIREFRAME);

  const [meshSettings, setMeshSettings] = useState<MeshSettings>(DEFAULT_MESH_SETTINGS);
  const [audioSettings, setAudioSettings] = useState<AudioSettings>(DEFAULT_AUDIO_SETTINGS);
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(DEFAULT_GLOBAL_SETTINGS);
  const [particleSettings, setParticleSettings] = useState<ParticleSettings>(defaultParticleSettings);
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
      param.smoothed += (param.target - param.smoothed) * smoothingFactor;
    });
  };

  // ── Activate particle system ───────────────────────────────────────────────
  const activateParticleSystem = (settings: ParticleSettings) => {
    if (!sceneManagerRef.current) return;
    if (!particleSystemRef.current) particleSystemRef.current = new ParticleSystem();
    const group = particleSystemRef.current.initialize(settings);
    sceneManagerRef.current.setActiveVisual(group);
  };

  // ── Activate reactive mesh ─────────────────────────────────────────────────
  const activateReactiveMesh = (settings: MeshSettings) => {
    if (!sceneManagerRef.current || !reactiveMeshRef.current) return;
    const obj = reactiveMeshRef.current.initialize(settings);
    if (obj) sceneManagerRef.current.setActiveVisual(obj);
  };

  // ── Main setup effect ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current || mode !== 'visualizer') return;

    sceneManagerRef.current?.cleanup();
    reactiveMeshRef.current?.dispose();
    particleSystemRef.current?.dispose();

    audioEngineRef.current    = new AudioEngine();
    sceneManagerRef.current   = new SceneManager(canvasRef.current);
    reactiveMeshRef.current   = new ReactiveMesh();
    particleSystemRef.current = new ParticleSystem();
    recordingManagerRef.current = new RecordingManager();

    recordingManagerRef.current.setTimerCallback((s) => setRecordingTime(s));
    recordingManagerRef.current.setErrorCallback((msg) => {
      setRecordingError(msg); setIsRecording(false); setRecordingTime(0);
    });
    recordingManagerRef.current.setFormatWarningCallback((msg) => setRecordingError(msg));

    audioEngineRef.current.onPlay(() => setIsPlaying(true));
    audioEngineRef.current.onPause(() => setIsPlaying(false));
    audioEngineRef.current.onEnded(() => setIsPlaying(false));

    // Initialize correct visual
    if (meshSettings.renderStyle === RenderStyle.PARTICLES) {
      activateParticleSystem(particleSettings);
    } else {
      const obj = reactiveMeshRef.current.initialize(meshSettings);
      if (obj) sceneManagerRef.current.setActiveVisual(obj);
    }

    const animate = () => {
      const time = performance.now();
      updateSmoothedParameters(globalSettings.parameterSmoothing);

      const effectiveMesh: MeshSettings = {
        ...meshSettings,
        displacement: getSmoothedValue('displacement', meshSettings.displacement),
        noiseScale:   getSmoothedValue('noiseScale',   meshSettings.noiseScale),
        noiseSpeed:   getSmoothedValue('noiseSpeed',   meshSettings.noiseSpeed),
        subWeight:    getSmoothedValue('subWeight',    meshSettings.subWeight),
        bassWeight:   getSmoothedValue('bassWeight',   meshSettings.bassWeight),
        midsWeight:   getSmoothedValue('midsWeight',   meshSettings.midsWeight),
        highsWeight:  getSmoothedValue('highsWeight',  meshSettings.highsWeight),
        pointSize:    getSmoothedValue('pointSize',    meshSettings.pointSize),
        pointDensity: getSmoothedValue('pointDensity', meshSettings.pointDensity)
      };

      const effectiveAudio: AudioSettings = {
        ...audioSettings,
        smoothing:      getSmoothedValue('audioSmoothing',   audioSettings.smoothing),
        sensitivity:    getSmoothedValue('audioSensitivity', audioSettings.sensitivity),
        peakThreshold:  getSmoothedValue('peakThreshold',    audioSettings.peakThreshold),
        peakCooldown:   getSmoothedValue('peakCooldown',     audioSettings.peakCooldown)
      };

      if (sceneManagerRef.current && globalSettings.autoOrbit) {
        sceneManagerRef.current.updateAutoOrbit(true, getSmoothedValue('orbitSpeed', globalSettings.orbitSpeed));
      }

      if (audioEngineRef.current) {
        audioEngineRef.current.updateCurrentTime();
        setCurrentTime(audioEngineRef.current.currentTime);

        const analyserNode = audioEngineRef.current.getAnalyserNode();
        const features: AudioFeatures =
          analyserNode && audioAnalyserRef.current && audioEngineRef.current.isPlaying
            ? audioAnalyserRef.current.analyse(effectiveAudio)
            : { energy: 0, bass: 0, mids: 0, highs: 0, sub: 0, peakTrigger: false, timestamp: time };

        setAudioFeatures(features);

        if (meshSettings.renderStyle === RenderStyle.PARTICLES) {
          particleSystemRef.current?.update(time, features, particleSettings);
        } else {
          reactiveMeshRef.current?.update(time, features, effectiveMesh);
        }
      }

      sceneManagerRef.current?.render();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      recordingManagerRef.current?.dispose();
      audioEngineRef.current?.cleanup();
      sceneManagerRef.current?.cleanup();
      reactiveMeshRef.current?.dispose();
      particleSystemRef.current?.dispose();
    };
  }, [mode]);

  useEffect(() => {
    initializePresets();
    const defaultPreset = getPresetById('default-1');
    if (defaultPreset) applyPreset(defaultPreset);
  }, []);

  useEffect(() => {
    sceneManagerRef.current?.updateAutoOrbit(globalSettings.autoOrbit, globalSettings.orbitSpeed);
  }, [globalSettings.autoOrbit]);

  useEffect(() => {
    sceneManagerRef.current?.updateBloom(
      globalSettings.bloom, globalSettings.bloomStrength,
      globalSettings.bloomRadius, globalSettings.bloomThreshold
    );
  }, [globalSettings.bloom, globalSettings.bloomStrength, globalSettings.bloomRadius, globalSettings.bloomThreshold]);

  // ── Switch between particle mode and mesh mode ─────────────────────────────
  useEffect(() => {
    if (!sceneManagerRef.current) return;
    const prev = prevRenderStyleRef.current;
    const curr = meshSettings.renderStyle;
    if (curr === prev) return;
    prevRenderStyleRef.current = curr;
    if (isRecording) handleStopRecording();

    if (curr === RenderStyle.PARTICLES) {
      reactiveMeshRef.current?.dispose();
      reactiveMeshRef.current = new ReactiveMesh();
      activateParticleSystem(particleSettings);
    } else if (prev === RenderStyle.PARTICLES) {
      particleSystemRef.current?.dispose();
      particleSystemRef.current = new ParticleSystem();
      if (!reactiveMeshRef.current) reactiveMeshRef.current = new ReactiveMesh();
      activateReactiveMesh(meshSettings);
    }
  }, [meshSettings.renderStyle]);

  useEffect(() => {
    const initMIDI = async () => {
      const controller = new MIDIController();
      const isSupported = controller.isSupported();
      setMidiState((p) => ({ ...p, isSupported }));
      if (!isSupported || !midiState.settings.enabled) return;
      const hasAccess = await controller.initialize();
      if (hasAccess) {
        const devices = controller.getDevices();
        controller.setSelectedDevice(midiState.settings.selectedDeviceId);
        controller.setSmoothing(midiState.settings.smoothing);
        controller.setMessageCallback(handleMIDIMessage);
        setMidiState((p) => ({ ...p, hasAccess: true, devices }));
        midiControllerRef.current = controller;
      }
    };
    initMIDI();
    return () => { midiControllerRef.current?.dispose(); };
  }, []);

  useEffect(() => { midiStateRef.current = midiState; }, [midiState]);

  useEffect(() => {
    setTargetValue('displacement', meshSettings.displacement);
    setTargetValue('noiseScale',   meshSettings.noiseScale);
    setTargetValue('noiseSpeed',   meshSettings.noiseSpeed);
    setTargetValue('subWeight',    meshSettings.subWeight);
    setTargetValue('bassWeight',   meshSettings.bassWeight);
    setTargetValue('midsWeight',   meshSettings.midsWeight);
    setTargetValue('highsWeight',  meshSettings.highsWeight);
    setTargetValue('pointSize',    meshSettings.pointSize);
    setTargetValue('pointDensity', meshSettings.pointDensity);
  }, [
    meshSettings.displacement, meshSettings.noiseScale, meshSettings.noiseSpeed,
    meshSettings.subWeight, meshSettings.bassWeight, meshSettings.midsWeight,
    meshSettings.highsWeight, meshSettings.pointSize, meshSettings.pointDensity
  ]);

  useEffect(() => { setTargetValue('orbitSpeed', globalSettings.orbitSpeed); }, [globalSettings.orbitSpeed]);

  useEffect(() => {
    setTargetValue('audioSmoothing',   audioSettings.smoothing);
    setTargetValue('audioSensitivity', audioSettings.sensitivity);
    setTargetValue('peakThreshold',    audioSettings.peakThreshold);
    setTargetValue('peakCooldown',     audioSettings.peakCooldown);
  }, [audioSettings.smoothing, audioSettings.sensitivity, audioSettings.peakThreshold, audioSettings.peakCooldown]);

  useEffect(() => { saveMIDISettings(midiState.settings); }, [midiState.settings]);

  useEffect(() => {
    midiControllerRef.current?.setSmoothing(midiState.settings.smoothing);
  }, [midiState.settings.smoothing]);

  useEffect(() => {
    midiControllerRef.current?.setSelectedDevice(midiState.settings.selectedDeviceId);
  }, [midiState.settings.selectedDeviceId]);

  useEffect(() => {
    const enableDisableMIDI = async () => {
      if (midiState.settings.enabled && !midiState.hasAccess && midiState.isSupported) {
        setMidiState((p) => ({ ...p, isInitializing: true }));
        const controller = midiControllerRef.current || new MIDIController();
        const hasAccess = await controller.initialize();
        if (hasAccess) {
          const devices = controller.getDevices();
          controller.setSelectedDevice(midiState.settings.selectedDeviceId);
          controller.setSmoothing(midiState.settings.smoothing);
          controller.setMessageCallback(handleMIDIMessage);
          setMidiState((p) => ({ ...p, hasAccess: true, isInitializing: false, devices }));
          midiControllerRef.current = controller;
        } else {
          setMidiState((p) => ({ ...p, hasAccess: false, isInitializing: false }));
        }
      } else if (!midiState.settings.enabled && midiState.hasAccess) {
        midiControllerRef.current?.dispose();
        setMidiState((p) => ({ ...p, hasAccess: false, isInitializing: false, devices: [] }));
        midiControllerRef.current = null;
      }
    };
    enableDisableMIDI();
  }, [midiState.settings.enabled]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
      if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); if (fileName) handlePlayPause(); }
      else if (e.key === 'r' || e.key === 'R')   { e.preventDefault(); isRecording ? handleStopRecording() : fileName && handleStartRecording(); }
      else if (e.key === 'f' || e.key === 'F')   { e.preventDefault(); handleFullscreen(); }
      else if (e.key === 'Escape' && isRecording) { e.preventDefault(); handleStopRecording(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRecording, fileName, isPlaying]);

  // Mesh reinit (only when not in particle mode)
  useEffect(() => {
    if (!sceneManagerRef.current || !reactiveMeshRef.current) return;
    if (meshSettings.renderStyle === RenderStyle.PARTICLES) return;

    const prev = prevMeshSettingsRef.current;
    const needsReinit =
      meshSettings.geometryType !== prev.geometryType ||
      meshSettings.detailLevel  !== prev.detailLevel  ||
      meshSettings.renderStyle  !== prev.renderStyle  ||
      meshSettings.pointDensity !== prev.pointDensity;

    if (needsReinit) {
      if (isRecording) handleStopRecording();
      reactiveMeshRef.current.dispose();
      const obj = reactiveMeshRef.current.initialize(meshSettings);
      if (obj) sceneManagerRef.current.setActiveVisual(obj);
    } else {
      reactiveMeshRef.current.updateSettings(meshSettings);
    }

    prevMeshSettingsRef.current = meshSettings;
  }, [meshSettings]);

  const handleMIDIMessage = (ccNumber: number, value: number) => {
    setMidiState((p) => ({ ...p, lastActivity: Date.now() }));
    const currentState = midiStateRef.current;
    if (!currentState) return;

    const mapping = findMappingByCC(currentState.settings, ccNumber);
    if (!mapping) {
      if (currentState.settings.learnMode && currentState.learningContext) {
        const newSettings = addMIDIMapping(currentState.settings, {
          parameterId:   currentState.learningContext.parameterId,
          parameterName: currentState.learningContext.parameterName,
          ccNumber,
          min:      currentState.learningContext.min,
          max:      currentState.learningContext.max,
          isToggle: currentState.learningContext.isToggle
        });
        setMidiState((p) => ({ ...p, settings: newSettings, learningParameterId: null, learningContext: null }));
      }
      return;
    }

    applyParameterValue(mapping.parameterId, applyMIDIValueToParameter(value, mapping));
  };

  const applyParameterValue = (parameterId: string, value: number | boolean) => {
    switch (parameterId) {
      case 'displacement':     setMeshSettings((p) => ({ ...p, displacement:   value as number }));  break;
      case 'noiseScale':       setMeshSettings((p) => ({ ...p, noiseScale:     value as number }));  break;
      case 'noiseSpeed':       setMeshSettings((p) => ({ ...p, noiseSpeed:     value as number }));  break;
      case 'subWeight':        setMeshSettings((p) => ({ ...p, subWeight:      value as number }));  break;
      case 'bassWeight':       setMeshSettings((p) => ({ ...p, bassWeight:     value as number }));  break;
      case 'midsWeight':       setMeshSettings((p) => ({ ...p, midsWeight:     value as number }));  break;
      case 'highsWeight':      setMeshSettings((p) => ({ ...p, highsWeight:    value as number }));  break;
      case 'pointSize':        setMeshSettings((p) => ({ ...p, pointSize:      value as number }));  break;
      case 'pointDensity':     setMeshSettings((p) => ({ ...p, pointDensity:   value as number }));  break;
      case 'pulseOnPeak':      setMeshSettings((p) => ({ ...p, pulseOnPeak:    value as boolean })); break;
      case 'audioSmoothing':   setAudioSettings((p) => ({ ...p, smoothing:     value as number }));  break;
      case 'audioSensitivity': setAudioSettings((p) => ({ ...p, sensitivity:   value as number }));  break;
      case 'peakThreshold':    setAudioSettings((p) => ({ ...p, peakThreshold: value as number }));  break;
      case 'peakCooldown':     setAudioSettings((p) => ({ ...p, peakCooldown:  value as number }));  break;
      case 'autoOrbit':        setGlobalSettings((p) => ({ ...p, autoOrbit:    value as boolean })); break;
      case 'orbitSpeed':       setGlobalSettings((p) => ({ ...p, orbitSpeed:   value as number }));  break;
    }
  };

  const handleParameterClick = (parameterId: string, parameterName: string, min: number, max: number, isToggle?: boolean) => {
    if (!midiState.settings.learnMode) return;
    setMidiState((p) => ({ ...p, learningParameterId: parameterId, learningContext: { parameterId, parameterName, min, max, isToggle } }));
  };

  const handleMIDIEnableChange    = (enabled: boolean)        => setMidiState((p) => ({ ...p, settings: { ...p.settings, enabled } }));
  const handleMIDIDeviceChange    = (deviceId: string | null) => setMidiState((p) => ({ ...p, settings: { ...p.settings, selectedDeviceId: deviceId } }));
  const handleMIDISmoothingChange = (smoothing: number)       => setMidiState((p) => ({ ...p, settings: { ...p.settings, smoothing } }));
  const handleMIDILearnModeChange = (enabled: boolean)        => setMidiState((p) => ({ ...p, settings: { ...p.settings, learnMode: enabled }, learningParameterId: null, learningContext: null }));
  const handleMIDIRemoveMapping   = (parameterId: string)     => setMidiState((p) => ({ ...p, settings: removeMIDIMapping(p.settings, parameterId) }));
  const handleMIDIClearMappings   = ()                        => setMidiState((p) => ({ ...p, settings: clearAllMIDIMappings(p.settings) }));

  const handleFileUpload = async (file: File) => {
    if (!audioEngineRef.current) return;
    if (isRecording) handleStopRecording();
    setIsLoading(true); setError(null);
    try {
      await audioEngineRef.current.loadAudioFile(file);
      const analyserNode = audioEngineRef.current.getAnalyserNode();
      if (analyserNode) {
        audioAnalyserRef.current = new AudioAnalyser(analyserNode, audioEngineRef.current['audioContext']?.sampleRate || 44100);
      }
      setFileName(file.name);
      setDuration(audioEngineRef.current.duration);
      setCurrentTime(0);
      setIsLoading(false);
    } catch {
      setError('Failed to load audio file');
      setIsLoading(false);
    }
  };

  const handlePlayPause = async () => {
    if (!audioEngineRef.current) return;
    isPlaying ? audioEngineRef.current.pause() : await audioEngineRef.current.play();
  };

  const handlePlayFromBeginning = async () => {
    if (!audioEngineRef.current) return;
    audioEngineRef.current.seek(0); setCurrentTime(0);
    await audioEngineRef.current.play();
  };

  const handleSeek         = (time: number) => { audioEngineRef.current?.seek(time); setCurrentTime(time); };
  const handleVolumeChange = (vol: number)  => { setVolume(vol); audioEngineRef.current?.setVolume(vol); };

  const handleReset = () => {
    setMeshSettings(DEFAULT_MESH_SETTINGS);
    setAudioSettings(DEFAULT_AUDIO_SETTINGS);
    setGlobalSettings(DEFAULT_GLOBAL_SETTINGS);
    setParticleSettings(defaultParticleSettings);
    setCurrentPreset(null);
  };

  const hasPresetChanged = (): boolean => {
    if (!currentPreset) return false;
    const cg = {
      ...currentPreset.globalSettings,
      parameterSmoothing: currentPreset.globalSettings.parameterSmoothing ?? 0.2,
      bloomStrength:      currentPreset.globalSettings.bloomStrength      ?? 1.5,
      bloomRadius:        currentPreset.globalSettings.bloomRadius        ?? 0.4,
      bloomThreshold:     currentPreset.globalSettings.bloomThreshold     ?? 0.85
    };
    return (
      JSON.stringify(meshSettings)   !== JSON.stringify(currentPreset.meshSettings)  ||
      JSON.stringify(audioSettings)  !== JSON.stringify(currentPreset.audioSettings) ||
      JSON.stringify(globalSettings) !== JSON.stringify(cg)
    );
  };

  const applyPreset = (preset: Preset) => {
    setMeshSettings(preset.meshSettings);
    setAudioSettings(preset.audioSettings);
    setGlobalSettings({
      ...preset.globalSettings,
      parameterSmoothing: preset.globalSettings.parameterSmoothing ?? 0.2,
      bloomStrength:      preset.globalSettings.bloomStrength      ?? 1.5,
      bloomRadius:        preset.globalSettings.bloomRadius        ?? 0.4,
      bloomThreshold:     preset.globalSettings.bloomThreshold     ?? 0.85
    });
    setCurrentPreset(preset);
  };

  const handleLoadPreset = (preset: Preset) => {
    if (isRecording) handleStopRecording();
    if (currentPreset?.id === preset.id) return;
    if (hasPresetChanged()) { setPendingPreset(preset); setShowSaveModal(true); }
    else applyPreset(preset);
  };

  const handleSaveChanges = () => {
    if (currentPreset) {
      updatePreset(currentPreset.id, { name: currentPreset.name, meshSettings, audioSettings, globalSettings });
      setCurrentPreset({ ...currentPreset, meshSettings, audioSettings, globalSettings });
    }
    setShowSaveModal(false);
    if (pendingPreset) { applyPreset(pendingPreset); setPendingPreset(null); }
  };

  const handleDiscardChanges = () => {
    setShowSaveModal(false);
    if (pendingPreset) { applyPreset(pendingPreset); setPendingPreset(null); }
  };

  const handleCancelSave = () => { setShowSaveModal(false); setPendingPreset(null); };

  const handleStartRecording = () => {
    if (!canvasRef.current || !recordingManagerRef.current) return;
    setRecordingError(null); setRecordingTime(0);
    let audioStream: MediaStream | undefined;
    if (includeAudio && audioEngineRef.current) {
      const stream = audioEngineRef.current.createAudioStream();
      if (stream) audioStream = stream;
    }
    recordingManagerRef.current.startRecording(
      canvasRef.current,
      { fps, includeAudio, quality: recordingQuality, format: recordingFormat },
      audioStream
    );
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    if (!recordingManagerRef.current) return;
    recordingManagerRef.current.stopRecording();
    setIsRecording(false); setRecordingTime(0);
    audioEngineRef.current?.disposeAudioStream();
  };

  const handleFullscreen = () => {
    if (!canvasContainerRef.current) return;
    if (!document.fullscreenElement) {
      canvasContainerRef.current.requestFullscreen().catch((e) => console.error('Fullscreen error:', e));
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
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ touchAction: 'none' }} />
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
          particleSettings={particleSettings}
          audioFeatures={audioFeatures}
          midiState={midiState}
          onMeshSettingsChange={setMeshSettings}
          onAudioSettingsChange={setAudioSettings}
          onGlobalSettingsChange={setGlobalSettings}
          onParticleSettingsChange={setParticleSettings}
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
