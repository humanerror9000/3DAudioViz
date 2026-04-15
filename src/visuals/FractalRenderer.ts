import * as THREE from 'three';
import { EffectComposer } from 'three-stdlib';
import { RenderPass } from 'three-stdlib';
import { UnrealBloomPass } from 'three-stdlib';
import { FractalType, FractalSettings } from '../types/fractal';
import { AudioFeatures } from '../types/audio';
import {
  fractalVertexShader,
  mandelbulbFragmentShader,
  mengerFragmentShader,
  juliaFragmentShader
} from '../shaders/fractalShaders';

export class FractalRenderer {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.OrthographicCamera | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private mesh: THREE.Mesh | null = null;
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private currentFractalType: FractalType = 'mandelbulb';

  initialize(canvas: HTMLCanvasElement, fractalType: FractalType, settings: FractalSettings): void {
    this.currentFractalType = fractalType;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.material = this.createMaterial(fractalType, settings);
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
      settings.bloomStrength,
      settings.bloomRadius,
      settings.bloomThreshold
    );
    this.composer.addPass(this.bloomPass);
    this.bloomPass.enabled = settings.bloom;
  }

  private createMaterial(fractalType: FractalType, settings: FractalSettings): THREE.ShaderMaterial {
    let fragmentShader: string;

    switch (fractalType) {
      case 'mandelbulb':
        fragmentShader = mandelbulbFragmentShader;
        break;
      case 'menger':
        fragmentShader = mengerFragmentShader;
        break;
      case 'julia':
        fragmentShader = juliaFragmentShader;
        break;
      default:
        fragmentShader = mandelbulbFragmentShader;
    }

    const colorA = new THREE.Color(settings.colorA);
    const colorB = new THREE.Color(settings.colorB);

    return new THREE.ShaderMaterial({
      vertexShader: fractalVertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uBass: { value: 0.0 },
        uEnergy: { value: 0.0 },
        uHighs: { value: 0.0 },
        uPeakPulse: { value: 0.0 },
        uPower: { value: settings.power },
        uIterations: { value: settings.iterations },
        uBailout: { value: settings.bailout },
        uMengerIterations: { value: settings.mengerIterations },
        uJuliaC: { value: new THREE.Vector4(...settings.juliaC) },
        uZoom: { value: settings.zoom },
        uColorA: { value: new THREE.Vector3(colorA.r, colorA.g, colorA.b) },
        uColorB: { value: new THREE.Vector3(colorB.r, colorB.g, colorB.b) },
        uRotationSpeed: { value: settings.rotationSpeed }
      }
    });
  }

  setFractalType(fractalType: FractalType, settings: FractalSettings): void {
    if (fractalType === this.currentFractalType) return;

    this.currentFractalType = fractalType;

    if (this.material) {
      this.material.dispose();
    }

    this.material = this.createMaterial(fractalType, settings);

    if (this.mesh) {
      this.mesh.material = this.material;
    }
  }

  update(time: number, audioFeatures: AudioFeatures, settings: FractalSettings): void {
    if (!this.material) return;

    const bass = audioFeatures.bass * settings.bassReactivity;
    const energy = audioFeatures.energy * settings.energyReactivity;
    const highs = audioFeatures.highs * settings.highsReactivity;
    const peakPulse = audioFeatures.peakTrigger && settings.peakPulse ? 1.0 : 0.0;

    this.material.uniforms.uTime.value = time * 0.001;
    this.material.uniforms.uBass.value = bass;
    this.material.uniforms.uEnergy.value = energy;
    this.material.uniforms.uHighs.value = highs;
    this.material.uniforms.uPeakPulse.value = peakPulse;
    this.material.uniforms.uPower.value = settings.power;
    this.material.uniforms.uIterations.value = settings.iterations;
    this.material.uniforms.uBailout.value = settings.bailout;
    this.material.uniforms.uMengerIterations.value = settings.mengerIterations;
    this.material.uniforms.uJuliaC.value.set(...settings.juliaC);
    this.material.uniforms.uZoom.value = settings.zoom;
    this.material.uniforms.uRotationSpeed.value = settings.rotationSpeed;

    const colorA = new THREE.Color(settings.colorA);
    const colorB = new THREE.Color(settings.colorB);
    this.material.uniforms.uColorA.value.set(colorA.r, colorA.g, colorA.b);
    this.material.uniforms.uColorB.value.set(colorB.r, colorB.g, colorB.b);

    if (this.bloomPass) {
      this.bloomPass.enabled = settings.bloom;
      this.bloomPass.strength = settings.bloomStrength;
      this.bloomPass.radius = settings.bloomRadius;
      this.bloomPass.threshold = settings.bloomThreshold;
    }
  }

  render(): void {
    if (this.composer) {
      this.composer.render();
    }
  }

  resize(width: number, height: number): void {
    if (this.renderer) {
      this.renderer.setSize(width, height);
    }
    if (this.composer) {
      this.composer.setSize(width, height);
    }
    if (this.bloomPass) {
      this.bloomPass.setSize(width, height);
    }
  }

  dispose(): void {
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    if (this.mesh) {
      if (this.mesh.geometry) {
        this.mesh.geometry.dispose();
      }
      this.mesh = null;
    }
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
    this.scene = null;
    this.camera = null;
    this.bloomPass = null;
  }
}
