import { X } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Audio Reactive 3D Visualizer</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">How to Use</h3>
            <ol className="list-decimal list-inside space-y-2 text-white/80">
              <li>Click the "Upload" button to load an audio file (MP3, WAV, AAC supported, up to ~7 minutes)</li>
              <li>Press Play to start the visualization</li>
              <li>Select a visualization mode: Reactive Mesh or Particles</li>
              <li>Adjust controls to customize the visual experience</li>
              <li>Use your mouse to orbit around the scene</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Visualization Modes</h3>
            <div className="space-y-3 text-white/80">
              <div>
                <strong className="text-white">Reactive Mesh:</strong> A 3D geometric shape that deforms and pulses in response to audio. Choose from different geometries, adjust displacement, and map audio bands to control the effect.
              </div>
              <div>
                <strong className="text-white">Particles:</strong> A volumetric particle field with GPU-driven motion. Particles move organically through 3D space and react to audio energy.
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Audio Analysis Parameters</h3>
            <div className="space-y-2 text-white/80">
              <div>
                <strong className="text-white">Smoothing (0.0-0.95):</strong> Higher values create smoother, slower transitions in the audio analysis
              </div>
              <div>
                <strong className="text-white">Sensitivity (0.5-3.0):</strong> Multiplier for all audio bands; increase for more dramatic reactions
              </div>
              <div>
                <strong className="text-white">Peak Threshold:</strong> Controls when bass peaks trigger special effects
              </div>
              <div>
                <strong className="text-white">Peak Cooldown:</strong> Minimum time between peak triggers (in milliseconds)
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Audio Bands</h3>
            <div className="space-y-2 text-white/80">
              <div><strong className="text-white">Sub (20-60Hz):</strong> Deep sub-bass frequencies</div>
              <div><strong className="text-white">Bass (60-250Hz):</strong> Bass and low-mid frequencies</div>
              <div><strong className="text-white">Mids (250-2000Hz):</strong> Mid-range frequencies (vocals, most instruments)</div>
              <div><strong className="text-white">Highs (2000-12000Hz):</strong> High frequencies (cymbals, hi-hats, brightness)</div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Tips for Best Results</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Try different geometries to find what works best with your audio</li>
              <li>Adjust band mapping weights to emphasize different frequency ranges</li>
              <li>Increase sensitivity for more dramatic reactions</li>
              <li>Enable "Pulse on Peak" or "Peak Burst" for extra visual impact on bass hits</li>
              <li>Use Auto Orbit to slowly rotate the camera for a dynamic view</li>
              <li>Electronic music with strong bass tends to produce the most dramatic effects</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Performance</h3>
            <div className="text-white/80">
              For best performance, start with Medium quality settings. If you experience lag, reduce particle quality or geometry detail. High settings work best on powerful GPUs.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
