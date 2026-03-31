import * as THREE from 'three';
import { GeometryType, DetailLevel, RenderStyle, MeshSettings } from '../types/scene';
import { AudioFeatures } from '../types/audio';
import { meshVertexShader, meshFragmentShader } from '../shaders/meshShaders';
import { pointsVertexShader, pointsFragmentShader } from '../shaders/pointsShaders';

export class ReactiveMesh {
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.ShaderMaterial | null = null;
  private mesh: THREE.Mesh | null = null;
  private points: THREE.Points | null = null;

  private currentGeometryType: GeometryType;
  private currentDetailLevel: DetailLevel;
  private currentRenderStyle: RenderStyle;

  private peakPulseValue = 0;
  private peakPulseTime = 0;

  constructor() {
    this.currentGeometryType = GeometryType.SPHERE;
    this.currentDetailLevel = DetailLevel.MEDIUM;
    this.currentRenderStyle = RenderStyle.WIREFRAME;
  }

  private createGeometry(type: GeometryType, detail: DetailLevel): THREE.BufferGeometry {
    const segments = this.getSegmentCount(detail, type);

    let geometry: THREE.BufferGeometry;

    switch (type) {
      case GeometryType.PLANE:
        geometry = new THREE.PlaneGeometry(4, 4, segments, segments);
        break;
      case GeometryType.SPHERE:
        geometry = new THREE.SphereGeometry(2, segments, segments);
        break;
      case GeometryType.ICOSPHERE:
        geometry = new THREE.IcosahedronGeometry(2, detail === DetailLevel.LOW ? 1 : detail === DetailLevel.MEDIUM ? 2 : 3);
        break;
      case GeometryType.TORUS:
        geometry = new THREE.TorusGeometry(2, 0.6, segments / 2, segments);
        break;
      case GeometryType.CUBE:
        geometry = new THREE.BoxGeometry(3, 3, 3, segments / 2, segments / 2, segments / 2);
        break;
      case GeometryType.CYLINDER:
        geometry = new THREE.CylinderGeometry(1.5, 1.5, 3, segments, segments / 2);
        break;
      default:
        geometry = new THREE.SphereGeometry(2, segments, segments);
        break;
    }

    return geometry;
  }

  private getSegmentCount(detail: DetailLevel, geometryType?: GeometryType): number {
    switch (detail) {
      case DetailLevel.LOW:
        return 32;
      case DetailLevel.MEDIUM:
        return 64;
      case DetailLevel.HIGH:
        return 128;
      default:
        return 64;
    }
  }

