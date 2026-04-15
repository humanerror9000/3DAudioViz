import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Circle, Square } from 'lucide-react';
import { AudioEngine } from '../audio/AudioEngine';
import { AudioAnalyser } from '../audio/AudioAnalyser';
import { RecordingManager, RecordingQuality, RecordingFormat } from '../recording/RecordingManager';
import { FractalRenderer } from '../visuals/FractalRenderer';
import { FractalControls } from '../ui/FractalControls';
import { FractalSettings, defaultFractalSettings } from '../types/fractal';
import { AudioSettings, AudioFeatures } from '../types/audio';
import { MIDIController, applyMIDIValueToParameter } from '../midi/MIDIController';
import { MIDIState } from '../types/midi';
import {
  loadFractalMIDISettings,
  saveFractalMIDISettings,
  addFractalMIDIMapping,
  removeFractalMIDIMapping,
  clearAllFractalMIDIMappings,
  findFractalMappingByCC
} from '../utils/fractalMidiStorage';
import { formatTime } from '../utils/formatTime';
import { Upload } from 'lucide-react';

const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  smoothing: 0.75,
  sensitivity: 1.0,
  peakThreshold: 0.5,
  peakCooldown: 200
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

interface FractalVisualizerProps {
  onBack: () => void;
}

export function FractalVisualizer({ onBack }: FractalVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fractalRendererRef = useRef<FractalRenderer | null>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const audioAnalyserRef = useRef<AudioAnalyser | null>(null);
  const recordingManagerRef = useRef<RecordingManager | null>(null);
  const midiControllerRef = useRef<MIDIController | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const settingsRef = useRef<FractalSettings>(defaultFractalSettings);
  const audioSettingsRef = useRef<AudioSettings>(DEFAULT_AUDIO_SETTINGS);
  const midiStateRef = useRef<MIDIState | null>(null);

  const [settings, setSettings] = useState<FractalSettings>(defaultFractalSettings);
  const [audioSettings, setAudioSettings] = useState<AudioSettings>(DEFAULT_AUDIO_SETTINGS);
  const [audioFeatures, setAudioFeatures] = useState<AudioFeatures>(DEFAULT_AUDIO_FEATURES);

  const [midiState, setMidiState] = useState<MIDIState>({
    isSupported: false,
    hasAccess: false,
    isInitializing: false,
    devices: [],
    settings: loadFractalMIDISettings(),
    lastActivity: 0,
    learningParameterId: null,
    learningContext: null
  });

  const [audioFileName, setAudioFileName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingQuality] = useState<RecordingQuality>('high');
  const [recordingFormat] = useState<RecordingFormat>('auto');

  useEffect(() => {
    if (!canvasRef.current) return;

    fractalRendererRef.current = new FractalRenderer();
    fractalRendererRef.current.initialize(canvasRef.current, settings.fractalType, settings);

    audioEngineRef.current = new AudioEngine();
    recordingManagerRef.current = new RecordingManager();

    recordingManagerRef.current.setTimerCallback((seconds) => {
      setRecordingTime(seconds);
    });

    recordingManagerRef.current.setErrorCallback(() => {
      setIsRecording(false);
      setRecordingTime(0);
    });

    audioEngineRef.current.onPlay(() => setIsPlaying(true));
    audioEngineRef.current.onPause(() => setIsPlaying(false));
    audioEngineRef.current.onEnded(() => setIsPlaying(false));

    const handleResize = () => {
      if (!canvasRef.current || !fractalRendererRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      fractalRendererRef.current.resize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (fractalRendererRef.current) {
        fractalRendererRef.current.dispose();
      }
      audioEngineRef.current?.cleanup();
      recordingManagerRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const animate = () => {
      const time = performance.now();

      if (audioEngineRef.current) {
        audioEngineRef.current.updateCurrentTime();
        setCurrentTime(audioEngineRef.current.currentTime);

        const analyserNode = audioEngineRef.current.getAnalyserNode();
        if (analyserNode && audioAnalyserRef.current && audioEngineRef.current.isPlaying) {
          const features = audioAnalyserRef.current.analyse(audioSettingsRef.current);
          setAudioFeatures(features);

          if (fractalRendererRef.current) {
            fractalRendererRef.current.update(time, features, settingsRef.current);
          }
        } else {
          if (fractalRendererRef.current) {
            fractalRendererRef.current.update(time, DEFAULT_AUDIO_FEATURES, settingsRef.current);
          }
        }
      }

      if (fractalRendererRef.current) {
        fractalRendererRef.current.render();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    midiStateRef.current = midiState;
  }, [midiState]);

  useEffect(() => {
    saveFractalMIDISettings(midiState.settings);
  }, [midiState.settings]);

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
    if (midiControllerRef.current && midiState.hasAccess) {
      midiControllerRef.current.setSelectedDevice(midiState.settings.selectedDeviceId);
    }
  }, [midiState.settings.selectedDeviceId]);

  useEffect(() => {
    if (midiControllerRef.current && midiState.hasAccess) {
      midiControllerRef.current.setSmoothing(midiState.settings.smoothing);
    }
  }, [midiState.settings.smoothing]);

  useEffect(() => {
    settingsRef.current = settings;
    if (fractalRendererRef.current) {
      fractalRendererRef.current.setFractalType(settings.fractalType, settings);
    }
  }, [settings]);

  useEffect(() => {
    audioSettingsRef.current = audioSettings;
  }, [audioSettings]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
        return;
      }

      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        if (audioFileName) {
          handlePlayPause();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [audioFileName, isPlaying]);

  const handleMIDIMessage = (ccNumber: number, value: number) => {
    setMidiState((p) => ({ ...p, lastActivity: Date.now() }));
    const currentState = midiStateRef.current;
    if (!currentState) return;

    const mapping = findFractalMappingByCC(currentState.settings, ccNumber);
    if (!mapping) {
      if (currentState.settings.learnMode && currentState.learningContext) {
        const newSettings = addFractalMIDIMapping(currentState.settings, {
          parameterId: currentState.learningContext.parameterId,
          parameterName: currentState.learningContext.parameterName,
          ccNumber,
          min: currentState.learningContext.min,
          max: currentState.learningContext.max,
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
      case 'zoom':
        setSettings((p) => ({ ...p, zoom: value as number }));
        break;
      case 'bassReactivity':
        setSettings((p) => ({ ...p, bassReactivity: value as number }));
        break;
      case 'energyReactivity':
        setSettings((p) => ({ ...p, energyReactivity: value as number }));
        break;
      case 'highsReactivity':
        setSettings((p) => ({ ...p, highsReactivity: value as number }));
        break;
      case 'peakPulse':
        setSettings((p) => ({ ...p, peakPulse: value as boolean }));
        break;
      case 'rotationSpeed':
        setSettings((p) => ({ ...p, rotationSpeed: value as number }));
        break;
      case 'power':
        setSettings((p) => ({ ...p, power: value as number }));
        break;
      case 'iterations':
        setSettings((p) => ({ ...p, iterations: Math.round(value as number) }));
        break;
      case 'bailout':
        setSettings((p) => ({ ...p, bailout: value as number }));
        break;
      case 'mengerIterations':
        setSettings((p) => ({ ...p, mengerIterations: Math.round(value as number) }));
        break;
      case 'juliaCx':
        setSettings((p) => {
          const newC: [number, number, number, number] = [...p.juliaC];
          newC[0] = value as number;
          return { ...p, juliaC: newC };
        });
        break;
      case 'juliaCy':
        setSettings((p) => {
          const newC: [number, number, number, number] = [...p.juliaC];
          newC[1] = value as number;
          return { ...p, juliaC: newC };
        });
        break;
      case 'juliaCz':
        setSettings((p) => {
          const newC: [number, number, number, number] = [...p.juliaC];
          newC[2] = value as number;
          return { ...p, juliaC: newC };
        });
        break;
      case 'juliaCw':
        setSettings((p) => {
          const newC: [number, number, number, number] = [...p.juliaC];
          newC[3] = value as number;
          return { ...p, juliaC: newC };
        });
        break;
      case 'bloom':
        setSettings((p) => ({ ...p, bloom: value as boolean }));
        break;
      case 'bloomStrength':
        setSettings((p) => ({ ...p, bloomStrength: value as number }));
        break;
      case 'bloomRadius':
        setSettings((p) => ({ ...p, bloomRadius: value as number }));
        break;
      case 'bloomThreshold':
        setSettings((p) => ({ ...p, bloomThreshold: value as number }));
        break;
      case 'audioSmoothing':
        setAudioSettings((p) => ({ ...p, smoothing: value as number }));
        break;
      case 'audioSensitivity':
        setAudioSettings((p) => ({ ...p, sensitivity: value as number }));
        break;
    }
  };

  const handleParameterClick = (parameterId: string, parameterName: string, min: number, max: number, isToggle?: boolean) => {
    if (!midiState.settings.learnMode) return;
    setMidiState((p) => ({ ...p, learningParameterId: parameterId, learningContext: { parameterId, parameterName, min, max, isToggle } }));
  };

  const handleMIDIEnableChange = (enabled: boolean) => setMidiState((p) => ({ ...p, settings: { ...p.settings, enabled } }));
  const handleMIDIDeviceChange = (deviceId: string | null) => setMidiState((p) => ({ ...p, settings: { ...p.settings, selectedDeviceId: deviceId } }));
  const handleMIDISmoothingChange = (smoothing: number) => setMidiState((p) => ({ ...p, settings: { ...p.settings, smoothing } }));
  const handleMIDILearnModeChange = (enabled: boolean) => setMidiState((p) => ({ ...p, settings: { ...p.settings, learnMode: enabled }, learningParameterId: null, learningContext: null }));
  const handleMIDIRemoveMapping = (parameterId: string) => setMidiState((p) => ({ ...p, settings: removeFractalMIDIMapping(p.settings, parameterId) }));
  const handleMIDIClearMappings = () => setMidiState((p) => ({ ...p, settings: clearAllFractalMIDIMappings(p.settings) }));

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !audioEngineRef.current) return;

    try {
      await audioEngineRef.current.loadAudioFile(file);

      const analyserNode = audioEngineRef.current.getAnalyserNode();
      if (analyserNode) {
        audioAnalyserRef.current = new AudioAnalyser(
          analyserNode,
          audioEngineRef.current['audioContext']?.sampleRate || 44100
        );
      }

      setAudioFileName(file.name);
      setDuration(audioEngineRef.current.duration);
      setCurrentTime(0);
    } catch {
      alert('Failed to load audio file. Please try again.');
    } finally {
      e.target.value = '';
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

  const handleStartRecording = () => {
    if (!canvasRef.current || !recordingManagerRef.current) return;

    setRecordingTime(0);

    let audioStream: MediaStream | undefined;

    if (audioEngineRef.current) {
      const stream = audioEngineRef.current.createAudioStream();
      if (stream) {
        audioStream = stream;
      }
    }

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    recordingManagerRef.current.startRecording(
      canvasRef.current,
      {
        fps: 30,
        includeAudio: !!audioStream,
        quality: recordingQuality,
        format: recordingFormat,
        width,
        height
      },
      audioStream,
      fractalRendererRef.current
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

  const handleReset = () => {
    setSettings(defaultFractalSettings);
    setAudioSettings(DEFAULT_AUDIO_SETTINGS);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatRecordingTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: 'none' }}
      />

      <div className="absolute top-4 left-4 flex flex-col gap-4 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Visualizer</span>
          </button>

          <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg">
            <h1 className="text-xl font-bold">Fractal Visualizer</h1>
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioUpload}
            className="hidden"
          />
          <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
            <Upload size={20} />
            <span className="text-sm">
              {audioFileName || 'Upload Audio'}
            </span>
          </div>
        </label>

        <div className="flex items-center gap-3 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg">
          <button
            onClick={handleStartRecording}
            disabled={isRecording}
            className="p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Circle size={18} className={isRecording ? 'fill-red-500 text-red-500' : 'text-red-500'} />
          </button>

          <button
            onClick={handleStopRecording}
            disabled={!isRecording}
            className="p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Square size={18} className="text-white" />
          </button>

          <span className="text-sm text-white/70 font-mono">
            {formatRecordingTime(recordingTime)}
          </span>
        </div>
      </div>

      <FractalControls
        settings={settings}
        audioSettings={audioSettings}
        audioFeatures={audioFeatures}
        midiState={midiState}
        onSettingsChange={setSettings}
        onAudioSettingsChange={setAudioSettings}
        onParameterClick={handleParameterClick}
        onMIDIEnableChange={handleMIDIEnableChange}
        onMIDIDeviceChange={handleMIDIDeviceChange}
        onMIDISmoothingChange={handleMIDISmoothingChange}
        onMIDILearnModeChange={handleMIDILearnModeChange}
        onMIDIRemoveMapping={handleMIDIRemoveMapping}
        onMIDIClearMappings={handleMIDIClearMappings}
        onReset={handleReset}
      />

      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayPause}
            disabled={!audioFileName}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Play/Pause (Spacebar)"
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          <div className="flex-1 flex items-center gap-3">
            <span className="text-sm text-white/70 font-mono min-w-[45px]">
              {formatTime(currentTime)}
            </span>

            <div className="flex-1 relative h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-blue-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
              <input
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
                disabled={!audioFileName}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
            </div>

            <span className="text-sm text-white/70 font-mono min-w-[45px]">
              {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-white/70">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
