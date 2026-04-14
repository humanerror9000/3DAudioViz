import { MediaReactorSettings, RenderMode, MediaGeometry, FitMode, EffectsQuality } from '../types/mediaReactor';
import { AudioSettings, AudioFeatures } from '../types/audio';
import { MIDIState } from '../types/midi';
import { MIDIPanel } from './MIDIPanel';
import { findMediaReactorMappingByParameter } from '../utils/mediaReactorMidiStorage';

interface MediaReactorControlsProps {
  settings: MediaReactorSettings;
  audioSettings: AudioSettings;
  audioFeatures: AudioFeatures;
  midiState: MIDIState;
  onSettingsChange: (settings: MediaReactorSettings) => void;
  onAudioSettingsChange: (settings: AudioSettings) => void;
  onParameterClick: (parameterId: string, parameterName: string, min: number, max: number, isToggle?: boolean) => void;
  onMIDIEnableChange: (enabled: boolean) => void;
  onMIDIDeviceChange: (deviceId: string | null) => void;
  onMIDISmoothingChange: (smoothing: number) => void;
  onMIDILearnModeChange: (enabled: boolean) => void;
  onMIDIRemoveMapping: (parameterId: string) => void;
  onMIDIClearMappings: () => void;
}

export function MediaReactorControls({
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
  onMIDIClearMappings
}: MediaReactorControlsProps) {
  const updateSetting = <K extends keyof MediaReactorSettings>(
    key: K,
    value: MediaReactorSettings[K]
  ) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const handleSliderClick = (parameterId: string, parameterName: string, min: number, max: number) => {
    onParameterClick(parameterId, parameterName, min, max, false);
  };

  const isLearning = (parameterId: string): boolean => {
    return midiState.learningParameterId === parameterId;
  };

  const hasMapping = (parameterId: string): boolean => {
    return !!findMediaReactorMappingByParameter(midiState.settings, parameterId);
  };

  return (
    <div className="absolute right-4 top-20 bottom-20 w-80 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg overflow-y-auto">
      <div className="p-4 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Media Reactor Controls</h3>
        </div>

        <MIDIPanel
          midiState={midiState}
          onEnableChange={onMIDIEnableChange}
          onDeviceChange={onMIDIDeviceChange}
          onSmoothingChange={onMIDISmoothingChange}
          onLearnModeChange={onMIDILearnModeChange}
          onRemoveMapping={onMIDIRemoveMapping}
          onClearMappings={onMIDIClearMappings}
        />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/90">Render Mode</label>
            <div className="flex gap-2">
              <button
                onClick={() => updateSetting('renderMode', RenderMode.MODE_2D)}
                className={`flex-1 px-3 py-2 rounded transition-colors ${
                  settings.renderMode === RenderMode.MODE_2D
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                2D
              </button>
              <button
                onClick={() => updateSetting('renderMode', RenderMode.MODE_3D)}
                className={`flex-1 px-3 py-2 rounded transition-colors ${
                  settings.renderMode === RenderMode.MODE_3D
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                3D
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white/90">Fit Mode</label>
            <div className="flex gap-2">
              <button
                onClick={() => updateSetting('fitMode', FitMode.COVER)}
                className={`flex-1 px-3 py-2 rounded transition-colors ${
                  settings.fitMode === FitMode.COVER
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Cover
              </button>
              <button
                onClick={() => updateSetting('fitMode', FitMode.CONTAIN)}
                className={`flex-1 px-3 py-2 rounded transition-colors ${
                  settings.fitMode === FitMode.CONTAIN
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Contain
              </button>
            </div>
          </div>

          {settings.renderMode === RenderMode.MODE_3D && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">Geometry</label>
                <select
                  value={settings.geometry}
                  onChange={(e) => updateSetting('geometry', e.target.value as MediaGeometry)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-blue-500"
                >
                  <option value={MediaGeometry.PLANE}>Plane</option>
                  <option value={MediaGeometry.SPHERE}>Sphere</option>
                  <option value={MediaGeometry.TORUS}>Torus</option>
                  <option value={MediaGeometry.CUBE}>Cube</option>
                  <option value={MediaGeometry.CYLINDER}>Cylinder</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white/90">Auto Orbit</label>
                  <button
                    onClick={() => updateSetting('autoOrbit', !settings.autoOrbit)}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      settings.autoOrbit
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {settings.autoOrbit ? 'On' : 'Off'}
                  </button>
                </div>
                {settings.autoOrbit && (
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-sm text-white/70">Orbit Speed</label>
                      <span className="text-sm text-white/70">{settings.orbitSpeed.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="5"
                      step="0.1"
                      value={settings.orbitSpeed}
                      onChange={(e) => updateSetting('orbitSpeed', parseFloat(e.target.value))}
                      onClick={() => handleSliderClick('orbitSpeed', 'Orbit Speed', 0.1, 5)}
                      className={`w-full ${isLearning('orbitSpeed') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('orbitSpeed') ? 'ring-1 ring-blue-500' : ''}`}
                    />
                  </div>
                )}
              </div>
            </>
          )}

          {settings.renderMode === RenderMode.MODE_2D && (
            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">Effects Quality</label>
              <select
                value={settings.effectsQuality}
                onChange={(e) => updateSetting('effectsQuality', e.target.value as EffectsQuality)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:border-blue-500"
              >
                <option value={EffectsQuality.OFF}>Off</option>
                <option value={EffectsQuality.LOW}>Low (Fast)</option>
                <option value={EffectsQuality.HIGH}>High (Slow)</option>
              </select>
              <p className="text-xs text-white/50 mt-1">
                {settings.effectsQuality === EffectsQuality.HIGH && 'Per-pixel processing - RGB Split, Glitch, Displacement work fully'}
                {settings.effectsQuality === EffectsQuality.LOW && 'Canvas transforms only - Zoom/Pulse, Brightness, Contrast work'}
                {settings.effectsQuality === EffectsQuality.OFF && 'No effects applied'}
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-white/20">
            <h4 className="text-sm font-semibold mb-3 text-white/90">Effects</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Intensity</label>
                  <span className="text-sm text-white/70">{settings.intensity.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.01"
                  value={settings.intensity}
                  onChange={(e) => updateSetting('intensity', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('intensity', 'Intensity', 0, 2)}
                  className={`w-full ${isLearning('intensity') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('intensity') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Brightness</label>
                  <span className="text-sm text-white/70">{settings.brightness.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.brightness}
                  onChange={(e) => updateSetting('brightness', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('brightness', 'Brightness', 0, 1)}
                  className={`w-full ${isLearning('brightness') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('brightness') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Contrast</label>
                  <span className="text-sm text-white/70">{settings.contrast.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.contrast}
                  onChange={(e) => updateSetting('contrast', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('contrast', 'Contrast', 0, 1)}
                  className={`w-full ${isLearning('contrast') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('contrast') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">RGB Split</label>
                  <span className="text-sm text-white/70">{settings.rgbSplit.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.rgbSplit}
                  onChange={(e) => updateSetting('rgbSplit', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('rgbSplit', 'RGB Split', 0, 1)}
                  className={`w-full ${isLearning('rgbSplit') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('rgbSplit') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Glitch</label>
                  <span className="text-sm text-white/70">{settings.glitch.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.glitch}
                  onChange={(e) => updateSetting('glitch', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('glitch', 'Glitch', 0, 1)}
                  className={`w-full ${isLearning('glitch') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('glitch') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Zoom/Pulse</label>
                  <span className="text-sm text-white/70">{settings.zoomPulse.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.zoomPulse}
                  onChange={(e) => updateSetting('zoomPulse', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('zoomPulse', 'Zoom/Pulse', 0, 1)}
                  className={`w-full ${isLearning('zoomPulse') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('zoomPulse') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Displacement</label>
                  <span className="text-sm text-white/70">{settings.displacement.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.displacement}
                  onChange={(e) => updateSetting('displacement', parseFloat(e.target.value))}
                  onClick={() => handleSliderClick('displacement', 'Displacement', 0, 1)}
                  className={`w-full ${isLearning('displacement') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('displacement') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              {settings.renderMode === RenderMode.MODE_3D && (
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm text-white/70">Geometry Displacement</label>
                    <span className="text-sm text-white/70">{settings.geometryDisplacement.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={settings.geometryDisplacement}
                    onChange={(e) => updateSetting('geometryDisplacement', parseFloat(e.target.value))}
                    onClick={() => handleSliderClick('geometryDisplacement', 'Geometry Displacement', 0, 1)}
                    className={`w-full ${isLearning('geometryDisplacement') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('geometryDisplacement') ? 'ring-1 ring-blue-500' : ''}`}
                  />
                  <p className="text-xs text-white/50 mt-1">
                    Audio-reactive vertex deformation
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <h4 className="text-sm font-semibold mb-3 text-white/90">Audio Analysis</h4>
            <div className="space-y-3 text-xs mb-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Energy</span>
                  <span className="font-mono text-white/70">{audioFeatures.energy.toFixed(2)}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all"
                    style={{ width: `${audioFeatures.energy * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Bass</span>
                  <span className="font-mono text-white/70">{audioFeatures.bass.toFixed(2)}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                    style={{ width: `${audioFeatures.bass * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Mids</span>
                  <span className="font-mono text-white/70">{audioFeatures.mids.toFixed(2)}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all"
                    style={{ width: `${audioFeatures.mids * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Highs</span>
                  <span className="font-mono text-white/70">{audioFeatures.highs.toFixed(2)}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all"
                    style={{ width: `${audioFeatures.highs * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Smoothing</label>
                  <span className="text-sm text-white/70">{audioSettings.smoothing.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.95"
                  step="0.05"
                  value={audioSettings.smoothing}
                  onChange={(e) =>
                    onAudioSettingsChange({
                      ...audioSettings,
                      smoothing: parseFloat(e.target.value)
                    })
                  }
                  onClick={() => handleSliderClick('audioSmoothing', 'Audio Smoothing', 0, 0.95)}
                  className={`w-full ${isLearning('audioSmoothing') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('audioSmoothing') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Sensitivity</label>
                  <span className="text-sm text-white/70">{audioSettings.sensitivity.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={audioSettings.sensitivity}
                  onChange={(e) =>
                    onAudioSettingsChange({
                      ...audioSettings,
                      sensitivity: parseFloat(e.target.value)
                    })
                  }
                  onClick={() => handleSliderClick('audioSensitivity', 'Audio Sensitivity', 0.5, 3)}
                  className={`w-full ${isLearning('audioSensitivity') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('audioSensitivity') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Peak Threshold</label>
                  <span className="text-sm text-white/70">{audioSettings.peakThreshold.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.8"
                  step="0.05"
                  value={audioSettings.peakThreshold}
                  onChange={(e) =>
                    onAudioSettingsChange({
                      ...audioSettings,
                      peakThreshold: parseFloat(e.target.value)
                    })
                  }
                  onClick={() => handleSliderClick('peakThreshold', 'Peak Threshold', 0.1, 0.8)}
                  className={`w-full ${isLearning('peakThreshold') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('peakThreshold') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm text-white/70">Peak Cooldown</label>
                  <span className="text-sm text-white/70">{audioSettings.peakCooldown}ms</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="50"
                  value={audioSettings.peakCooldown}
                  onChange={(e) =>
                    onAudioSettingsChange({
                      ...audioSettings,
                      peakCooldown: parseFloat(e.target.value)
                    })
                  }
                  onClick={() => handleSliderClick('peakCooldown', 'Peak Cooldown', 50, 500)}
                  className={`w-full ${isLearning('peakCooldown') ? 'ring-2 ring-yellow-500' : ''} ${hasMapping('peakCooldown') ? 'ring-1 ring-blue-500' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
