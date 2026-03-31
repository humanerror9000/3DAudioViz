import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { MediaReactorSettings, MediaGeometry, RenderMode, MediaFile, FitMode } from '../types/mediaReactor';
import { AudioFeatures } from '../types/audio';
import { mediaVertexShader, mediaFragmentShader } from '../shaders/mediaShaders';

export class MediaReactorScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private mesh: THREE.Mesh | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private mediaTexture: THREE.VideoTexture | THREE.Texture | null = null;
  private mediaFile: MediaFile | null = null;
  private clock: THREE.Clock;
  private currentSettings: MediaReactorSettings | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 2;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 20;
    this.controls.enabled = false;

    this.clock = new THREE.Clock();

    window.addEventListener('resize', this.handleResize);
  }

  private calculatePlaneSize(mediaAspect: number, fitMode: FitMode): { width: number; height: number } {
    const distance = this.camera.position.z;
    const vFov = THREE.MathUtils.degToRad(this.camera.fov);

    const visibleHeight = 2 * Math.tan(vFov / 2) * distance;
    const visibleWidth = visibleHeight * this.camera.aspect;

    let planeWidth = visibleWidth;
    let planeHeight = visibleWidth / mediaAspect;

    if (fitMode === FitMode.COVER) {
      if (planeHeight < visibleHeight) {
        planeHeight = visibleHeight;
        planeWidth = visibleHeight * mediaAspect;
      }
    } else {
      if (planeHeight > visibleHeight) {
        planeHeight = visibleHeight;
        planeWidth = visibleHeight * mediaAspect;
      }
    }

    return { width: planeWidth, height: planeHeight };
  }

  private handleResize = () => {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    if (this.material) {
      if (this.material.uniforms.resolution) {
        this.material.uniforms.resolution.value.set(width, height);
      }
      if (this.material.uniforms.uViewAspect) {
        this.material.uniforms.uViewAspect.value = width / height;
      }
    }

    if (this.currentSettings && this.mesh && this.mesh.geometry instanceof THREE.PlaneGeometry && this.mediaTexture?.image) {
      let mediaAspect = 16 / 9;
      if (this.mediaTexture.image.videoWidth) {
        mediaAspect = this.mediaTexture.image.videoWidth / this.mediaTexture.image.videoHeight;
      } else if (this.mediaTexture.image instanceof HTMLImageElement) {
        mediaAspect = this.mediaTexture.image.naturalWidth / this.mediaTexture.image.naturalHeight;
      } else if (this.mediaTexture.image.width && this.mediaTexture.image.height) {
        mediaAspect = this.mediaTexture.image.width / this.mediaTexture.image.height;
      }

      const planeSize = this.calculatePlaneSize(mediaAspect, this.currentSettings.fitMode);

      this.mesh.geometry.dispose();
      this.mesh.geometry = new THREE.PlaneGeometry(planeSize.width, planeSize.height, 128, 128);
    }
  };

  loadMedia(mediaFile: MediaFile): void {
    this.mediaFile = mediaFile;

    if (this.mediaTexture) {
      this.mediaTexture.dispose();
    }

    if (mediaFile.element instanceof HTMLVideoElement) {
      mediaFile.element.crossOrigin = 'anonymous';
      mediaFile.element.setAttribute('playsinline', 'true');

      this.mediaTexture = new THREE.VideoTexture(mediaFile.element);
      this.mediaTexture.minFilter = THREE.LinearFilter;
      this.mediaTexture.magFilter = THREE.LinearFilter;
      this.mediaTexture.wrapS = THREE.ClampToEdgeWrapping;
      this.mediaTexture.wrapT = THREE.ClampToEdgeWrapping;
      this.mediaTexture.format = THREE.RGBFormat;
      this.mediaTexture.generateMipmaps = false;
      this.mediaTexture.colorSpace = THREE.SRGBColorSpace;
    } else if (mediaFile.element instanceof HTMLImageElement) {
      this.mediaTexture = new THREE.Texture(mediaFile.element);
      this.mediaTexture.minFilter = THREE.LinearFilter;
      this.mediaTexture.magFilter = THREE.LinearFilter;
      this.mediaTexture.wrapS = THREE.ClampToEdgeWrapping;
      this.mediaTexture.wrapT = THREE.ClampToEdgeWrapping;
      this.mediaTexture.colorSpace = THREE.SRGBColorSpace;
      this.mediaTexture.needsUpdate = true;
    }

    if (this.material && this.mediaTexture && this.mediaTexture.image) {
      let mediaAspect = 16 / 9;
      if (this.mediaTexture.image.videoWidth) {
        mediaAspect = this.mediaTexture.image.videoWidth / this.mediaTexture.image.videoHeight;
      } else if (this.mediaTexture.image instanceof HTMLImageElement) {
        mediaAspect = this.mediaTexture.image.naturalWidth / this.mediaTexture.image.naturalHeight;
      } else if (this.mediaTexture.image.width && this.mediaTexture.image.height) {
        mediaAspect = this.mediaTexture.image.width / this.mediaTexture.image.height;
      }

      if (this.material.uniforms.uMediaAspect) {
        this.material.uniforms.uMediaAspect.value = mediaAspect;
      }
    }
  }

  initialize(settings: MediaReactorSettings): void {
    this.currentSettings = settings;

    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      if (this.material) {
        this.material.dispose();
      }
    }

    if (!this.mediaTexture) {
      return;
    }

    let geometry: THREE.BufferGeometry;

    if (settings.renderMode === RenderMode.MODE_2D || settings.geometry === MediaGeometry.PLANE) {
      let mediaAspect = 16 / 9;
      if (this.mediaTexture.image) {
        if (this.mediaTexture.image.videoWidth) {
          mediaAspect = this.mediaTexture.image.videoWidth / this.mediaTexture.image.videoHeight;
        } else if (this.mediaTexture.image instanceof HTMLImageElement) {
          mediaAspect = this.mediaTexture.image.naturalWidth / this.mediaTexture.image.naturalHeight;
        } else if (this.mediaTexture.image.width && this.mediaTexture.image.height) {
          mediaAspect = this.mediaTexture.image.width / this.mediaTexture.image.height;
        }
      }

      const planeSize = this.calculatePlaneSize(mediaAspect, settings.fitMode);
      geometry = new THREE.PlaneGeometry(planeSize.width, planeSize.height, 128, 128);
    } else if (settings.geometry === MediaGeometry.SPHERE) {
      geometry = new THREE.SphereGeometry(1, 128, 128);
    } else if (settings.geometry === MediaGeometry.TORUS) {
      geometry = new THREE.TorusGeometry(0.8, 0.4, 64, 128);
    } else if (settings.geometry === MediaGeometry.CUBE) {
      geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 64, 64, 64);
    } else {
      geometry = new THREE.CylinderGeometry(0.6, 0.6, 1.5, 64, 64);
    }

    let mediaAspect = 16 / 9;
    if (this.mediaTexture.image) {
      if (this.mediaTexture.image.videoWidth) {
        mediaAspect = this.mediaTexture.image.videoWidth / this.mediaTexture.image.videoHeight;
      } else if (this.mediaTexture.image instanceof HTMLImageElement) {
        mediaAspect = this.mediaTexture.image.naturalWidth / this.mediaTexture.image.naturalHeight;
      } else if (this.mediaTexture.image.width && this.mediaTexture.image.height) {
        mediaAspect = this.mediaTexture.image.width / this.mediaTexture.image.height;
      }
    }

    const canvas = this.renderer.domElement;
    const canvasAspect = canvas.clientWidth / canvas.clientHeight;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        mediaTexture: { value: this.mediaTexture },
        intensity: { value: settings.intensity },
        brightness: { value: settings.brightness },
        contrast: { value: settings.contrast },
        rgbSplit: { value: settings.rgbSplit },
        glitch: { value: settings.glitch },
        zoomPulse: { value: settings.zoomPulse },
        displacement: { value: settings.displacement },
        geometryDisplacement: { value: settings.geometryDisplacement },
        time: { value: 0 },
        peakTrigger: { value: 0 },
        bassEnergy: { value: 0 },
        energy: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uMediaAspect: { value: mediaAspect },
        uViewAspect: { value: canvasAspect },
        uFitMode: { value: settings.fitMode === FitMode.CONTAIN ? 0 : 1 }
      },
      vertexShader: mediaVertexShader,
      fragmentShader: mediaFragmentShader,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    if (settings.renderMode === RenderMode.MODE_3D) {
      this.camera.position.set(0, 0, 3);
      this.controls.enabled = true;
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    } else {
      this.camera.position.set(0, 0, 2);
      this.controls.enabled = false;
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }

    this.updateAutoOrbit(settings.autoOrbit, settings.orbitSpeed);
  }

  update(audioFeatures: AudioFeatures, settings: MediaReactorSettings): void {
    if (!this.material) return;

    const time = this.clock.getElapsedTime();

    const intensityMultiplier = settings.intensity;

    this.material.uniforms.time.value = time;
    this.material.uniforms.intensity.value = settings.intensity;
    this.material.uniforms.brightness.value = settings.brightness;
    this.material.uniforms.contrast.value = settings.contrast;
    this.material.uniforms.rgbSplit.value = settings.rgbSplit * intensityMultiplier;
    this.material.uniforms.glitch.value = settings.glitch * intensityMultiplier;
    this.material.uniforms.zoomPulse.value = settings.zoomPulse * intensityMultiplier;
    this.material.uniforms.displacement.value = settings.displacement * intensityMultiplier;
    this.material.uniforms.geometryDisplacement.value = settings.geometryDisplacement * intensityMultiplier;

    this.material.uniforms.bassEnergy.value = audioFeatures.bass;
    this.material.uniforms.energy.value = audioFeatures.energy;
    this.material.uniforms.peakTrigger.value = audioFeatures.peakTrigger ? 1.0 : 0.0;
  }

  updateAutoOrbit(enabled: boolean, speed: number): void {
    if (enabled) {
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = speed;
    } else {
      this.controls.autoRotate = false;
    }
  }

  updateSettings(settings: MediaReactorSettings): void {
    if (!this.material) return;

    const needsReinit =
      !this.mesh ||
      (this.mesh.geometry instanceof THREE.PlaneGeometry && settings.renderMode === RenderMode.MODE_3D && settings.geometry !== MediaGeometry.PLANE) ||
      (!(this.mesh.geometry instanceof THREE.PlaneGeometry) && (settings.renderMode === RenderMode.MODE_2D || settings.geometry === MediaGeometry.PLANE)) ||
      (this.mesh.geometry instanceof THREE.SphereGeometry && settings.geometry !== MediaGeometry.SPHERE) ||
      (this.mesh.geometry instanceof THREE.TorusGeometry && settings.geometry !== MediaGeometry.TORUS) ||
      (this.mesh.geometry instanceof THREE.BoxGeometry && settings.geometry !== MediaGeometry.CUBE) ||
      (this.mesh.geometry instanceof THREE.CylinderGeometry && settings.geometry !== MediaGeometry.CYLINDER) ||
      (this.currentSettings && settings.fitMode !== this.currentSettings.fitMode);

    if (needsReinit) {
      this.initialize(settings);
    } else {
      this.currentSettings = settings;
      if (this.material.uniforms.uFitMode) {
        this.material.uniforms.uFitMode.value = settings.fitMode === FitMode.CONTAIN ? 0 : 1;
      }

      if (settings.renderMode === RenderMode.MODE_3D) {
        this.controls.enabled = true;
      } else {
        this.controls.enabled = false;
      }
    }

    this.updateAutoOrbit(settings.autoOrbit, settings.orbitSpeed);
  }

  render(): void {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    window.removeEventListener('resize', this.handleResize);

    this.controls.dispose();

    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
    }

    if (this.material) {
      this.material.dispose();
    }

    if (this.mediaTexture) {
      this.mediaTexture.dispose();
    }

    this.renderer.dispose();
  }

  getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  updateCameraAndRenderer(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);

    if (this.material) {
      if (this.material.uniforms.resolution) {
        this.material.uniforms.resolution.value.set(width, height);
      }
      if (this.material.uniforms.uViewAspect) {
        this.material.uniforms.uViewAspect.value = width / height;
      }
    }
  }

  setRenderSizeForRecording(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);

    if (this.material) {
      if (this.material.uniforms.resolution) {
        this.material.uniforms.resolution.value.set(width, height);
      }
      if (this.material.uniforms.uViewAspect) {
        this.material.uniforms.uViewAspect.value = width / height;
      }
    }

    if (this.currentSettings && this.mesh && this.mesh.geometry instanceof THREE.PlaneGeometry && this.mediaTexture?.image) {
      let mediaAspect = 16 / 9;
      if (this.mediaTexture.image.videoWidth) {
        mediaAspect = this.mediaTexture.image.videoWidth / this.mediaTexture.image.videoHeight;
      } else if (this.mediaTexture.image instanceof HTMLImageElement) {
        mediaAspect = this.mediaTexture.image.naturalWidth / this.mediaTexture.image.naturalHeight;
      } else if (this.mediaTexture.image.width && this.mediaTexture.image.height) {
        mediaAspect = this.mediaTexture.image.width / this.mediaTexture.image.height;
      }

      const planeSize = this.calculatePlaneSize(mediaAspect, this.currentSettings.fitMode);

      this.mesh.geometry.dispose();
      this.mesh.geometry = new THREE.PlaneGeometry(planeSize.width, planeSize.height, 128, 128);
    }
  }
}
