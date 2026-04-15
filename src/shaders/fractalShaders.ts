export const fractalVertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export const mandelbulbFragmentShader = `
uniform float uTime;
uniform float uBass;
uniform float uEnergy;
uniform float uHighs;
uniform float uPeakPulse;
uniform float uPower;
uniform int uIterations;
uniform float uBailout;
uniform float uZoom;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uRotationSpeed;
varying vec2 vUv;

const int MAX_STEPS = 64;
const float MIN_DIST = 0.001;
const float MAX_DIST = 100.0;

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat3(
    c, 0.0, s,
    0.0, 1.0, 0.0,
    -s, 0.0, c
  );
}

float mandelbulbDE(vec3 pos) {
  vec3 z = pos;
  float dr = 1.0;
  float r = 0.0;
  float power = uPower + uBass * 0.5;

  for (int i = 0; i < 16; i++) {
    if (i >= uIterations) break;

    r = length(z);
    if (r > uBailout) break;

    float theta = acos(z.z / r);
    float phi = atan(z.y, z.x);
    dr = pow(r, power - 1.0) * power * dr + 1.0;

    float zr = pow(r, power);
    theta = theta * power;
    phi = phi * power;

    z = zr * vec3(
      sin(theta) * cos(phi),
      sin(phi) * sin(theta),
      cos(theta)
    );
    z += pos;
  }

  return 0.5 * log(r) * r / dr;
}

float map(vec3 p) {
  return mandelbulbDE(p);
}

vec3 calcNormal(vec3 p) {
  const vec2 e = vec2(0.001, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)
  ));
}

float calcAO(vec3 pos, vec3 nor) {
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = 0.01 + 0.12 * float(i) / 4.0;
    float d = map(pos + h * nor);
    occ += (h - d) * sca;
    sca *= 0.95;
  }
  return clamp(1.0 - 3.0 * occ, 0.0, 1.0);
}

float calcShadow(vec3 ro, vec3 rd) {
  float res = 1.0;
  float t = 0.01;
  for (int i = 0; i < 32; i++) {
    float h = map(ro + rd * t);
    res = min(res, 8.0 * h / t);
    t += clamp(h, 0.02, 0.2);
    if (h < 0.001 || t > 10.0) break;
  }
  return clamp(res, 0.0, 1.0);
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.x *= 1.0;

  vec3 ro = vec3(0.0, 0.0, 3.0 * uZoom);
  ro = rotateY(uTime * uRotationSpeed) * ro;

  vec3 target = vec3(0.0);
  vec3 forward = normalize(target - ro);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), forward));
  vec3 up = cross(forward, right);
  vec3 rd = normalize(uv.x * right + uv.y * up + forward * 1.5);

  float t = 0.0;
  float glow = 0.0;
  bool hit = false;

  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);

    glow += 0.1 / (1.0 + d * d * 100.0);

    if (d < MIN_DIST) {
      hit = true;
      break;
    }

    if (t > MAX_DIST) break;
    t += d * 0.5;
  }

  vec3 color = vec3(0.0);

  if (hit) {
    vec3 p = ro + rd * t;
    vec3 nor = calcNormal(p);

    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(nor, lightDir), 0.0);
    float shadow = calcShadow(p, lightDir);
    float ao = calcAO(p, nor);

    vec3 baseColor = mix(uColorA, uColorB, uEnergy);

    color = baseColor * (diff * shadow * 0.8 + 0.2) * ao;

    float fresnel = pow(1.0 - max(dot(nor, -rd), 0.0), 3.0);
    color += uColorB * fresnel * uHighs * 0.5;
  }

  color += uColorB * glow * uHighs * 0.3;

  float pulse = uPeakPulse * 0.5;
  color *= 1.0 + pulse;

  color = pow(color, vec3(0.4545));

  gl_FragColor = vec4(color, 1.0);
}
`;

