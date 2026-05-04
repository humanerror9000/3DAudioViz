// src/types/geometry.ts
// Islamic Geometric Pattern / Girih Tile system types

export type GeometryType =
  | 'girih-star-6'      // 6-pointed star polygon — classic Islamic
  | 'girih-star-8'      // 8-pointed star — common in Moroccan zellige
  | 'girih-star-10'     // 10-pointed star — sophisticated, Alhambra-style
  | 'girih-star-12'     // 12-pointed star — maximum complexity
  | 'zellij-field'      // Full-screen tiling field of interlocking stars
  | 'arabesque'         // Flowing interlaced strapwork / ribbon pattern
  | 'muqarnas'          // Stalactite-like radiating geometric pattern
  | 'khatam'            // Six-pointed star repeat tile (Persian)
  | 'rosette'           // Multi-petal rosette from overlapping circles

export type ColorPalette =
  | 'zellige'           // Cobalt, terracotta, ivory, gold — traditional Moroccan
  | 'neon-souk'         // Neon pushed palette: cyan, violet, gold, white
  | 'alhambra'          // Deep blue, turquoise, burnt orange, cream
  | 'hammam'            // Cool blues and greens, silver
  | 'fire'              // Gold, amber, red, white core
  | 'midnight'          // Deep indigo, electric blue, pale cyan
  | 'custom'

export type AudioBand = 'bass' | 'mids' | 'highs' | 'energy' | 'sub'

export interface GrowthState {
  // How many rings of tiles have been revealed (0 = just center, grows over time)
  revealedRings: number
  // Target rings based on accumulated energy
  targetRings: number
  // Line completion per layer (0 = undrawn, 1 = fully drawn)
  lineCompletion: number
  // Current symmetry fold (starts at 6, can increase to 8/10/12 on peaks)
  currentFolds: number
  // Color temperature 0 = cold (blue) → 1 = hot (gold/white)
  colorTemperature: number
  // Accumulated energy over time (drives long-arc evolution)
  accumulatedEnergy: number
  // Camera zoom level (1 = normal, < 1 = zoomed out to reveal more field)
  zoom: number
  // Peak burst flash intensity (decays quickly)
  peakFlash: number
  // Time of last peak
  lastPeakTime: number
  // Symmetry expansion cooldown
  lastSymmetryChange: number
}

export interface GeometryLayer {
  id: string
  geometryType: GeometryType
  visible: boolean
  // Which audio band drives this layer
  audioBand: AudioBand
  // Base rotation offset in radians
  rotationOffset: number
  // Rotation speed (negative = counter-clockwise)
  rotationSpeed: number
  // Scale multiplier
  scale: number
  // Opacity 0–1
  opacity: number
  // Stroke width in pixels
  strokeWidth: number
  // Glow radius (Canvas shadowBlur)
  glowIntensity: number
  // Symmetry folds for this layer (independent)
  symmetryFolds: number
  // Radius position (0 = center, 1 = outer edge)
  radialPosition: number
  // How much audio reactivity affects this layer (0–2)
  reactivity: number
  // Color override (null = use global palette)
  colorOverride: string | null
  // Whether this layer participates in growth mechanic
  growthEnabled: boolean
}

export interface GeometrySettings {
  layers: GeometryLayer[]
  // Visual
  backgroundColor: string
  palette: ColorPalette
  customColors: [string, string, string, string] // 4-color custom palette
  // Global animation
  globalRotationSpeed: number
  animationSpeed: number
  // Global audio reactivity
  bassReactivity: number
  energyReactivity: number
  highsReactivity: number
  peakPulse: boolean
  // Growth mechanics
  growthEnabled: boolean
  growthRate: number       // How fast rings reveal (0.1–2.0)
  maxRings: number         // Max tile rings to reveal (1–8)
  lineDrawSpeed: number    // How fast lines crystallize on beat (0.1–2.0)
  // Symmetry evolution
  symmetryEvolution: boolean  // Allow symmetry to change with peaks
  baseSymmetry: number        // Starting symmetry folds (6, 8, 10, 12)
  // Motion trails
  trailOpacity: number     // 0 = no trail, 0.15 = heavy trail
  // Zoom reveal
  zoomReveal: boolean      // Whether sustained energy triggers zoom-out
  // Bloom
  bloom: boolean
  bloomStrength: number
  bloomRadius: number
  bloomThreshold: number
}

