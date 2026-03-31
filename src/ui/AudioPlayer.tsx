import { Play, Pause, Upload, Volume2, VolumeX, Circle, Square, Maximize, Settings, SkipBack } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { formatTime } from '../utils/formatTime';
import { RecordingQuality, RecordingFormat } from '../recording/RecordingManager';
import { AudioFeatures } from '../types/audio';

interface AudioPlayerProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  fileName: string | null;
  isLoading: boolean;
  error: string | null;
  isRecording: boolean;
  recordingTime: number;
  fps: number;
  includeAudio: boolean;
  recordingError: string | null;
  recordingQuality: RecordingQuality;
  recordingFormat: RecordingFormat;
  audioFeatures: AudioFeatures;
  onFileUpload: (file: File) => void;
  onPlayPause: () => void;
  onPlayFromBeginning: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onFpsChange: (fps: number) => void;
  onIncludeAudioChange: (include: boolean) => void;
  onQualityChange: (quality: RecordingQuality) => void;
  onFormatChange: (format: RecordingFormat) => void;
  onFullscreen: () => void;
}

export function AudioPlayer({
  isPlaying,
  currentTime,
  duration,
  volume,
  fileName,
  isLoading,
  error,
  isRecording,
  recordingTime,
  fps,
  includeAudio,
  recordingError,
  recordingQuality,
  recordingFormat,
  audioFeatures,
  onFileUpload,
  onPlayPause,
  onPlayFromBeginning,
  onSeek,
  onVolumeChange,
  onStartRecording,
  onStopRecording,
  onFpsChange,
  onIncludeAudioChange,
  onQualityChange,
  onFormatChange,
  onFullscreen
}: AudioPlayerProps) {
  const [showRecordingSettings, setShowRecordingSettings] = useState(false);
  const recordingSettingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (recordingSettingsRef.current && !recordingSettingsRef.current.contains(event.target as Node)) {
        setShowRecordingSettings(false);
      }
    };

    if (showRecordingSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showRecordingSettings]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    onSeek(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    onVolumeChange(vol);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatRecordingTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-6">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".mp3,.wav,.aac,.ogg"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Upload size={18} />
              <span className="text-sm font-medium">Upload</span>
            </div>
          </label>

          {fileName && (
            <div className="text-sm text-white/70 truncate max-w-xs">
              {fileName}
            </div>
          )}

          {isLoading && (
            <div className="text-sm text-white/70">Loading...</div>
          )}

          {error && (
            <div className="text-sm text-red-400">{error}</div>
          )}

          <div className="h-8 w-px bg-white/10"></div>

          <div ref={recordingSettingsRef} className="flex items-center gap-3 relative">
            <button
              onClick={onStartRecording}
              disabled={isRecording || !fileName}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Start Recording (R)"
            >
              <Circle size={20} className={isRecording ? 'fill-red-500 text-red-500' : 'text-red-500'} />
            </button>

            <button
              onClick={onStopRecording}
              disabled={!isRecording}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Stop Recording (R)"
            >
              <Square size={20} className="text-white" />
            </button>

            <span className="text-sm text-white/70 font-mono min-w-[45px]">
              {formatRecordingTime(recordingTime)}
            </span>

            <button
              onClick={() => setShowRecordingSettings(!showRecordingSettings)}
              disabled={isRecording}
              className={`p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${showRecordingSettings ? 'bg-white/10' : ''}`}
              title="Recording Settings"
            >
              <Settings size={20} />
            </button>

            {showRecordingSettings && (
              <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[280px] z-50 shadow-xl">
                <h3 className="text-sm font-semibold mb-3 text-white">Recording Settings</h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-white/70 mb-1">Quality</label>
                    <select
                      value={recordingQuality}
                      onChange={(e) => onQualityChange(e.target.value as RecordingQuality)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="draft">Draft Quality</option>
                      <option value="high">High Quality</option>
                      <option value="ultra">Ultra Quality</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/70 mb-1">Format</label>
                    <select
                      value={recordingFormat}
                      onChange={(e) => onFormatChange(e.target.value as RecordingFormat)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="auto">Auto Format</option>
                      <option value="mp4">MP4</option>
                      <option value="webm">WebM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/70 mb-1">Frame Rate</label>
                    <select
                      value={fps}
                      onChange={(e) => onFpsChange(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value={30}>30 FPS</option>
                      <option value={60}>60 FPS</option>
                    </select>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeAudio}
                        onChange={(e) => onIncludeAudioChange(e.target.checked)}
                        className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <span className="text-white/90">Include Audio</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {recordingError && (
              <div className="text-xs text-red-400 absolute top-full left-0 mt-1 whitespace-nowrap">
                {recordingError}
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-white/10"></div>

          <button
            onClick={onFullscreen}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            title="Fullscreen"
          >
            <Maximize size={20} />
          </button>

          <div className="flex-1 flex items-center gap-4">
            <button
              onClick={onPlayFromBeginning}
              disabled={!fileName || isLoading}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Play from beginning"
            >
              <SkipBack size={24} />
            </button>

            <button
              onClick={onPlayPause}
              disabled={!fileName || isLoading}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Play/Pause (Spacebar)"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <div className="flex-1 flex items-center gap-3">
              <span className="text-sm text-white/70 font-mono min-w-[45px]">
                {formatTime(currentTime)}
              </span>

              <div className="flex-1 relative">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  disabled={!fileName}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progress}%, rgba(255,255,255,0.1) ${progress}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
              </div>

              <span className="text-sm text-white/70 font-mono min-w-[45px]">
                -{formatTime(Math.max(0, duration - currentTime))}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onVolumeChange(volume > 0 ? 0 : 0.7)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
