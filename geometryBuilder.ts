// src/utils/geometryBuilder.ts
// Islamic / Girih geometric pattern drawing utilities for Canvas 2D

export const TAU = Math.PI * 2
export const PHI = (1 + Math.sqrt(5)) / 2

// ── Colour helpers ──────────────────────────────────────────────────────────

/** Lerp between two hex colours, returning an rgba string */
export function lerpColor(a: string, b: string, t: number, alpha = 1): string {
  const ca = hexToRgb(a)
  const cb = hexToRgb(b)
  const r = Math.round(ca[0] + (cb[0] - ca[0]) * t)
  const g = Math.round(ca[1] + (cb[1] - ca[1]) * t)
  const bl = Math.round(ca[2] + (cb[2] - ca[2]) * t)
  return `rgba(${r},${g},${bl},${alpha})`
}

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16)
  ]
}

/** Map energy (0–1) through a 4-stop palette */
export function energyToColor(
  palette: [string, string, string, string],
  energy: number,
  alpha = 1
): string {
  const t = Math.max(0, Math.min(1, energy))
  if (t < 0.33) return lerpColor(palette[0], palette[1], t / 0.33, alpha)
  if (t < 0.66) return lerpColor(palette[1], palette[2], (t - 0.33) / 0.33, alpha)
  return lerpColor(palette[2], palette[3], (t - 0.66) / 0.34, alpha)
}

// ── Canvas context helpers ───────────────────────────────────────────────────

export function setGlow(ctx: CanvasRenderingContext2D, color: string, radius: number) {
  ctx.shadowColor = color
  ctx.shadowBlur = radius
}

export function clearGlow(ctx: CanvasRenderingContext2D) {
  ctx.shadowBlur = 0
}

// ── Core star polygon geometry ───────────────────────────────────────────────

/**
 * Returns the vertices of an n-pointed star polygon.
 * outerR = radius of outer points
 * innerR = radius of inner notches (default = outerR * sin(π/n) / sin(2π/n))
 */
export function starPolygonPoints(
  n: number,
  outerR: number,
  innerR?: number,
  offsetAngle = 0
): Array<[number, number]> {
  const inner = innerR ?? outerR * Math.sin(Math.PI / n) / Math.sin(2 * Math.PI / n)
  const pts: Array<[number, number]> = []
  for (let i = 0; i < n * 2; i++) {
    const angle = offsetAngle + (i * Math.PI) / n - Math.PI / 2
    const r = i % 2 === 0 ? outerR : inner
    pts.push([Math.cos(angle) * r, Math.sin(angle) * r])
  }
  return pts
}

/** Draw a closed polygon path (does not stroke/fill) */
export function polygonPath(ctx: CanvasRenderingContext2D, pts: Array<[number, number]>) {
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
  ctx.closePath()
}

// ── Girih star drawing functions ─────────────────────────────────────────────

/**
 * Draw a girih n-pointed star with radial connecting lines.
 * This is the canonical Islamic geometric star motif.
 * cx, cy = center; r = outer radius; completion = 0–1 (line draw progress)
 */
export function drawGirihStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  n: number,
  completion: number,
  strokeColor: string,
  strokeWidth: number,
  glowRadius: number,
  offsetAngle = 0
) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = strokeWidth
  setGlow(ctx, strokeColor, glowRadius)
  ctx.lineCap = 'round'

  const outerPts = starPolygonPoints(n, r, r * 0.382, offsetAngle)
  const totalSegments = outerPts.length
  const drawnSegments = Math.floor(totalSegments * completion)

  ctx.beginPath()
  outerPts.slice(0, drawnSegments + 1).forEach((pt, i) => {
    if (i === 0) ctx.moveTo(pt[0], pt[1])
    else ctx.lineTo(pt[0], pt[1])
  })
  if (completion >= 1) ctx.closePath()
  ctx.stroke()

  // Inner connecting lines — only appear at higher completion
  if (completion > 0.6) {
    const innerCompletion = (completion - 0.6) / 0.4
    const innerR = r * 0.382
    ctx.globalAlpha = innerCompletion * 0.7
    for (let i = 0; i < n; i++) {
      const angle = offsetAngle + (i * TAU) / n - Math.PI / 2
      const x2 = Math.cos(angle) * innerR
      const y2 = Math.sin(angle) * innerR
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
  }

  ctx.restore()
}

/**
 * Draw a full girih tile field — interlocking n-pointed stars tiling the canvas.
 * This creates the infinite zellige mosaic effect.
 */
