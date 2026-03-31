import { MeshSettings, GlobalSettings } from './scene';
import { AudioSettings } from './audio';

export interface Preset {
  id: string;
  name: string;
  isBuiltIn: boolean;
  meshSettings: MeshSettings;
  audioSettings: AudioSettings;
  globalSettings: GlobalSettings;
  createdAt: number;
}

export interface PresetData {
  name: string;
  meshSettings: MeshSettings;
  audioSettings: AudioSettings;
  globalSettings: GlobalSettings;
}
