export type RecordingQuality = 'draft' | 'high' | 'ultra';
export type RecordingFormat = 'auto' | 'mp4' | 'webm';

export interface RecordingConfig {
  fps: number;
  includeAudio: boolean;
  quality: RecordingQuality;
  format: RecordingFormat;
  width?: number;
  height?: number;
}

export class RecordingManager {
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private startTimestamp: number = 0;
  private onTimerUpdate: ((seconds: number) => void) | null = null;
  private onError: ((message: string) => void) | null = null;
  private onFormatWarning: ((message: string) => void) | null = null;
  private timerInterval: number | null = null;
  private actualMimeType: string = '';
  private actualFormat: 'mp4' | 'webm' = 'webm';
  private canvas: HTMLCanvasElement | null = null;
  private renderer: any = null;

  isRecording(): boolean {
    return this.mediaRecorder !== null && this.mediaRecorder.state === 'recording';
  }

  startRecording(
    canvas: HTMLCanvasElement,
    config: RecordingConfig,
    audioStream?: MediaStream,
    renderer?: any
  ): void {
    if (this.isRecording()) {
      return;
    }

    try {
      this.canvas = canvas;
      this.renderer = renderer;

      if (config.width && config.height && renderer) {
        if (renderer.setRenderSizeForRecording) {
          renderer.setRenderSizeForRecording(config.width, config.height);
        } else if (renderer.updateCameraAndRenderer) {
          renderer.updateCameraAndRenderer(config.width, config.height);
        } else {
          canvas.width = config.width;
          canvas.height = config.height;
          renderer.setSize(config.width, config.height, false);
        }
      }

      const videoStream = canvas.captureStream(config.fps);

      let combinedStream: MediaStream;

      if (config.includeAudio && audioStream) {
        combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks()
        ]);
      } else {
        combinedStream = videoStream;
      }

      const qualitySettings = {
        draft: { video: 5000000, audio: 128000 },
        high: { video: 10000000, audio: 192000 },
        ultra: { video: 16000000, audio: 192000 }
      };

      const bitrates = qualitySettings[config.quality];

      const mp4MimeTypes = [
        'video/mp4;codecs="avc1.42E01E,mp4a.40.2"',
        'video/mp4'
      ];

      const webmMimeTypes = [
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm'
      ];

      let selectedMimeType = '';
      let mimeTypesToTry: string[] = [];

      if (config.format === 'mp4') {
        mimeTypesToTry = mp4MimeTypes;
      } else if (config.format === 'webm') {
        mimeTypesToTry = webmMimeTypes;
      } else {
        mimeTypesToTry = [...mp4MimeTypes, ...webmMimeTypes];
      }

      for (const mimeType of mimeTypesToTry) {
        if (MediaRecorder.isTypeSupported(mimeType)) {
          selectedMimeType = mimeType;
          break;
        }
      }

      if (!selectedMimeType) {
        if (this.onError) {
          this.onError('Recording not supported in this browser');
        }
        return;
      }

      if (config.format === 'mp4' && !selectedMimeType.includes('mp4')) {
        if (this.onFormatWarning) {
          this.onFormatWarning('MP4 format not supported, using WebM instead');
        }
      }

      this.actualMimeType = selectedMimeType;
      this.actualFormat = selectedMimeType.includes('mp4') ? 'mp4' : 'webm';

      this.recordedChunks = [];

      const recorderOptions: MediaRecorderOptions = {
        mimeType: selectedMimeType,
        videoBitsPerSecond: bitrates.video
      };

      if (config.includeAudio) {
        recorderOptions.audioBitsPerSecond = bitrates.audio;
      }

      this.mediaRecorder = new MediaRecorder(combinedStream, recorderOptions);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };

      this.mediaRecorder.onerror = () => {
        if (this.onError) {
          this.onError('Recording error occurred');
        }
        this.cleanup();
      };

      this.mediaRecorder.start(100);
      this.startTimestamp = Date.now();

      this.timerInterval = window.setInterval(() => {
        if (this.onTimerUpdate) {
          const elapsed = Math.floor((Date.now() - this.startTimestamp) / 1000);
          this.onTimerUpdate(elapsed);
        }
      }, 100);

    } catch (error) {
      if (this.onError) {
        this.onError('Failed to start recording');
      }
      console.error('Recording error:', error);
    }
  }

  stopRecording(): void {
    if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
      return;
    }

    return new Promise<void>((resolve) => {
      if (!this.mediaRecorder) {
        resolve();
        return;
      }

      this.mediaRecorder.onstop = () => {
        this.downloadRecording();
        this.restoreCanvasSize();
        this.cleanup();
        resolve();
      };

      this.mediaRecorder.stop();

      if (this.mediaRecorder.stream) {
        this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }
    }) as any;
  }

  private restoreCanvasSize(): void {
    if (this.canvas && this.renderer) {
      const currentWidth = this.canvas.clientWidth;
      const currentHeight = this.canvas.clientHeight;

      if (this.renderer.updateCameraAndRenderer) {
        this.renderer.updateCameraAndRenderer(currentWidth, currentHeight);
      } else {
        this.renderer.setSize(currentWidth, currentHeight, false);
      }
    }
  }

  private downloadRecording(): void {
    if (this.recordedChunks.length === 0) {
      return;
    }

    const blob = new Blob(this.recordedChunks, { type: this.actualMimeType });
    const url = URL.createObjectURL(blob);

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const extension = this.actualFormat;
    const filename = `visualizer-${year}${month}${day}-${hours}${minutes}${seconds}.${extension}`;

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  private cleanup(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    this.mediaRecorder = null;
    this.recordedChunks = [];
    this.startTimestamp = 0;
    this.canvas = null;
    this.renderer = null;
  }

  setTimerCallback(callback: (seconds: number) => void): void {
    this.onTimerUpdate = callback;
  }

  setErrorCallback(callback: (message: string) => void): void {
    this.onError = callback;
  }

  setFormatWarningCallback(callback: (message: string) => void): void {
    this.onFormatWarning = callback;
  }

  dispose(): void {
    if (this.isRecording()) {
      this.stopRecording();
    }
    this.cleanup();
  }
}