export function drawGirihField(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  n: number,
  tileSize: number,
  time: number,
  energy: number,
  bass: number,
  completion: number,
  strokeColor: string,
  strokeWidth: number,
  glowRadius: number
) {
  const cx = width / 2
  const cy = height / 2
  const cols = Math.ceil(width / tileSize) + 2
  const rows = Math.ceil(height / tileSize) + 2

  for (let row = -1; row < rows; row++) {
    for (let col = -1; col < cols; col++) {
      const x = col * tileSize - (tileSize / 2)
      const y = row * tileSize - (tileSize / 2)

      // Distance from center for ripple effect
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
      const ripple = Math.sin(dist * 0.02 - time * 2) * bass * 0.1
      const tileCompletion = Math.max(0, Math.min(1, completion + ripple))

      drawGirihStar(
        ctx, x, y, tileSize * 0.45,
        n, tileCompletion,
        strokeColor, strokeWidth, glowRadius * 0.5,
        time * 0.1
      )
    }
  }
}

// ── Arabesque (interlaced strapwork) ─────────────────────────────────────────

/**
 * Draw arabesque interlaced ribbon pattern using bezier curves.
 * The classic Islamic strapwork — overlapping bands that weave over/under.
 */
export function drawArabesque(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  folds: number,
  time: number,
  energy: number,
  completion: number,
  strokeColor: string,
  strokeWidth: number,
  glowRadius: number
) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = strokeWidth
  ctx.lineCap = 'round'
  setGlow(ctx, strokeColor, glowRadius)

  const segments = folds * 2
  const angleStep = TAU / segments

  for (let i = 0; i < Math.floor(segments * completion); i++) {
    const a1 = i * angleStep + time * 0.05
    const a2 = a1 + angleStep

    const x1 = Math.cos(a1) * r * 0.5
    const y1 = Math.sin(a1) * r * 0.5
    const x2 = Math.cos(a2) * r * 0.5
    const y2 = Math.sin(a2) * r * 0.5

    // Control points create the flowing arabesque curve
    const cx1 = Math.cos(a1 + angleStep * 0.5) * r * (0.8 + energy * 0.2)
    const cy1 = Math.sin(a1 + angleStep * 0.5) * r * (0.8 + energy * 0.2)

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.quadraticCurveTo(cx1, cy1, x2, y2)
    ctx.stroke()

    // Connecting spokes
    if (completion > 0.7) {
      ctx.globalAlpha = (completion - 0.7) / 0.3 * 0.5
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(0, 0)
      ctx.stroke()
      ctx.globalAlpha = 1
    }
  }

  ctx.restore()
}

// ── Muqarnas (stalactite geometry) ──────────────────────────────────────────

/**
 * Muqarnas: radiating honeycomb-like geometry emanating from center.
 * Mimics the architectural stalactite vaulting of Islamic mosques.
 */
export function drawMuqarnas(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  folds: number,
  time: number,
  energy: number,
  rings: number,
  completion: number,
  strokeColor: string,
  strokeWidth: number,
  glowRadius: number
) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = strokeWidth
  setGlow(ctx, strokeColor, glowRadius)

  const angleStep = TAU / folds

  for (let ring = 1; ring <= rings; ring++) {
    if (ring > completion * rings) break
    const ringR = (ring / rings) * r
    const ringCompletion = Math.min(1, completion * rings - (ring - 1))

    for (let i = 0; i < Math.floor(folds * ringCompletion); i++) {
      const a = i * angleStep + time * 0.03 * (ring % 2 === 0 ? 1 : -1)

      // Hexagonal cell vertices
      const x1 = Math.cos(a) * ringR
      const y1 = Math.sin(a) * ringR
      const x2 = Math.cos(a + angleStep) * ringR
      const y2 = Math.sin(a + angleStep) * ringR
      const xMid = Math.cos(a + angleStep / 2) * ringR * 1.1
      const yMid = Math.sin(a + angleStep / 2) * ringR * 1.1

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(xMid, yMid)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      // Radial lines connecting rings
      if (ring > 1) {
        const prevR = ((ring - 1) / rings) * r
        ctx.globalAlpha = 0.4
        ctx.beginPath()
        ctx.moveTo(Math.cos(a) * prevR, Math.sin(a) * prevR)
        ctx.lineTo(x1, y1)
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }
  }

  ctx.restore()
}

// ── Khatam (Persian six-fold repeat) ────────────────────────────────────────

/**
 * Khatam: the traditional Persian interlocked star tile.
 * Creates interlocking triangles and hexagons.
 */
