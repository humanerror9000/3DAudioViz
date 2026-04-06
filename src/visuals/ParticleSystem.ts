import * as THREE from 'three';
import { ParticleQuality, ParticleSettings } from '../types/scene';
import { AudioFeatures } from '../types/audio';
import {
  particleCoreVertexShader,
  particleCoreFragmentShader,
  particleOuterVertexShader,
  particleOuterFragmentShader
} from '../shaders/particleShaders';

function hexToVec3(hex: string): THREE.Vector3 {
  const c = new THREE.Color(hex);
  return new THREE.Vector3(c.r, c.g, c.b);
}

export class ParticleSystem {
  // Core layer — small, bright
  private coreGeometry: THREE.BufferGeometry | null = null;
  private coreMaterial: THREE.ShaderMaterial | null = null;
  private corePoints: THREE.Points | null = null;

  // Outer layer — large, soft
  private outerGeometry: THREE.BufferGeometry | null = null;
  private outerMaterial: THREE.ShaderMaterial | null = null;
  private outerPoints: THREE.Points | null = null;

  // Group containing both layers
  private group: THREE.Group | null = null;

  private currentQuality: ParticleQuality;
  private currentFieldSize: number;
  private peakBurstValue = 0;
  private peakBurstTime = 0;

  constructor() {
    this.currentQuality = ParticleQuality.MEDIUM;
    this.currentFieldSize = 20;
  }

  private getParticleCount(quality: ParticleQuality): { core: number; outer: number } {
    switch (quality) {
      case ParticleQuality.LOW:
        return { core: 12000, outer: 6000 };
      case ParticleQuality.MEDIUM:
        return { core: 30000, outer: 12000 };
      case ParticleQuality.HIGH:
        return { core: 60000, outer: 20000 };
      default:
        return { core: 30000, outer: 12000 };
    }
  }

  private createPositions(count: number, fieldSize: number, spread: number = 1.0): Float32Array {
    const positions = new Float32Array(count * 3);
    const halfSize = fieldSize / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gaussian-ish falloff — particles cluster toward centre
      const r = Math.pow(Math.random(), 0.3) * spread;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);

