import { MIDISettings, MIDIMapping } from '../types/midi';

const MIDI_SETTINGS_KEY = 'audio-visualizer-midi-settings';

const DEFAULT_MIDI_SETTINGS: MIDISettings = {
  enabled: false,
  selectedDeviceId: null,
  smoothing: 0.3,
  learnMode: false,
  mappings: []
};

export function loadMIDISettings(): MIDISettings {
  try {
    const stored = localStorage.getItem(MIDI_SETTINGS_KEY);
    if (!stored) {
      return { ...DEFAULT_MIDI_SETTINGS };
    }
    const parsed = JSON.parse(stored);
    return {
      ...DEFAULT_MIDI_SETTINGS,
      ...parsed,
      learnMode: false
    };
  } catch (error) {
    console.error('Failed to load MIDI settings:', error);
    return { ...DEFAULT_MIDI_SETTINGS };
  }
}

export function saveMIDISettings(settings: MIDISettings): void {
  try {
    localStorage.setItem(MIDI_SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save MIDI settings:', error);
  }
}

export function addMIDIMapping(
  settings: MIDISettings,
  mapping: MIDIMapping
): MIDISettings {
  const existingIndex = settings.mappings.findIndex(
    (m) => m.parameterId === mapping.parameterId
  );

  const newMappings = [...settings.mappings];
  if (existingIndex >= 0) {
    newMappings[existingIndex] = mapping;
  } else {
    newMappings.push(mapping);
  }

  return {
    ...settings,
    mappings: newMappings
  };
}

export function removeMIDIMapping(
  settings: MIDISettings,
  parameterId: string
): MIDISettings {
  return {
    ...settings,
    mappings: settings.mappings.filter((m) => m.parameterId !== parameterId)
  };
}

export function clearAllMIDIMappings(settings: MIDISettings): MIDISettings {
  return {
    ...settings,
    mappings: []
  };
}

export function findMappingByCC(
  settings: MIDISettings,
  ccNumber: number
): MIDIMapping | null {
  return settings.mappings.find((m) => m.ccNumber === ccNumber) || null;
}

export function findMappingByParameter(
  settings: MIDISettings,
  parameterId: string
): MIDIMapping | null {
  return settings.mappings.find((m) => m.parameterId === parameterId) || null;
}
