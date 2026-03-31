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
  POINTS = 'points'
}

export enum DetailLevel {
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
