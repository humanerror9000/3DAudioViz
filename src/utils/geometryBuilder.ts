import * as THREE from 'three';

export const PHI = (1 + Math.sqrt(5)) / 2;
export const TAU = Math.PI * 2;

export interface CircleParams {
  center: [number, number];
  radius: number;
  segments?: number;
}

export interface GeometryPoints {
  vertices: THREE.Vector3[];
  edges: [number, number][];
  faces?: number[][];
}

export function createCirclePoints(params: CircleParams): THREE.Vector3[] {
  const { center, radius, segments = 64 } = params;
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * TAU;
    const x = center[0] + Math.cos(angle) * radius;
    const y = center[1] + Math.sin(angle) * radius;
    points.push(new THREE.Vector3(x, y, 0));
  }

  return points;
}

export function createFlowerOfLife(rings: number = 3): GeometryPoints {
  const radius = 1;
  const circles: CircleParams[] = [];
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];

  circles.push({ center: [0, 0], radius });

  for (let ring = 1; ring <= rings; ring++) {
    const numCircles = ring * 6;
    const ringRadius = radius * 2 * ring;

    for (let i = 0; i < numCircles; i++) {
      const angle = (i / numCircles) * TAU;
      const x = Math.cos(angle) * ringRadius;
      const y = Math.sin(angle) * ringRadius;
      circles.push({ center: [x, y], radius });
    }
  }

  circles.forEach((circle, circleIdx) => {
    const circlePoints = createCirclePoints(circle);
    const startIdx = vertices.length;
    vertices.push(...circlePoints);

    for (let i = 0; i < circlePoints.length - 1; i++) {
      edges.push([startIdx + i, startIdx + i + 1]);
    }
  });

  return { vertices, edges };
}

export function createSeedOfLife(): GeometryPoints {
  const radius = 1;
  const circles: CircleParams[] = [];
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];

  circles.push({ center: [0, 0], radius });

  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * TAU;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    circles.push({ center: [x, y], radius });
  }

  circles.forEach((circle) => {
    const circlePoints = createCirclePoints(circle);
    const startIdx = vertices.length;
    vertices.push(...circlePoints);

    for (let i = 0; i < circlePoints.length - 1; i++) {
      edges.push([startIdx + i, startIdx + i + 1]);
    }
  });

  return { vertices, edges };
}

export function createMetatronsCube(): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];

  const seedOfLife = createSeedOfLife();

  const intersectionPoints: THREE.Vector3[] = [
    new THREE.Vector3(0, 0, 0)
  ];

  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * TAU;
    intersectionPoints.push(new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0));
  }

  for (let i = 0; i < 6; i++) {
    const angle = ((i + 0.5) / 6) * TAU;
    const innerAngle = angle + Math.PI / 6;
    intersectionPoints.push(new THREE.Vector3(
      Math.cos(innerAngle) * 0.5,
      Math.sin(innerAngle) * 0.5,
      0
    ));
  }

  vertices.push(...intersectionPoints);

  for (let i = 1; i < intersectionPoints.length; i++) {
    edges.push([0, i]);
  }

  for (let i = 1; i <= 6; i++) {
    const next = i === 6 ? 1 : i + 1;
    edges.push([i, next]);
  }

  for (let i = 7; i <= 12; i++) {
    const next = i === 12 ? 7 : i + 1;
    edges.push([i, next]);
  }

  for (let i = 1; i <= 6; i++) {
    edges.push([i, i + 6]);
  }

  return { vertices, edges };
}

export function createVesicaPiscis(): GeometryPoints {
  const radius = 1;
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];

  const circle1 = createCirclePoints({ center: [-radius / 2, 0], radius });
  const circle2 = createCirclePoints({ center: [radius / 2, 0], radius });

  const startIdx1 = vertices.length;
  vertices.push(...circle1);
  for (let i = 0; i < circle1.length - 1; i++) {
    edges.push([startIdx1 + i, startIdx1 + i + 1]);
  }

  const startIdx2 = vertices.length;
  vertices.push(...circle2);
  for (let i = 0; i < circle2.length - 1; i++) {
    edges.push([startIdx2 + i, startIdx2 + i + 1]);
  }

  return { vertices, edges };
}

