# Technical Documentation

## Project Overview

This is an audio-reactive visual synthesizer with two distinct modes:
1. **Visualizer Mode** - 3D geometric shapes that react to audio
2. **Media Reactor Mode** - Image/video media with audio-reactive effects in 2D or 3D

The application is built with React, Three.js, TypeScript, and the Web Audio API. It features real-time audio analysis, MIDI controller support, preset management, and video recording capabilities.

---

## Architecture

### Entry Points

#### `src/main.tsx`
Standard React 18 entry point. Renders the App component into the DOM with StrictMode enabled.

#### `src/App.tsx`
**Primary application orchestrator** (1012 lines)

**Key Responsibilities:**
- Manages application mode switching (Visualizer vs Media Reactor)
- Coordinates audio engine, analyser, scene management, and MIDI controller lifecycle
- Implements parameter smoothing system for fluid visual transitions
- Handles preset loading/saving with change detection
- Manages recording state and lifecycle
- Implements fullscreen mode and keyboard shortcuts

**Key Functions/Classes:**
- `initSmoothedParam()` - Initialize smoothed parameter tracking
- `setTargetValue()` - Set target value for parameter smoothing
- `getSmoothedValue()` - Get current smoothed value
- `updateSmoothedParameters()` - Update all smoothed parameters per frame
- `handleMIDIMessage()` - Process incoming MIDI CC messages
- `applyParameterValue()` - Apply parameter changes from MIDI or UI
- `handleParameterClick()` - Enable MIDI learn mode for a parameter
- `applyPreset()` - Load and apply a preset configuration
- `hasPresetChanged()` - Detect if current settings differ from loaded preset

**State Management:**
- Mesh settings (geometry, displacement, noise, audio weights)
- Audio settings (smoothing, sensitivity, peak detection)
- Global settings (orbit, bloom, parameter smoothing)
- MIDI state (devices, mappings, learn mode)
- Recording state (quality, format, status)
- Preset management (current preset, pending changes)

**Connections:**
- Creates and manages instances of AudioEngine, AudioAnalyser, SceneManager, ReactiveMesh, RecordingManager, MIDIController
- Renders AudioPlayer, ControlPanel, HelpModal, FullscreenHUD, SavePresetModal components
- Switches to MediaReactor page component when mode changes

---

## Audio System

### `src/audio/AudioEngine.ts`
**Web Audio API wrapper and audio file player** (213 lines)

**Key Responsibilities:**
- Manages AudioContext, audio graph nodes (source, analyser, gain)
- Handles audio file loading and decoding
- Provides play/pause/seek/volume controls
- Creates MediaStream for recording with audio
- Tracks playback time and state

**Key Functions/Classes:**
- `initialize()` - Create audio context and node graph
- `loadAudioFile()` - Load and decode audio file into buffer
- `play()` - Start playback from current position
- `pause()` - Pause playback, maintain position
- `seek()` - Jump to specific time position
- `updateCurrentTime()` - Sync internal time tracking
- `createAudioStream()` - Generate MediaStream for recording
- `getAnalyserNode()` - Provide analyser node for frequency analysis

**Audio Graph:**
```
AudioBufferSource → AnalyserNode → GainNode → AudioDestination
                                   ↓
                            MediaStreamDestination (for recording)
```

**Implementation Status:** ✅ Fully Implemented

### `src/audio/AudioAnalyser.ts`
**Real-time frequency analysis and feature extraction** (110 lines)

**Key Responsibilities:**
- Analyzes frequency data from AnalyserNode
- Extracts audio features (energy, sub, bass, mids, highs)
- Implements smoothing for stable visual response
- Detects peak/beat triggers with cooldown

**Key Functions/Classes:**
- `analyse()` - Main analysis function, returns AudioFeatures
- `getBandEnergy()` - Calculate energy in specific frequency range
- `getOverallEnergy()` - Calculate RMS energy across all frequencies
- `reset()` - Clear smoothing buffers

**Frequency Bands:**
- Sub: 20-60 Hz (sub-bass)
- Bass: 60-250 Hz (kick drums, bass)
- Mids: 250-2000 Hz (vocals, melody)
- Highs: 2000-12000 Hz (cymbals, brightness)