export const defaultGeometryLayer: Omit<GeometryLayer, 'id'> = {
  geometryType: 'girih-star-8',
  visible: true,
  audioBand: 'bass',
  rotationOffset: 0,
  rotationSpeed: 0.3,
  scale: 1.0,
  opacity: 1.0,
  strokeWidth: 1.5,
  glowIntensity: 12,
  symmetryFolds: 8,
  radialPosition: 0,
  reactivity: 1.0,
  colorOverride: null,
  growthEnabled: true
}

export const defaultGeometrySettings: GeometrySettings = {
  layers: [
    {
      id: 'layer-bass',
      geometryType: 'girih-star-8',
      visible: true,
      audioBand: 'bass',
      rotationOffset: 0,
      rotationSpeed: 0.2,
      scale: 1.0,
      opacity: 1.0,
      strokeWidth: 2.0,
      glowIntensity: 16,
      symmetryFolds: 8,
      radialPosition: 0,
      reactivity: 1.2,
      colorOverride: null,
      growthEnabled: true
    },
    {
      id: 'layer-mids',
      geometryType: 'arabesque',
      visible: true,
      audioBand: 'mids',
      rotationOffset: Math.PI / 8,
      rotationSpeed: -0.15,
      scale: 0.85,
      opacity: 0.75,
      strokeWidth: 1.0,
      glowIntensity: 8,
      symmetryFolds: 8,
      radialPosition: 0.3,
      reactivity: 0.8,
      colorOverride: null,
      growthEnabled: true
    },
    {
      id: 'layer-highs',
      geometryType: 'rosette',
      visible: true,
      audioBand: 'highs',
      rotationOffset: Math.PI / 16,
      rotationSpeed: 0.4,
      scale: 0.6,
      opacity: 0.5,
      strokeWidth: 0.75,
      glowIntensity: 6,
      symmetryFolds: 12,
      radialPosition: 0.6,
      reactivity: 0.6,
      colorOverride: null,
      growthEnabled: false
    }
  ],
  backgroundColor: '#020408',
  palette: 'neon-souk',
  customColors: ['#00d4ff', '#aa44ff', '#ffd700', '#ffffff'],
  globalRotationSpeed: 0.15,
  animationSpeed: 1.0,
  bassReactivity: 1.0,
  energyReactivity: 1.0,
  highsReactivity: 0.6,
  peakPulse: true,
  growthEnabled: true,
  growthRate: 0.4,
  maxRings: 5,
  lineDrawSpeed: 1.2,
  symmetryEvolution: true,
  baseSymmetry: 8,
  trailOpacity: 0.08,
  zoomReveal: true,
  bloom: true,
  bloomStrength: 1.5,
  bloomRadius: 0.4,
  bloomThreshold: 0.3
}

// Color palettes — each is [cold, mid, warm, hot] mapped to energy 0→1
export const palettes: Record<ColorPalette, [string, string, string, string]> = {
  zellige:    ['#1a3a6b', '#00688b', '#c8860a', '#f5e6c8'],
  'neon-souk': ['#0a1628', '#00d4ff', '#aa44ff', '#ffd700'],
  alhambra:   ['#0d2137', '#1a6b8a', '#c06820', '#f0e8d0'],
  hammam:     ['#091520', '#0a4a6b', '#1a8a8a', '#c8e8f0'],
  fire:       ['#1a0800', '#cc4400', '#ff8800', '#ffffff'],
  midnight:   ['#050510', '#1a1a6b', '#0044dd', '#88ccff'],
  custom:     ['#00d4ff', '#aa44ff', '#ffd700', '#ffffff']
}

export const geometryTypeInfo: Record<GeometryType, { name: string; description: string }> = {
  'girih-star-6':  { name: '6-Point Star',    description: 'Classic hexagonal star — foundation of Islamic pattern' },
  'girih-star-8':  { name: '8-Point Star',    description: 'Octagonal star — the signature motif of Moroccan zellige' },
  'girih-star-10': { name: '10-Point Star',   description: 'Decagonal star — Alhambra complexity, 72° geometry' },
  'girih-star-12': { name: '12-Point Star',   description: 'Maximum intricacy — dodecagonal star polygon' },
  'zellij-field':  { name: 'Zellij Field',    description: 'Full-screen interlocking tile mosaic, infinite tiling' },
  'arabesque':     { name: 'Arabesque',        description: 'Flowing interlaced strapwork ribbons' },
  'muqarnas':      { name: 'Muqarnas',         description: 'Stalactite geometry radiating from center' },
  'khatam':        { name: 'Khatam',           description: 'Persian six-fold repeat tile system' },
  'rosette':       { name: 'Rosette',          description: 'Multi-petal flower from overlapping circles' }
}