export function createGoldenSpiral(turns: number = 3): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const pointsPerTurn = 100;
  const totalPoints = pointsPerTurn * turns;

  for (let i = 0; i <= totalPoints; i++) {
    const theta = (i / pointsPerTurn) * TAU;
    const r = Math.pow(PHI, theta / Math.PI);
    const scale = 0.2;
    const x = r * Math.cos(theta) * scale;
    const y = r * Math.sin(theta) * scale;

    vertices.push(new THREE.Vector3(x, y, 0));

    if (i > 0) {
      edges.push([i - 1, i]);
    }
  }

  return { vertices, edges };
}

export function createSriYantra(): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];

  const outerCirclePoints = createCirclePoints({ center: [0, 0], radius: 2 });
  let startIdx = vertices.length;
  vertices.push(...outerCirclePoints);
  for (let i = 0; i < outerCirclePoints.length - 1; i++) {
    edges.push([startIdx + i, startIdx + i + 1]);
  }

  const innerCirclePoints = createCirclePoints({ center: [0, 0], radius: 1.8 });
  startIdx = vertices.length;
  vertices.push(...innerCirclePoints);
  for (let i = 0; i < innerCirclePoints.length - 1; i++) {
    edges.push([startIdx + i, startIdx + i + 1]);
  }

  const triangleScale = 1.5;
  const upwardTriangles = [
    [
      new THREE.Vector3(0, triangleScale, 0),
      new THREE.Vector3(-triangleScale * 0.866, -triangleScale * 0.5, 0),
      new THREE.Vector3(triangleScale * 0.866, -triangleScale * 0.5, 0)
    ],
    [
      new THREE.Vector3(0, triangleScale * 0.7, 0),
      new THREE.Vector3(-triangleScale * 0.6, -triangleScale * 0.35, 0),
      new THREE.Vector3(triangleScale * 0.6, -triangleScale * 0.35, 0)
    ],
    [
      new THREE.Vector3(0, triangleScale * 0.4, 0),
      new THREE.Vector3(-triangleScale * 0.35, -triangleScale * 0.2, 0),
      new THREE.Vector3(triangleScale * 0.35, -triangleScale * 0.2, 0)
    ],
    [
      new THREE.Vector3(0, triangleScale * 0.2, 0),
      new THREE.Vector3(-triangleScale * 0.17, -triangleScale * 0.1, 0),
      new THREE.Vector3(triangleScale * 0.17, -triangleScale * 0.1, 0)
    ]
  ];

  const downwardTriangles = [
    [
      new THREE.Vector3(0, -triangleScale, 0),
      new THREE.Vector3(-triangleScale * 0.866, triangleScale * 0.5, 0),
      new THREE.Vector3(triangleScale * 0.866, triangleScale * 0.5, 0)
    ],
    [
      new THREE.Vector3(0, -triangleScale * 0.7, 0),
      new THREE.Vector3(-triangleScale * 0.6, triangleScale * 0.35, 0),
      new THREE.Vector3(triangleScale * 0.6, triangleScale * 0.35, 0)
    ],
    [
      new THREE.Vector3(0, -triangleScale * 0.4, 0),
      new THREE.Vector3(-triangleScale * 0.35, triangleScale * 0.2, 0),
      new THREE.Vector3(triangleScale * 0.35, triangleScale * 0.2, 0)
    ],
    [
      new THREE.Vector3(0, -triangleScale * 0.2, 0),
      new THREE.Vector3(-triangleScale * 0.17, triangleScale * 0.1, 0),
      new THREE.Vector3(triangleScale * 0.17, triangleScale * 0.1, 0)
    ],
    [
      new THREE.Vector3(0, -triangleScale * 0.1, 0),
      new THREE.Vector3(-triangleScale * 0.09, triangleScale * 0.05, 0),
      new THREE.Vector3(triangleScale * 0.09, triangleScale * 0.05, 0)
    ]
  ];

  [...upwardTriangles, ...downwardTriangles].forEach(triangle => {
    const idx = vertices.length;
    vertices.push(...triangle);
    edges.push([idx, idx + 1]);
    edges.push([idx + 1, idx + 2]);
    edges.push([idx + 2, idx]);
  });

  return { vertices, edges };
}

