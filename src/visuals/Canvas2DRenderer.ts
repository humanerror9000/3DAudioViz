import { MediaFile, FitMode, MediaReactorSettings, EffectsQuality } from '../types/mediaReactor';
import { AudioFeatures } from '../types/audio';

const DEFAULT_AUDIO_FEATURES: AudioFeatures = {
  energy: 0,
  sub: 0,
  bass: 0,
  mids: 0,
  highs: 0,
  peakTrigger: false,
  timestamp: 0
};

interface DrawParams {
  dx: number;
  dy: number;
  dw: number;
  dh: number;
  mediaWidth: number;
  mediaHeight: number;
}

export class Canvas2DRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private mediaFile: MediaFile | null = null;
  private fitMode: FitMode = FitMode.COVER;
  private debugCallback: ((info: DrawParams) => void) | null = null;
  private perfCallback: ((resolution: string) => void) | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) {
      throw new Error('Failed to get 2D context');
    }
    this.ctx = ctx;
  }

  setDebugCallback(callback: (info: DrawParams) => void): void {
    this.debugCallback = callback;
  }

  setPerfCallback(callback: (resolution: string) => void): void {
    this.perfCallback = callback;
  }

  loadMedia(mediaFile: MediaFile): void {
    this.mediaFile = mediaFile;
  }

  setFitMode(fitMode: FitMode): void {
    this.fitMode = fitMode;
  }

  private getMediaDimensions(): { width: number; height: number } | null {
    if (!this.mediaFile) return null;

    const element = this.mediaFile.element;

    if (element instanceof HTMLVideoElement) {
      if (element.videoWidth > 0 && element.videoHeight > 0) {
        return { width: element.videoWidth, height: element.videoHeight };
      }
      return null;
    }

    if (element instanceof HTMLImageElement) {
      if (element.naturalWidth > 0 && element.naturalHeight > 0) {
        return { width: element.naturalWidth, height: element.naturalHeight };
      }
      return null;
    }

    return null;
  }

  private calculateDrawParams(): DrawParams | null {
    const dimensions = this.getMediaDimensions();
    if (!dimensions) return null;

    const cw = this.canvas.width;
    const ch = this.canvas.height;
    const mw = dimensions.width;
    const mh = dimensions.height;

    const car = cw / ch;
    const mar = mw / mh;

    let dx = 0;
    let dy = 0;
    let dw = cw;
    let dh = ch;

    if (this.fitMode === FitMode.CONTAIN) {
      if (mar > car) {
        dw = cw;
        dh = cw / mar;
        dx = 0;
        dy = (ch - dh) / 2;
      } else {
        dh = ch;
        dw = ch * mar;
        dy = 0;
        dx = (cw - dw) / 2;
      }
    } else {
      if (mar > car) {
        dh = ch;
        dw = ch * mar;
        dy = 0;
        dx = (cw - dw) / 2;
      } else {
        dw = cw;
        dh = cw / mar;
        dx = 0;
        dy = (ch - dh) / 2;
      }
    }

    return {
      dx,
      dy,
      dw,
      dh,
      mediaWidth: mw,
      mediaHeight: mh
    };
  }

  private time = 0;
  private lastFrameTime = Date.now();
  private tempCanvas: HTMLCanvasElement | null = null;
  private tempCtx: CanvasRenderingContext2D | null = null;
  private sourceImageData: ImageData | null = null;
  private outputImageData: ImageData | null = null;

  private random(x: number, y: number): number {
    const value = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123;
    return value - Math.floor(value);
  }

  private applyZoomPulse(
    uvX: number,
    uvY: number,
    amount: number,
    energy: number,
    peak: boolean
  ): { x: number; y: number } {
    if (amount < 0.01) return { x: uvX, y: uvY };

    const centerX = 0.5;
    const centerY = 0.5;
    let offsetX = uvX - centerX;
    let offsetY = uvY - centerY;

    const baseZoom = amount * 0.1;
    const pulseOscillation = Math.sin(this.time * 2.0 + energy * Math.PI) * amount * 0.15;
    const audioZoom = energy * amount * 0.3;
    let zoom = 1.0 + baseZoom + pulseOscillation + audioZoom;

    if (peak) {
      zoom += amount * 0.2;
    }

    zoom = Math.max(zoom, 0.5);

    offsetX /= zoom;
    offsetY /= zoom;

    const resultX = Math.max(0, Math.min(1, centerX + offsetX));
    const resultY = Math.max(0, Math.min(1, centerY + offsetY));

    return { x: resultX, y: resultY };
  }

  private applyDisplacement(
    uvX: number,
    uvY: number,
    amount: number,
    bass: number,
    energy: number
  ): { x: number; y: number } {
    if (amount < 0.01) return { x: uvX, y: uvY };

    const centerX = 0.5;
    const centerY = 0.5;
    let offsetX = uvX - centerX;
    let offsetY = uvY - centerY;
    const dist = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

    const audioBoost = bass * 0.3 + energy * 0.2;
    const wave = Math.sin(dist * 15.0 - this.time * 2.0) * amount * 0.015 * (1.0 + audioBoost);

    const angle = Math.atan2(offsetY, offsetX);
    offsetX += Math.cos(angle) * wave;
    offsetY += Math.sin(angle) * wave;

    const resultX = Math.max(0, Math.min(1, centerX + offsetX));
    const resultY = Math.max(0, Math.min(1, centerY + offsetY));

    return { x: resultX, y: resultY };
  }

  private applyGlitch(
    uvX: number,
    uvY: number,
    amount: number,
    bass: number,
    peak: boolean
  ): { x: number; y: number } {
    if (amount < 0.01) return { x: uvX, y: uvY };

    const glitchLine = Math.floor(uvY * 25.0);
    const baseGlitch = amount * 0.015;
    const audioGlitch = bass * amount * 0.04;
    const timeVarying = this.random(glitchLine, Math.floor(this.time * 6.0)) * amount * 0.02;
    const glitchOffset = baseGlitch + audioGlitch + timeVarying;

    let newUvX = uvX + glitchOffset;
    let newUvY = uvY;

    if (peak || bass > 0.6) {
      const jump = this.random(this.time, glitchLine) * amount * 0.015;
      newUvY += jump;
    }

    newUvX = Math.max(0, Math.min(1, newUvX));
    newUvY = Math.max(0, Math.min(1, newUvY));

    return { x: newUvX, y: newUvY };
  }

  private renderLowQuality(
    drawParams: DrawParams,
    audioFeatures: AudioFeatures,
    settings: MediaReactorSettings
  ): void {
    const element = this.mediaFile!.element;
    const energy = audioFeatures.energy;
    const bass = audioFeatures.bass;
    const peak = audioFeatures.peakTrigger;
    const intensity = settings.intensity;
    const brightness = settings.brightness;
    const contrast = settings.contrast;
    const zoomPulse = settings.zoomPulse;
    const rgbSplit = settings.rgbSplit;
    const glitch = settings.glitch;
    const displacement = settings.displacement;

    const hasPixelEffects = rgbSplit > 0.01 || glitch > 0.01 || displacement > 0.01;

    if (!hasPixelEffects) {
      this.ctx.save();
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

      if (zoomPulse > 0.01) {
        const baseZoom = zoomPulse * 0.15;
        const pulseOscillation = Math.sin(this.time * 2.0 + energy * Math.PI) * zoomPulse * 0.3;
        const audioZoom = energy * zoomPulse * 0.6;
        let zoom = 1.0 + baseZoom + pulseOscillation + audioZoom;
        if (peak) {
          zoom += zoomPulse * 0.4;
        }
        this.ctx.scale(zoom, zoom);
      }

      this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);

      const brightAdjust = (brightness - 0.5) * 2.0;
      const audioBright = energy * 0.5 * intensity;
      const totalBright = brightAdjust + audioBright;

      const contrastBase = 1.0 + (contrast - 0.5) * 4.0;
      const audioContrast = energy * 1.5 * intensity;
      const totalContrast = Math.max(contrastBase + audioContrast, 0.1);

      if (totalBright !== 0 || totalContrast !== 1.0) {
        const brightPercent = Math.round(totalBright * 100);
        const contrastPercent = Math.round(totalContrast * 100);
        this.ctx.filter = `brightness(${100 + brightPercent}%) contrast(${contrastPercent}%)`;
      }

      this.ctx.drawImage(
        element,
        drawParams.dx,
        drawParams.dy,
        drawParams.dw,
        drawParams.dh
      );

      this.ctx.restore();

      if (this.perfCallback) {
        this.perfCallback(`${this.canvas.width}x${this.canvas.height} (fast)`);
      }
      return;
    }

    if (!this.tempCanvas) {
      this.tempCanvas = document.createElement('canvas');
      this.tempCtx = this.tempCanvas.getContext('2d', { willReadFrequently: true });
    }

    if (!this.tempCtx) return;

    const renderWidth = Math.min(this.canvas.width, 960);
    const renderHeight = Math.min(this.canvas.height, 540);
    const scale = Math.min(renderWidth / this.canvas.width, renderHeight / this.canvas.height);
    const scaledWidth = Math.floor(this.canvas.width * scale);
    const scaledHeight = Math.floor(this.canvas.height * scale);

    if (this.tempCanvas.width !== scaledWidth || this.tempCanvas.height !== scaledHeight) {
      this.tempCanvas.width = scaledWidth;
      this.tempCanvas.height = scaledHeight;
      this.sourceImageData = null;
      this.outputImageData = null;
    }

    const scaledDrawParams = {
      dx: Math.floor(drawParams.dx * scale),
      dy: Math.floor(drawParams.dy * scale),
      dw: Math.floor(drawParams.dw * scale),
      dh: Math.floor(drawParams.dh * scale)
    };

    this.tempCtx.fillStyle = '#000000';
    this.tempCtx.fillRect(0, 0, scaledWidth, scaledHeight);
    this.tempCtx.drawImage(
      element,
      scaledDrawParams.dx,
      scaledDrawParams.dy,
      scaledDrawParams.dw,
      scaledDrawParams.dh
    );

    if (!this.sourceImageData || this.sourceImageData.width !== scaledWidth || this.sourceImageData.height !== scaledHeight) {
      this.sourceImageData = this.tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
    } else {
      const freshData = this.tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
      this.sourceImageData.data.set(freshData.data);
    }
    const sourceData = this.sourceImageData.data;

    if (!this.outputImageData || this.outputImageData.width !== scaledWidth || this.outputImageData.height !== scaledHeight) {
      this.outputImageData = this.tempCtx.createImageData(scaledWidth, scaledHeight);
    }
    const outputData = this.outputImageData.data;

    const intensityMult = Math.max(intensity, 0.1);

    const brightAdjust = (brightness - 0.5) * 2.0;
    const audioBright = energy * 0.5 * intensity;
    const contrastBase = 1.0 + (contrast - 0.5) * 4.0;
    const audioContrast = energy * 1.5 * intensity;
    const totalContrast = Math.max(contrastBase + audioContrast, 0.1);

    for (let y = 0; y < scaledHeight; y++) {
      for (let x = 0; x < scaledWidth; x++) {
        let uvX = x / scaledWidth;
        let uvY = y / scaledHeight;

        let uv = { x: uvX, y: uvY };
        uv = this.applyDisplacement(uv.x, uv.y, displacement * intensityMult, bass, energy);
        uv = this.applyZoomPulse(uv.x, uv.y, zoomPulse * intensityMult, energy, peak);
        uv = this.applyGlitch(uv.x, uv.y, glitch * intensityMult, bass, peak);

        const idx = (y * scaledWidth + x) * 4;

        let r = 0, g = 0, b = 0, a = 255;

        if (rgbSplit > 0.01) {
          const baseOffset = rgbSplit * intensityMult * 0.008;
          const audioOffset = energy * rgbSplit * intensityMult * 0.012;
          const totalOffset = baseOffset + audioOffset;

          const uvR = { x: Math.max(0, Math.min(1, uv.x + totalOffset)), y: uv.y };
          const uvG = { x: Math.max(0, Math.min(1, uv.x)), y: uv.y };
          const uvB = { x: Math.max(0, Math.min(1, uv.x - totalOffset)), y: uv.y };

          r = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uvR.x, uvR.y, 0);
          g = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uvG.x, uvG.y, 1);
          b = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uvB.x, uvB.y, 2);
        } else {
          r = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uv.x, uv.y, 0);
          g = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uv.x, uv.y, 1);
          b = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uv.x, uv.y, 2);
        }

        r = r / 255;
        g = g / 255;
        b = b / 255;

        r += brightAdjust + audioBright;
        g += brightAdjust + audioBright;
        b += brightAdjust + audioBright;

        r = ((r - 0.5) * totalContrast) + 0.5;
        g = ((g - 0.5) * totalContrast) + 0.5;
        b = ((b - 0.5) * totalContrast) + 0.5;

        outputData[idx] = Math.max(0, Math.min(255, r * 255));
        outputData[idx + 1] = Math.max(0, Math.min(255, g * 255));
        outputData[idx + 2] = Math.max(0, Math.min(255, b * 255));
        outputData[idx + 3] = a;
      }
    }

    this.tempCtx.putImageData(this.outputImageData, 0, 0);

    this.ctx.drawImage(this.tempCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, this.canvas.width, this.canvas.height);

    if (this.perfCallback) {
      this.perfCallback(`${scaledWidth}x${scaledHeight} (fast)`);
    }
  }

  render(audioFeatures?: AudioFeatures, settings?: MediaReactorSettings): void {
    if (!this.mediaFile) return;

    const element = this.mediaFile.element;
    if (element instanceof HTMLVideoElement) {
      if (element.readyState < 2) {
        return;
      }
    }

    const now = Date.now();
    this.time += (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;

    const drawParams = this.calculateDrawParams();
    if (!drawParams) return;

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const energy = audioFeatures?.energy || 0;
    const bass = audioFeatures?.bass || 0;
    const peak = audioFeatures?.peakTrigger || false;
    const intensity = settings?.intensity || 1.0;
    const brightness = settings?.brightness || 0.5;
    const contrast = settings?.contrast || 0.5;
    const rgbSplit = settings?.rgbSplit || 0;
    const glitch = settings?.glitch || 0;
    const zoomPulse = settings?.zoomPulse || 0;
    const displacement = settings?.displacement || 0;
    const effectsQuality = settings?.effectsQuality || EffectsQuality.LOW;

    const hasEffects = rgbSplit > 0 || glitch > 0 || zoomPulse > 0 || displacement > 0;
    const hasAudioReactiveSettings = brightness !== 0.5 || contrast !== 0.5;
    const isAudioPlaying = (audioFeatures?.energy || 0) > 0;

    if (!hasEffects && !hasAudioReactiveSettings && !isAudioPlaying) {
      this.ctx.drawImage(
        element,
        drawParams.dx,
        drawParams.dy,
        drawParams.dw,
        drawParams.dh
      );

      if (this.debugCallback) {
        this.debugCallback(drawParams);
      }

      if (this.perfCallback) {
        this.perfCallback(`${this.canvas.width}x${this.canvas.height} (none)`);
      }
      return;
    }

    if (effectsQuality === EffectsQuality.OFF || effectsQuality === EffectsQuality.LOW) {
      this.renderLowQuality(drawParams, audioFeatures || DEFAULT_AUDIO_FEATURES, settings || {} as MediaReactorSettings);

      if (this.debugCallback) {
        this.debugCallback(drawParams);
      }
      return;
    }

    if (!this.tempCanvas) {
      this.tempCanvas = document.createElement('canvas');
      this.tempCtx = this.tempCanvas.getContext('2d', { willReadFrequently: true });
    }

    if (!this.tempCtx) return;

    const renderWidth = Math.min(this.canvas.width, 1280);
    const renderHeight = Math.min(this.canvas.height, 720);
    const scale = Math.min(renderWidth / this.canvas.width, renderHeight / this.canvas.height);
    const scaledWidth = Math.floor(this.canvas.width * scale);
    const scaledHeight = Math.floor(this.canvas.height * scale);

    if (this.tempCanvas.width !== scaledWidth || this.tempCanvas.height !== scaledHeight) {
      this.tempCanvas.width = scaledWidth;
      this.tempCanvas.height = scaledHeight;
      this.sourceImageData = null;
      this.outputImageData = null;
    }

    const scaledDrawParams = {
      dx: Math.floor(drawParams.dx * scale),
      dy: Math.floor(drawParams.dy * scale),
      dw: Math.floor(drawParams.dw * scale),
      dh: Math.floor(drawParams.dh * scale)
    };

    this.tempCtx.fillStyle = '#000000';
    this.tempCtx.fillRect(0, 0, scaledWidth, scaledHeight);
    this.tempCtx.drawImage(
      element,
      scaledDrawParams.dx,
      scaledDrawParams.dy,
      scaledDrawParams.dw,
      scaledDrawParams.dh
    );

    if (!this.sourceImageData || this.sourceImageData.width !== scaledWidth || this.sourceImageData.height !== scaledHeight) {
      this.sourceImageData = this.tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
    } else {
      const freshData = this.tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
      this.sourceImageData.data.set(freshData.data);
    }
    const sourceData = this.sourceImageData.data;

    if (!this.outputImageData || this.outputImageData.width !== scaledWidth || this.outputImageData.height !== scaledHeight) {
      this.outputImageData = this.tempCtx.createImageData(scaledWidth, scaledHeight);
    }
    const outputData = this.outputImageData.data;

    const intensityMult = Math.max(intensity, 0.1);

    const brightAdjust = brightness - 0.5;
    const audioBright = energy * 0.3 * intensity;
    const contrastBase = 1.0 + (contrast - 0.5) * 2.0;
    const audioContrast = energy * 0.8 * intensity;
    const totalContrast = Math.max(contrastBase + audioContrast, 0.0);

    for (let y = 0; y < scaledHeight; y++) {
      for (let x = 0; x < scaledWidth; x++) {
        let uvX = x / scaledWidth;
        let uvY = y / scaledHeight;

        let uv = { x: uvX, y: uvY };
        uv = this.applyDisplacement(uv.x, uv.y, displacement * intensityMult, bass, energy);
        uv = this.applyZoomPulse(uv.x, uv.y, zoomPulse * intensityMult, energy, peak);
        uv = this.applyGlitch(uv.x, uv.y, glitch * intensityMult, bass, peak);

        const idx = (y * scaledWidth + x) * 4;

        let r = 0, g = 0, b = 0, a = 255;

        if (rgbSplit > 0.01) {
          const baseOffset = rgbSplit * intensityMult * 0.008;
          const audioOffset = energy * rgbSplit * intensityMult * 0.012;
          const totalOffset = baseOffset + audioOffset;

          const uvR = { x: Math.max(0, Math.min(1, uv.x + totalOffset)), y: uv.y };
          const uvG = { x: Math.max(0, Math.min(1, uv.x)), y: uv.y };
          const uvB = { x: Math.max(0, Math.min(1, uv.x - totalOffset)), y: uv.y };

          r = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uvR.x, uvR.y, 0);
          g = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uvG.x, uvG.y, 1);
          b = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uvB.x, uvB.y, 2);
        } else {
          r = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uv.x, uv.y, 0);
          g = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uv.x, uv.y, 1);
          b = this.sampleTexture(sourceData, scaledWidth, scaledHeight, uv.x, uv.y, 2);
        }

        r = r / 255;
        g = g / 255;
        b = b / 255;

        r += brightAdjust + audioBright;
        g += brightAdjust + audioBright;
        b += brightAdjust + audioBright;

        r = ((r - 0.5) * totalContrast) + 0.5;
        g = ((g - 0.5) * totalContrast) + 0.5;
        b = ((b - 0.5) * totalContrast) + 0.5;

        outputData[idx] = Math.max(0, Math.min(255, r * 255));
        outputData[idx + 1] = Math.max(0, Math.min(255, g * 255));
        outputData[idx + 2] = Math.max(0, Math.min(255, b * 255));
        outputData[idx + 3] = a;
      }
    }

    this.tempCtx.putImageData(this.outputImageData, 0, 0);

    this.ctx.drawImage(this.tempCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, this.canvas.width, this.canvas.height);

    if (this.debugCallback) {
      this.debugCallback(drawParams);
    }

    if (this.perfCallback) {
      this.perfCallback(`${scaledWidth}x${scaledHeight} (high)`);
    }
  }

  private sampleTexture(
    data: Uint8ClampedArray,
    width: number,
    height: number,
    u: number,
    v: number,
    channel: number
  ): number {
    u = Math.max(0, Math.min(1, u));
    v = Math.max(0, Math.min(1, v));

    const x = Math.floor(u * (width - 1));
    const y = Math.floor(v * (height - 1));

    const idx = (y * width + x) * 4 + channel;
    return data[idx] || 0;
  }

  resize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  setRenderSizeForRecording(width: number, height: number): void {
    this.resize(width, height);
  }

  dispose(): void {
    this.mediaFile = null;
    this.debugCallback = null;
    this.perfCallback = null;
    this.tempCanvas = null;
    this.tempCtx = null;
    this.sourceImageData = null;
    this.outputImageData = null;
  }
}
