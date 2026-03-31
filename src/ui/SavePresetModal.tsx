import { X } from 'lucide-react';

interface SavePresetModalProps {
  presetName: string;
  onSave: () => void;
  onDiscard: () => void;
  onCancel: () => void;
}

export function SavePresetModal({
  presetName,
  onSave,
  onDiscard,
  onCancel
}: SavePresetModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg border border-white/10 shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold">Save Changes?</h2>
          <button
            onClick={onCancel}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-white/70 mb-4">
            You have modified the preset "{presetName}". Would you like to save your changes?
          </p>

          <div className="flex gap-3">
            <button
              onClick={onSave}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
            >
              Save Changes
            </button>
            <button
              onClick={onDiscard}
              className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              Don't Save
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