**Peak Detection:**
- Triggers when bass exceeds threshold
- Cooldown period prevents rapid re-triggering
- Hysteresis (80% of threshold) for clean reset

**Implementation Status:** ✅ Fully Implemented

---

## 3D Rendering System (Visualizer Mode)

### `src/visuals/SceneManager.ts`
**Three.js scene setup and rendering pipeline** (~120 lines)

**Key Responsibilities:**
- Creates and manages Three.js scene, camera, renderer
- Implements OrbitControls for camera interaction
- Manages post-processing with bloom effect
- Handles window resize events
- Provides auto-orbit functionality

**Key Functions/Classes:**
- `updateAutoOrbit()` - Enable/disable camera auto-rotation
- `updateBloom()` - Configure bloom post-processing
- `setActiveVisual()` - Swap the active 3D object
- `render()` - Execute render pass (with or without bloom)
- `handleResize()` - Respond to window size changes

**Rendering Pipeline:**
```
Scene → RenderPass → UnrealBloomPass → Screen
```

**Implementation Status:** ✅ Fully Implemented

### `src/visuals/ReactiveMesh.ts`
**Audio-reactive 3D geometry with shader-based displacement** (~250 lines)

**Key Responsibilities:**
- Creates procedural geometry (sphere, cube, torus, etc.)
- Manages shader materials for vertex displacement
- Updates shader uniforms based on audio features
- Handles wireframe and points rendering styles
- Implements peak pulse effect

**Key Functions/Classes:**
- `initialize()` - Create geometry and material based on settings
- `update()` - Update shader uniforms with audio data and time
- `updateSettings()` - Apply non-structural setting changes
- `createGeometry()` - Generate Three.js geometry based on type
- `createMaterial()` - Create shader material for mesh
- `createPointsMaterial()` - Create shader material for points

**Supported Geometries:**
- Plane (subdivided grid)
- Sphere (UV sphere)
- Icosphere (geodesic sphere)
- Torus (donut shape)
- Cube (subdivided box)
- Cylinder (tube)

**Shader Uniforms:**
- `uTime` - Animation time
- `uDisplacement` - Displacement amount
- `uNoiseScale` - Noise frequency
- `uNoiseSpeed` - Noise animation speed
- `uSubBand`, `uBassBand`, `uMidsBand`, `uHighsBand` - Audio frequency bands
- `uSubWeight`, `uBassWeight`, `uMidsWeight`, `uHighsWeight` - Frequency weights
- `uPeakPulse` - Peak pulse intensity (exponential decay)

**Implementation Status:** ✅ Fully Implemented

### `src/visuals/ParticleSystem.ts`
**Audio-reactive particle field** (~200 lines)

**Key Responsibilities:**
- Creates large particle fields (20k-100k particles)
- Gaussian distribution for natural clustering
- Shader-based turbulence and animation
- Audio-reactive particle size and movement
- Peak burst effect

**Key Functions/Classes:**
- `initialize()` - Create particle geometry and material
- `update()` - Update particle shader uniforms
- `createParticlePositions()` - Generate particle positions with gaussian falloff
- `createMaterial()` - Create particle shader material

**Particle Qualities:**
- LOW: 20,000 particles
- MEDIUM: 50,000 particles
- HIGH: 100,000 particles

**Shader Uniforms:**
- `uTime` - Animation time
- `uTurbulence` - Turbulence intensity
- `uFieldSize` - Spatial extent of particle field
- `uParticleSize` - Pixel size of particles
- `uEnergy`, `uBass`, `uHighs` - Audio features
- `uPeakBurst` - Peak burst intensity

**Implementation Status:** ✅ Fully Implemented

---

## Media Reactor System

### `src/pages/MediaReactor.tsx`
**Dedicated page for image/video reactivity** (~450 lines)

**Key Responsibilities:**
- Manages separate audio engine and analyser for media mode
- Coordinates 2D and 3D rendering modes
- Handles media file (image/video) loading
- Syncs audio with video playback
- Manages recording with quality auto-adjustment
- Implements performance monitoring

