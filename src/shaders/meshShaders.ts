import { simplexNoise3D } from './simplexNoise.glsl';

export const meshVertexShader = `
${simplexNoise3D}

uniform float uTime;
uniform float uDisplacement;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uSubBand;
uniform float uBassBand;
uniform float uMidsBand;
uniform float uHighsBand;
uniform float uSubWeight;
uniform float uBassWeight;
uniform float uMidsWeight;
uniform float uHighsWeight;
uniform float uPeakPulse;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;

void main() {
  vec3 pos = position;
  vec3 norm = normal;

  vec3 noisePos = pos * uNoiseScale + vec3(uTime * uNoiseSpeed);
  float noise = snoise(noisePos);

  float audioDrive =
    uSubBand * uSubWeight +
    uBassBand * uBassWeight +
    uMidsBand * uMidsWeight +
    uHighsBand * uHighsWeight;

  float totalDisplacement = uDisplacement * (noise * 0.5 + 0.5) * (1.0 + audioDrive * 2.0);
  totalDisplacement += uPeakPulse * 0.5;

  pos += norm * totalDisplacement;

  vNormal = normalize(normalMatrix * norm);
  vPosition = pos;
  vDisplacement = totalDisplacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const meshFragmentShader = `
varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;

uniform float uSubBand;
uniform float uBassBand;
uniform float uMidsBand;
uniform float uHighsBand;
uniform float uPeakPulse;
uniform vec3 uBaseColor;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));

  float diffuse = max(dot(normal, lightDir), 0.0) * 0.7 + 0.3;

  float audioIntensity = (uBassBand * 0.4 + uMidsBand * 0.3 + uHighsBand * 0.3);

  vec3 color = uBaseColor * (1.0 + audioIntensity * 0.5);
  color += vec3(uPeakPulse * 0.3);

  color *= diffuse;

  gl_FragColor = vec4(color, 1.0);
}
`;
