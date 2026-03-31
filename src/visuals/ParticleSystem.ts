import * as THREE from 'three';
import { ParticleQuality, ParticleSettings } from '../types/scene';
import { AudioFeatures } from '../types/audio';
import { particleVertexShader, particleFragmentShader } from '../shaders/particleShaders';

export class ParticleSystem {
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private points: THREE.Points | null = null;

  private currentQuality: ParticleQuality;
  private currentFieldSize: number;
  private peakBurstValue = 0;
  private peakBurstTime = 0;

  constructor() {
    this.currentQuality = ParticleQuality.MEDIUM;
    this.currentFieldSize = 20;
  }

  private getParticleCount(quality: ParticleQuality): number {
    switch (quality) {
      case ParticleQuality.LOW:
        return 20000;
      case ParticleQuality.MEDIUM:
        return 50000;
      case ParticleQuality.HIGH:
        return 100000;
      default:
        return 50000;
    }
  }

  private createParticlePositions(count: number, fieldSize: number): Float32Array {
    const positions = new Float32Array(count * 3);
    const halfSize = fieldSize / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const gaussianFalloff = Math.pow(Math.random(), 0.3);

      const x = (Math.random() - 0.5) * 2 * halfSize * gaussianFalloff;
      const y = (Math.random() - 0.5) * 2 * halfSize * gaussianFalloff;
      const z = (Math.random() - 0.5) * 2 * halfSize * gaussianFalloff;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }

    return positions;
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uTurbulence: { value: 1.5 },
        uFieldSize: { value: 20 },
        uParticleSize: { value: 3 },
        uEnergy: { value: 0 },
        uBass: { value: 0 },
        uHighs: { value: 0 },
        uPeakBurst: { value: 0 }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }

  initialize(settings: ParticleSettings): THREE.Points {
    this.currentQuality = settings.quality;
    this.currentFieldSize = settings.fieldSize;

    const count = this.getParticleCount(settings.quality);
    const positions = this.createParticlePositions(count, settings.fieldSize);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.material = this.createMaterial();
    this.material.uniforms.uParticleSize.value = settings.size;
    this.material.uniforms.uTurbulence.value = settings.turbulence;
    this.material.uniforms.uFieldSize.value = settings.fieldSize;

    this.points = new THREE.Points(this.geometry, this.material);

    console.log('[Particles] Initialized:', {
      count,
      quality: settings.quality,
      size: settings.size,
      turbulence: settings.turbulence,
      fieldSize: settings.fieldSize,
      visible: this.points.visible
    });

    return this.points;
  }

  update(time: number, audioFeatures: AudioFeatures, settings: ParticleSettings): void {
    if (settings.quality !== this.currentQuality || settings.fieldSize !== this.currentFieldSize) {
      console.log('[Particles] Recreating - Quality:', settings.quality, 'FieldSize:', settings.fieldSize);
      this.recreate(settings);
    }

    if (settings.peakBurst && audioFeatures.peakTrigger) {
      this.peakBurstValue = 1.0;
      this.peakBurstTime = time;
    }

    const burstDecay = Math.max(0, 1.0 - (time - this.peakBurstTime) / 200);
    this.peakBurstValue = burstDecay;

    if (this.material) {
      this.material.uniforms.uTime.value = time / 1000;

      this.material.uniforms.uTurbulence.value = settings.turbulence;
      this.material.uniforms.uFieldSize.value = settings.fieldSize;
      this.material.uniforms.uParticleSize.value = settings.size;

      this.material.uniforms.uEnergy.value = audioFeatures.energy;
      this.material.uniforms.uBass.value = audioFeatures.bass;
      this.material.uniforms.uHighs.value = audioFeatures.highs;
      this.material.uniforms.uPeakBurst.value = this.peakBurstValue;
    }
  }

  private recreate(settings: ParticleSettings): void {
    if (!this.points) return;

    const oldGeometry = this.geometry;

    this.currentQuality = settings.quality;
    this.currentFieldSize = settings.fieldSize;

    const count = this.getParticleCount(settings.quality);
    const positions = this.createParticlePositions(count, settings.fieldSize);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.points.geometry = this.geometry;

    if (oldGeometry) {
      oldGeometry.dispose();
    }

    console.log('[Particles] Recreated with', count, 'particles, fieldSize:', settings.fieldSize);
  }

  getObject(): THREE.Points | null {
    return this.points;
  }

  dispose(): void {
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    this.points = null;
  }
}