**Key Functions/Classes:**
- `handleMediaFileUpload()` - Load image or video file
- `handleAudioFileUpload()` - Load separate audio file
- `handleRenderModeChange()` - Switch between 2D and 3D
- `animate()` - Main animation loop
- `handleStartRecording()` / `handleStopRecording()` - Recording lifecycle

**Mode Switching:**
- Destroys and recreates renderer when switching 2D ↔ 3D
- Maintains separate state for each mode
- Auto-adjusts quality during recording for performance

**Implementation Status:** ✅ Fully Implemented

### `src/visuals/MediaReactorScene.ts`
**3D rendering for media files** (~350 lines)

**Key Responsibilities:**
- Creates 3D geometry (plane, sphere, torus, cube, cylinder)
- Maps media (image/video) as texture onto geometry
- Implements audio-reactive shader effects
- Handles fit modes (cover/contain)
- Manages auto-orbit camera control

**Key Functions/Classes:**
- `loadMedia()` - Load media file and create texture
- `createGeometry()` - Generate 3D geometry for media
- `createMaterial()` - Create shader material with media texture
- `updateSettings()` - Apply settings changes to shader
- `render()` - Render frame with current audio features
- `calculatePlaneSize()` - Compute plane dimensions for fit mode

**Shader Effects (3D Mode):**
- Brightness and contrast adjustment
- RGB channel split/chromatic aberration
- Displacement/distortion waves
- Geometry displacement (vertex shader)

**Implementation Status:** ✅ Fully Implemented

### `src/visuals/Canvas2DRenderer.ts`
**High-performance 2D pixel processing** (~650 lines)

**Key Responsibilities:**
- Renders media files using Canvas 2D API
- Implements CPU-based pixel effects
- Dynamic resolution scaling for performance
- Multiple quality levels (OFF, LOW, HIGH)
- Fit mode support (cover/contain)

**Key Functions/Classes:**
- `render()` - Main render function with quality routing
- `renderLowQuality()` - Fast pixel processing (960x540)
- `calculateDrawParams()` - Compute media positioning
- `applyDisplacement()` - Wave-based UV distortion
- `applyZoomPulse()` - Audio-reactive zoom
- `applyGlitch()` - Horizontal glitch effect
- `sampleTexture()` - Bilinear texture sampling
- `random()` - Pseudo-random number generation

**Quality Levels:**
- OFF: Direct drawImage, no effects
- LOW: 960x540 processing (recently upgraded from 320x180)
- HIGH: 1280x720 processing

**Pixel Effects (2D Mode):**
- Brightness (audio-reactive)
- Contrast (audio-reactive)
- RGB Split (chromatic aberration)
- Glitch (horizontal displacement)
- Zoom Pulse (audio-reactive scale)
- Displacement (wave distortion)

**Performance Optimizations:**
- Reuses ImageData buffers to avoid allocation
- Downscales for performance, upscales for display
- Fast path for no-effects rendering
- Bilinear filtering for smooth results

**Recent Fixes:**
- Increased LOW quality from 320x180 to 960x540 for better image quality
- Fixed brightness/contrast to always respond to audio, not just when effects are active
- Lowered effect threshold from 0.05 to 0.01 for better sensitivity

**Implementation Status:** ✅ Fully Implemented

---

## MIDI System

### `src/midi/MIDIController.ts`
**Web MIDI API wrapper for controller integration** (166 lines)

**Key Responsibilities:**
- Detects and connects to MIDI devices
- Listens for MIDI CC (Control Change) messages
- Implements optional smoothing for MIDI values
- Supports device filtering (all devices or specific device)
- Provides MIDI learn functionality

**Key Functions/Classes:**
- `initialize()` - Request MIDI access and setup listeners
- `getDevices()` - List available MIDI input devices
- `setSelectedDevice()` - Filter messages by device
- `setMessageCallback()` - Register callback for CC messages
- `setSmoothing()` - Configure value smoothing
- `handleMIDIMessage()` - Parse and route MIDI messages
- `applyMIDIValueToParameter()` - Map MIDI value (0-127) to parameter range

