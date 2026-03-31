import { simplexNoise3D } from './simplexNoise.glsl';

export const mediaVertexShader = `
${simplexNoise3D}

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float time;
uniform float geometryDisplacement;
uniform float bassEnergy;
uniform float energy;
uniform float peakTrigger;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);

  vec3 pos = position;

  if (geometryDisplacement > 0.01) {
    float audioIntensity = (bassEnergy * 1.5 + energy * 0.8);

    float baseNoise = snoise(pos * 1.5 + time * 0.5);

    float wavePattern = sin(pos.x * 8.0 + time * 2.0) *
                        cos(pos.y * 8.0 + time * 1.5) *
                        sin(pos.z * 8.0 + time * 2.5);

    float ripple = sin(length(pos) * 10.0 - time * 3.0) * 0.5 + 0.5;

    float displacement = (baseNoise * 0.4 + wavePattern * 0.3 + ripple * 0.3)
                        * geometryDisplacement
                        * 0.3
                        * (1.0 + audioIntensity * 2.0);

    if (peakTrigger > 0.5) {
      displacement += geometryDisplacement * 0.2 * (1.0 + bassEnergy);
    }

    pos += normal * displacement;
  }

  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const mediaFragmentShader = `
uniform sampler2D mediaTexture;
uniform float intensity;
uniform float brightness;
uniform float contrast;
uniform float rgbSplit;
uniform float glitch;
uniform float zoomPulse;
uniform float displacement;
uniform float time;
uniform float peakTrigger;
uniform float bassEnergy;
uniform float energy;
uniform vec2 resolution;
uniform float uMediaAspect;
uniform float uViewAspect;
uniform int uFitMode;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 getAspectCorrectedUV(vec2 uv, float mediaA, float viewA, int fitMode) {
  vec2 p = uv - 0.5;

  if (fitMode == 0) {
    if (mediaA > viewA) {
      p.y *= viewA / mediaA;
    } else {
      p.x *= mediaA / viewA;
    }
  } else {
    if (mediaA > viewA) {
      p.x *= mediaA / viewA;
    } else {
      p.y *= viewA / mediaA;
    }
  }

  return p + 0.5;
}

vec2 applyDisplacement(vec2 uv, float amount, float bass, float energy) {
  if (amount < 0.01) return uv;

  vec2 center = vec2(0.5, 0.5);
  vec2 offset = uv - center;
  float dist = length(offset);

  float audioBoost = (bass * 0.3 + energy * 0.2);
  float wave = sin(dist * 15.0 - time * 2.0) * amount * 0.015 * (1.0 + audioBoost);

  float angle = atan(offset.y, offset.x);
  offset.x += cos(angle) * wave;
  offset.y += sin(angle) * wave;

  vec2 result = center + offset;
  return clamp(result, 0.0, 1.0);
}

vec2 applyGlitch(vec2 uv, float amount, float time, float bass) {
  if (amount < 0.01) return uv;

  float glitchLine = floor(uv.y * 25.0);
  float baseGlitch = amount * 0.015;
  float audioGlitch = bass * amount * 0.04;
  float timeVarying = random(vec2(glitchLine, floor(time * 6.0))) * amount * 0.02;
  float glitchOffset = (baseGlitch + audioGlitch + timeVarying);

  vec2 result = uv;
  result.x += glitchOffset;

  if (peakTrigger > 0.5 || bass > 0.6) {
    float jump = random(vec2(time, glitchLine)) * amount * 0.015;
    result.y += jump;
  }

  return clamp(result, 0.0, 1.0);
}

vec2 applyZoomPulse(vec2 uv, float amount, float energy, float peak) {
  if (amount < 0.01) return uv;

  vec2 center = vec2(0.5, 0.5);
  vec2 offset = uv - center;

  float baseZoom = amount * 0.1;
  float pulseOscillation = sin(time * 2.0 + energy * 3.14159) * amount * 0.15;
  float audioZoom = energy * amount * 0.3;
  float zoom = 1.0 + baseZoom + pulseOscillation + audioZoom;

  if (peak > 0.5) {
    zoom += amount * 0.2;
  }

  zoom = max(zoom, 0.5);

  offset /= zoom;

  vec2 result = center + offset;
  return clamp(result, 0.0, 1.0);
}

void main() {
  vec2 uv = vUv;

  if (uMediaAspect > 0.0 && uViewAspect > 0.0) {
    uv = getAspectCorrectedUV(uv, uMediaAspect, uViewAspect, uFitMode);
  }

  float intensityMult = max(intensity, 0.1);

  uv = applyDisplacement(uv, displacement * intensityMult, bassEnergy, energy);

  uv = applyZoomPulse(uv, zoomPulse * intensityMult, energy, peakTrigger);

  uv = applyGlitch(uv, glitch * intensityMult, time, bassEnergy);

  vec4 color;

  if (rgbSplit > 0.01) {
    float baseOffset = rgbSplit * intensityMult * 0.008;
    float audioOffset = energy * rgbSplit * intensityMult * 0.012;
    float totalOffset = baseOffset + audioOffset;
    vec2 uvR = clamp(uv + vec2(totalOffset, 0.0), 0.0, 1.0);
    vec2 uvG = clamp(uv, 0.0, 1.0);
    vec2 uvB = clamp(uv - vec2(totalOffset, 0.0), 0.0, 1.0);
    float r = texture2D(mediaTexture, uvR).r;
    float g = texture2D(mediaTexture, uvG).g;
    float b = texture2D(mediaTexture, uvB).b;
    color = vec4(r, g, b, 1.0);
  } else {
    color = texture2D(mediaTexture, clamp(uv, 0.0, 1.0));
  }

  float brightAdjust = (brightness - 0.5);
  float audioBright = energy * 0.3 * intensity;
  color.rgb += brightAdjust + audioBright;

  float contrastBase = 1.0 + (contrast - 0.5) * 2.0;
  float audioContrast = energy * 0.8 * intensity;
  float totalContrast = max(contrastBase + audioContrast, 0.0);
  color.rgb = ((color.rgb - 0.5) * totalContrast) + 0.5;

  gl_FragColor = color;
}
`;
