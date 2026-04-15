import * as THREE from 'three';
import { EffectComposer } from 'three-stdlib';
import { RenderPass } from 'three-stdlib';
import { UnrealBloomPass } from 'three-stdlib';
import { GeometryType, GeometrySettings, GeometryLayer } from '../types/geometry';
import { AudioFeatures } from '../types/audio';
import {
  createFlowerOfLife,
  createSeedOfLife,
  createMetatronsCube,
  createVesicaPiscis,
  createGoldenSpiral,
  createSriYantra,
  createPlatonicSolid,
  createTorus,
  createMerkaba,
  GeometryPoints
} from '../utils/geometryBuilder';

interface LayerMesh {
  id: string;
  group: THREE.Group;
  geometryType: GeometryType;
  baseRotation: THREE.Euler;
}

export class SacredGeometryRenderer {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private layerMeshes: Map<string, LayerMesh> = new Map();
  private time: number = 0;
  private audioFeatures: AudioFeatures | null = null;

  initialize(canvas: HTMLCanvasElement, settings: GeometrySettings): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(width, height);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(settings.backgroundColor);

    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      settings.bloomStrength,
      settings.bloomRadius,
      settings.bloomThreshold
    );
    this.bloomPass.enabled = settings.bloom;
    this.composer.addPass(this.bloomPass);

    this.updateLayers(settings.layers);
  }

  private createGeometry(type: GeometryType, subdivisions: number): GeometryPoints {
    switch (type) {
      case 'flower-of-life':
        return createFlowerOfLife(subdivisions);
      case 'seed-of-life':
        return createSeedOfLife();
      case 'metatrons-cube':
        return createMetatronsCube();
      case 'vesica-piscis':
        return createVesicaPiscis();
      case 'golden-spiral':
        return createGoldenSpiral(subdivisions);
      case 'sri-yantra':
        return createSriYantra();
      case 'tetrahedron':
        return createPlatonicSolid('tetrahedron');
      case 'cube':
        return createPlatonicSolid('cube');
      case 'octahedron':
        return createPlatonicSolid('octahedron');
      case 'dodecahedron':
        return createPlatonicSolid('dodecahedron');
      case 'icosahedron':
        return createPlatonicSolid('icosahedron');
      case 'torus':
        return createTorus(1, 0.3, 32, 16);
      case 'merkaba':
        return createMerkaba();
      default:
        return createFlowerOfLife(3);
    }
  }

  private createLayerMesh(layer: GeometryLayer): LayerMesh {
    const group = new THREE.Group();
    const geometryData = this.createGeometry(layer.geometryType, layer.subdivisions);

    if (layer.renderMode === 'wireframe' || layer.renderMode === 'mixed') {
      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(layer.color),
        linewidth: layer.strokeWidth,
        opacity: layer.opacity,
        transparent: layer.opacity < 1
      });

      geometryData.edges.forEach(([startIdx, endIdx]) => {
        const points = [
          geometryData.vertices[startIdx],
          geometryData.vertices[endIdx]
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
      });

      if (layer.glowIntensity > 0) {
        const glowMaterial = new THREE.LineBasicMaterial({
          color: new THREE.Color(layer.color),
          linewidth: layer.strokeWidth * 2,
          opacity: layer.opacity * layer.glowIntensity * 0.3,
          transparent: true
        });

        geometryData.edges.forEach(([startIdx, endIdx]) => {
          const points = [
            geometryData.vertices[startIdx],
            geometryData.vertices[endIdx]
          ];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeometry, glowMaterial);
          group.add(line);
        });
      }
    }

    if (layer.renderMode === 'solid' || layer.renderMode === 'mixed') {
      if (geometryData.faces && geometryData.faces.length > 0) {
        const geometry = new THREE.BufferGeometry();
        const positions: number[] = [];
        const indices: number[] = [];

        geometryData.vertices.forEach(v => {
          positions.push(v.x, v.y, v.z);
        });

        geometryData.faces.forEach(face => {
          for (let i = 1; i < face.length - 1; i++) {
            indices.push(face[0], face[i], face[i + 1]);
          }
        });

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(layer.color),
          opacity: layer.opacity * 0.6,
          transparent: true,
          side: THREE.DoubleSide,
          shininess: 30
        });

        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
      }
    }

    if (layer.renderMode === 'points') {
      const pointsGeometry = new THREE.BufferGeometry();
      const positions: number[] = [];

      geometryData.vertices.forEach(v => {
        positions.push(v.x, v.y, v.z);
      });

      pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const pointsMaterial = new THREE.PointsMaterial({
        color: new THREE.Color(layer.color),
        size: layer.strokeWidth * 0.05,
        opacity: layer.opacity,
        transparent: layer.opacity < 1,
        sizeAttenuation: true
      });

      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      group.add(points);
    }

    group.position.set(...layer.position);
    group.rotation.set(...layer.rotation);
    group.scale.setScalar(layer.scale);
    group.visible = layer.visible;

    return {
      id: layer.id,
      group,
      geometryType: layer.geometryType,
      baseRotation: new THREE.Euler(...layer.rotation)
    };
  }

  updateLayers(layers: GeometryLayer[]): void {
    if (!this.scene) return;

    const currentIds = new Set(layers.map(l => l.id));

    this.layerMeshes.forEach((layerMesh, id) => {
      if (!currentIds.has(id)) {
        this.scene!.remove(layerMesh.group);
        this.layerMeshes.delete(id);
      }
    });

    layers.forEach(layer => {
      const existing = this.layerMeshes.get(layer.id);

      if (!existing || existing.geometryType !== layer.geometryType) {
        if (existing) {
          this.scene!.remove(existing.group);
        }

        const newMesh = this.createLayerMesh(layer);
        this.layerMeshes.set(layer.id, newMesh);
        this.scene!.add(newMesh.group);
      } else {
        this.updateLayerProperties(layer);
      }
    });
  }

  private updateLayerProperties(layer: GeometryLayer): void {
    const layerMesh = this.layerMeshes.get(layer.id);
    if (!layerMesh) return;

    layerMesh.group.visible = layer.visible;
    layerMesh.group.position.set(...layer.position);
    layerMesh.group.scale.setScalar(layer.scale);
    layerMesh.baseRotation.set(...layer.rotation);
    layerMesh.group.rotation.copy(layerMesh.baseRotation);

    layerMesh.group.traverse((child) => {
      if (child instanceof THREE.Line) {
        const material = child.material as THREE.LineBasicMaterial;
        material.color.set(layer.color);
        material.opacity = layer.opacity;
        material.transparent = layer.opacity < 1;
        material.linewidth = layer.strokeWidth;
      } else if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.color.set(layer.color);
        material.opacity = layer.opacity;
        material.transparent = layer.opacity < 1;
      } else if (child instanceof THREE.Points) {
        const material = child.material as THREE.PointsMaterial;
        material.color.set(layer.color);
        material.opacity = layer.opacity;
        material.transparent = layer.opacity < 1;
        material.size = layer.strokeWidth * 0.05;
      }
    });
  }

  updateSettings(settings: GeometrySettings): void {
    if (!this.scene || !this.bloomPass) return;

    this.scene.background = new THREE.Color(settings.backgroundColor);
    this.bloomPass.enabled = settings.bloom;
    this.bloomPass.strength = settings.bloomStrength;
    this.bloomPass.radius = settings.bloomRadius;
    this.bloomPass.threshold = settings.bloomThreshold;
  }

  updateAudioFeatures(features: AudioFeatures): void {
    this.audioFeatures = features;
  }

  render(deltaTime: number, settings: GeometrySettings): void {
    if (!this.composer || !this.scene) return;

    this.time += deltaTime * settings.animationSpeed;

    this.layerMeshes.forEach((layerMesh, id) => {
      const layer = settings.layers.find(l => l.id === id);
      if (!layer || !layer.visible) return;

      let rotationX = layerMesh.baseRotation.x;
      let rotationY = layerMesh.baseRotation.y;
      let rotationZ = layerMesh.baseRotation.z;

      if (settings.globalRotationSpeed > 0) {
        rotationY += this.time * settings.globalRotationSpeed;
      }

      let currentScale = layer.scale;

      if (layer.audioReactive && this.audioFeatures) {
        const bassScale = 1 + (this.audioFeatures.bass * settings.bassReactivity * 0.3);
        currentScale *= bassScale;

        rotationZ += this.audioFeatures.energy * settings.energyReactivity * 0.05;
        rotationX += this.audioFeatures.highs * settings.highsReactivity * 0.02;

        if (settings.peakPulse && this.audioFeatures.peakTrigger) {
          const pulse = Math.sin(this.time * 20) * 0.1 + 1;
          currentScale *= pulse;
        }

        layerMesh.group.traverse((child) => {
          if (child instanceof THREE.Line || child instanceof THREE.Mesh) {
            const material = child.material as THREE.Material & { opacity?: number };
            if (material.opacity !== undefined) {
              const energyBoost = this.audioFeatures!.energy * 0.3;
              material.opacity = Math.min(1, layer.opacity + energyBoost);
            }
          }
        });
      } else {
        layerMesh.group.traverse((child) => {
          if (child instanceof THREE.Line || child instanceof THREE.Mesh) {
            const material = child.material as THREE.Material & { opacity?: number };
            if (material.opacity !== undefined) {
              material.opacity = layer.opacity;
            }
          }
        });
      }

      layerMesh.group.scale.setScalar(currentScale);
      layerMesh.group.rotation.set(rotationX, rotationY, rotationZ);
    });

    this.composer.render();
  }

  resize(width: number, height: number): void {
    if (!this.renderer || !this.camera || !this.composer) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
  }

  dispose(): void {
    this.layerMeshes.forEach(layerMesh => {
      layerMesh.group.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    });

    this.layerMeshes.clear();
    this.composer?.dispose();
    this.renderer?.dispose();
  }
}