**MIDI Message Flow:**
```
MIDI Device → handleMIDIMessage() → messageCallback → App.handleMIDIMessage()
                                                     ↓
                                              applyParameterValue()
```

**Implementation Status:** ✅ Fully Implemented

### `src/utils/midiStorage.ts`
**LocalStorage persistence for MIDI mappings** (~80 lines)

**Key Responsibilities:**
- Save/load MIDI settings to localStorage
- Manage MIDI CC to parameter mappings
- Support for both continuous and toggle parameters
- CRUD operations for mappings

**Key Functions:**
- `loadMIDISettings()` - Load settings from localStorage
- `saveMIDISettings()` - Persist settings to localStorage
- `addMIDIMapping()` - Create new CC mapping
- `removeMIDIMapping()` - Delete mapping
- `findMappingByCC()` - Lookup mapping by CC number
- `clearAllMIDIMappings()` - Remove all mappings

**Implementation Status:** ✅ Fully Implemented

---

## Recording System

### `src/recording/RecordingManager.ts`
**MediaRecorder wrapper for video capture** (~250 lines)

**Key Responsibilities:**
- Records canvas output to video file
- Combines video with audio stream
- Supports multiple quality levels
- Handles format selection (WebM/MP4)
- Provides timer callbacks
- Auto-downloads recording on stop

**Key Functions/Classes:**
- `startRecording()` - Begin capture with MediaRecorder
- `stopRecording()` - End capture and trigger download
- `isRecording()` - Check recording state
- `setTimerCallback()` - Register timer update callback

**Quality Settings:**
- DRAFT: 5 Mbps video, 128 kbps audio
- HIGH: 10 Mbps video, 192 kbps audio
- ULTRA: 16 Mbps video, 192 kbps audio

**Format Support:**
- Tries MP4 codecs first (h.264 + AAC)
- Falls back to WebM (VP9/VP8 + Opus)
- Auto mode tries all available codecs

**Implementation Status:** ✅ Fully Implemented

---

## UI Components

### `src/ui/AudioPlayer.tsx`
Audio playback controls, file upload, recording controls, and real-time audio features visualization.

**Features:**
- File drag-and-drop and click upload
- Play/pause, seek, volume controls
- Recording start/stop with quality settings
- Real-time frequency band visualization

**Implementation Status:** ✅ Fully Implemented

### `src/ui/ControlPanel.tsx`
Main settings panel for visualizer mode with collapsible sections.

**Sections:**
- Mesh settings (geometry, style, detail)
- Visual parameters (displacement, noise)
- Audio reactivity weights (sub, bass, mids, highs)
- Audio analysis settings
- Global settings (orbit, bloom, smoothing)
- Preset management
- MIDI configuration

**Implementation Status:** ✅ Fully Implemented

### `src/ui/MediaReactorControls.tsx`
Settings panel for Media Reactor mode.

**Sections:**
- Render mode (2D/3D)
- Geometry selection (3D mode)
- Effect parameters (brightness, contrast, RGB split, glitch, displacement)
- Fit mode and quality settings
- Audio analysis settings

**Implementation Status:** ✅ Fully Implemented

### `src/ui/MIDIPanel.tsx`
MIDI device configuration and mapping management.

**Features:**
- Enable/disable MIDI
- Device selection
- Value smoothing
- Learn mode
- Mapping list with removal
- Clear all mappings

**Implementation Status:** ✅ Fully Implemented

### `src/ui/PresetPanel.tsx`
Preset browser and loader with visual preview cards.

**Features:**
- Grid layout of preset cards
- Preset name and description
- Visual indicators for geometry, style, detail
- Change indicator when preset modified

**Implementation Status:** ✅ Fully Implemented

### `src/ui/SavePresetModal.tsx`
Modal dialog for save/discard preset changes.

**Implementation Status:** ✅ Fully Implemented

### `src/ui/HelpModal.tsx`
Keyboard shortcuts and feature documentation.

**Implementation Status:** ✅ Fully Implemented

### `src/ui/FullscreenHUD.tsx`
Minimal overlay controls when in fullscreen mode.

**Implementation Status:** ✅ Fully Implemented

