import { simplexNoise3D } from './simplexNoise.glsl';

export const pointsVertexShader = `
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
uniform float uPointSize;
uniform vec3 uBaseColor;

varying vec3 vColor;
varying float vAudioIntensity;

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

  vAudioIntensity = audioDrive;
  vColor = uBaseColor + vec3(audioDrive * 0.3);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  float sizeMultiplier = 1.0 + audioDrive * 0.5 + uPeakPulse * 0.3;
  gl_PointSize = uPointSize * sizeMultiplier * (50.0 / -mvPosition.z);
}
`;

export const pointsFragmentShader = `
varying vec3 vColor;
varying float vAudioIntensity;

void main() {
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);

  if (dist > 0.5) {
    discard;
  }

  float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

  vec3 finalColor = vColor * (0.8 + vAudioIntensity * 0.4);

  gl_FragColor = vec4(finalColor, alpha);
}
`;
