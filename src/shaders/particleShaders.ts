import { simplexNoise3D } from './simplexNoise.glsl';

// ─── CORE LAYER ───────────────────────────────────────────────────────────────
// Small, bright, tight particles — the luminous heart of the field

export const particleCoreVertexShader = `
${simplexNoise3D}

uniform float uTime;
uniform float uTurbulence;
uniform float uFieldSize;
uniform float uCoreSize;
uniform float uCoreBrightness;
uniform float uNoiseSpeed;
uniform float uEnergy;
uniform float uBass;
uniform float uMids;
uniform float uHighs;
uniform float uPeakBurst;
uniform float uBassReactivity;
uniform float uHighsReactivity;
uniform float uEnergyReactivity;
uniform vec3  uCoreColor;

varying vec3  vColor;
varying float vAlpha;
varying float vBrightness;

void main() {
  vec3 pos = position;

  // Layered noise for organic turbulence
  vec3 noisePos  = pos * 0.25 + vec3(uTime * uNoiseSpeed);
  vec3 noisePos2 = pos * 0.08 + vec3(uTime * uNoiseSpeed * 0.4 + 50.0);

  vec3 noiseVel = vec3(
    snoise(noisePos),
    snoise(noisePos + vec3(100.0)),
    snoise(noisePos + vec3(200.0))
  );
  vec3 noiseVel2 = vec3(
    snoise(noisePos2),
    snoise(noisePos2 + vec3(300.0)),
    snoise(noisePos2 + vec3(400.0))
  );

  // Bass drives large slow movement, highs drive small fast jitter
  float bassMove  = uBass  * uBassReactivity  * 10.0;
  float highsMove = uHighs * uHighsReactivity *  3.0;

  pos += noiseVel  * (uTurbulence + bassMove);
  pos += noiseVel2 * highsMove;

  // Peak burst — explosive outward push
  float burstStrength = uPeakBurst * 18.0;
  pos += normalize(pos + 0.001) * burstStrength;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float depth = max(-mvPosition.z, 0.1);

  // Perspective-correct size with audio energy boost
  float energyBoost = 1.0 + uEnergy * uEnergyReactivity * 6.0 + uPeakBurst * 5.0;
  float sz = uCoreSize * (300.0 / depth) * energyBoost;
  gl_PointSize = clamp(sz, 1.0, 40.0);
  gl_Position  = projectionMatrix * mvPosition;

  // Color: shift from coreColor toward white at high energy
  float whiteness = uEnergy * uEnergyReactivity * 0.6 + uHighs * 0.3 + uPeakBurst * 0.5;
  vColor      = mix(uCoreColor, vec3(1.0), clamp(whiteness, 0.0, 0.85));
  vBrightness = uCoreBrightness + uEnergy * uEnergyReactivity * 2.0 + uPeakBurst * 3.0;
  vAlpha      = 1.0;
}
`;

export const particleCoreFragmentShader = `
varying vec3  vColor;
varying float vAlpha;
varying float vBrightness;

void main() {
  vec2  center = gl_PointCoord - vec2(0.5);
  float dist   = length(center) * 2.0;
  if (dist > 1.0) discard;

  // Soft bright core with sharp falloff at edge
  float core  = 1.0 - smoothstep(0.0, 0.35, dist);   // tight bright center
  float glow  = 1.0 - smoothstep(0.0, 1.0,  dist);   // wider soft halo
  float alpha = (core * 0.9 + glow * 0.35) * vAlpha;
  alpha = clamp(alpha, 0.0, 1.0);

  vec3 color = vColor * vBrightness;
  gl_FragColor = vec4(color, alpha);
}
`;

// ─── OUTER LAYER ──────────────────────────────────────────────────────────────
// Large, soft, dim particles — volumetric depth and atmosphere

export const particleOuterVertexShader = `
${simplexNoise3D}

uniform float uTime;
uniform float uTurbulence;
uniform float uFieldSize;
uniform float uOuterSize;
uniform float uOuterOpacity;
uniform float uNoiseSpeed;
uniform float uEnergy;
uniform float uBass;
uniform float uHighs;
uniform float uPeakBurst;
uniform float uBassReactivity;
uniform float uEnergyReactivity;
uniform vec3  uOuterColor;

varying vec3  vColor;
varying float vAlpha;

void main() {
  vec3 pos = position;

  // Slower, larger-scale noise for the outer cloud
  vec3 noisePos = pos * 0.12 + vec3(uTime * uNoiseSpeed * 0.3);
  vec3 noiseVel = vec3(
    snoise(noisePos),
    snoise(noisePos + vec3(500.0)),
    snoise(noisePos + vec3(600.0))
  );

  float bassMove = uBass * uBassReactivity * 8.0;
  pos += noiseVel * (uTurbulence * 0.6 + bassMove);
  pos += normalize(pos + 0.001) * uPeakBurst * 12.0;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float depth = max(-mvPosition.z, 0.1);

  float energyBoost = 1.0 + uEnergy * uEnergyReactivity * 3.0 + uPeakBurst * 2.0;
  float sz = uOuterSize * (300.0 / depth) * energyBoost;
  gl_PointSize = clamp(sz, 2.0, 80.0);
  gl_Position  = projectionMatrix * mvPosition;

  // Outer layer shifts color with bass
  float bassShift = uBass * uBassReactivity * 0.5;
  vColor = mix(uOuterColor, vec3(1.0, 0.3, 0.8), bassShift);
  vAlpha = uOuterOpacity * (1.0 + uEnergy * uEnergyReactivity * 0.8);
}
`;

export const particleOuterFragmentShader = `
varying vec3  vColor;
varying float vAlpha;

void main() {
  vec2  center = gl_PointCoord - vec2(0.5);
  float dist   = length(center) * 2.0;
  if (dist > 1.0) discard;

  // Pure soft gaussian — no hard core
  float alpha = exp(-dist * dist * 3.5) * vAlpha;
  alpha = clamp(alpha, 0.0, 1.0);

  gl_FragColor = vec4(vColor, alpha);
}
`;

// ─── LEGACY EXPORTS (kept for any existing references) ────────────────────────
export const particleVertexShader   = particleCoreVertexShader;
export const particleFragmentShader = particleCoreFragmentShader;
