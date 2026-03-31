import { Circle, Square } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FullscreenHUDProps {
  isRecording: boolean;
  recordingTime: number;
  canRecord: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export function FullscreenHUD({
  isRecording,
  recordingTime,
  canRecord,
  onStartRecording,
  onStopRecording
}: FullscreenHUDProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hideTimeout, setHideTimeout] = useState<number | null>(null);

  const formatRecordingTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);

      if (hideTimeout !== null) {
        clearTimeout(hideTimeout);
      }

      const timeout = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      setHideTimeout(timeout);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const initialTimeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    setHideTimeout(initialTimeout);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeout !== null) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
    if (hideTimeout !== null) {
      clearTimeout(hideTimeout);
    }
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    setHideTimeout(timeout);
  }, [isRecording]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3">
        {isRecording && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-sm text-white/90 font-mono">
              {formatRecordingTime(recordingTime)}
            </span>
          </div>
        )}

        <button
          onClick={isRecording ? onStopRecording : onStartRecording}
          disabled={!canRecord && !isRecording}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title={isRecording ? 'Stop Recording (R)' : 'Start Recording (R)'}
        >
          {isRecording ? (
            <Square size={20} className="text-white" />
          ) : (
            <Circle size={20} className="text-red-500" />
          )}
        </button>
      </div>
    </div>
  );
}