---

## Shader System

### `src/shaders/meshShaders.ts`
Vertex and fragment shaders for reactive mesh rendering.

**Vertex Shader:**
- Simplex noise-based displacement
- Audio frequency band modulation
- Peak pulse effect
- Time-based animation

**Fragment Shader:**
- Base color with audio-reactive brightness
- Energy-based color shifting

**Implementation Status:** ✅ Fully Implemented

### `src/shaders/pointsShaders.ts`
Shaders for points rendering style.

**Features:**
- Size modulation based on displacement
- Audio-reactive point size
- Circular point shape with smooth edges

**Implementation Status:** ✅ Fully Implemented

### `src/shaders/particleShaders.ts`
Shaders for particle system.

**Features:**
- Turbulent motion with curl noise
- Audio-reactive size and color
- Peak burst expansion
- Additive blending for glow effect

**Implementation Status:** ✅ Fully Implemented

### `src/shaders/mediaShaders.ts`
Shaders for Media Reactor 3D mode.

**Features:**
- Media texture mapping
- Audio-reactive brightness/contrast
- RGB channel split
- Displacement waves
- Geometry displacement (vertex shader)

**Implementation Status:** ✅ Fully Implemented

### `src/shaders/simplexNoise.glsl.ts`
3D simplex noise implementation for GLSL.

**Implementation Status:** ✅ Fully Implemented

---

## Type Definitions

### `src/types/audio.ts`
TypeScript interfaces for audio system.

**Exports:**
- `AudioFeatures` - Frequency bands and peak trigger
- `AudioSettings` - Analysis configuration
- `AudioState` - Playback state
- `RecordingState` - Recording status

### `src/types/scene.ts`
TypeScript types for 3D visualizer.

**Exports:**
- `GeometryType` - Enum of supported geometries
- `RenderStyle` - Wireframe or points
- `DetailLevel` - Geometry subdivision level
- `MeshSettings` - Complete mesh configuration
- `GlobalSettings` - Scene-level settings
- `SmoothedParameters` - Parameter smoothing state

### `src/types/mediaReactor.ts`
TypeScript types for Media Reactor.

**Exports:**
- `MediaType` - Image or video
- `MediaGeometry` - 3D geometry options
- `RenderMode` - 2D or 3D
- `FitMode` - Cover or contain
- `EffectsQuality` - OFF, LOW, HIGH
- `MediaReactorSettings` - Complete settings
- `MediaFile` - Loaded media file reference

### `src/types/midi.ts`
TypeScript types for MIDI system.

**Exports:**
- `MIDIMapping` - CC to parameter mapping
- `MIDISettings` - MIDI configuration
- `MIDIDeviceInfo` - Device metadata
- `MIDIState` - Complete MIDI state
- `MIDILearningContext` - Learn mode state

### `src/types/preset.ts`
TypeScript types for preset system.

**Exports:**
- `Preset` - Complete preset definition
- `PresetCategory` - Preset grouping

---

## Utility Modules

### `src/utils/presetStorage.ts`
LocalStorage persistence and management for presets.

**Features:**
- Initialize default presets on first run
- Save/load presets from localStorage
- Update existing presets
- Delete presets
- Get preset by ID

**Default Presets:**
- 8 built-in presets covering different styles
- Range from subtle to intense effects
- Various geometries and render styles

**Implementation Status:** ✅ Fully Implemented

### `src/utils/formatTime.ts`
Utility function to format seconds as MM:SS.

**Implementation Status:** ✅ Fully Implemented

---

## Module Dependency Graph

