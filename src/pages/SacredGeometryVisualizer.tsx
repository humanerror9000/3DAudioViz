import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { AudioEngine } from '../audio/AudioEngine';
import { AudioAnalyser } from '../audio/AudioAnalyser';
import { RecordingManager, RecordingQuality, RecordingFormat } from '../recording/RecordingManager';
import { SacredGeometryRenderer } from '../visuals/SacredGeometryRenderer';
import { GeometryControls } from '../ui/GeometryControls';
import { GeometrySettings, defaultGeometrySettings } from '../types/geometry';
import { AudioSettings, AudioFeatures } from '../types/audio';
import { MIDIController, applyMIDIValueToParameter } from '../midi/MIDIController';
import { MIDIState } from '../types/midi';
import { formatTime } from '../utils/formatTime';

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

interface SacredGeometryVisualizerProps {
  onBack: () => void;
}

export function SacredGeometryVisualizer({ onBack }: SacredGeometryVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const geometryRendererRef = useRef<SacredGeometryRenderer | null>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const audioAnalyserRef = useRef<AudioAnalyser | null>(null);
  const recordingManagerRef = useRef<RecordingManager | null>(null);
  const midiControllerRef = useRef<MIDIController | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const audioFileInputRef = useRef<HTMLInputElement>(null);
  const settingsRef = useRef<GeometrySettings>(defaultGeometrySettings);

  const [settings, setSettings] = useState<GeometrySettings>(defaultGeometrySettings);
  const [audioFeatures, setAudioFeatures] = useState<AudioFeatures>(DEFAULT_AUDIO_FEATURES);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [midiState, setMidiState] = useState<MIDIState>({
    enabled: false,
    devices: [],
    learningParam: null,
    mappings: {}
  });
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(
    defaultGeometrySettings.layers[0]?.id || null
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new SacredGeometryRenderer();
    renderer.initialize(canvas, settings);
    geometryRendererRef.current = renderer;

    const audioEngine = new AudioEngine();
    audioEngineRef.current = audioEngine;

    const recordingManager = new RecordingManager();
    recordingManagerRef.current = recordingManager;

    const midiController = new MIDIController();
    midiControllerRef.current = midiController;

    midiController.initialize().then((success) => {
      if (success) {
        setMidiState(prev => ({ ...prev, enabled: true, devices: midiController.getDevices() }));
        midiController.setMessageCallback((ccNumber: number, value: number) => {
          console.log('MIDI message:', ccNumber, value);
        });
      }
    });

    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.resize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = (timestamp: number) => {
      const deltaTime = lastTimeRef.current === 0 ? 0 : (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      let features = DEFAULT_AUDIO_FEATURES;

      if (audioEngine.isPlaying) {
        const analyserNode = audioEngine.getAnalyserNode();
        if (analyserNode && audioAnalyserRef.current) {
          features = audioAnalyserRef.current.analyse(DEFAULT_AUDIO_SETTINGS);
          setAudioFeatures(features);
        }
        audioEngine.updateCurrentTime();
        setCurrentTime(audioEngine.currentTime);
      }

      renderer.updateAudioFeatures(features);
      renderer.render(deltaTime, settingsRef.current);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      audioEngine.cleanup();
      midiController.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    settingsRef.current = settings;
    if (geometryRendererRef.current) {
      geometryRendererRef.current.updateSettings(settings);
      geometryRendererRef.current.updateLayers(settings.layers);
    }
  }, [settings]);

  const handleAudioFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !audioEngineRef.current) return;

    try {
      await audioEngineRef.current.loadAudioFile(file);

      const analyserNode = audioEngineRef.current.getAnalyserNode();
      const audioContext = audioEngineRef.current['audioContext'];
      if (analyserNode && audioContext) {
        audioAnalyserRef.current = new AudioAnalyser(analyserNode, audioContext.sampleRate);
      }

      setDuration(audioEngineRef.current.duration);
      await audioEngineRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error loading audio file:', error);
    }
  };

  const togglePlayPause = async () => {
    if (!audioEngineRef.current) return;

    if (isPlaying) {
      audioEngineRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioEngineRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (time: number) => {
    if (!audioEngineRef.current) return;
    audioEngineRef.current.seek(time);
    setCurrentTime(time);
  };

  return (
    <div className="fixed inset-0 bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center gap-2 pointer-events-auto transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="text-right">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg">
            Sacred Geometry Visualizer
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Ancient patterns meet modern audio reactivity
          </p>
        </div>
      </div>

      <div className="absolute top-20 left-4 w-80 max-h-[calc(100vh-120px)] overflow-y-auto pointer-events-none">
        <div className="space-y-4 pointer-events-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
              Audio Input
            </h3>
            <input
              ref={audioFileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleAudioFileChange}
              className="hidden"
            />
            <button
              onClick={() => audioFileInputRef.current?.click()}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Load Audio File
            </button>

            {duration > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={duration}
                  step="0.1"
                  value={currentTime}
                  onChange={(e) => handleSeek(parseFloat(e.target.value))}
                  className="w-full"
                />
                <button
                  onClick={togglePlayPause}
                  className="w-full mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            )}
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden">
            <GeometryControls
              settings={settings}
              onSettingsChange={setSettings}
              selectedLayerId={selectedLayerId}
              onLayerSelect={setSelectedLayerId}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-8 text-xs text-gray-400 pointer-events-none">
        <div className="bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded">
          Energy: {(audioFeatures.energy * 100).toFixed(0)}%
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded">
          Bass: {(audioFeatures.bass * 100).toFixed(0)}%
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm px-3 py-2 rounded">
          Highs: {(audioFeatures.highs * 100).toFixed(0)}%
        </div>
        {audioFeatures.peakTrigger && (
          <div className="bg-blue-600/80 backdrop-blur-sm px-3 py-2 rounded animate-pulse">
            PEAK
          </div>
        )}
      </div>
    </div>
  );
}
