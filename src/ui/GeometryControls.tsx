import { Layers, Plus, Trash2, Eye, EyeOff, Info } from 'lucide-react';
import { GeometrySettings, GeometryLayer, GeometryType, RenderMode, ColorScheme, geometryInfo, colorSchemes } from '../types/geometry';

interface GeometryControlsProps {
  settings: GeometrySettings;
  onSettingsChange: (settings: GeometrySettings) => void;
  selectedLayerId: string | null;
  onLayerSelect: (layerId: string | null) => void;
}

export function GeometryControls({ settings, onSettingsChange, selectedLayerId, onLayerSelect }: GeometryControlsProps) {
  const selectedLayer = settings.layers.find(l => l.id === selectedLayerId);

  const addLayer = () => {
    const newLayer: GeometryLayer = {
      id: `layer-${Date.now()}`,
      geometryType: 'flower-of-life',
      visible: true,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: 1.0,
      color: '#00d4ff',
      opacity: 1.0,
      strokeWidth: 2.0,
      glowIntensity: 0.5,
      renderMode: 'wireframe',
      subdivisions: 3,
      audioReactive: true
    };

    onSettingsChange({
      ...settings,
      layers: [...settings.layers, newLayer]
    });
    onLayerSelect(newLayer.id);
  };

  const removeLayer = (layerId: string) => {
    onSettingsChange({
      ...settings,
      layers: settings.layers.filter(l => l.id !== layerId)
    });
    if (selectedLayerId === layerId) {
      onLayerSelect(null);
    }
  };

  const toggleLayerVisibility = (layerId: string) => {
    onSettingsChange({
      ...settings,
      layers: settings.layers.map(l =>
        l.id === layerId ? { ...l, visible: !l.visible } : l
      )
    });
  };

  const updateLayer = (layerId: string, updates: Partial<GeometryLayer>) => {
    onSettingsChange({
      ...settings,
      layers: settings.layers.map(l =>
        l.id === layerId ? { ...l, ...updates } : l
      )
    });
  };

  const updateGlobalSetting = <K extends keyof GeometrySettings>(
    key: K,
    value: GeometrySettings[K]
  ) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const geometryTypes: { value: GeometryType; label: string }[] = [
    { value: 'flower-of-life', label: 'Flower of Life' },
    { value: 'seed-of-life', label: 'Seed of Life' },
    { value: 'metatrons-cube', label: "Metatron's Cube" },
    { value: 'vesica-piscis', label: 'Vesica Piscis' },
    { value: 'golden-spiral', label: 'Golden Spiral' },
    { value: 'sri-yantra', label: 'Sri Yantra' },
    { value: 'tetrahedron', label: 'Tetrahedron' },
    { value: 'cube', label: 'Cube' },
    { value: 'octahedron', label: 'Octahedron' },
    { value: 'dodecahedron', label: 'Dodecahedron' },
    { value: 'icosahedron', label: 'Icosahedron' },
    { value: 'torus', label: 'Torus' },
    { value: 'merkaba', label: 'Merkaba' }
  ];

  return (
    <div className="space-y-6">
      {/* Layer Management */}
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
            <Plus className="w-3 h-3" />
            Add Layer
          </button>
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto">
          {settings.layers.map((layer, index) => (
            <div
              key={layer.id}
              className={`p-2 rounded cursor-pointer transition-colors ${
                selectedLayerId === layer.id
                  ? 'bg-blue-600/30 border border-blue-500'
                  : 'bg-gray-700/50 hover:bg-gray-700'
              }`}
              onClick={() => onLayerSelect(layer.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLayerVisibility(layer.id);
                    }}
                    className="p-1 hover:bg-gray-600 rounded"
                  >
                    {layer.visible ? (
                      <Eye className="w-3 h-3" />
                    ) : (
                      <EyeOff className="w-3 h-3 opacity-50" />
                    )}
                  </button>
                  <div
                    className="w-4 h-4 rounded border border-gray-600"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="text-xs">
                    {geometryInfo[layer.geometryType].name}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeLayer(layer.id);
                  }}
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

      {/* Selected Layer Controls */}
      {selectedLayer && (
        <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
          <h3 className="text-sm font-medium flex items-center gap-2">
            Layer Settings
            <div className="group relative">
              <Info className="w-3 h-3 opacity-50 hover:opacity-100 cursor-help" />
              <div className="absolute left-full ml-2 top-0 bg-gray-900 text-xs p-2 rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                {geometryInfo[selectedLayer.geometryType].description}
              </div>
            </div>
          </h3>

          <div>
            <label className="text-xs text-gray-400">Geometry Type</label>
            <select
              value={selectedLayer.geometryType}
              onChange={(e) => updateLayer(selectedLayer.id, { geometryType: e.target.value as GeometryType })}
              className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
            >
              {geometryTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-400">Render Mode</label>
            <select
              value={selectedLayer.renderMode}
              onChange={(e) => updateLayer(selectedLayer.id, { renderMode: e.target.value as RenderMode })}
              className="w-full bg-gray-700 rounded px-2 py-1 text-sm mt-1"
            >
              <option value="wireframe">Wireframe</option>
              <option value="solid">Solid</option>
              <option value="points">Points</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-400">Color</label>
            <input
              type="color"
              value={selectedLayer.color}
              onChange={(e) => updateLayer(selectedLayer.id, { color: e.target.value })}
              className="w-full h-8 bg-gray-700 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Scale: {selectedLayer.scale.toFixed(2)}</label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={selectedLayer.scale}
              onChange={(e) => updateLayer(selectedLayer.id, { scale: parseFloat(e.target.value) })}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Opacity: {selectedLayer.opacity.toFixed(2)}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={selectedLayer.opacity}
              onChange={(e) => updateLayer(selectedLayer.id, { opacity: parseFloat(e.target.value) })}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Stroke Width: {selectedLayer.strokeWidth.toFixed(1)}</label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.5"
              value={selectedLayer.strokeWidth}
              onChange={(e) => updateLayer(selectedLayer.id, { strokeWidth: parseFloat(e.target.value) })}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Glow Intensity: {selectedLayer.glowIntensity.toFixed(2)}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={selectedLayer.glowIntensity}
              onChange={(e) => updateLayer(selectedLayer.id, { glowIntensity: parseFloat(e.target.value) })}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Subdivisions: {selectedLayer.subdivisions}</label>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={selectedLayer.subdivisions}
              onChange={(e) => updateLayer(selectedLayer.id, { subdivisions: parseInt(e.target.value) })}
              className="w-full mt-1"
            />
          </div>

          <div className="pt-2 border-t border-gray-700">
            <label className="text-xs text-gray-400">Rotation X: {selectedLayer.rotation[0].toFixed(2)}</label>
            <input
              type="range"
              min="-3.14"
              max="3.14"
              step="0.01"
              value={selectedLayer.rotation[0]}
              onChange={(e) => updateLayer(selectedLayer.id, {
                rotation: [parseFloat(e.target.value), selectedLayer.rotation[1], selectedLayer.rotation[2]]
              })}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Rotation Y: {selectedLayer.rotation[1].toFixed(2)}</label>
            <input
              type="range"
              min="-3.14"
              max="3.14"
              step="0.01"
              value={selectedLayer.rotation[1]}
              onChange={(e) => updateLayer(selectedLayer.id, {
                rotation: [selectedLayer.rotation[0], parseFloat(e.target.value), selectedLayer.rotation[2]]
              })}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Rotation Z: {selectedLayer.rotation[2].toFixed(2)}</label>
            <input
              type="range"
              min="-3.14"
              max="3.14"
              step="0.01"
              value={selectedLayer.rotation[2]}
              onChange={(e) => updateLayer(selectedLayer.id, {
                rotation: [selectedLayer.rotation[0], selectedLayer.rotation[1], parseFloat(e.target.value)]
              })}
              className="w-full mt-1"
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-700">
            <label className="text-xs text-gray-400">Audio Reactive</label>
            <input
              type="checkbox"
              checked={selectedLayer.audioReactive}
              onChange={(e) => updateLayer(selectedLayer.id, { audioReactive: e.target.checked })}
              className="w-4 h-4"
            />
          </div>
        </div>
      )}

      {/* Global Settings */}
      <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-medium">Global Settings</h3>

        <div>
          <label className="text-xs text-gray-400">Background Color</label>
          <input
            type="color"
            value={settings.backgroundColor}
            onChange={(e) => updateGlobalSetting('backgroundColor', e.target.value)}
            className="w-full h-8 bg-gray-700 rounded mt-1"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">Rotation Speed: {settings.globalRotationSpeed.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={settings.globalRotationSpeed}
            onChange={(e) => updateGlobalSetting('globalRotationSpeed', parseFloat(e.target.value))}
            className="w-full mt-1"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">Animation Speed: {settings.animationSpeed.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={settings.animationSpeed}
            onChange={(e) => updateGlobalSetting('animationSpeed', parseFloat(e.target.value))}
            className="w-full mt-1"
          />
        </div>

        <div className="pt-2 border-t border-gray-700">
          <h4 className="text-xs font-medium mb-2">Audio Reactivity</h4>

          <div className="space-y-2">
            <div>
              <label className="text-xs text-gray-400">Bass: {settings.bassReactivity.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={settings.bassReactivity}
                onChange={(e) => updateGlobalSetting('bassReactivity', parseFloat(e.target.value))}
                className="w-full mt-1"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">Energy: {settings.energyReactivity.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={settings.energyReactivity}
                onChange={(e) => updateGlobalSetting('energyReactivity', parseFloat(e.target.value))}
                className="w-full mt-1"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">Highs: {settings.highsReactivity.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={settings.highsReactivity}
                onChange={(e) => updateGlobalSetting('highsReactivity', parseFloat(e.target.value))}
                className="w-full mt-1"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-400">Peak Pulse</label>
              <input
                type="checkbox"
                checked={settings.peakPulse}
                onChange={(e) => updateGlobalSetting('peakPulse', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-700">
          <h4 className="text-xs font-medium mb-2">Bloom Effect</h4>

          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-gray-400">Enabled</label>
            <input
              type="checkbox"
              checked={settings.bloom}
              onChange={(e) => updateGlobalSetting('bloom', e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          {settings.bloom && (
            <div className="space-y-2">
              <div>
                <label className="text-xs text-gray-400">Strength: {settings.bloomStrength.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  value={settings.bloomStrength}
                  onChange={(e) => updateGlobalSetting('bloomStrength', parseFloat(e.target.value))}
                  className="w-full mt-1"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Radius: {settings.bloomRadius.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={settings.bloomRadius}
                  onChange={(e) => updateGlobalSetting('bloomRadius', parseFloat(e.target.value))}
                  className="w-full mt-1"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Threshold: {settings.bloomThreshold.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={settings.bloomThreshold}
                  onChange={(e) => updateGlobalSetting('bloomThreshold', parseFloat(e.target.value))}
                  className="w-full mt-1"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