```
App.tsx (root orchestrator)
├─ Audio System
│  ├─ AudioEngine.ts (playback)
│  └─ AudioAnalyser.ts (frequency analysis)
├─ 3D Visualizer (mode: visualizer)
│  ├─ SceneManager.ts (Three.js scene)
│  ├─ ReactiveMesh.ts (audio-reactive geometry)
│  ├─ ParticleSystem.ts (particle field)
│  └─ Shaders (meshShaders, pointsShaders, particleShaders)
├─ Media Reactor (mode: mediaReactor)
│  ├─ MediaReactor.tsx (page component)
│  ├─ MediaReactorScene.ts (3D media rendering)
│  ├─ Canvas2DRenderer.ts (2D media rendering)
│  └─ Shaders (mediaShaders)
├─ MIDI System
│  ├─ MIDIController.ts (Web MIDI interface)
│  └─ midiStorage.ts (persistence)
├─ Recording
│  └─ RecordingManager.ts (MediaRecorder wrapper)
├─ UI Components
│  ├─ AudioPlayer.tsx
│  ├─ ControlPanel.tsx
│  ├─ MediaReactorControls.tsx
│  ├─ MIDIPanel.tsx
│  ├─ PresetPanel.tsx
│  ├─ SavePresetModal.tsx
│  ├─ HelpModal.tsx
│  └─ FullscreenHUD.tsx
└─ Utilities
   ├─ presetStorage.ts
   ├─ midiStorage.ts
   └─ formatTime.ts
```

---

## Data Flow

### Audio Processing Pipeline
```
Audio File → AudioEngine.loadAudioFile()
           → AudioContext.decodeAudioData()
           → AudioBufferSourceNode
           → AnalyserNode.getByteFrequencyData()
           → AudioAnalyser.analyse()
           → AudioFeatures { energy, sub, bass, mids, highs, peak }
           → ReactiveMesh.update() / MediaReactorScene.render()
           → Shader Uniforms
           → GPU Rendering
```

### MIDI Control Flow
```
MIDI Device → Web MIDI API
           → MIDIController.handleMIDIMessage()
           → App.handleMIDIMessage()
           → findMappingByCC()
           → applyMIDIValueToParameter()
           → applyParameterValue()
           → State Update (setMeshSettings / setAudioSettings / setGlobalSettings)
           → Visual Update
```

### Parameter Smoothing Flow
```
UI/MIDI Change → setMeshSettings() / setAudioSettings()
              → setTargetValue()
              → smoothedParamsRef.current[key].target = value
              → (every frame) updateSmoothedParameters()
              → smoothed += (target - smoothed) * smoothingFactor
              → getSmoothedValue()
              → Used in render/update functions
```

---

## Implementation Status Summary

### ✅ Fully Implemented
- Audio playback and analysis
- 3D visualizer with 6 geometries
- Wireframe and points render styles
- Particle system
- Media Reactor 2D mode with pixel effects
- Media Reactor 3D mode with shader effects
- MIDI controller support with learn mode
- Preset system with 8 defaults
- Recording system with quality options
- Parameter smoothing
- Fullscreen mode
- Keyboard shortcuts
- All UI components

### ⚠️ Known Limitations
- No social sharing features
- No cloud preset storage
- No audio effect processing (reverb, delay, etc.)
- No timeline/sequencer for preset automation
- No OSC (Open Sound Control) support
- No Spout/Syphon video output

### 🐛 Recent Fixes
- **2D Mode Quality**: Upgraded LOW quality from 320x180 to 960x540 for much better image quality in RGB Split, Glitch, and Displacement effects
- **Audio Reactivity**: Fixed brightness and contrast to always respond to audio, even when no pixel effects are active
- **Effect Sensitivity**: Lowered threshold for pixel effects from 0.05 to 0.01 for better responsiveness

---

## Performance Considerations

### 3D Rendering
- Geometry detail impacts vertex count significantly
- Points rendering is faster than wireframe for high detail
- Bloom post-processing has moderate GPU cost
- Particle system scales with quality setting (20k-100k particles)

### 2D Rendering
- LOW quality (960x540) is suitable for real-time on most hardware
- HIGH quality (1280x720) may struggle on older machines
- Pixel effects are CPU-bound and benefit from lower resolution
- Bilinear sampling adds overhead but improves visual quality

### Recording
- Recording requires additional CPU/GPU for encoding
- Quality auto-adjustment helps maintain framerate
- Audio sync can drift on slow machines
- Large recordings may hit browser memory limits

### General
- Parameter smoothing reduces visual judder
- Audio analysis FFT size (2048) is a performance/quality tradeoff
- Three.js renderer pixel ratio is capped at 2x for performance
