import { useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import { FractalSettings, FractalType } from '../types/fractal';
import { AudioSettings, AudioFeatures } from '../types/audio';
import { MIDIState } from '../types/midi';
import { MIDIPanel } from './MIDIPanel';

interface FractalControlsProps {
  settings: FractalSettings;
  audioSettings: AudioSettings;
  audioFeatures: AudioFeatures;
  midiState: MIDIState;
  onSettingsChange: (settings: FractalSettings) => void;
  onAudioSettingsChange: (settings: AudioSettings) => void;
  onParameterClick: (parameterId: string, parameterName: string, min: number, max: number, isToggle?: boolean) => void;
  onMIDIEnableChange: (enabled: boolean) => void;
  onMIDIDeviceChange: (deviceId: string | null) => void;
  onMIDISmoothingChange: (smoothing: number) => void;
  onMIDILearnModeChange: (enabled: boolean) => void;
  onMIDIRemoveMapping: (parameterId: string) => void;
  onMIDIClearMappings: () => void;
  onReset: () => void;
}

export function FractalControls({
  settings,
  audioSettings,
  audioFeatures,
  midiState,
  onSettingsChange,
  onAudioSettingsChange,
  onParameterClick,
  onMIDIEnableChange,
  onMIDIDeviceChange,
  onMIDISmoothingChange,
  onMIDILearnModeChange,
  onMIDIRemoveMapping,
  onMIDIClearMappings,
  onReset
}: FractalControlsProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handleSliderClick = (parameterId: string, parameterName: string, min: number, max: number) => {
    if (midiState.settings.learnMode) {
      onParameterClick(parameterId, parameterName, min, max);
    }
  };

  const handleToggleClick = (parameterId: string, parameterName: string) => {
    if (midiState.settings.learnMode) {
      onParameterClick(parameterId, parameterName, 0, 1, true);
    }
  };

  const isLearning = (parameterId: string) => {
    return midiState.settings.learnMode && midiState.learningParameterId === parameterId;
  };

  return (
    <div className="absolute top-4 right-4 w-80 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden z-10">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h2 className="text-lg font-bold">Fractal Controls</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            title="Reset to defaults"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {collapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="p-4 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium mb-2">Fractal Type</label>
            <select
              value={settings.fractalType}
              onChange={(e) => onSettingsChange({ ...settings, fractalType: e.target.value as FractalType })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
            >
              <option value="mandelbulb">Mandelbulb</option>
              <option value="menger">Menger Sponge</option>
              <option value="julia">Julia Set</option>
            </select>
          </div>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Camera</h3>
            <div>
              <label className="block text-sm font-medium mb-2">
                Zoom: {settings.zoom.toFixed(2)}
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={settings.zoom}
                onChange={(e) => onSettingsChange({ ...settings, zoom: parseFloat(e.target.value) })}
                onClick={() => handleSliderClick('zoom', 'Zoom', 1, 5)}
                className={`w-full ${isLearning('zoom') ? 'accent-green-500' : ''}`}
              />
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Colors</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium mb-2">Color A</label>
                <input
                  type="color"
                  value={settings.colorA}
                  onChange={(e) => onSettingsChange({ ...settings, colorA: e.target.value })}
                  className="w-full h-8 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Color B</label>
                <input
                  type="color"
                  value={settings.colorB}
                  onChange={(e) => onSettingsChange({ ...settings, colorB: e.target.value })}
                  className="w-full h-8 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Animation</h3>
            <div>
              <label className="block text-sm font-medium mb-2">
                Rotation Speed: {settings.rotationSpeed.toFixed(2)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={settings.rotationSpeed}
                onChange={(e) => onSettingsChange({ ...settings, rotationSpeed: parseFloat(e.target.value) })}
                onClick={() => handleSliderClick('rotationSpeed', 'Rotation Speed', 0, 1)}
                className={`w-full ${isLearning('rotationSpeed') ? 'accent-green-500' : ''}`}
              />
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Audio Reactivity</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Bass: {settings.bassReactivity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={settings.bassReactivity}
                  onChange={(e) => onSettingsChange({ ...settings, bassReactivity: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('bassReactivity', 'Bass Reactivity', 0, 2)}
                  className={`w-full ${isLearning('bassReactivity') ? 'accent-green-500' : ''}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Energy: {settings.energyReactivity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={settings.energyReactivity}
                  onChange={(e) => onSettingsChange({ ...settings, energyReactivity: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('energyReactivity', 'Energy Reactivity', 0, 2)}
                  className={`w-full ${isLearning('energyReactivity') ? 'accent-green-500' : ''}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Highs: {settings.highsReactivity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={settings.highsReactivity}
                  onChange={(e) => onSettingsChange({ ...settings, highsReactivity: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('highsReactivity', 'Highs Reactivity', 0, 2)}
                  className={`w-full ${isLearning('highsReactivity') ? 'accent-green-500' : ''}`}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="peakPulse"
                  checked={settings.peakPulse}
                  onChange={(e) => onSettingsChange({ ...settings, peakPulse: e.target.checked })}
                  onClick={() => handleToggleClick('peakPulse', 'Peak Pulse')}
                  className={`w-4 h-4 ${isLearning('peakPulse') ? 'accent-green-500' : ''}`}
                />
                <label htmlFor="peakPulse" className="text-sm">
                  Peak Pulse
                </label>
              </div>
            </div>
          </div>

          {settings.fractalType === 'mandelbulb' && (
            <div className="pt-2 border-t border-white/10">
              <h3 className="text-sm font-semibold mb-3">Mandelbulb Parameters</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Power: {settings.power.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="0.5"
                    value={settings.power}
                    onChange={(e) => onSettingsChange({ ...settings, power: parseFloat(e.target.value) })}
                    onClick={() => handleSliderClick('power', 'Power', 2, 12)}
                    className={`w-full ${isLearning('power') ? 'accent-green-500' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Iterations: {settings.iterations}
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    step="1"
                    value={settings.iterations}
                    onChange={(e) => onSettingsChange({ ...settings, iterations: parseInt(e.target.value) })}
                    onClick={() => handleSliderClick('iterations', 'Iterations', 4, 12)}
                    className={`w-full ${isLearning('iterations') ? 'accent-green-500' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bailout: {settings.bailout.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1.5"
                    max="4"
                    step="0.1"
                    value={settings.bailout}
                    onChange={(e) => onSettingsChange({ ...settings, bailout: parseFloat(e.target.value) })}
                    onClick={() => handleSliderClick('bailout', 'Bailout', 1.5, 4)}
                    className={`w-full ${isLearning('bailout') ? 'accent-green-500' : ''}`}
                  />
                </div>
              </div>
            </div>
          )}

          {settings.fractalType === 'menger' && (
            <div className="pt-2 border-t border-white/10">
              <h3 className="text-sm font-semibold mb-3">Menger Sponge Parameters</h3>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Iterations: {settings.mengerIterations}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={settings.mengerIterations}
                  onChange={(e) => onSettingsChange({ ...settings, mengerIterations: parseInt(e.target.value) })}
                  onClick={() => handleSliderClick('mengerIterations', 'Menger Iterations', 1, 5)}
                  className={`w-full ${isLearning('mengerIterations') ? 'accent-green-500' : ''}`}
                />
              </div>
            </div>
          )}

          {settings.fractalType === 'julia' && (
            <div className="pt-2 border-t border-white/10">
              <h3 className="text-sm font-semibold mb-3">Julia Set Parameters</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    C.x: {settings.juliaC[0].toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={settings.juliaC[0]}
                    onChange={(e) => {
                      const newC: [number, number, number, number] = [...settings.juliaC];
                      newC[0] = parseFloat(e.target.value);
                      onSettingsChange({ ...settings, juliaC: newC });
                    }}
                    onClick={() => handleSliderClick('juliaCx', 'Julia C.x', -1, 1)}
                    className={`w-full ${isLearning('juliaCx') ? 'accent-green-500' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    C.y: {settings.juliaC[1].toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={settings.juliaC[1]}
                    onChange={(e) => {
                      const newC: [number, number, number, number] = [...settings.juliaC];
                      newC[1] = parseFloat(e.target.value);
                      onSettingsChange({ ...settings, juliaC: newC });
                    }}
                    onClick={() => handleSliderClick('juliaCy', 'Julia C.y', -1, 1)}
                    className={`w-full ${isLearning('juliaCy') ? 'accent-green-500' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    C.z: {settings.juliaC[2].toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={settings.juliaC[2]}
                    onChange={(e) => {
                      const newC: [number, number, number, number] = [...settings.juliaC];
                      newC[2] = parseFloat(e.target.value);
                      onSettingsChange({ ...settings, juliaC: newC });
                    }}
                    onClick={() => handleSliderClick('juliaCz', 'Julia C.z', -1, 1)}
                    className={`w-full ${isLearning('juliaCz') ? 'accent-green-500' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    C.w: {settings.juliaC[3].toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={settings.juliaC[3]}
                    onChange={(e) => {
                      const newC: [number, number, number, number] = [...settings.juliaC];
                      newC[3] = parseFloat(e.target.value);
                      onSettingsChange({ ...settings, juliaC: newC });
                    }}
                    onClick={() => handleSliderClick('juliaCw', 'Julia C.w', -1, 1)}
                    className={`w-full ${isLearning('juliaCw') ? 'accent-green-500' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Iterations: {settings.iterations}
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    step="1"
                    value={settings.iterations}
                    onChange={(e) => onSettingsChange({ ...settings, iterations: parseInt(e.target.value) })}
                    onClick={() => handleSliderClick('iterations', 'Iterations', 4, 12)}
                    className={`w-full ${isLearning('iterations') ? 'accent-green-500' : ''}`}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Bloom</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="bloom"
                  checked={settings.bloom}
                  onChange={(e) => onSettingsChange({ ...settings, bloom: e.target.checked })}
                  onClick={() => handleToggleClick('bloom', 'Bloom')}
                  className={`w-4 h-4 ${isLearning('bloom') ? 'accent-green-500' : ''}`}
                />
                <label htmlFor="bloom" className="text-sm">
                  Enable Bloom
                </label>
              </div>
              {settings.bloom && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Strength: {settings.bloomStrength.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      step="0.1"
                      value={settings.bloomStrength}
                      onChange={(e) => onSettingsChange({ ...settings, bloomStrength: parseFloat(e.target.value) })}
                      onClick={() => handleSliderClick('bloomStrength', 'Bloom Strength', 0, 3)}
                      className={`w-full ${isLearning('bloomStrength') ? 'accent-green-500' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Radius: {settings.bloomRadius.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={settings.bloomRadius}
                      onChange={(e) => onSettingsChange({ ...settings, bloomRadius: parseFloat(e.target.value) })}
                      onClick={() => handleSliderClick('bloomRadius', 'Bloom Radius', 0, 1)}
                      className={`w-full ${isLearning('bloomRadius') ? 'accent-green-500' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Threshold: {settings.bloomThreshold.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={settings.bloomThreshold}
                      onChange={(e) => onSettingsChange({ ...settings, bloomThreshold: parseFloat(e.target.value) })}
                      onClick={() => handleSliderClick('bloomThreshold', 'Bloom Threshold', 0, 1)}
                      className={`w-full ${isLearning('bloomThreshold') ? 'accent-green-500' : ''}`}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Audio Settings</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Smoothing: {audioSettings.smoothing.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="0.95"
                  step="0.05"
                  value={audioSettings.smoothing}
                  onChange={(e) => onAudioSettingsChange({ ...audioSettings, smoothing: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('audioSmoothing', 'Audio Smoothing', 0, 0.95)}
                  className={`w-full ${isLearning('audioSmoothing') ? 'accent-green-500' : ''}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Sensitivity: {audioSettings.sensitivity.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={audioSettings.sensitivity}
                  onChange={(e) => onAudioSettingsChange({ ...audioSettings, sensitivity: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('audioSensitivity', 'Audio Sensitivity', 0.1, 3)}
                  className={`w-full ${isLearning('audioSensitivity') ? 'accent-green-500' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <h3 className="text-sm font-semibold mb-3">Audio Features</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-white/70">Energy:</span>
                <span>{audioFeatures.energy.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Bass:</span>
                <span>{audioFeatures.bass.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Mids:</span>
                <span>{audioFeatures.mids.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Highs:</span>
                <span>{audioFeatures.highs.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <MIDIPanel
              midiState={midiState}
              onEnableChange={onMIDIEnableChange}
              onDeviceChange={onMIDIDeviceChange}
              onSmoothingChange={onMIDISmoothingChange}
              onLearnModeChange={onMIDILearnModeChange}
              onRemoveMapping={onMIDIRemoveMapping}
              onClearMappings={onMIDIClearMappings}
            />
          </div>
        </div>
      )}
    </div>
  );
}