  private createMaterial(baseColor: string): THREE.ShaderMaterial {
    const color = new THREE.Color(baseColor);
    return new THREE.ShaderMaterial({
      vertexShader: meshVertexShader,
      fragmentShader: meshFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uDisplacement: { value: 0.5 },
        uNoiseScale: { value: 2.0 },
        uNoiseSpeed: { value: 0.5 },
        uSubBand: { value: 0 },
        uBassBand: { value: 0 },
        uMidsBand: { value: 0 },
        uHighsBand: { value: 0 },
        uSubWeight: { value: 0.3 },
        uBassWeight: { value: 0.5 },
        uMidsWeight: { value: 0.3 },
        uHighsWeight: { value: 0.2 },
        uPeakPulse: { value: 0 },
        uBaseColor: { value: color }
      },
      wireframe: false
    });
  }

  private createPointsMaterial(baseColor: string, pointSize: number): THREE.ShaderMaterial {
    const color = new THREE.Color(baseColor);
    return new THREE.ShaderMaterial({
      vertexShader: pointsVertexShader,
      fragmentShader: pointsFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uDisplacement: { value: 0.5 },
        uNoiseScale: { value: 2.0 },
        uNoiseSpeed: { value: 0.5 },
        uSubBand: { value: 0 },
        uBassBand: { value: 0 },
        uMidsBand: { value: 0 },
        uHighsBand: { value: 0 },
        uSubWeight: { value: 0.3 },
        uBassWeight: { value: 0.5 },
        uMidsWeight: { value: 0.3 },
        uHighsWeight: { value: 0.2 },
        uPeakPulse: { value: 0 },
        uBaseColor: { value: color },
        uPointSize: { value: pointSize }
      },
      transparent: true,
      depthWrite: true,
      blending: THREE.NormalBlending
    });
  }

  private applyPointDensity(geometry: THREE.BufferGeometry, density: number): THREE.BufferGeometry {
    if (density >= 1.0) return geometry;

    const positions = geometry.getAttribute('position');
    const normals = geometry.getAttribute('normal');

    if (!positions || !normals) return geometry;

    const step = Math.max(1, Math.floor(1 / density));
    const totalVertices = positions.count;
    const newCount = Math.floor(totalVertices / step);

    const newPositions = new Float32Array(newCount * 3);
    const newNormals = new Float32Array(newCount * 3);

    let writeIndex = 0;
    for (let i = 0; i < totalVertices; i += step) {
      newPositions[writeIndex * 3] = positions.getX(i);
      newPositions[writeIndex * 3 + 1] = positions.getY(i);
      newPositions[writeIndex * 3 + 2] = positions.getZ(i);

      newNormals[writeIndex * 3] = normals.getX(i);
      newNormals[writeIndex * 3 + 1] = normals.getY(i);
      newNormals[writeIndex * 3 + 2] = normals.getZ(i);

      writeIndex++;
    }

    const newGeometry = new THREE.BufferGeometry();
    newGeometry.setAttribute('position', new THREE.BufferAttribute(newPositions, 3));
    newGeometry.setAttribute('normal', new THREE.BufferAttribute(newNormals, 3));

    return newGeometry;
  }

  initialize(settings: MeshSettings): THREE.Object3D {
    this.currentGeometryType = settings.geometryType;
    this.currentDetailLevel = settings.detailLevel;
    this.currentRenderStyle = settings.renderStyle;

    let geometry = this.createGeometry(settings.geometryType, settings.detailLevel);

    if (settings.renderStyle === RenderStyle.POINTS) {
      if (settings.pointDensity < 1.0) {
        geometry = this.applyPointDensity(geometry, settings.pointDensity);
      }
      this.geometry = geometry;
      this.material = this.createPointsMaterial(settings.baseColor, settings.pointSize);
      this.points = new THREE.Points(this.geometry, this.material);
      return this.points;
    } else {
      this.geometry = geometry;
      this.material = this.createMaterial(settings.baseColor);
      this.material.wireframe = settings.renderStyle === RenderStyle.WIREFRAME;
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      return this.mesh;
    }
  }

  updateSettings(settings: MeshSettings): void {
    if (!this.material) return;

    this.material.uniforms.uDisplacement.value = settings.displacement;
    this.material.uniforms.uNoiseScale.value = settings.noiseScale;
    this.material.uniforms.uNoiseSpeed.value = settings.noiseSpeed;
    this.material.uniforms.uSubWeight.value = settings.subWeight;
    this.material.uniforms.uBassWeight.value = settings.bassWeight;
    this.material.uniforms.uMidsWeight.value = settings.midsWeight;
    this.material.uniforms.uHighsWeight.value = settings.highsWeight;

    if (this.material.uniforms.uPointSize) {
      this.material.uniforms.uPointSize.value = settings.pointSize;
    }

    if (this.material.uniforms.uBaseColor) {
      const newColor = new THREE.Color(settings.baseColor);
      this.material.uniforms.uBaseColor.value = newColor;
    }

    if (this.mesh && this.material) {
      this.material.wireframe = settings.renderStyle === RenderStyle.WIREFRAME;
    }
  }

  update(time: number, audioFeatures: AudioFeatures, settings: MeshSettings): void {
    if (settings.pulseOnPeak && audioFeatures.peakTrigger) {
      this.peakPulseValue = 1.0;
      this.peakPulseTime = time;
    }

    const peakDecay = Math.max(0, 1.0 - (time - this.peakPulseTime) / 200);
    this.peakPulseValue = peakDecay;

    if (this.material) {
      this.material.uniforms.uTime.value = time / 1000;
      this.material.uniforms.uSubBand.value = audioFeatures.sub;
      this.material.uniforms.uBassBand.value = audioFeatures.bass;
      this.material.uniforms.uMidsBand.value = audioFeatures.mids;
      this.material.uniforms.uHighsBand.value = audioFeatures.highs;
      this.material.uniforms.uPeakPulse.value = this.peakPulseValue;
    }
  }

  getObject(): THREE.Object3D | null {
    return this.currentRenderStyle === RenderStyle.POINTS ? this.points : this.mesh;
  }

  dispose(): void {
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    this.mesh = null;
    this.points = null;
  }
}
