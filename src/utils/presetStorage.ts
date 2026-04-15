import { Preset, PresetData } from '../types/preset';
import { GeometryType, RenderStyle, DetailLevel } from '../types/scene';

const STORAGE_KEY = 'audio-visualizer-presets';
const VERSION_KEY = 'audio-visualizer-presets-version';
const CURRENT_VERSION = '3';

export const defaultPresets: Preset[] = [
  {
    id: 'default-1',
    name: 'Electric Sphere',
    isBuiltIn: true,
    createdAt: Date.now(),
    meshSettings: {
      geometryType: GeometryType.SPHERE,
      detailLevel: DetailLevel.MEDIUM,
      renderStyle: RenderStyle.WIREFRAME,
      displacement: 0.8,
      noiseScale: 2.5,
      noiseSpeed: 0.6,
      subWeight: 0.2,
      bassWeight: 0.7,
      midsWeight: 0.4,
      highsWeight: 0.3,
      pulseOnPeak: true,
      baseColor: '#00ffff',
      pointSize: 2.0,
      pointDensity: 1.0
    },
    audioSettings: {
      smoothing: 0.75,
      sensitivity: 1.2,
      peakThreshold: 0.8,
      peakCooldown: 200
    },
    globalSettings: {
      autoOrbit: true,
      orbitSpeed: 0.3,
      bloom: true,
      bloomStrength: 1.5,
      bloomRadius: 0.4,
      bloomThreshold: 0.85,
      parameterSmoothing: 0.2
    }
  },
  {
    id: 'default-2',
    name: 'Cosmic Torus',
    isBuiltIn: true,
    createdAt: Date.now(),
    meshSettings: {
      geometryType: GeometryType.TORUS,
      detailLevel: DetailLevel.HIGH,
      renderStyle: RenderStyle.POINTS,
      displacement: 0.5,
      noiseScale: 3.0,
      noiseSpeed: 0.4,
      subWeight: 0.3,
      bassWeight: 0.5,
      midsWeight: 0.5,
      highsWeight: 0.6,
      pulseOnPeak: true,
      baseColor: '#ff00ff',
      pointSize: 0.2,
      pointDensity: 0.7
    },
    audioSettings: {
      smoothing: 0.8,
      sensitivity: 1.0,
      peakThreshold: 0.75,
      peakCooldown: 250
    },
    globalSettings: {
      autoOrbit: true,
      orbitSpeed: 0.5,
      bloom: true,
      bloomStrength: 2.0,
      bloomRadius: 0.5,
      bloomThreshold: 0.7,
      parameterSmoothing: 0.2
    }
  },
  {
    id: 'default-3',
    name: 'Icosahedral Dream',
    isBuiltIn: true,
    createdAt: Date.now(),
    meshSettings: {
      geometryType: GeometryType.ICOSPHERE,
      detailLevel: DetailLevel.MEDIUM,
      renderStyle: RenderStyle.WIREFRAME,
      displacement: 1.0,
      noiseScale: 1.8,
      noiseSpeed: 0.5,
      subWeight: 0.4,
      bassWeight: 0.6,
      midsWeight: 0.3,
      highsWeight: 0.2,
      pulseOnPeak: true,
      baseColor: '#ffaa00',
      pointSize: 2.5,
      pointDensity: 1.0
    },
    audioSettings: {
      smoothing: 0.7,
      sensitivity: 1.3,
      peakThreshold: 0.7,
      peakCooldown: 150
    },
    globalSettings: {
      autoOrbit: true,
      orbitSpeed: 0.4,
      bloom: true,
      bloomStrength: 1.2,
      bloomRadius: 0.3,
      bloomThreshold: 0.9,
      parameterSmoothing: 0.2
    }
  }
];

export function initializePresets(): void {
  const storedVersion = localStorage.getItem(VERSION_KEY);

  if (storedVersion !== CURRENT_VERSION) {
    const existingPresets = loadPresets();
    const userPresets = existingPresets.filter(p => !p.isBuiltIn);
    const updatedPresets = [...defaultPresets, ...userPresets];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPresets));
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
  }
}

export function loadPresets(): Preset[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return defaultPresets;
    }
    return JSON.parse(stored);
  } catch {
    return defaultPresets;
  }
}

export function savePreset(presetData: PresetData): Preset {
  const presets = loadPresets();

  const newPreset: Preset = {
    id: `preset-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name: presetData.name,
    isBuiltIn: false,
    createdAt: Date.now(),
    meshSettings: { ...presetData.meshSettings },
    audioSettings: { ...presetData.audioSettings },
    globalSettings: { ...presetData.globalSettings }
  };

  presets.push(newPreset);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));

  return newPreset;
}

export function deletePreset(id: string): void {
  const presets = loadPresets();
  const filtered = presets.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function getPresetById(id: string): Preset | null {
  const presets = loadPresets();
  return presets.find(p => p.id === id) || null;
}

export function updatePreset(id: string, presetData: PresetData): void {
  const presets = loadPresets();
  const index = presets.findIndex(p => p.id === id);

  if (index !== -1) {
    presets[index] = {
      ...presets[index],
      name: presetData.name,
      meshSettings: { ...presetData.meshSettings },
      audioSettings: { ...presetData.audioSettings },
      globalSettings: { ...presetData.globalSettings }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  }
}
