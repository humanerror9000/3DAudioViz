import { AudioFeatures, AudioSettings } from '../types/audio';

export class AudioAnalyser {
  private analyserNode: AnalyserNode;
  private dataArray: Uint8Array;
  private sampleRate: number;
  private binCount: number;

  private smoothedEnergy = 0;
  private smoothedSub = 0;
  private smoothedBass = 0;
  private smoothedMids = 0;
  private smoothedHighs = 0;

  private lastPeakTime = 0;
  private peakTriggerActive = false;

  constructor(analyserNode: AnalyserNode, sampleRate: number) {
    this.analyserNode = analyserNode;
    this.sampleRate = sampleRate;
    this.binCount = analyserNode.frequencyBinCount;
    this.dataArray = new Uint8Array(this.binCount);
  }

  private frequencyToBin(frequency: number): number {
    return Math.round((frequency * this.binCount) / (this.sampleRate / 2));
  }

  private getBandEnergy(startFreq: number, endFreq: number): number {
    const startBin = this.frequencyToBin(startFreq);
    const endBin = this.frequencyToBin(endFreq);

    let sum = 0;
    let count = 0;

    for (let i = startBin; i <= endBin && i < this.binCount; i++) {
      sum += this.dataArray[i];
      count++;
    }

    return count > 0 ? sum / count / 255 : 0;
  }

  private getOverallEnergy(): number {
    let sum = 0;
    for (let i = 0; i < this.binCount; i++) {
      const normalized = this.dataArray[i] / 255;
      sum += normalized * normalized;
    }
    return Math.sqrt(sum / this.binCount);
  }

  analyse(settings: AudioSettings): AudioFeatures {
    this.analyserNode.getByteFrequencyData(this.dataArray);

    const rawEnergy = this.getOverallEnergy();
    const rawSub = this.getBandEnergy(20, 60);
    const rawBass = this.getBandEnergy(60, 250);
    const rawMids = this.getBandEnergy(250, 2000);
    const rawHighs = this.getBandEnergy(2000, 12000);

    const smoothing = settings.smoothing;
    this.smoothedEnergy = this.smoothedEnergy * smoothing + rawEnergy * (1 - smoothing);
    this.smoothedSub = this.smoothedSub * smoothing + rawSub * (1 - smoothing);
    this.smoothedBass = this.smoothedBass * smoothing + rawBass * (1 - smoothing);
    this.smoothedMids = this.smoothedMids * smoothing + rawMids * (1 - smoothing);
    this.smoothedHighs = this.smoothedHighs * smoothing + rawHighs * (1 - smoothing);

    const sensitivity = settings.sensitivity;
    const energy = Math.min(1, this.smoothedEnergy * sensitivity * 1.2);
    const sub = Math.min(1, this.smoothedSub * sensitivity * 0.7);
    const bass = Math.min(1, this.smoothedBass * sensitivity * 0.8);
    const mids = Math.min(1, this.smoothedMids * sensitivity * 0.7);
    const highs = Math.min(1, this.smoothedHighs * sensitivity * 1.0);

    const now = performance.now();
    let peakTrigger = false;

    if (bass > settings.peakThreshold && !this.peakTriggerActive) {
      if (now - this.lastPeakTime > settings.peakCooldown) {
        peakTrigger = true;
        this.peakTriggerActive = true;
        this.lastPeakTime = now;
      }
    } else if (bass < settings.peakThreshold * 0.8) {
      this.peakTriggerActive = false;
    }

    return {
      energy,
      sub,
      bass,
      mids,
      highs,
      peakTrigger,
      timestamp: now
    };
  }

  reset(): void {
    this.smoothedEnergy = 0;
    this.smoothedSub = 0;
    this.smoothedBass = 0;
    this.smoothedMids = 0;
    this.smoothedHighs = 0;
    this.lastPeakTime = 0;
    this.peakTriggerActive = false;
  }
}