export function drawKhatam(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  time: number,
  energy: number,
  completion: number,
  strokeColor: string,
  strokeWidth: number,
  glowRadius: number
) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = strokeWidth
  setGlow(ctx, strokeColor, glowRadius)

  // Outer hexagon
  const hexPts: Array<[number, number]> = []
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU + time * 0.05
    hexPts.push([Math.cos(a) * r, Math.sin(a) * r])
  }

  const hexSegments = Math.floor(6 * completion)
  ctx.beginPath()
  hexPts.slice(0, hexSegments + 1).forEach((pt, i) => {
    if (i === 0) ctx.moveTo(pt[0], pt[1])
    else ctx.lineTo(pt[0], pt[1])
  })
  if (completion >= 1) ctx.closePath()
  ctx.stroke()

  // Star of David (two triangles)
  if (completion > 0.4) {
    const triCompletion = (completion - 0.4) / 0.6
    for (let tri = 0; tri < 2; tri++) {
      const offset = tri === 0 ? 0 : Math.PI / 3 + time * 0.03
      const triPts: Array<[number, number]> = []
      for (let i = 0; i < 3; i++) {
        const a = offset + (i / 3) * TAU
        triPts.push([Math.cos(a) * r * 0.8, Math.sin(a) * r * 0.8])
      }
      const segments = Math.floor(3 * triCompletion)
      ctx.beginPath()
      triPts.slice(0, segments + 1).forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt[0], pt[1])
        else ctx.lineTo(pt[0], pt[1])
      })
      if (triCompletion >= 1) ctx.closePath()
      ctx.stroke()
    }
  }

  // Inner hexagon
  if (completion > 0.7) {
    const innerCompletion = (completion - 0.7) / 0.3
    const innerPts: Array<[number, number]> = []
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU + Math.PI / 6 - time * 0.04
      innerPts.push([Math.cos(a) * r * 0.4, Math.sin(a) * r * 0.4])
    }
    const innerSegments = Math.floor(6 * innerCompletion)
    ctx.beginPath()
    innerPts.slice(0, innerSegments + 1).forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt[0], pt[1])
      else ctx.lineTo(pt[0], pt[1])
    })
    if (innerCompletion >= 1) ctx.closePath()
    ctx.stroke()
  }

  ctx.restore()
}

// ── Rosette ──────────────────────────────────────────────────────────────────

/**
 * Multi-petal rosette from overlapping circles — the mathematical
 * basis for many Islamic patterns.
 */
export function drawRosette(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  petals: number,
  time: number,
  energy: number,
  completion: number,
  strokeColor: string,
  strokeWidth: number,
  glowRadius: number
) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = strokeWidth
  setGlow(ctx, strokeColor, glowRadius)

  const drawnPetals = Math.floor(petals * completion)

  for (let i = 0; i < drawnPetals; i++) {
    const a = (i / petals) * TAU + time * 0.04
    const pcx = Math.cos(a) * r * 0.5
    const pcy = Math.sin(a) * r * 0.5

    ctx.beginPath()
    ctx.arc(pcx, pcy, r * 0.5, 0, TAU)
    ctx.stroke()
  }

  // Center circle
  if (completion > 0.5) {
    ctx.globalAlpha = (completion - 0.5) / 0.5
    ctx.beginPath()
    ctx.arc(0, 0, r * 0.2 * (1 + energy * 0.3), 0, TAU)
    ctx.stroke()
    ctx.globalAlpha = 1
  }

  ctx.restore()
}

// ── Symmetry helper: draw with N-fold radial symmetry ───────────────────────

/**
 * Execute a drawing callback N times, each rotated by TAU/N.
 * This is the core of all symmetrical Islamic pattern generation.
 */
export function withSymmetry(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  folds: number,
  time: number,
  globalRotation: number,
  callback: (ctx: CanvasRenderingContext2D) => void
) {
  for (let i = 0; i < folds; i++) {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(globalRotation + (i / folds) * TAU)
    callback(ctx)
    ctx.restore()
  }
}

// ── Ring-based tile reveal ───────────────────────────────────────────────────

/**
 * Generate ring positions for the growth mechanic.
 * Ring 0 = center, ring 1 = 6 surrounding tiles, etc.
 */
export function getRingPositions(
  ring: number,
  tileSpacing: number
): Array<[number, number]> {
  if (ring === 0) return [[0, 0]]
  const positions: Array<[number, number]> = []
  const count = ring * 6
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * TAU
    const dist = tileSpacing * ring
    positions.push([Math.cos(angle) * dist, Math.sin(angle) * dist])
  }
  return positions
}
