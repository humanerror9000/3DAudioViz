export type GeometryType =
  | 'flower-of-life'
  | 'seed-of-life'
  | 'metatrons-cube'
  | 'vesica-piscis'
  | 'golden-spiral'
  | 'sri-yantra'
  | 'tetrahedron'
  | 'cube'
  | 'octahedron'
  | 'dodecahedron'
  | 'icosahedron'
  | 'torus'
  | 'merkaba';

export type RenderMode = 'wireframe' | 'solid' | 'points' | 'mixed';
export type ColorScheme = 'chakra' | 'rainbow' | 'monochrome' | 'golden' | 'cosmic' | 'custom';

export interface GeometryLayer {
  id: string;
  geometryType: GeometryType;
  visible: boolean;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  opacity: number;
  strokeWidth: number;
  glowIntensity: number;
  renderMode: RenderMode;
  subdivisions: number;
  audioReactive: boolean;
}

export interface GeometrySettings {
  layers: GeometryLayer[];
  backgroundColor: string;
  colorScheme: ColorScheme;
  customColors: string[];
  globalRotationSpeed: number;
  bassReactivity: number;
  energyReactivity: number;
  highsReactivity: number;
  peakPulse: boolean;
  bloom: boolean;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  showGrid: boolean;
  showGoldenRatio: boolean;
  symmetrySegments: number;
  animationSpeed: number;
  particleEmission: boolean;
  particleDensity: number;
}

export const defaultGeometryLayer: Omit<GeometryLayer, 'id'> = {
  geometryType: 'flower-of-life',
  visible: true,
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  scale: 1.0,
  color: '#00d4ff',
  opacity: 1.0,
  strokeWidth: 2.0,
  glowIntensity: 0.5,
  renderMode: 'wireframe',
  subdivisions: 6,
  audioReactive: true
};

export const defaultGeometrySettings: GeometrySettings = {
  layers: [
    {
      id: 'layer-1',
      ...defaultGeometryLayer,
      geometryType: 'flower-of-life',
      color: '#00d4ff',
      scale: 1.5
    }
  ],
  backgroundColor: '#0a0a0f',
  colorScheme: 'cosmic',
  customColors: ['#00d4ff', '#ff006e', '#ffbe0b', '#8338ec', '#3a86ff'],
  globalRotationSpeed: 0.1,
  bassReactivity: 1.0,
  energyReactivity: 1.0,
  highsReactivity: 0.6,
  peakPulse: true,
  bloom: true,
  bloomStrength: 1.5,
  bloomRadius: 0.4,
  bloomThreshold: 0.3,
  showGrid: false,
  showGoldenRatio: false,
  symmetrySegments: 6,
  animationSpeed: 1.0,
  particleEmission: false,
  particleDensity: 100
};

export const colorSchemes: Record<ColorScheme, string[]> = {
  chakra: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'],
  rainbow: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'],
  monochrome: ['#FFFFFF', '#E0E0E0', '#C0C0C0', '#A0A0A0', '#808080'],
  golden: ['#FFD700', '#FFA500', '#FF8C00', '#FF6347', '#FF4500'],
  cosmic: ['#00d4ff', '#ff006e', '#ffbe0b', '#8338ec', '#3a86ff'],
  custom: []
};

export const geometryInfo: Record<GeometryType, { name: string; description: string }> = {
  'flower-of-life': {
    name: 'Flower of Life',
    description: 'Ancient symbol representing creation and the interconnectedness of all life'
  },
  'seed-of-life': {
    name: 'Seed of Life',
    description: 'Seven overlapping circles forming the basic pattern of creation'
  },
  'metatrons-cube': {
    name: "Metatron's Cube",
    description: 'Contains all five Platonic solids, representing the building blocks of the universe'
  },
  'vesica-piscis': {
    name: 'Vesica Piscis',
    description: 'Intersection of two circles, symbolizing the womb of creation'
  },
  'golden-spiral': {
    name: 'Golden Spiral',
    description: 'Logarithmic spiral based on the Fibonacci sequence and golden ratio'
  },
  'sri-yantra': {
    name: 'Sri Yantra',
    description: 'Ancient Hindu diagram representing the cosmos and human consciousness'
  },
  'tetrahedron': {
    name: 'Tetrahedron',
    description: 'Four-sided Platonic solid representing fire and transformation'
  },
  'cube': {
    name: 'Cube',
    description: 'Six-sided Platonic solid representing earth and stability'
  },
  'octahedron': {
    name: 'Octahedron',
    description: 'Eight-sided Platonic solid representing air and balance'
  },
  'dodecahedron': {
    name: 'Dodecahedron',
    description: 'Twelve-sided Platonic solid representing ether and the universe'
  },
  'icosahedron': {
    name: 'Icosahedron',
    description: 'Twenty-sided Platonic solid representing water and flow'
  },
  'torus': {
    name: 'Torus',
    description: 'Fundamental energy flow pattern found throughout nature'
  },
  'merkaba': {
    name: 'Merkaba',
    description: 'Counter-rotating tetrahedrons representing the light-body vehicle'
  }
};
