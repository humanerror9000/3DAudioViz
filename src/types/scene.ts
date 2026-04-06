export enum GeometryType {
  PLANE = 'plane',
  SPHERE = 'sphere',
  ICOSPHERE = 'icosphere',
  TORUS = 'torus',
  CUBE = 'cube',
  CYLINDER = 'cylinder'
}

export enum RenderStyle {
  WIREFRAME = 'wireframe',
  POINTS = 'points',
  PARTICLES = 'particles'
}

export enum DetailLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum ParticleQuality {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface MeshSettings {
  geometryType: GeometryType;
  detailLevel: DetailLevel;
  renderStyle: RenderStyle;
  displacement: number;
  noiseScale: number;
  noiseSpeed: number;
  subWeight: number;
  bassWeight: number;
  midsWeight: number;
  highsWeight: number;
  pulseOnPeak: boolean;
  baseColor: string;
  pointSize: number;
  pointDensity: number;
}

export interface ParticleSettings {
  quality: ParticleQuality;
  fieldSize: number;
  // Core layer
  coreSize: number;
  coreBrightness: number;
  coreColor: string;
  // Outer layer
  outerSize: number;
  outerOpacity: number;
  outerColor: string;
  // Motion
  turbulence: number;
  noiseSpeed: number;
  // Audio reactivity
  bassReactivity: number;
  highsReactivity: number;
  energyReactivity: number;
  // Peak
  peakBurst: boolean;
  size: number; // legacy, kept for compatibility
}

export interface GlobalSettings {
  autoOrbit: boolean;
  orbitSpeed: number;
  bloom: boolean;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  parameterSmoothing: number;
}

export interface SmoothedParameter {
  target: number;
  smoothed: number;
}

export type SmoothedParameters = {
  [key: string]: SmoothedParameter;
};

export const defaultParticleSettings: ParticleSettings = {
  quality: ParticleQuality.MEDIUM,
  fieldSize: 20,
  coreSize: 2.5,
  coreBrightness: 1.8,
  coreColor: '#00aaff',
  outerSize: 6.0,
  outerOpacity: 0.25,
  outerColor: '#ff44aa',
  turbulence: 1.5,
  noiseSpeed: 0.2,
  bassReactivity: 1.0,
  highsReactivity: 0.6,
  energyReactivity: 1.0,
  peakBurst: true,
  size: 3
};
