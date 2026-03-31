export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private sourceNode: AudioBufferSourceNode | null = null;
  private analyserNode: AnalyserNode | null = null;
  private gainNode: GainNode | null = null;
  private audioBuffer: AudioBuffer | null = null;
  private streamDestination: MediaStreamAudioDestinationNode | null = null;

  private _isPlaying = false;
  private _currentTime = 0;
  private _duration = 0;
  private _volume = 0.7;
  private startTime = 0;
  private pauseTime = 0;

  private onPlayCallback: (() => void) | null = null;
  private onPauseCallback: (() => void) | null = null;
  private onEndedCallback: (() => void) | null = null;

  constructor() {}

  async initialize(): Promise<void> {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
      this.analyserNode = this.audioContext.createAnalyser();
      this.analyserNode.fftSize = 2048;
      this.analyserNode.smoothingTimeConstant = 0;

      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.value = this._volume;

      this.analyserNode.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  async loadAudioFile(file: File): Promise<void> {
    await this.initialize();

    this.stop();

    const arrayBuffer = await file.arrayBuffer();
    this.audioBuffer = await this.audioContext!.decodeAudioData(arrayBuffer);
    this._duration = this.audioBuffer.duration;
    this._currentTime = 0;
  }

  async play(): Promise<void> {
    if (!this.audioBuffer || !this.audioContext || !this.analyserNode) {
      return;
    }

    await this.initialize();

    if (this.sourceNode) {
      this.sourceNode.stop();
      this.sourceNode.disconnect();
    }

    this.sourceNode = this.audioContext.createBufferSource();
    this.sourceNode.buffer = this.audioBuffer;
    this.sourceNode.connect(this.analyserNode);

    this.sourceNode.onended = () => {
      if (this._isPlaying) {
        this._isPlaying = false;
        this._currentTime = 0;
        if (this.onEndedCallback) this.onEndedCallback();
      }
    };

    const offset = this.pauseTime > 0 ? this.pauseTime : 0;
    this.sourceNode.start(0, offset);
    this.startTime = this.audioContext.currentTime - offset;
    this.pauseTime = 0;
    this._isPlaying = true;

    if (this.onPlayCallback) this.onPlayCallback();
  }

  pause(): void {
    if (this._isPlaying && this.sourceNode && this.audioContext) {
      this.pauseTime = this.audioContext.currentTime - this.startTime;
      this.sourceNode.stop();
      this._isPlaying = false;

      if (this.onPauseCallback) this.onPauseCallback();
    }
  }

  stop(): void {
    if (this.sourceNode) {
      if (this._isPlaying) {
        this.sourceNode.stop();
      }
      this.sourceNode.disconnect();
      this.sourceNode = null;
    }
    this._isPlaying = false;
    this._currentTime = 0;
    this.pauseTime = 0;
    this.startTime = 0;
  }

  seek(time: number): void {
    const wasPlaying = this._isPlaying;
    this.stop();
    this.pauseTime = Math.max(0, Math.min(time, this._duration));
    this._currentTime = this.pauseTime;

    if (wasPlaying) {
      this.play();
    }
  }

  setVolume(volume: number): void {
    this._volume = Math.max(0, Math.min(1, volume));
    if (this.gainNode) {
      this.gainNode.gain.value = this._volume;
    }
  }

  updateCurrentTime(): void {
    if (this._isPlaying && this.audioContext) {
      this._currentTime = this.audioContext.currentTime - this.startTime;
      if (this._currentTime >= this._duration) {
        this._currentTime = this._duration;
      }
    } else if (!this._isPlaying && this.pauseTime > 0) {
      this._currentTime = this.pauseTime;
    }
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }

  get currentTime(): number {
    return this._currentTime;
  }

  get duration(): number {
    return this._duration;
  }

  get volume(): number {
    return this._volume;
  }

  getAnalyserNode(): AnalyserNode | null {
    return this.analyserNode;
  }

  createAudioStream(): MediaStream | null {
    if (!this.audioContext || !this.gainNode) {
      return null;
    }

    if (!this.streamDestination) {
      this.streamDestination = this.audioContext.createMediaStreamDestination();
      this.gainNode.connect(this.streamDestination);
    }

    return this.streamDestination.stream;
  }

  disposeAudioStream(): void {
    if (this.streamDestination && this.gainNode) {
      this.gainNode.disconnect(this.streamDestination);
      this.streamDestination = null;
    }
  }

  onPlay(callback: () => void): void {
    this.onPlayCallback = callback;
  }

  onPause(callback: () => void): void {
    this.onPauseCallback = callback;
  }

  onEnded(callback: () => void): void {
    this.onEndedCallback = callback;
  }

  cleanup(): void {
    this.stop();

    this.disposeAudioStream();

    if (this.gainNode) {
      this.gainNode.disconnect();
      this.gainNode = null;
    }

    if (this.analyserNode) {
      this.analyserNode.disconnect();
      this.analyserNode = null;
    }

    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }

    this.audioBuffer = null;
  }
}