export function createPlatonicSolid(type: 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'icosahedron'): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const faces: number[][] = [];

  switch (type) {
    case 'tetrahedron': {
      const a = 1 / Math.sqrt(3);
      vertices.push(
        new THREE.Vector3(a, a, a),
        new THREE.Vector3(a, -a, -a),
        new THREE.Vector3(-a, a, -a),
        new THREE.Vector3(-a, -a, a)
      );
      edges.push([0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]);
      faces.push([0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]);
      break;
    }

    case 'cube': {
      vertices.push(
        new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(1, -1, -1),
        new THREE.Vector3(1, 1, -1),
        new THREE.Vector3(-1, 1, -1),
        new THREE.Vector3(-1, -1, 1),
        new THREE.Vector3(1, -1, 1),
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(-1, 1, 1)
      );
      edges.push(
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      );
      faces.push(
        [0, 1, 2, 3], [4, 5, 6, 7],
        [0, 1, 5, 4], [2, 3, 7, 6],
        [0, 3, 7, 4], [1, 2, 6, 5]
      );
      break;
    }

    case 'octahedron': {
      vertices.push(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, -1)
      );
      edges.push(
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 4], [2, 5], [3, 4], [3, 5]
      );
      faces.push(
        [0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2],
        [1, 2, 5], [1, 5, 3], [1, 3, 4], [1, 4, 2]
      );
      break;
    }

    case 'icosahedron': {
      const t = PHI;
      vertices.push(
        new THREE.Vector3(-1, t, 0), new THREE.Vector3(1, t, 0),
        new THREE.Vector3(-1, -t, 0), new THREE.Vector3(1, -t, 0),
        new THREE.Vector3(0, -1, t), new THREE.Vector3(0, 1, t),
        new THREE.Vector3(0, -1, -t), new THREE.Vector3(0, 1, -t),
        new THREE.Vector3(t, 0, -1), new THREE.Vector3(t, 0, 1),
        new THREE.Vector3(-t, 0, -1), new THREE.Vector3(-t, 0, 1)
      );
      edges.push(
        [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
        [1, 5], [1, 7], [1, 8], [1, 9],
        [2, 11], [2, 4], [2, 3], [2, 6], [2, 10],
        [3, 4], [3, 6], [3, 8], [3, 9],
        [4, 5], [4, 9], [4, 11],
        [5, 9], [5, 11],
        [6, 7], [6, 8], [6, 10],
        [7, 8], [7, 10],
        [8, 9],
        [10, 11]
      );
      break;
    }

    case 'dodecahedron': {
      const t = PHI;
      const r = 1 / t;
      vertices.push(
        new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1),
        new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, -1, -1),
        new THREE.Vector3(-1, 1, 1), new THREE.Vector3(-1, 1, -1),
        new THREE.Vector3(-1, -1, 1), new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(0, r, t), new THREE.Vector3(0, r, -t),
        new THREE.Vector3(0, -r, t), new THREE.Vector3(0, -r, -t),
        new THREE.Vector3(r, t, 0), new THREE.Vector3(r, -t, 0),
        new THREE.Vector3(-r, t, 0), new THREE.Vector3(-r, -t, 0),
        new THREE.Vector3(t, 0, r), new THREE.Vector3(t, 0, -r),
        new THREE.Vector3(-t, 0, r), new THREE.Vector3(-t, 0, -r)
      );
      edges.push(
        [0, 8], [0, 12], [0, 16], [1, 9], [1, 12], [1, 17],
        [2, 10], [2, 13], [2, 16], [3, 11], [3, 13], [3, 17],
        [4, 8], [4, 14], [4, 18], [5, 9], [5, 14], [5, 19],
        [6, 10], [6, 15], [6, 18], [7, 11], [7, 15], [7, 19],
        [8, 10], [9, 11], [12, 14], [13, 15], [16, 17], [18, 19]
      );
      break;
    }
  }

  return { vertices, edges, faces };
}

export function createTorus(majorRadius: number = 1, minorRadius: number = 0.3, segments: number = 32, tubeSegments: number = 16): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];

  for (let i = 0; i <= segments; i++) {
    const u = (i / segments) * TAU;

    for (let j = 0; j <= tubeSegments; j++) {
      const v = (j / tubeSegments) * TAU;

      const x = (majorRadius + minorRadius * Math.cos(v)) * Math.cos(u);
      const y = (majorRadius + minorRadius * Math.cos(v)) * Math.sin(u);
      const z = minorRadius * Math.sin(v);

      vertices.push(new THREE.Vector3(x, y, z));

      if (i > 0) {
        const current = i * (tubeSegments + 1) + j;
        const prev = (i - 1) * (tubeSegments + 1) + j;
        edges.push([prev, current]);
      }

      if (j > 0) {
        const current = i * (tubeSegments + 1) + j;
        const prev = i * (tubeSegments + 1) + (j - 1);
        edges.push([prev, current]);
      }
    }
  }

  return { vertices, edges };
}

