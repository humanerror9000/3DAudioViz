export interface MIDIDeviceInfo {
  id: string;
  name: string;
  manufacturer: string;
  state: string;
}

export interface MIDIMapping {
  parameterId: string;
  parameterName: string;
  ccNumber: number;
  min: number;
  max: number;
  isToggle?: boolean;
}

export interface MIDISettings {
  enabled: boolean;
  selectedDeviceId: string | null;
  smoothing: number;
  learnMode: boolean;
  mappings: MIDIMapping[];
}

export interface LearningContext {
  parameterId: string;
  parameterName: string;
  min: number;
  max: number;
  isToggle?: boolean;
}

export interface MIDIState {
  isSupported: boolean;
  hasAccess: boolean;
  isInitializing: boolean;
  devices: MIDIDeviceInfo[];
  settings: MIDISettings;
  lastActivity: number;
  learningParameterId: string | null;
  learningContext: LearningContext | null;
}

export type ParameterType = 'number' | 'boolean' | 'string';

export interface MappableParameter {
  id: string;
  name: string;
  type: ParameterType;
  min?: number;
  max?: number;
}
