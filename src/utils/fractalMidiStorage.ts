import { MIDISettings, MIDIMapping } from '../types/midi';

const FRACTAL_MIDI_SETTINGS_KEY = 'fractal-visualizer-midi-settings';

const DEFAULT_MIDI_SETTINGS: MIDISettings = {
  enabled: false,
  selectedDeviceId: null,
  smoothing: 0.3,
  mappings: [],
  learnMode: false
};

export function loadFractalMIDISettings(): MIDISettings {
  try {
    const stored = localStorage.getItem(FRACTAL_MIDI_SETTINGS_KEY);
    if (!stored) {
      return { ...DEFAULT_MIDI_SETTINGS };
    }
    return JSON.parse(stored);
  } catch {
    return { ...DEFAULT_MIDI_SETTINGS };
  }
}

export function saveFractalMIDISettings(settings: MIDISettings): void {
  try {
    localStorage.setItem(FRACTAL_MIDI_SETTINGS_KEY, JSON.stringify(settings));
  } catch {
  }
}

export function addFractalMIDIMapping(
  settings: MIDISettings,
  mapping: MIDIMapping
): MIDISettings {
  const existingIndex = settings.mappings.findIndex(
    (m) => m.parameterId === mapping.parameterId
  );

  let newMappings: MIDIMapping[];
  if (existingIndex >= 0) {
    newMappings = [...settings.mappings];
    newMappings[existingIndex] = mapping;
  } else {
    newMappings = [...settings.mappings, mapping];
  }

  const newSettings = {
    ...settings,
    mappings: newMappings,
    learnMode: false
  };

  saveFractalMIDISettings(newSettings);
  return newSettings;
}

export function removeFractalMIDIMapping(
  settings: MIDISettings,
  parameterId: string
): MIDISettings {
  const newSettings = {
    ...settings,
    mappings: settings.mappings.filter((m) => m.parameterId !== parameterId)
  };

  saveFractalMIDISettings(newSettings);
  return newSettings;
}

export function clearAllFractalMIDIMappings(settings: MIDISettings): MIDISettings {
  const newSettings = {
    ...settings,
    mappings: []
  };

  saveFractalMIDISettings(newSettings);
  return newSettings;
}

export function findFractalMappingByCC(
  settings: MIDISettings,
  ccNumber: number
): MIDIMapping | undefined {
  return settings.mappings.find((m) => m.ccNumber === ccNumber);
}
