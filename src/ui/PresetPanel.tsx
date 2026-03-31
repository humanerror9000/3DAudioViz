import { Save, Download, Trash2, Package } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Preset, PresetData } from '../types/preset';
import { loadPresets, savePreset, deletePreset, initializePresets } from '../utils/presetStorage';

interface PresetPanelProps {
  onLoadPreset: (preset: Preset) => void;
  getCurrentPresetData: () => PresetData;
}

export function PresetPanel({ onLoadPreset, getCurrentPresetData }: PresetPanelProps) {
  const [presets, setPresets] = useState<Preset[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [presetName, setPresetName] = useState('');

  useEffect(() => {
    initializePresets();
    refreshPresets();
  }, []);

  const refreshPresets = () => {
    setPresets(loadPresets());
  };

  const handleSaveClick = () => {
    setPresetName('');
    setShowSaveDialog(true);
  };

  const handleSavePreset = () => {
    if (!presetName.trim()) return;

    const presetData = getCurrentPresetData();
    savePreset({
      ...presetData,
      name: presetName.trim()
    });

    refreshPresets();
    setShowSaveDialog(false);
    setPresetName('');
  };

  const handleDeletePreset = (id: string) => {
    if (confirm('Delete this preset?')) {
      deletePreset(id);
      refreshPresets();
    }
  };

  const handleLoadPreset = (preset: Preset) => {
    onLoadPreset(preset);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <Package size={18} className="text-blue-400" />
        <h3 className="text-sm font-semibold text-white">Presets</h3>
      </div>

      <button
        onClick={handleSaveClick}
        className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
      >
        <Save size={16} />
        Save Current Preset
      </button>

      {showSaveDialog && (
        <div className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-2">
          <input
            type="text"
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSavePreset();
              if (e.key === 'Escape') setShowSaveDialog(false);
            }}
            placeholder="Preset name..."
            className="w-full px-2 py-1.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={handleSavePreset}
              disabled={!presetName.trim()}
              className="flex-1 px-2 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white rounded text-xs font-medium transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => setShowSaveDialog(false)}
              className="flex-1 px-2 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-1.5 max-h-64 overflow-y-auto">
        {presets.map((preset) => (
          <div
            key={preset.id}
            className="flex items-center gap-2 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors group"
          >
            <button
              onClick={() => handleLoadPreset(preset)}
              className="flex-1 flex items-center gap-2 text-left"
            >
              <Download size={14} className="text-blue-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{preset.name}</div>
                {preset.isBuiltIn && (
                  <div className="text-xs text-blue-400">Built-in</div>
                )}
              </div>
            </button>

            {!preset.isBuiltIn && (
              <button
                onClick={() => handleDeletePreset(preset.id)}
                className="p-1.5 hover:bg-red-600/20 rounded transition-colors opacity-0 group-hover:opacity-100"
                title="Delete preset"
              >
                <Trash2 size={14} className="text-red-400" />
              </button>
            )}
          </div>
        ))}

        {presets.length === 0 && (
          <div className="text-center py-4 text-white/40 text-sm">
            No presets saved yet
          </div>
        )}
      </div>
    </div>
  );
}
