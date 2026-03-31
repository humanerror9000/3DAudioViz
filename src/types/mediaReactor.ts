export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video'
}

export enum MediaGeometry {
  PLANE = 'plane',
  SPHERE = 'sphere',
  TORUS = 'torus',
  CUBE = 'cube',
  CYLINDER = 'cylinder'
}

export enum RenderMode {
  MODE_2D = '2d',
  MODE_3D = '3d'
}

export enum FitMode {
  COVER = 'cover',
  CONTAIN = 'contain'
}

export enum EffectsQuality {
  OFF = 'off',
  LOW = 'low',
  HIGH = 'high'
}

export interface MediaReactorSettings {
  renderMode: RenderMode;
  geometry: MediaGeometry;
  brightness: number;
  contrast: number;
  rgbSplit: number;
  glitch: number;
  zoomPulse: number;
  displacement: number;
  geometryDisplacement: number;
  intensity: number;
  fitMode: FitMode;
  effectsQuality: EffectsQuality;
  autoOrbit: boolean;
  orbitSpeed: number;
}

export interface MediaFile {
  file: File;
  type: MediaType;
  url: string;
  element: HTMLImageElement | HTMLVideoElement;
}
