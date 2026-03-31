import { MIDIDeviceInfo, MIDIMapping } from '../types/midi';

export type MIDIMessageCallback = (ccNumber: number, value: number, deviceId: string) => void;

export class MIDIController {
  private midiAccess: WebMidi.MIDIAccess | null = null;
  private messageCallback: MIDIMessageCallback | null = null;
  private selectedDeviceId: string | null = null;
  private smoothing: number = 0;
  private smoothedValues: Map<number, number> = new Map();

  async initialize(): Promise<boolean> {
    if (!navigator.requestMIDIAccess) {
      console.warn('Web MIDI API not supported');
      return false;
    }

    try {
      this.midiAccess = await navigator.requestMIDIAccess();
      this.setupInputListeners();
      return true;
    } catch (error) {
      console.error('Failed to get MIDI access:', error);
      return false;
    }
  }

  private setupInputListeners(): void {
    if (!this.midiAccess) {
      console.error('❌ No MIDI access available');
      return;
    }

    console.log('🔧 Setting up MIDI input listeners...');
    console.log('📊 Number of inputs:', this.midiAccess.inputs.size);

    this.midiAccess.inputs.forEach((input) => {
      console.log('🎛️ Setting up listener for input:', {
        name: input.name,
        id: input.id,
        manufacturer: input.manufacturer,
        state: input.state
      });

      input.onmidimessage = (event) => {
        console.log('🔴 MIDI EVENT FIRED!', {
          device: input.name,
          data: Array.from(event.data),
          timestamp: event.timeStamp
        });
        this.handleMIDIMessage(event, input.id);
      };
    });

    this.midiAccess.onstatechange = (event) => {
      console.log('🔄 MIDI state changed:', event);
      this.setupInputListeners();
    };
  }

  private handleMIDIMessage(event: WebMidi.MIDIMessageEvent, deviceId: string): void {
    const [status, data1, data2] = event.data;
    const command = status & 0xf0;

    console.log('🎹 RAW MIDI message received:', {
      status: status.toString(16),
      command: command.toString(16),
      data1,
      data2,
      deviceId,
      hasCallback: !!this.messageCallback,
      selectedDeviceId: this.selectedDeviceId
    });

    if (!this.messageCallback) {
      console.warn('⚠️ No callback registered!');
      return;
    }

    if (this.selectedDeviceId && this.selectedDeviceId !== 'all' && this.selectedDeviceId !== deviceId) {
      console.log('🚫 Message filtered - device mismatch:', {
        selectedDeviceId: this.selectedDeviceId,
        messageDeviceId: deviceId
      });
      return;
    }

    if (command === 0xb0) {
      const ccNumber = data1;
      let value = data2;

      if (this.smoothing > 0) {
        const key = ccNumber;
        const prev = this.smoothedValues.get(key) ?? value;
        value = prev + (value - prev) * (1 - this.smoothing);
        this.smoothedValues.set(key, value);
      }

      console.log('✅ Calling MIDI callback with CC:', ccNumber, 'value:', value);
      this.messageCallback(ccNumber, value, deviceId);
    } else {
      console.log('ℹ️ Ignoring non-CC message (command:', command.toString(16), ')');
    }
  }

  getDevices(): MIDIDeviceInfo[] {
    if (!this.midiAccess) return [];

    const devices: MIDIDeviceInfo[] = [];
    this.midiAccess.inputs.forEach((input) => {
      devices.push({
        id: input.id,
        name: input.name || 'Unknown Device',
        manufacturer: input.manufacturer || 'Unknown',
        state: input.state
      });
    });

    return devices;
  }

  setMessageCallback(callback: MIDIMessageCallback): void {
    console.log('📞 Setting MIDI callback:', !!callback);
    this.messageCallback = callback;
  }

  setSelectedDevice(deviceId: string | null): void {
    console.log('🎹 Setting selected device:', deviceId);
    this.selectedDeviceId = deviceId;
  }

  setSmoothing(smoothing: number): void {
    this.smoothing = Math.max(0, Math.min(0.9, smoothing));
  }

  isSupported(): boolean {
    return !!navigator.requestMIDIAccess;
  }

  hasAccess(): boolean {
    return !!this.midiAccess;
  }

  dispose(): void {
    if (this.midiAccess) {
      this.midiAccess.inputs.forEach((input) => {
        input.onmidimessage = null;
      });
    }
    this.messageCallback = null;
    this.midiAccess = null;
  }
}

export function applyMIDIValueToParameter(
  ccValue: number,
  mapping: MIDIMapping
): number | boolean {
  if (mapping.isToggle) {
    return ccValue >= 64;
  }

  const normalized = ccValue / 127;
  return mapping.min + normalized * (mapping.max - mapping.min);
}
