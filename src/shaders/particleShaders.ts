import { simplexNoise3D } from './simplexNoise.glsl';

export const particleVertexShader = `
${simplexNoise3D}

uniform float uTime;
uniform float uTurbulence;
uniform float uFieldSize;
uniform float uParticleSize;
uniform float uEnergy;
uniform float uBass;
uniform float uHighs;
uniform float uPeakBurst;

varying vec3 vColor;
varying float vBrightness;

void main() {
  vec3 pos = position;

  vec3 noisePos = pos * 0.3 + vec3(uTime * 0.2);
  vec3 noiseVel = vec3(
    snoise(noisePos),
    snoise(noisePos + vec3(100.0)),
    snoise(noisePos + vec3(200.0))
  );

  pos += noiseVel * uTurbulence * (1.0 + uBass * 8.0);

  pos += noiseVel * uPeakBurst * 15.0;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  float depth = -mvPosition.z;
  float attenuation = 300.0 / depth;
  float energyBoost = 1.0 + uEnergy * 10.0 + uPeakBurst * 8.0;
  gl_PointSize = clamp(uParticleSize * attenuation * energyBoost, 1.0, 30.0);

  gl_Position = projectionMatrix * mvPosition;

  float colorMix = uEnergy * 0.7 + uHighs * 0.3;
  vec3 lowEnergyColor = vec3(0.1, 0.3, 0.8);
  vec3 highEnergyColor = vec3(1.0, 0.2, 0.6);
  vColor = mix(lowEnergyColor, highEnergyColor, colorMix);

  vBrightness = 0.5 + uEnergy * 3.0 + uPeakBurst * 2.5;
}
`;

export const particleFragmentShader = `
varying vec3 vColor;
varying float vBrightness;

void main() {
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center) * 2.0;

  if (dist > 1.0) {
    discard;
  }

  float alpha = 1.0 - dist;
  alpha = pow(alpha, 2.5);
  alpha *= 0.4;

  vec3 color = vColor * clamp(vBrightness, 0.3, 2.0);

  gl_FragColor = vec4(color, alpha);
}
`;
