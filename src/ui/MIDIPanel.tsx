import { Music2, Trash2, Circle, AlertCircle } from 'lucide-react';
import { MIDIDeviceInfo, MIDIMapping, MIDISettings } from '../types/midi';

interface MIDIPanelProps {
  isSupported: boolean;
  hasAccess: boolean;
  isInitializing: boolean;
  devices: MIDIDeviceInfo[];
  settings: MIDISettings;
  learningParameterId: string | null;
  lastActivity: number;
  onEnableChange: (enabled: boolean) => void;
  onDeviceChange: (deviceId: string | null) => void;
  onSmoothingChange: (smoothing: number) => void;
  onLearnModeChange: (enabled: boolean) => void;
  onRemoveMapping: (parameterId: string) => void;
  onClearMappings: () => void;
}

export function MIDIPanel({
  isSupported,
  hasAccess,
  isInitializing,
  devices,
  settings,
  learningParameterId,
  lastActivity,
  onEnableChange,
  onDeviceChange,
  onSmoothingChange,
  onLearnModeChange,
  onRemoveMapping,
  onClearMappings
}: MIDIPanelProps) {
  const isActive = Date.now() - lastActivity < 100;

  if (!isSupported) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <Music2 size={18} className="text-red-400" />
          <h3 className="text-sm font-semibold text-white">MIDI</h3>
        </div>
        <p className="text-sm text-red-400">Web MIDI API not supported in this browser</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <Music2 size={18} className="text-green-400" />
        <h3 className="text-sm font-semibold text-white">MIDI</h3>
        {isActive && (
          <Circle size={8} className="text-green-400 fill-green-400 animate-pulse" />
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="midiEnable"
          checked={settings.enabled}
          onChange={(e) => onEnableChange(e.target.checked)}
          className="w-4 h-4"
        />
        <label htmlFor="midiEnable" className="text-sm">
          Enable MIDI
        </label>
      </div>

      {settings.enabled && isInitializing && (
        <p className="text-sm text-blue-400">
          Requesting MIDI access...
        </p>
      )}

      {settings.enabled && !hasAccess && !isInitializing && (
        <p className="text-sm text-yellow-400">
          MIDI access denied. Please allow MIDI permissions in your browser.
        </p>
      )}

      {settings.enabled && hasAccess && (
        <>
          <div>
            <label className="block text-sm font-medium mb-2">Input Device</label>
            <select
              value={settings.selectedDeviceId || 'all'}
              onChange={(e) =>
                onDeviceChange(e.target.value === 'all' ? null : e.target.value)
              }
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-green-500 text-sm"
            >
              <option value="all">All Inputs</option>
              {devices.map((device) => (
                <option key={device.id} value={device.id}>
                  {device.name}
                </option>
              ))}
            </select>
            {devices.length === 0 && (
              <p className="text-xs text-white/50 mt-1">No MIDI devices detected</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              MIDI Smoothing: {settings.smoothing.toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="0.9"
              step="0.05"
              value={settings.smoothing}
              onChange={(e) => onSmoothingChange(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={async () => {
              console.clear();
              console.log('🧪 === MIDI DEBUG TEST STARTED ===');
              console.log('🎹 Devices from React state:', devices);
              console.log('⚙️ Settings:', settings);
              console.log('📊 Has Access:', hasAccess);
              console.log('🔧 Is Initializing:', isInitializing);

              // Direct browser API test
              try {
                console.log('🔍 Testing direct browser MIDI API...');
                const access = await navigator.requestMIDIAccess();
                console.log('✅ Got MIDI Access directly from browser');
                console.log('📊 Browser inputs.size:', access.inputs.size);

                let inputCount = 0;
                access.inputs.forEach((input) => {
                  inputCount++;
                  console.log(`🎹 Browser Input #${inputCount}:`, {
                    name: input.name,
                    id: input.id,
                    manufacturer: input.manufacturer,
                    state: input.state,
                    connection: input.connection
                  });

                  // Add raw listener
                  input.onmidimessage = (event) => {
                    console.log('🔴🔴🔴 DIRECT BROWSER MIDI EVENT!', {
                      device: input.name,
                      data: Array.from(event.data),
                      hex: Array.from(event.data).map(b => '0x' + b.toString(16).padStart(2, '0')).join(' ')
                    });
                  };
                });

                console.log('💡 NOW TURN ANY KNOB ON YOUR MIDI CONTROLLER!');
                console.log('🧪 === Waiting for MIDI input... ===');

                const deviceInfo = inputCount > 0
                  ? `Found ${inputCount} input(s) in browser`
                  : '❌ NO INPUTS IN BROWSER!';

                alert(
                  `MIDI Test Results:\n\n` +
                  `${deviceInfo}\n\n` +
                  `React State Says:\n` +
                  `- Devices: ${devices.length}\n` +
                  `- Has Access: ${hasAccess}\n` +
                  `- Selected: ${settings.selectedDeviceId || 'All Inputs'}\n\n` +
                  `Console cleared.\nNOW TURN A KNOB!\n\n` +
                  `Look for: "🔴🔴🔴 DIRECT BROWSER MIDI EVENT!"`
                );
              } catch (err) {
                console.error('❌ Browser MIDI API test failed:', err);
                alert(`ERROR: Cannot access MIDI!\n\n${err}`);
              }
            }}
            className="w-full px-3 py-2 bg-blue-600/50 hover:bg-blue-600/70 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <AlertCircle size={16} />
            Test MIDI Connection
          </button>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => onLearnModeChange(!settings.learnMode)}
              className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                settings.learnMode
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {settings.learnMode ? 'MIDI Learn: ON' : 'MIDI Learn: OFF'}
            </button>
            {settings.learnMode && learningParameterId && (
              <p className="text-xs text-green-400 mt-2 text-center">
                Move a MIDI knob to bind it...
              </p>
            )}
          </div>

          {settings.mappings.length > 0 && (
            <div className="pt-2 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold">Mappings</h4>
                <button
                  onClick={onClearMappings}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {settings.mappings.map((mapping) => (
                  <div
                    key={mapping.parameterId}
                    className="flex items-center justify-between p-2 bg-white/5 rounded text-xs group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-white truncate">{mapping.parameterName}</div>
                      <div className="text-white/50">CC {mapping.ccNumber}</div>
                    </div>
                    <button
                      onClick={() => onRemoveMapping(mapping.parameterId)}
                      className="p-1 hover:bg-red-600/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Remove mapping"
                    >
                      <Trash2 size={12} className="text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