export const mengerFragmentShader = `
uniform float uTime;
uniform float uBass;
uniform float uEnergy;
uniform float uHighs;
uniform float uPeakPulse;
uniform int uMengerIterations;
uniform float uZoom;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uRotationSpeed;
varying vec2 vUv;

const int MAX_STEPS = 64;
const float MIN_DIST = 0.0005;
const float MAX_DIST = 100.0;

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat3(
    c, 0.0, s,
    0.0, 1.0, 0.0,
    -s, 0.0, c
  );
}

float sdBox(vec3 p, vec3 b) {
  vec3 d = abs(p) - b;
  return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
}

float mengerDE(vec3 p) {
  float scale = 1.0 + uBass * 0.2;
  p *= scale;
  float d = sdBox(p, vec3(1.0));

  float s = 1.0;
  for (int i = 0; i < 5; i++) {
    if (i >= uMengerIterations) break;

    vec3 a = mod(p * s, 2.0) - 1.0;
    s *= 3.0;
    vec3 r = abs(1.0 - 3.0 * abs(a));
    float da = max(r.x, r.y);
    float db = max(r.y, r.z);
    float dc = max(r.z, r.x);
    float c = (min(da, min(db, dc)) - 1.0) / s;
    d = max(d, c);
  }

  return d / scale;
}

float map(vec3 p) {
  return mengerDE(p);
}

vec3 calcNormal(vec3 p) {
  const vec2 e = vec2(0.0005, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)
  ));
}

float calcAO(vec3 pos, vec3 nor) {
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = 0.01 + 0.12 * float(i) / 4.0;
    float d = map(pos + h * nor);
    occ += (h - d) * sca;
    sca *= 0.95;
  }
  return clamp(1.0 - 3.0 * occ, 0.0, 1.0);
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.x *= 1.0;

  vec3 ro = vec3(0.0, 0.0, 3.0 * uZoom);
  ro = rotateY(uTime * uRotationSpeed) * ro;

  vec3 target = vec3(0.0);
  vec3 forward = normalize(target - ro);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), forward));
  vec3 up = cross(forward, right);
  vec3 rd = normalize(uv.x * right + uv.y * up + forward * 1.5);

  float t = 0.0;
  float glow = 0.0;
  bool hit = false;

  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);

    glow += 0.05 / (1.0 + d * d * 200.0);

    if (d < MIN_DIST) {
      hit = true;
      break;
    }

    if (t > MAX_DIST) break;
    t += d;
  }

  vec3 color = vec3(0.0);

  if (hit) {
    vec3 p = ro + rd * t;
    vec3 nor = calcNormal(p);

    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(nor, lightDir), 0.0);
    float ao = calcAO(p, nor);

    vec3 structColor = vec3(0.3) * uEnergy;
    vec3 edgeColor = uColorB;

    float edge = 1.0 - smoothstep(0.0, 0.02, abs(length(p) - 0.9));
    color = mix(structColor, edgeColor, edge);
    color *= (diff * 0.8 + 0.2) * ao;

    float fresnel = pow(1.0 - max(dot(nor, -rd), 0.0), 2.0);
    color += edgeColor * fresnel * 0.3;
  }

  color += uColorB * glow * uHighs * 0.2;

  float pulse = uPeakPulse * 0.3;
  color *= 1.0 + pulse;

  color = pow(color, vec3(0.4545));

  gl_FragColor = vec4(color, 1.0);
}
`;

export const juliaFragmentShader = `
uniform float uTime;
uniform float uBass;
uniform float uEnergy;
uniform float uHighs;
uniform float uPeakPulse;
uniform vec4 uJuliaC;
uniform int uIterations;
uniform float uBailout;
uniform float uZoom;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uRotationSpeed;
varying vec2 vUv;

const int MAX_STEPS = 64;
const float MIN_DIST = 0.001;
const float MAX_DIST = 100.0;

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat3(
    c, 0.0, s,
    0.0, 1.0, 0.0,
    -s, 0.0, c
  );
}

vec4 qMul(vec4 q1, vec4 q2) {
  return vec4(
    q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y,
    q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x,
    q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w,
    q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z
  );
}

float qLength(vec4 q) {
  return sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);
}

float juliaDE(vec3 pos) {
  vec4 z = vec4(pos, 0.0);
  vec4 c = vec4(uJuliaC.x + uBass * 0.1, uJuliaC.yzw);
  float dr = 1.0;
  float r = 0.0;

  for (int i = 0; i < 16; i++) {
    if (i >= uIterations) break;

    r = qLength(z);
    if (r > uBailout) break;

    dr = 2.0 * r * dr;
    z = qMul(z, z) + c;
  }

  return 0.5 * log(r) * r / dr;
}

float map(vec3 p) {
  return juliaDE(p);
}

vec3 calcNormal(vec3 p) {
  const vec2 e = vec2(0.001, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)
  ));
}

float calcAO(vec3 pos, vec3 nor) {
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = 0.01 + 0.12 * float(i) / 4.0;
    float d = map(pos + h * nor);
    occ += (h - d) * sca;
    sca *= 0.95;
  }
  return clamp(1.0 - 3.0 * occ, 0.0, 1.0);
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.x *= 1.0;

  vec3 ro = vec3(0.0, 0.0, 3.0 * uZoom);
  ro = rotateY(uTime * uRotationSpeed) * ro;

  vec3 target = vec3(0.0);
  vec3 forward = normalize(target - ro);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), forward));
  vec3 up = cross(forward, right);
  vec3 rd = normalize(uv.x * right + uv.y * up + forward * 1.5);

  float t = 0.0;
  float glow = 0.0;
  bool hit = false;

  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);

    glow += 0.08 / (1.0 + d * d * 150.0);

    if (d < MIN_DIST) {
      hit = true;
      break;
    }

    if (t > MAX_DIST) break;
    t += d * 0.5;
  }

  vec3 color = vec3(0.0);

  if (hit) {
    vec3 p = ro + rd * t;
    vec3 nor = calcNormal(p);

    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(nor, lightDir), 0.0);
    float ao = calcAO(p, nor);

    float saturation = uEnergy;
    vec3 baseColor = mix(uColorA, mix(uColorA, uColorB, saturation), 0.7);

    color = baseColor * (diff * 0.7 + 0.3) * ao;

    float fresnel = pow(1.0 - max(dot(nor, -rd), 0.0), 3.0);
    color += uColorB * fresnel * 0.4;
  }

  color += uColorB * glow * uHighs * 0.25;

  float pulse = uPeakPulse * 0.4;
  color *= 1.0 + pulse;

  color = pow(color, vec3(0.4545));

  gl_FragColor = vec4(color, 1.0);
}
`;
