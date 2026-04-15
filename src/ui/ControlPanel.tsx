import { ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import {
  GeometryType,
  RenderStyle,
  DetailLevel,
  MeshSettings,
  GlobalSettings,
  ParticleSettings,
  ParticleQuality,
  defaultParticleSettings
} from '../types/scene';
import { AudioSettings, AudioFeatures } from '../types/audio';
import { Preset } from '../types/preset';
import { MIDIState } from '../types/midi';
import { PresetPanel } from './PresetPanel';
import { MIDIPanel } from './MIDIPanel';

interface ControlPanelProps {
  meshSettings: MeshSettings;
  audioSettings: AudioSettings;
  globalSettings: GlobalSettings;
  particleSettings: ParticleSettings;
  audioFeatures: AudioFeatures;
  midiState: MIDIState;
  onMeshSettingsChange: (settings: MeshSettings) => void;
  onAudioSettingsChange: (settings: AudioSettings) => void;
  onGlobalSettingsChange: (settings: GlobalSettings) => void;
  onParticleSettingsChange: (settings: ParticleSettings) => void;
  onHelpClick: () => void;
  onReset: () => void;
  onLoadPreset: (preset: Preset) => void;
  onMIDIEnableChange: (enabled: boolean) => void;
  onMIDIDeviceChange: (deviceId: string | null) => void;
  onMIDISmoothingChange: (smoothing: number) => void;
  onMIDILearnModeChange: (enabled: boolean) => void;
  onMIDIRemoveMapping: (parameterId: string) => void;
  onMIDIClearMappings: () => void;
  onParameterClick?: (parameterId: string, parameterName: string, min: number, max: number, isToggle?: boolean) => void;
}

export function ControlPanel({
  meshSettings,
  audioSettings,
  globalSettings,
  particleSettings,
  audioFeatures,
  midiState,
  onMeshSettingsChange,
  onAudioSettingsChange,
  onGlobalSettingsChange,
  onParticleSettingsChange,
  onHelpClick,
  onReset,
  onLoadPreset,
  onMIDIEnableChange,
  onMIDIDeviceChange,
  onMIDISmoothingChange,
  onMIDILearnModeChange,
  onMIDIRemoveMapping,
  onMIDIClearMappings,
  onParameterClick
}: ControlPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAudioDebug, setShowAudioDebug] = useState(true);

  const isParticleMode = meshSettings.renderStyle === RenderStyle.PARTICLES;

  const getStepSize = (smoothing: number): number => {
    return 0.1 - (smoothing - 0.05) * 0.2;
  };

  const stepSize = getStepSize(globalSettings.parameterSmoothing);

  const handleSliderClick = (parameterId: string, parameterName: string, min: number, max: number) => {
    if (midiState.settings.learnMode && onParameterClick) {
      onParameterClick(parameterId, parameterName, min, max);
    }
  };

  const handleToggleClick = (parameterId: string, parameterName: string) => {
    if (midiState.settings.learnMode && onParameterClick) {
      onParameterClick(parameterId, parameterName, 0, 1, true);
    }
  };

  const isLearning = (id: string) =>
    midiState.settings.learnMode && midiState.learningParameterId === id
      ? 'ring-2 ring-green-500'
      : '';

  return (
    <div className={`fixed top-16 right-0 bottom-0 bg-black/80 backdrop-blur-md border-l border-white/10 transition-transform duration-300 ${isExpanded ? 'translate-x-0' : 'translate-x-full'} w-96 overflow-y-auto`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -left-10 top-4 p-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-l-lg hover:bg-white/10 transition-colors"
      >
        {isExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Controls</h2>
          <button onClick={onHelpClick} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>

        {/* Presets */}
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <PresetPanel
            onLoadPreset={onLoadPreset}
            getCurrentPresetData={() => ({ name: '', meshSettings, audioSettings, globalSettings })}
          />
        </div>

        {/* MIDI */}
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
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

        {/* Audio Analysis */}
        {showAudioDebug && (
          <div className="space-y-3 bg-white/5 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Audio Analysis</h3>
              <button onClick={() => setShowAudioDebug(false)} className="text-xs text-white/50 hover:text-white/80">
                Hide
              </button>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Energy', value: audioFeatures.energy, color: 'from-blue-500 to-cyan-500' },
                { label: 'Sub',    value: audioFeatures.sub,    color: 'bg-red-500' },
                { label: 'Bass',   value: audioFeatures.bass,   color: 'bg-orange-500' },
                { label: 'Mids',   value: audioFeatures.mids,   color: 'bg-yellow-500' },
                { label: 'Highs',  value: audioFeatures.highs,  color: 'bg-cyan-500' },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/70">{label}</span>
                    <span className="font-mono">{value.toFixed(2)}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${color.startsWith('from') ? `bg-gradient-to-r ${color}` : color}`} style={{ width: `${value * 100}%` }} />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-white/70">Peak Trigger</span>
                <div className={`w-3 h-3 rounded-full ${audioFeatures.peakTrigger ? 'bg-green-500' : 'bg-white/20'}`} />
              </div>
            </div>
          </div>
        )}
        {!showAudioDebug && (
          <button onClick={() => setShowAudioDebug(true)} className="text-sm text-white/50 hover:text-white/80">
            Show Audio Analysis
          </button>
        )}

        {/* ── Reactive Mesh ── */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-white/10 pb-2">Reactive Mesh</h3>

          {/* Geometry — hidden in particle mode */}
          {!isParticleMode && (
            <div>
              <label className="block text-sm font-medium mb-2">Geometry</label>
              <select
                value={meshSettings.geometryType}
                onChange={(e) => onMeshSettingsChange({ ...meshSettings, geometryType: e.target.value as GeometryType })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value={GeometryType.PLANE}>Plane</option>
                <option value={GeometryType.SPHERE}>Sphere</option>
                <option value={GeometryType.ICOSPHERE}>Icosphere</option>
                <option value={GeometryType.TORUS}>Torus</option>
                <option value={GeometryType.CUBE}>Cube</option>
                <option value={GeometryType.CYLINDER}>Cylinder</option>
              </select>
            </div>
          )}

          {/* Detail Level — hidden in particle mode */}
          {!isParticleMode && (
            <div>
              <label className="block text-sm font-medium mb-2">Detail Level</label>
              <select
                value={meshSettings.detailLevel}
                onChange={(e) => onMeshSettingsChange({ ...meshSettings, detailLevel: e.target.value as DetailLevel })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value={DetailLevel.LOW}>Low</option>
                <option value={DetailLevel.MEDIUM}>Medium</option>
                <option value={DetailLevel.HIGH}>High</option>
              </select>
            </div>
          )}

          {/* Render Style */}
          <div>
            <label className="block text-sm font-medium mb-2">Render Style</label>
            <select
              value={meshSettings.renderStyle}
              onChange={(e) => onMeshSettingsChange({ ...meshSettings, renderStyle: e.target.value as RenderStyle })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value={RenderStyle.WIREFRAME}>Wireframe</option>
              <option value={RenderStyle.POINTS}>Points</option>
              <option value={RenderStyle.PARTICLES}>Particles</option>
            </select>
          </div>

          {/* Base Color — hidden in particle mode (particles have their own colors) */}
          {!isParticleMode && (
            <div>
              <label className="block text-sm font-medium mb-2">Base Color</label>
              <input
                type="color"
                value={meshSettings.baseColor}
                onChange={(e) => onMeshSettingsChange({ ...meshSettings, baseColor: e.target.value })}
                className="w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {/* Points controls */}
          {meshSettings.renderStyle === RenderStyle.POINTS && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Point Size: {meshSettings.pointSize.toFixed(2)}</label>
                <input type="range" min="0.1" max="3" step={stepSize} value={meshSettings.pointSize}
                  onChange={(e) => onMeshSettingsChange({ ...meshSettings, pointSize: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('pointSize', 'Point Size', 0.1, 3)}
                  className={`w-full ${isLearning('pointSize')}`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Point Density: {(meshSettings.pointDensity * 100).toFixed(0)}%</label>
                <input type="range" min="0.1" max="1" step={stepSize} value={meshSettings.pointDensity}
                  onChange={(e) => onMeshSettingsChange({ ...meshSettings, pointDensity: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('pointDensity', 'Point Density', 0.1, 1)}
                  className={`w-full ${isLearning('pointDensity')}`} />
              </div>
            </>
          )}

          {/* Mesh displacement/noise — hidden in particle mode */}
          {!isParticleMode && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Displacement: {meshSettings.displacement.toFixed(2)}</label>
                <input type="range" min="0" max="2" step={stepSize} value={meshSettings.displacement}
                  onChange={(e) => onMeshSettingsChange({ ...meshSettings, displacement: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('displacement', 'Displacement', 0, 2)}
                  className={`w-full ${isLearning('displacement')}`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Noise Scale: {meshSettings.noiseScale.toFixed(2)}</label>
                <input type="range" min="0.5" max="5" step={stepSize} value={meshSettings.noiseScale}
                  onChange={(e) => onMeshSettingsChange({ ...meshSettings, noiseScale: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('noiseScale', 'Noise Scale', 0.5, 5)}
                  className={`w-full ${isLearning('noiseScale')}`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Noise Speed: {meshSettings.noiseSpeed.toFixed(2)}</label>
                <input type="range" min="0.1" max="2" step={stepSize} value={meshSettings.noiseSpeed}
                  onChange={(e) => onMeshSettingsChange({ ...meshSettings, noiseSpeed: parseFloat(e.target.value) })}
                  onClick={() => handleSliderClick('noiseSpeed', 'Noise Speed', 0.1, 2)}
                  className={`w-full ${isLearning('noiseSpeed')}`} />
              </div>

              {/* Band Mapping */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <h4 className="text-sm font-semibold">Band Mapping</h4>
                {[
                  { key: 'subWeight',  label: 'Sub',  value: meshSettings.subWeight },
                  { key: 'bassWeight', label: 'Bass', value: meshSettings.bassWeight },
                  { key: 'midsWeight', label: 'Mids', value: meshSettings.midsWeight },
                  { key: 'highsWeight',label: 'Highs',value: meshSettings.highsWeight },
                ].map(({ key, label, value }) => (
                  <div key={key}>
                    <label className="block text-xs text-white/70 mb-1">{label}: {value.toFixed(2)}</label>
                    <input type="range" min="0" max="1" step="0.1" value={value}
                      onChange={(e) => onMeshSettingsChange({ ...meshSettings, [key]: parseFloat(e.target.value) })}
                      onClick={() => handleSliderClick(key, `${label} Band`, 0, 1)}
                      className={`w-full ${isLearning(key)}`} />
                  </div>
                ))}
              </div>

              <div
                className={`flex items-center gap-2 p-2 rounded ${isLearning('pulseOnPeak')}`}
                onClick={() => handleToggleClick('pulseOnPeak', 'Pulse on Peak')}
              >
                <input type="checkbox" id="pulseOnPeak" checked={meshSettings.pulseOnPeak}
                  onChange={(e) => onMeshSettingsChange({ ...meshSettings, pulseOnPeak: e.target.checked })}
                  className="w-4 h-4" />
                <label htmlFor="pulseOnPeak" className="text-sm cursor-pointer">Pulse on Peak</label>
              </div>
            </>
          )}
        </div>

        {/* ── Particle System Controls ── */}
        {isParticleMode && (
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-lg font-semibold">Particle System</h3>

            {/* Quality */}
            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <select
                value={particleSettings.quality}
                onChange={(e) => onParticleSettingsChange({ ...particleSettings, quality: e.target.value as ParticleQuality })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value={ParticleQuality.LOW}>Low (18k particles)</option>
                <option value={ParticleQuality.MEDIUM}>Medium (42k particles)</option>
                <option value={ParticleQuality.HIGH}>High (80k particles)</option>
              </select>
            </div>

            {/* Field Size */}
            <div>
              <label className="block text-sm font-medium mb-2">Field Size: {particleSettings.fieldSize.toFixed(0)}</label>
              <input type="range" min="5" max="50" step="1" value={particleSettings.fieldSize}
                onChange={(e) => onParticleSettingsChange({ ...particleSettings, fieldSize: parseFloat(e.target.value) })}
                className="w-full" />
            </div>

            {/* Core Layer */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/80">✦ Core Layer</h4>

              <div>
                <label className="block text-sm font-medium mb-2">Core Color</label>
                <input type="color" value={particleSettings.coreColor}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, coreColor: e.target.value })}
                  className="w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Core Size: {particleSettings.coreSize.toFixed(1)}</label>
                <input type="range" min="0.5" max="8" step="0.1" value={particleSettings.coreSize}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, coreSize: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Core Brightness: {particleSettings.coreBrightness.toFixed(1)}</label>
                <input type="range" min="0.5" max="4" step="0.1" value={particleSettings.coreBrightness}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, coreBrightness: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>
            </div>

            {/* Outer Layer */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/80">◎ Outer Layer</h4>

              <div>
                <label className="block text-sm font-medium mb-2">Outer Color</label>
                <input type="color" value={particleSettings.outerColor}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, outerColor: e.target.value })}
                  className="w-full h-10 bg-white/5 border border-white/10 rounded-lg cursor-pointer" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Outer Size: {particleSettings.outerSize.toFixed(1)}</label>
                <input type="range" min="2" max="20" step="0.5" value={particleSettings.outerSize}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, outerSize: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Outer Opacity: {particleSettings.outerOpacity.toFixed(2)}</label>
                <input type="range" min="0.01" max="0.8" step="0.01" value={particleSettings.outerOpacity}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, outerOpacity: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>
            </div>

            {/* Motion */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/80">↯ Motion</h4>

              <div>
                <label className="block text-sm font-medium mb-2">Turbulence: {particleSettings.turbulence.toFixed(1)}</label>
                <input type="range" min="0" max="5" step="0.1" value={particleSettings.turbulence}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, turbulence: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Noise Speed: {particleSettings.noiseSpeed.toFixed(2)}</label>
                <input type="range" min="0.01" max="1" step="0.01" value={particleSettings.noiseSpeed}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, noiseSpeed: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>
            </div>

            {/* Audio Reactivity */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/80">♫ Audio Reactivity</h4>

              <div>
                <label className="block text-sm font-medium mb-2">Bass Reactivity: {particleSettings.bassReactivity.toFixed(1)}</label>
                <input type="range" min="0" max="3" step="0.1" value={particleSettings.bassReactivity}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, bassReactivity: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Highs Reactivity: {particleSettings.highsReactivity.toFixed(1)}</label>
                <input type="range" min="0" max="3" step="0.1" value={particleSettings.highsReactivity}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, highsReactivity: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Energy Reactivity: {particleSettings.energyReactivity.toFixed(1)}</label>
                <input type="range" min="0" max="3" step="0.1" value={particleSettings.energyReactivity}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, energyReactivity: parseFloat(e.target.value) })}
                  className="w-full" />
              </div>

              <div className="flex items-center gap-2 p-2 rounded">
                <input type="checkbox" id="particlePeakBurst" checked={particleSettings.peakBurst}
                  onChange={(e) => onParticleSettingsChange({ ...particleSettings, peakBurst: e.target.checked })}
                  className="w-4 h-4" />
                <label htmlFor="particlePeakBurst" className="text-sm cursor-pointer">Peak Burst</label>
              </div>
            </div>

            {/* Reset particles */}
            <button
              onClick={() => onParticleSettingsChange(defaultParticleSettings)}
              className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
            >
              Reset Particle Defaults
            </button>
          </div>
        )}

        {/* Audio Analysis Settings */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h3 className="text-lg font-semibold">Audio Analysis</h3>

          {[
            { key: 'smoothing',      label: 'Smoothing',      min: 0,    max: 0.95, step: 0.05, id: 'audioSmoothing' },
            { key: 'sensitivity',    label: 'Sensitivity',    min: 0.5,  max: 3,    step: 0.1,  id: 'audioSensitivity' },
            { key: 'peakThreshold',  label: 'Peak Threshold', min: 0.1,  max: 0.8,  step: 0.05, id: 'peakThreshold' },
            { key: 'peakCooldown',   label: 'Peak Cooldown',  min: 50,   max: 500,  step: 50,   id: 'peakCooldown', suffix: 'ms' },
          ].map(({ key, label, min, max, step, id, suffix }) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-2">
                {label}: {(audioSettings as any)[key].toFixed(key === 'peakCooldown' ? 0 : 2)}{suffix ?? ''}
              </label>
              <input type="range" min={min} max={max} step={step} value={(audioSettings as any)[key]}
                onChange={(e) => onAudioSettingsChange({ ...audioSettings, [key]: parseFloat(e.target.value) })}
                onClick={() => handleSliderClick(id, label, min, max)}
                className={`w-full ${isLearning(id)}`} />
            </div>
          ))}
        </div>

        {/* Global Settings */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h3 className="text-lg font-semibold">Global Settings</h3>

          <div className={`flex items-center gap-2 p-2 rounded ${isLearning('autoOrbit')}`}
            onClick={() => handleToggleClick('autoOrbit', 'Auto Orbit')}>
            <input type="checkbox" id="autoOrbit" checked={globalSettings.autoOrbit}
              onChange={(e) => onGlobalSettingsChange({ ...globalSettings, autoOrbit: e.target.checked })}
              className="w-4 h-4" />
            <label htmlFor="autoOrbit" className="text-sm cursor-pointer">Auto Orbit</label>
          </div>

          {globalSettings.autoOrbit && (
            <div>
              <label className="block text-sm font-medium mb-2">Orbit Speed: {globalSettings.orbitSpeed.toFixed(2)}</label>
              <input type="range" min="0.1" max="2" step={stepSize} value={globalSettings.orbitSpeed}
                onChange={(e) => onGlobalSettingsChange({ ...globalSettings, orbitSpeed: parseFloat(e.target.value) })}
                onClick={() => handleSliderClick('orbitSpeed', 'Orbit Speed', 0.1, 2)}
                className={`w-full ${isLearning('orbitSpeed')}`} />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Parameter Smoothing: {globalSettings.parameterSmoothing.toFixed(2)}</label>
            <input type="range" min="0.05" max="0.5" step="0.05" value={globalSettings.parameterSmoothing}
              onChange={(e) => onGlobalSettingsChange({ ...globalSettings, parameterSmoothing: parseFloat(e.target.value) })}
              className="w-full" />
            <p className="text-xs text-white/50 mt-1">Controls smoothness of all parameter changes</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="bloom" checked={globalSettings.bloom}
              onChange={(e) => onGlobalSettingsChange({ ...globalSettings, bloom: e.target.checked })}
              className="w-4 h-4" />
            <label htmlFor="bloom" className="text-sm text-white">Bloom Effect</label>
          </div>

          {globalSettings.bloom && (
            <>
              {[
                { key: 'bloomStrength',  label: 'Bloom Strength',  min: 0, max: 3,   step: 0.1  },
                { key: 'bloomRadius',    label: 'Bloom Radius',    min: 0, max: 1,   step: 0.05 },
                { key: 'bloomThreshold', label: 'Bloom Threshold', min: 0, max: 1,   step: 0.05 },
              ].map(({ key, label, min, max, step }) => (
                <div key={key}>
                  <label className="text-xs text-white/70 flex justify-between">
                    <span>{label}</span>
                    <span>{(globalSettings as any)[key].toFixed(2)}</span>
                  </label>
                  <input type="range" min={min} max={max} step={step} value={(globalSettings as any)[key]}
                    onChange={(e) => onGlobalSettingsChange({ ...globalSettings, [key]: parseFloat(e.target.value) })}
                    className="w-full" />
                </div>
              ))}
            </>
          )}
        </div>

        <button onClick={onReset} className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
