export interface AudioFeatures {
  energy: number;
  sub: number;
  bass: number;
  mids: number;
  highs: number;
  peakTrigger: boolean;
  timestamp: number;
}

export interface AudioSettings {
  smoothing: number;
  sensitivity: number;
  peakThreshold: number;
  peakCooldown: number;
}

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  fileName: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface RecordingState {
  isRecording: boolean;
  recordingTime: number;
  fps: number;
  includeAudio: boolean;
  error: string | null;
}
