// src/ui/GeometryControls.tsx
import { Layers, Plus, Trash2, Eye, EyeOff } from 'lucide-react'
import {
  GeometrySettings,
  GeometryLayer,
  GeometryType,
  ColorPalette,
  AudioBand,
  geometryTypeInfo,
  defaultGeometryLayer
} from '../types/geometry'

interface GeometryControlsProps {
  settings: GeometrySettings
  onSettingsChange: (settings: GeometrySettings) => void
  selectedLayerId: string | null
  onLayerSelect: (id: string | null) => void
}

export function GeometryControls({
  settings,
  onSettingsChange,
  selectedLayerId,
  onLayerSelect
}: GeometryControlsProps) {
  const selectedLayer = settings.layers.find(l => l.id === selectedLayerId)

  const addLayer = () => {
    const newLayer: GeometryLayer = {
      id: `layer-${Date.now()}`,
      ...defaultGeometryLayer,
      rotationSpeed: (Math.random() > 0.5 ? 1 : -1) * (0.1 + Math.random() * 0.3),
      colorOverride: null
    }
    onSettingsChange({ ...settings, layers: [...settings.layers, newLayer] })
    onLayerSelect(newLayer.id)
  }

  const removeLayer = (id: string) => {
    onSettingsChange({ ...settings, layers: settings.layers.filter(l => l.id !== id) })
    if (selectedLayerId === id) onLayerSelect(null)
  }

  const toggleVisibility = (id: string) => {
    onSettingsChange({
      ...settings,
      layers: settings.layers.map(l => l.id === id ? { ...l, visible: !l.visible } : l)
    })
  }

  const updateLayer = (id: string, updates: Partial<GeometryLayer>) => {
    onSettingsChange({
      ...settings,
      layers: settings.layers.map(l => l.id === id ? { ...l, ...updates } : l)
    })
  }

  const set = <K extends keyof GeometrySettings>(key: K, value: GeometrySettings[K]) => {
    onSettingsChange({ ...settings, [key]: value })
  }

  const geometryTypes: { value: GeometryType; label: string }[] = [
    { value: 'girih-star-6',  label: '6-Point Star' },
    { value: 'girih-star-8',  label: '8-Point Star' },
    { value: 'girih-star-10', label: '10-Point Star' },
    { value: 'girih-star-12', label: '12-Point Star' },
    { value: 'zellij-field',  label: 'Zellij Field' },
    { value: 'arabesque',     label: 'Arabesque' },
    { value: 'muqarnas',      label: 'Muqarnas' },
    { value: 'khatam',        label: 'Khatam' },
    { value: 'rosette',       label: 'Rosette' }
  ]

  const audioBands: { value: AudioBand; label: string }[] = [
    { value: 'bass',   label: 'Bass' },
    { value: 'mids',   label: 'Mids' },
    { value: 'highs',  label: 'Highs' },
    { value: 'energy', label: 'Energy' },
    { value: 'sub',    label: 'Sub' }
  ]

  const palettes: { value: ColorPalette; label: string }[] = [
    { value: 'neon-souk', label: 'Neon Souk' },
    { value: 'zellige',   label: 'Zellige' },
    { value: 'alhambra',  label: 'Alhambra' },
    { value: 'hammam',    label: 'Hammam' },
    { value: 'fire',      label: 'Fire' },
    { value: 'midnight',  label: 'Midnight' },
    { value: 'custom',    label: 'Custom' }
  ]

  const sl = (label: string, key: keyof GeometrySettings, min: number, max: number, step = 0.05) => (
    <div key={key}>
      <label className="text-xs text-gray-400">
        {label}: {typeof settings[key] === 'number' ? (settings[key] as number).toFixed(2) : settings[key]}
      </label>
      <input
        type="range" min={min} max={max} step={step}
        value={settings[key] as number}
        onChange={e => set(key, parseFloat(e.target.value) as GeometrySettings[typeof key])}
        className="w-full mt-1"
      />
    </div>
  )

  const layerSlider = (
    label: string,
    key: keyof GeometryLayer,
    min: number, max: number, step = 0.05,
    layer: GeometryLayer
  ) => (
    <div key={key}>
      <label className="text-xs text-gray-400">
        {label}: {typeof layer[key] === 'number' ? (layer[key] as number).toFixed(2) : layer[key]}
      </label>
      <input
        type="range" min={min} max={max} step={step}
        value={layer[key] as number}
        onChange={e => updateLayer(layer.id, { [key]: parseFloat(e.target.value) })}
        className="w-full mt-1"
      />
    </div>
  )

  return (
    <div className="space-y-5 text-white">

      {/* ── Layer list ── */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <h3 className="text-sm font-medium">Geometry Layers</h3>
          </div>
          <button
            onClick={addLayer}
            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add Layer
          </button>
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto">
          {settings.layers.map(layer => (
            <div
              key={layer.id}
              onClick={() => onLayerSelect(layer.id)}
              className={`p-2 rounded cursor-pointer transition-colors ${
                selectedLayerId === layer.id
                  ? 'bg-blue-600/30 border border-blue-500'
                  : 'bg-gray-700/50 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <button onClick={e => { e.stopPropagation(); toggleVisibility(layer.id) }}
                    className="p-1 hover:bg-gray-600 rounded">
                    {layer.visible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3 opacity-50" />}
                  </button>
                  <div className="w-4 h-4 rounded border border-gray-600"
                    style={{ backgroundColor: layer.colorOverride ?? '#00d4ff' }} />
                  <span className="text-xs">{geometryTypeInfo[layer.geometryType].name}</span>
                  <span className="text-xs text-gray-500">· {layer.audioBand}</span>
                </div>
                <button
                  onClick={e => { e.stopPropagation(); removeLayer(layer.id) }}
                  className="p-1 hover:bg-red-600 rounded"
                  disabled={settings.layers.length === 1}
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Selected layer controls ── */}
      {selectedLayer && (
        <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
          <h3 className="text-sm font-medium">Layer Settings</h3>
          <p className="text-xs text-gray-500 -mt-2">
            {geometryTypeInfo[selectedLayer.geometryType].description}
          </p>

          {/* Geometry type */}
          <div>
            <label className="text-xs text-gray-400">Geometry Type</label>
            <select
              value={selectedLayer.geometryType}
              onChange={e => updateLayer(selectedLayer.id, { geometryType: e.target.value as GeometryType })}
              className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
            >
              {geometryTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          {/* Audio band */}
          <div>
            <label className="text-xs text-gray-400">Audio Band</label>
            <select
              value={selectedLayer.audioBand}
              onChange={e => updateLayer(selectedLayer.id, { audioBand: e.target.value as AudioBand })}
              className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
            >
              {audioBands.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
            </select>
          </div>

          {/* Color override */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-400">Color Override</label>
              <button
                onClick={() => updateLayer(selectedLayer.id, {
                  colorOverride: selectedLayer.colorOverride ? null : '#00d4ff'
                })}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                {selectedLayer.colorOverride ? 'Use Palette' : 'Override'}
              </button>
            </div>
            {selectedLayer.colorOverride && (
              <input type="color" value={selectedLayer.colorOverride}
                onChange={e => updateLayer(selectedLayer.id, { colorOverride: e.target.value })}
                className="w-full h-8 bg-gray-700 rounded mt-1" />
            )}
          </div>

          {layerSlider('Scale', 'scale', 0.1, 3, 0.05, selectedLayer)}
          {layerSlider('Opacity', 'opacity', 0, 1, 0.05, selectedLayer)}
          {layerSlider('Stroke Width', 'strokeWidth', 0.25, 5, 0.25, selectedLayer)}
          {layerSlider('Glow Intensity', 'glowIntensity', 0, 40, 1, selectedLayer)}
          {layerSlider('Reactivity', 'reactivity', 0, 2, 0.1, selectedLayer)}
          {layerSlider('Rotation Speed', 'rotationSpeed', -1, 1, 0.05, selectedLayer)}
          {layerSlider('Rotation Offset', 'rotationOffset', 0, 6.28, 0.05, selectedLayer)}

          <div>
            <label className="text-xs text-gray-400">Symmetry Folds</label>
            <select
              value={selectedLayer.symmetryFolds}
              onChange={e => updateLayer(selectedLayer.id, { symmetryFolds: parseInt(e.target.value) })}
              className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
            >
              {[4, 6, 8, 10, 12, 16].map(n => (
                <option key={n} value={n}>{n}-fold</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-xs text-gray-400">Growth Enabled</label>
            <input type="checkbox" checked={selectedLayer.growthEnabled}
              onChange={e => updateLayer(selectedLayer.id, { growthEnabled: e.target.checked })}
              className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* ── Global Settings ── */}
      <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-medium">Global Settings</h3>

        <div>
          <label className="text-xs text-gray-400">Background</label>
          <input type="color" value={settings.backgroundColor}
            onChange={e => set('backgroundColor', e.target.value)}
            className="w-full h-8 bg-gray-700 rounded mt-1" />
        </div>

        <div>
          <label className="text-xs text-gray-400">Colour Palette</label>
          <select value={settings.palette}
            onChange={e => set('palette', e.target.value as ColorPalette)}
            className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
          >
            {palettes.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
        </div>

        {settings.palette === 'custom' && (
          <div className="grid grid-cols-4 gap-2">
            {settings.customColors.map((c, i) => (
              <div key={i}>
                <label className="text-xs text-gray-500">{['Cold', 'Mid', 'Warm', 'Hot'][i]}</label>
                <input type="color" value={c}
                  onChange={e => {
                    const newColors = [...settings.customColors] as [string,string,string,string]
                    newColors[i] = e.target.value
                    set('customColors', newColors)
                  }}
                  className="w-full h-8 bg-gray-700 rounded mt-1" />
              </div>
            ))}
          </div>
        )}

        {sl('Rotation Speed', 'globalRotationSpeed', 0, 1)}
        {sl('Animation Speed', 'animationSpeed', 0.1, 3)}
        {sl('Trail Opacity', 'trailOpacity', 0, 0.3, 0.01)}

        <div>
          <label className="text-xs text-gray-400">Base Symmetry</label>
          <select value={settings.baseSymmetry}
            onChange={e => set('baseSymmetry', parseInt(e.target.value))}
            className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
          >
            {[4, 6, 8, 10, 12].map(n => (
              <option key={n} value={n}>{n}-fold</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Growth Mechanics ── */}
      <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Growth Mechanics</h3>
          <input type="checkbox" checked={settings.growthEnabled}
            onChange={e => set('growthEnabled', e.target.checked)}
            className="w-4 h-4" />
        </div>

        {settings.growthEnabled && (
          <>
            {sl('Growth Rate', 'growthRate', 0.05, 2, 0.05)}
            {sl('Max Rings', 'maxRings', 1, 8, 1)}
            {sl('Line Draw Speed', 'lineDrawSpeed', 0.1, 3, 0.1)}

            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-400">Symmetry Evolution</label>
              <input type="checkbox" checked={settings.symmetryEvolution}
                onChange={e => set('symmetryEvolution', e.target.checked)}
                className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-400">Zoom Reveal</label>
              <input type="checkbox" checked={settings.zoomReveal}
                onChange={e => set('zoomReveal', e.target.checked)}
                className="w-4 h-4" />
            </div>
          </>
        )}
      </div>

      {/* ── Audio Reactivity ── */}
      <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-medium">Audio Reactivity</h3>
        {sl('Bass', 'bassReactivity', 0, 2)}
        {sl('Energy', 'energyReactivity', 0, 2)}
        {sl('Highs', 'highsReactivity', 0, 2)}
        <div className="flex items-center justify-between">
          <label className="text-xs text-gray-400">Peak Pulse</label>
          <input type="checkbox" checked={settings.peakPulse}
            onChange={e => set('peakPulse', e.target.checked)}
            className="w-4 h-4" />
        </div>
      </div>

      {/* ── Bloom ── */}
      <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Bloom</h3>
          <input type="checkbox" checked={settings.bloom}
            onChange={e => set('bloom', e.target.checked)}
            className="w-4 h-4" />
        </div>
        {settings.bloom && (
          <>
            {sl('Strength', 'bloomStrength', 0, 3, 0.1)}
            {sl('Radius', 'bloomRadius', 0, 1, 0.05)}
            {sl('Threshold', 'bloomThreshold', 0, 1, 0.05)}
          </>
        )}
      </div>
    </div>
  )
}