export function createMerkaba(): GeometryPoints {
  const tetrahedron1 = createPlatonicSolid('tetrahedron');
  const tetrahedron2 = createPlatonicSolid('tetrahedron');

  const vertices: THREE.Vector3[] = [...tetrahedron1.vertices];
  const edges: [number, number][] = [...tetrahedron1.edges];

  const offset = tetrahedron1.vertices.length;
  tetrahedron2.vertices.forEach(v => {
    const rotated = v.clone();
    rotated.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
    vertices.push(rotated);
  });

  tetrahedron2.edges.forEach(([a, b]) => {
    edges.push([a + offset, b + offset]);
  });

  return { vertices, edges };
}

export function createHexagram(): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const radius = 1.5;

  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * TAU;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    vertices.push(new THREE.Vector3(x, y, 0));
  }

  edges.push([0, 2], [2, 4], [4, 0]);
  edges.push([1, 3], [3, 5], [5, 1]);

  return { vertices, edges };
}

export function createPentagram(): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const radius = 1.5;

  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * TAU - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    vertices.push(new THREE.Vector3(x, y, 0));
  }

  edges.push([0, 2], [2, 4], [4, 1], [1, 3], [3, 0]);

  return { vertices, edges };
}

export function createEnneagram(): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const radius = 1.5;

  for (let i = 0; i < 9; i++) {
    const angle = (i / 9) * TAU - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    vertices.push(new THREE.Vector3(x, y, 0));
  }

  for (let i = 0; i < 9; i++) {
    edges.push([i, (i + 1) % 9]);
  }

  edges.push([0, 3], [3, 6], [6, 0]);
  edges.push([1, 4], [4, 7], [7, 1]);
  edges.push([2, 5], [5, 8], [8, 2]);

  return { vertices, edges };
}

export function createCelticKnot(): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const radius = 1.2;
  const innerRadius = 0.6;
  const segments = 8;

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * TAU;
    const x1 = Math.cos(angle) * radius;
    const y1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle) * innerRadius;
    const y2 = Math.sin(angle) * innerRadius;

    vertices.push(new THREE.Vector3(x1, y1, 0));
    vertices.push(new THREE.Vector3(x2, y2, 0));

    const outerIdx = i * 2;
    const innerIdx = i * 2 + 1;
    const nextOuterIdx = ((i + 1) % segments) * 2;
    const nextInnerIdx = ((i + 1) % segments) * 2 + 1;

    edges.push([outerIdx, nextInnerIdx]);
    edges.push([innerIdx, nextOuterIdx]);
  }

  return { vertices, edges };
}

export function createMandala(layers: number = 6): GeometryPoints {
  const vertices: THREE.Vector3[] = [];
  const edges: [number, number][] = [];
  const petalCount = 8;

  for (let layer = 1; layer <= layers; layer++) {
    const layerRadius = (layer / layers) * 1.5;
    const petalRadius = layerRadius * 0.3;

    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * TAU;
      const centerX = Math.cos(angle) * layerRadius;
      const centerY = Math.sin(angle) * layerRadius;

      const petalSegments = 16;
      const startIdx = vertices.length;

      for (let j = 0; j <= petalSegments; j++) {
        const petalAngle = (j / petalSegments) * TAU;
        const x = centerX + Math.cos(petalAngle) * petalRadius;
        const y = centerY + Math.sin(petalAngle) * petalRadius;
        vertices.push(new THREE.Vector3(x, y, 0));

        if (j > 0) {
          edges.push([startIdx + j - 1, startIdx + j]);
        }
      }
    }

    const layerStart = vertices.length - petalCount * (petalSegments + 1);
    for (let i = 0; i < petalCount; i++) {
      const currentPetal = layerStart + i * (petalSegments + 1);
      const nextPetal = layerStart + ((i + 1) % petalCount) * (petalSegments + 1);
      edges.push([currentPetal, nextPetal]);
    }
  }

  return { vertices, edges };
}
