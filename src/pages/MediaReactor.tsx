import { useEffect, useRef, useState } from 'react';
import { Upload, Circle, Square, ArrowLeft, SkipBack } from 'lucide-react';
import { AudioEngine } from '../audio/AudioEngine';
import { AudioAnalyser } from '../audio/AudioAnalyser';
import { RecordingManager, RecordingQuality, RecordingFormat } from '../recording/RecordingManager';
import { MediaReactorScene } from '../visuals/MediaReactorScene';
import { Canvas2DRenderer } from '../visuals/Canvas2DRenderer';
import { MediaReactorControls } from '../ui/MediaReactorControls';
import { MediaReactorSettings, MediaType, MediaFile, RenderMode, MediaGeometry, FitMode, EffectsQuality } from '../types/mediaReactor';
import { AudioSettings, AudioFeatures } from '../types/audio';
import { formatTime } from '../utils/formatTime';

const DEFAULT_SETTINGS: MediaReactorSettings = {
  renderMode: RenderMode.MODE_2D,
  geometry: MediaGeometry.SPHERE,
  brightness: 0.5,
  contrast: 0.5,
  rgbSplit: 0.0,
  glitch: 0.0,
  zoomPulse: 0.0,
  displacement: 0.0,
  geometryDisplacement: 0.0,
  intensity: 1.0,
  fitMode: FitMode.COVER,
  effectsQuality: EffectsQuality.LOW,
  autoOrbit: false,
  orbitSpeed: 1.0
};

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

interface MediaReactorProps {
  onBack: () => void;
}

