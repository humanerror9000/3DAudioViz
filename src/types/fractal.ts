export type FractalType = 'mandelbulb' | 'menger' | 'julia';

export interface FractalSettings {
  fractalType: FractalType;
  zoom: number;
  colorA: string;
  colorB: string;
  bassReactivity: number;
  energyReactivity: number;
  highsReactivity: number;
  peakPulse: boolean;
  rotationSpeed: number;
  bloom: boolean;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  power: number;
  iterations: number;
  bailout: number;
  mengerIterations: number;
  juliaC: [number, number, number, number];
}

export const defaultFractalSettings: FractalSettings = {
  fractalType: 'mandelbulb',
  zoom: 2.5,
  colorA: '#0a1628',
  colorB: '#00d4ff',
  bassReactivity: 1.0,
  energyReactivity: 1.0,
  highsReactivity: 0.6,
  peakPulse: true,
  rotationSpeed: 0.1,
  bloom: true,
  bloomStrength: 1.5,
  bloomRadius: 0.4,
  bloomThreshold: 0.3,
  power: 8.0,
  iterations: 8,
  bailout: 2.0,
  mengerIterations: 3,
  juliaC: [0.3, 0.5, 0.4, 0.2]
};