      positions[i3]     = Math.sin(phi) * Math.cos(theta) * halfSize * r;
      positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * halfSize * r;
      positions[i3 + 2] = Math.cos(phi)                   * halfSize * r;
    }
    return positions;
  }

  private createCoreMaterial(settings: ParticleSettings): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader:   particleCoreVertexShader,
      fragmentShader: particleCoreFragmentShader,
      uniforms: {
        uTime:             { value: 0 },
        uTurbulence:       { value: settings.turbulence },
        uFieldSize:        { value: settings.fieldSize },
        uCoreSize:         { value: settings.coreSize },
        uCoreBrightness:   { value: settings.coreBrightness },
        uNoiseSpeed:       { value: settings.noiseSpeed },
        uEnergy:           { value: 0 },
        uBass:             { value: 0 },
        uMids:             { value: 0 },
        uHighs:            { value: 0 },
        uPeakBurst:        { value: 0 },
        uBassReactivity:   { value: settings.bassReactivity },
        uHighsReactivity:  { value: settings.highsReactivity },
        uEnergyReactivity: { value: settings.energyReactivity },
        uCoreColor:        { value: hexToVec3(settings.coreColor) }
      },
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending
    });
  }

  private createOuterMaterial(settings: ParticleSettings): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader:   particleOuterVertexShader,
      fragmentShader: particleOuterFragmentShader,
      uniforms: {
        uTime:             { value: 0 },
        uTurbulence:       { value: settings.turbulence },
        uFieldSize:        { value: settings.fieldSize },
        uOuterSize:        { value: settings.outerSize },
        uOuterOpacity:     { value: settings.outerOpacity },
        uNoiseSpeed:       { value: settings.noiseSpeed },
        uEnergy:           { value: 0 },
        uBass:             { value: 0 },
        uHighs:            { value: 0 },
        uPeakBurst:        { value: 0 },
        uBassReactivity:   { value: settings.bassReactivity },
        uEnergyReactivity: { value: settings.energyReactivity },
        uOuterColor:       { value: hexToVec3(settings.outerColor) }
      },
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending
    });
  }

  initialize(settings: ParticleSettings): THREE.Group {
    this.currentQuality  = settings.quality;
    this.currentFieldSize = settings.fieldSize;

    const counts = this.getParticleCount(settings.quality);

    // ── Core layer ──
    const corePositions = this.createPositions(counts.core, settings.fieldSize, 1.0);
    this.coreGeometry   = new THREE.BufferGeometry();
    this.coreGeometry.setAttribute('position', new THREE.BufferAttribute(corePositions, 3));
    this.coreMaterial = this.createCoreMaterial(settings);
    this.corePoints   = new THREE.Points(this.coreGeometry, this.coreMaterial);

    // ── Outer layer — slightly larger spread ──
    const outerPositions = this.createPositions(counts.outer, settings.fieldSize, 1.3);
    this.outerGeometry   = new THREE.BufferGeometry();
    this.outerGeometry.setAttribute('position', new THREE.BufferAttribute(outerPositions, 3));
    this.outerMaterial = this.createOuterMaterial(settings);
    this.outerPoints   = new THREE.Points(this.outerGeometry, this.outerMaterial);

    // ── Group ──
    this.group = new THREE.Group();
    this.group.add(this.outerPoints); // outer drawn first (behind)
    this.group.add(this.corePoints);  // core drawn on top

    return this.group;
  }

  update(time: number, audioFeatures: AudioFeatures, settings: ParticleSettings): void {
    // Recreate geometry if quality or field size changed
    if (
      settings.quality   !== this.currentQuality ||
      settings.fieldSize !== this.currentFieldSize
    ) {
      this.recreate(settings);
    }

    // Peak burst decay (200ms)
    if (settings.peakBurst && audioFeatures.peakTrigger) {
      this.peakBurstValue = 1.0;
      this.peakBurstTime  = time;
    }
    this.peakBurstValue = Math.max(0, 1.0 - (time - this.peakBurstTime) / 200);

    const t = time / 1000;

    // ── Update core uniforms ──
    if (this.coreMaterial) {
      const u = this.coreMaterial.uniforms;
      u.uTime.value             = t;
      u.uTurbulence.value       = settings.turbulence;
      u.uFieldSize.value        = settings.fieldSize;
      u.uCoreSize.value         = settings.coreSize;
      u.uCoreBrightness.value   = settings.coreBrightness;
      u.uNoiseSpeed.value       = settings.noiseSpeed;
      u.uEnergy.value           = audioFeatures.energy;
      u.uBass.value             = audioFeatures.bass;
      u.uMids.value             = audioFeatures.mids;
      u.uHighs.value            = audioFeatures.highs;
      u.uPeakBurst.value        = this.peakBurstValue;
      u.uBassReactivity.value   = settings.bassReactivity;
      u.uHighsReactivity.value  = settings.highsReactivity;
      u.uEnergyReactivity.value = settings.energyReactivity;
      u.uCoreColor.value        = hexToVec3(settings.coreColor);
    }

    // ── Update outer uniforms ──
    if (this.outerMaterial) {
      const u = this.outerMaterial.uniforms;
      u.uTime.value             = t;
      u.uTurbulence.value       = settings.turbulence;
      u.uFieldSize.value        = settings.fieldSize;
      u.uOuterSize.value        = settings.outerSize;
      u.uOuterOpacity.value     = settings.outerOpacity;
      u.uNoiseSpeed.value       = settings.noiseSpeed;
      u.uEnergy.value           = audioFeatures.energy;
      u.uBass.value             = audioFeatures.bass;
      u.uHighs.value            = audioFeatures.highs;
      u.uPeakBurst.value        = this.peakBurstValue;
      u.uBassReactivity.value   = settings.bassReactivity;
      u.uEnergyReactivity.value = settings.energyReactivity;
      u.uOuterColor.value       = hexToVec3(settings.outerColor);
    }
  }

  private recreate(settings: ParticleSettings): void {
    if (!this.group) return;

    this.currentQuality   = settings.quality;
    this.currentFieldSize = settings.fieldSize;

    const counts = this.getParticleCount(settings.quality);

    // Replace core geometry
    const oldCoreGeo = this.coreGeometry;
    this.coreGeometry = new THREE.BufferGeometry();
    this.coreGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.createPositions(counts.core, settings.fieldSize, 1.0), 3)
    );
    if (this.corePoints) this.corePoints.geometry = this.coreGeometry;
    oldCoreGeo?.dispose();

    // Replace outer geometry
    const oldOuterGeo = this.outerGeometry;
    this.outerGeometry = new THREE.BufferGeometry();
    this.outerGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.createPositions(counts.outer, settings.fieldSize, 1.3), 3)
    );
    if (this.outerPoints) this.outerPoints.geometry = this.outerGeometry;
    oldOuterGeo?.dispose();
  }

  getObject(): THREE.Group | null {
    return this.group;
  }

  dispose(): void {
    this.coreGeometry?.dispose();
    this.coreMaterial?.dispose();
    this.outerGeometry?.dispose();
    this.outerMaterial?.dispose();
    this.coreGeometry  = null;
    this.coreMaterial  = null;
    this.outerGeometry = null;
    this.outerMaterial = null;
    this.corePoints    = null;
    this.outerPoints   = null;
    this.group         = null;
  }
}