export function MediaReactor({ onBack }: MediaReactorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<MediaReactorScene | null>(null);
  const canvas2DRendererRef = useRef<Canvas2DRenderer | null>(null);
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const audioAnalyserRef = useRef<AudioAnalyser | null>(null);
  const recordingManagerRef = useRef<RecordingManager | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mediaFileRef = useRef<MediaFile | null>(null);
  const settingsRef = useRef<MediaReactorSettings>(DEFAULT_SETTINGS);
  const audioSettingsRef = useRef<AudioSettings>(DEFAULT_AUDIO_SETTINGS);
  const use2DCanvasRef = useRef<boolean>(false);
  const preRecordingQualityRef = useRef<EffectsQuality | null>(null);

  const [settings, setSettings] = useState<MediaReactorSettings>(DEFAULT_SETTINGS);
  const [audioSettings, setAudioSettings] = useState<AudioSettings>(DEFAULT_AUDIO_SETTINGS);
  const [audioFeatures, setAudioFeatures] = useState<AudioFeatures>(DEFAULT_AUDIO_FEATURES);

  const [mediaFileName, setMediaFileName] = useState<string | null>(null);
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

    const initialMode = DEFAULT_SETTINGS.renderMode;
    use2DCanvasRef.current = initialMode === RenderMode.MODE_2D;

    if (initialMode === RenderMode.MODE_2D) {
      canvas2DRendererRef.current = new Canvas2DRenderer(canvasRef.current);
      canvas2DRendererRef.current.setFitMode(DEFAULT_SETTINGS.fitMode);
    } else {
      sceneRef.current = new MediaReactorScene(canvasRef.current);
    }

    audioEngineRef.current = new AudioEngine();
    recordingManagerRef.current = new RecordingManager();

    recordingManagerRef.current.setTimerCallback((seconds) => {
      setRecordingTime(seconds);
    });

    recordingManagerRef.current.setErrorCallback((message) => {
      console.error('Recording error:', message);
      setIsRecording(false);
      setRecordingTime(0);
    });

    audioEngineRef.current.onPlay(() => {
      setIsPlaying(true);
      if (mediaFileRef.current?.element instanceof HTMLVideoElement) {
        mediaFileRef.current.element.play();
      }
    });

    audioEngineRef.current.onPause(() => {
      setIsPlaying(false);
      if (mediaFileRef.current?.element instanceof HTMLVideoElement) {
        mediaFileRef.current.element.pause();
      }
    });

    audioEngineRef.current.onEnded(() => {
      setIsPlaying(false);
      if (mediaFileRef.current?.element instanceof HTMLVideoElement) {
        mediaFileRef.current.element.pause();
        mediaFileRef.current.element.currentTime = 0;
      }
    });

    const ensureProperSize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      if (use2DCanvasRef.current && canvas2DRendererRef.current) {
        canvas2DRendererRef.current.resize(width, height);
      } else if (sceneRef.current) {
        sceneRef.current.updateCameraAndRenderer(width, height);
      }
    };

    setTimeout(ensureProperSize, 0);

    window.addEventListener('resize', ensureProperSize);

    return () => {
      window.removeEventListener('resize', ensureProperSize);
      if (sceneRef.current) {
        sceneRef.current.dispose();
      }
      if (canvas2DRendererRef.current) {
        canvas2DRendererRef.current.dispose();
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
      if (audioEngineRef.current) {
        audioEngineRef.current.updateCurrentTime();
        setCurrentTime(audioEngineRef.current.currentTime);

        const analyserNode = audioEngineRef.current.getAnalyserNode();
        if (analyserNode && audioAnalyserRef.current && audioEngineRef.current.isPlaying) {
          const features = audioAnalyserRef.current.analyse(audioSettingsRef.current);
          setAudioFeatures(features);

          if (sceneRef.current && !use2DCanvasRef.current) {
            sceneRef.current.update(features, settingsRef.current);
          }
        } else {
          const zeroFeatures = DEFAULT_AUDIO_FEATURES;
          if (sceneRef.current && !use2DCanvasRef.current) {
            sceneRef.current.update(zeroFeatures, settingsRef.current);
          }
        }
      }

      if (use2DCanvasRef.current) {
        if (canvas2DRendererRef.current) {
          const analyserNode = audioEngineRef.current?.getAnalyserNode();
          if (analyserNode && audioAnalyserRef.current && audioEngineRef.current?.isPlaying) {
            const features = audioAnalyserRef.current.analyse(audioSettingsRef.current);
            canvas2DRendererRef.current.render(features, settingsRef.current);
          } else {
            canvas2DRendererRef.current.render(DEFAULT_AUDIO_FEATURES, settingsRef.current);
          }
        }
      } else {
        if (sceneRef.current) {
          sceneRef.current.render();
        }
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
    settingsRef.current = settings;

    const shouldUse2D = settings.renderMode === RenderMode.MODE_2D;
    const wasUsing2D = use2DCanvasRef.current;
    const modeChanged = shouldUse2D !== wasUsing2D;

    use2DCanvasRef.current = shouldUse2D;

    if (modeChanged) {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    if (shouldUse2D && !wasUsing2D && canvasRef.current) {
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
      }

      const parent = canvasRef.current.parentElement;
      const oldCanvas = canvasRef.current;
      const newCanvas = document.createElement('canvas');
      newCanvas.className = oldCanvas.className;
      newCanvas.style.cssText = oldCanvas.style.cssText;
      parent?.replaceChild(newCanvas, oldCanvas);
      canvasRef.current = newCanvas;

      canvas2DRendererRef.current = new Canvas2DRenderer(canvasRef.current);

      if (mediaFileRef.current) {
        canvas2DRendererRef.current.loadMedia(mediaFileRef.current);
        if (mediaFileRef.current.element instanceof HTMLVideoElement) {
          mediaFileRef.current.element.play().catch(() => {});
        }
      }
      canvas2DRendererRef.current.setFitMode(settings.fitMode);
      canvas2DRendererRef.current.resize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

      const animate = () => {
        if (audioEngineRef.current) {
          audioEngineRef.current.updateCurrentTime();
          setCurrentTime(audioEngineRef.current.currentTime);

          const analyserNode = audioEngineRef.current.getAnalyserNode();
          if (analyserNode && audioAnalyserRef.current && audioEngineRef.current.isPlaying) {
            const features = audioAnalyserRef.current.analyse(audioSettingsRef.current);
            setAudioFeatures(features);
          }
        }

        if (canvas2DRendererRef.current) {
          const analyserNode = audioEngineRef.current?.getAnalyserNode();
          if (analyserNode && audioAnalyserRef.current && audioEngineRef.current?.isPlaying) {
            const features = audioAnalyserRef.current.analyse(audioSettingsRef.current);
            canvas2DRendererRef.current.render(features, settingsRef.current);
          } else {
            canvas2DRendererRef.current.render(DEFAULT_AUDIO_FEATURES, settingsRef.current);
          }
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    } else if (!shouldUse2D && wasUsing2D && canvasRef.current) {
      if (canvas2DRendererRef.current) {
        canvas2DRendererRef.current.dispose();
        canvas2DRendererRef.current = null;
      }

      const parent = canvasRef.current.parentElement;
      const oldCanvas = canvasRef.current;
      const newCanvas = document.createElement('canvas');
      newCanvas.className = oldCanvas.className;
      newCanvas.style.cssText = oldCanvas.style.cssText;
      parent?.replaceChild(newCanvas, oldCanvas);
      canvasRef.current = newCanvas;

      sceneRef.current = new MediaReactorScene(canvasRef.current);
      if (mediaFileRef.current) {
        sceneRef.current.loadMedia(mediaFileRef.current);
        sceneRef.current.initialize(settings);
        if (mediaFileRef.current.element instanceof HTMLVideoElement) {
          mediaFileRef.current.element.play().catch(() => {});
        }
      }

      const animate = () => {
        if (audioEngineRef.current) {
          audioEngineRef.current.updateCurrentTime();
          setCurrentTime(audioEngineRef.current.currentTime);

          const analyserNode = audioEngineRef.current.getAnalyserNode();
          if (analyserNode && audioAnalyserRef.current && audioEngineRef.current.isPlaying) {
            const features = audioAnalyserRef.current.analyse(audioSettingsRef.current);
            setAudioFeatures(features);

            if (sceneRef.current) {
              sceneRef.current.update(features, settingsRef.current);
            }
          } else {
            const zeroFeatures = DEFAULT_AUDIO_FEATURES;
            if (sceneRef.current) {
              sceneRef.current.update(zeroFeatures, settingsRef.current);
            }
          }
        }

        if (sceneRef.current) {
          sceneRef.current.render();
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    } else if (shouldUse2D && canvas2DRendererRef.current) {
      canvas2DRendererRef.current.setFitMode(settings.fitMode);
      if (canvasRef.current) {
        canvas2DRendererRef.current.resize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      }
    } else if (sceneRef.current) {
      sceneRef.current.updateSettings(settings);
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

  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!sceneRef.current && !canvas2DRendererRef.current) return;

    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');

    if (!isVideo && !isImage) {
      alert('Please upload an image or video file');
      e.target.value = '';
      return;
    }

    const url = URL.createObjectURL(file);

    try {
      if (isVideo) {
        const video = document.createElement('video');
        video.src = url;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        await new Promise((resolve) => {
          video.addEventListener('loadedmetadata', resolve);
        });

        const mediaFile: MediaFile = {
          file,
          type: MediaType.VIDEO,
          url,
          element: video
        };

        mediaFileRef.current = mediaFile;

        if (use2DCanvasRef.current && canvas2DRendererRef.current) {
          canvas2DRendererRef.current.loadMedia(mediaFile);
        } else if (sceneRef.current) {
          sceneRef.current.loadMedia(mediaFile);
          sceneRef.current.initialize(settingsRef.current);
        }

        setMediaFileName(file.name);

        video.play().catch(err => {
          console.warn('Video autoplay failed:', err);
        });
      } else {
        const img = new Image();
        img.src = url;

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        const mediaFile: MediaFile = {
          file,
          type: MediaType.IMAGE,
          url,
          element: img
        };

        mediaFileRef.current = mediaFile;

        if (use2DCanvasRef.current && canvas2DRendererRef.current) {
          canvas2DRendererRef.current.loadMedia(mediaFile);
        } else if (sceneRef.current) {
          sceneRef.current.loadMedia(mediaFile);
          sceneRef.current.initialize(settingsRef.current);
        }

        setMediaFileName(file.name);
      }
    } catch (error) {
      console.error('Failed to load media file:', error);
      alert('Failed to load media file. Please try again.');
    } finally {
      e.target.value = '';
    }
  };

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
    } catch (err) {
      console.error('Failed to load audio file:', err);
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

  const handlePlayFromBeginning = async () => {
    if (!audioEngineRef.current) return;

    audioEngineRef.current.seek(0);
    setCurrentTime(0);

    if (mediaFileRef.current?.element instanceof HTMLVideoElement) {
      mediaFileRef.current.element.currentTime = 0;
    }

    await audioEngineRef.current.play();
  };

  const handleSeek = (time: number) => {
    if (audioEngineRef.current) {
      audioEngineRef.current.seek(time);
      setCurrentTime(time);

      if (mediaFileRef.current?.element instanceof HTMLVideoElement) {
        mediaFileRef.current.element.currentTime = time;
      }
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
    if (!sceneRef.current && !canvas2DRendererRef.current) return;

    setRecordingTime(0);

    if (use2DCanvasRef.current) {
      preRecordingQualityRef.current = settings.effectsQuality;
      setSettings(prev => ({ ...prev, effectsQuality: EffectsQuality.HIGH }));
    }

    let audioStream: MediaStream | undefined;

    if (audioEngineRef.current) {
      const stream = audioEngineRef.current.createAudioStream();
      if (stream) {
        audioStream = stream;
      }
    }

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    const activeRenderer = use2DCanvasRef.current ? canvas2DRendererRef.current : sceneRef.current;

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
      activeRenderer
    );

    setIsRecording(true);
  };

  const handleStopRecording = () => {
    if (!recordingManagerRef.current) return;

    recordingManagerRef.current.stopRecording();
    setIsRecording(false);
    setRecordingTime(0);

    if (use2DCanvasRef.current && preRecordingQualityRef.current !== null) {
      setSettings(prev => ({ ...prev, effectsQuality: preRecordingQualityRef.current! }));
      preRecordingQualityRef.current = null;
    }

    if (audioEngineRef.current) {
      audioEngineRef.current.disposeAudioStream();
    }
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
            <h1 className="text-xl font-bold">Media Reactor</h1>
          </div>
        </div>

      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaUpload}
            className="hidden"
          />
          <div className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
            <Upload size={20} />
            <span className="text-sm">
              {mediaFileName || 'Upload Media'}
            </span>
          </div>
        </label>

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
            disabled={isRecording || !mediaFileName}
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

      <MediaReactorControls
        settings={settings}
        audioSettings={audioSettings}
        audioFeatures={audioFeatures}
        onSettingsChange={setSettings}
        onAudioSettingsChange={setAudioSettings}
      />

      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayFromBeginning}
            disabled={!audioFileName}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Play from beginning"
          >
            <SkipBack size={20} />
          </button>

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
