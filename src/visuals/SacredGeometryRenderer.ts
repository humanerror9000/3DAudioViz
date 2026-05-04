// src/visuals/SacredGeometryRenderer.ts
// Canvas 2D renderer for Islamic geometric patterns with growth mechanics

import {
  GeometrySettings,
  GeometryLayer,
  GeometryType,
  GrowthState,
  palettes,
  ColorPalette
} from '../types/geometry'
import { AudioFeatures } from '../types/audio'
import {
  TAU,
  energyToColor,
  lerpColor,
  setGlow,
  clearGlow,
  drawGirihStar,
  drawGirihField,
  drawArabesque,
  drawMuqarnas,
  drawKhatam,
  drawRosette,
  withSymmetry,
  getRingPositions
} from '../utils/geometryBuilder'

export class SacredGeometryRenderer {
  private canvas: HTMLCanvasElement | null = null
  private ctx: CanvasRenderingContext2D | null = null
  private time = 0
  private audioFeatures: AudioFeatures | null = null
  private growth: GrowthState = {
    revealedRings: 0,
    targetRings: 1,
    lineCompletion: 0.3,
    currentFolds: 8,
    colorTemperature: 0,
    accumulatedEnergy: 0,
    zoom: 1,
    peakFlash: 0,
    lastPeakTime: 0,
    lastSymmetryChange: 0
  }

  initialize(canvas: HTMLCanvasElement, settings: GeometrySettings): void {
    this.canvas = canvas
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Could not get 2D context')
    this.ctx = ctx
    this.growth.currentFolds = settings.baseSymmetry
    this.resize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight)
  }

  updateAudioFeatures(features: AudioFeatures): void {
    this.audioFeatures = features
  }

  updateSettings(_settings: GeometrySettings): void {
    // Settings are read from settingsRef each frame — no action needed here
  }

  updateLayers(_layers: GeometryLayer[]): void {
    // Layers are read from settingsRef each frame
  }

  private getPalette(settings: GeometrySettings): [string, string, string, string] {
    if (settings.palette === 'custom') return settings.customColors
    return palettes[settings.palette as ColorPalette]
  }

  render(deltaTime: number, settings: GeometrySettings): void {
    if (!this.ctx || !this.canvas) return

    const ctx = this.ctx
    const W = this.canvas.width
    const H = this.canvas.height
    const cx = W / 2
    const cy = H / 2

    this.time += deltaTime * settings.animationSpeed

    const audio = this.audioFeatures ?? {
      energy: 0, sub: 0, bass: 0, mids: 0, highs: 0, peakTrigger: false, timestamp: 0
    }

    const bass    = audio.bass    * settings.bassReactivity
    const energy  = audio.energy  * settings.energyReactivity
    const highs   = audio.highs   * settings.highsReactivity
    const mids    = audio.mids
    const isPeak  = audio.peakTrigger && settings.peakPulse

    // ── Update growth state ──────────────────────────────────────────────
    if (settings.growthEnabled) {
      // Accumulate energy over time for long-arc evolution
      this.growth.accumulatedEnergy += energy * deltaTime * settings.growthRate * 0.1
      this.growth.accumulatedEnergy = Math.min(1, this.growth.accumulatedEnergy)

      // Target rings based on accumulated energy
      this.growth.targetRings = Math.ceil(
        this.growth.accumulatedEnergy * settings.maxRings
      )

      // Smoothly reveal rings
      if (this.growth.revealedRings < this.growth.targetRings) {
        this.growth.revealedRings = Math.min(
          this.growth.targetRings,
          this.growth.revealedRings + deltaTime * settings.growthRate * 0.5
        )
      }

      // Line completion: bass hits crystallize lines
      const targetCompletion = 0.3 + energy * 0.5 + bass * 0.2
      this.growth.lineCompletion += (targetCompletion - this.growth.lineCompletion) *
        deltaTime * settings.lineDrawSpeed * 3
      this.growth.lineCompletion = Math.max(0, Math.min(1, this.growth.lineCompletion))

      // Color temperature drifts with accumulated energy
      this.growth.colorTemperature += (this.growth.accumulatedEnergy - this.growth.colorTemperature) *
        deltaTime * 0.05
    } else {
      this.growth.lineCompletion = 1
      this.growth.revealedRings = settings.maxRings
      this.growth.colorTemperature = energy * 0.5
    }

    // ── Peak mechanics ───────────────────────────────────────────────────
    if (isPeak) {
      this.growth.peakFlash = 1.0
      this.growth.lastPeakTime = this.time

      // Symmetry evolution on peaks
      if (settings.symmetryEvolution &&
          this.time - this.growth.lastSymmetryChange > 8) {
        const foldOptions = [6, 8, 10, 12]
        const currentIdx = foldOptions.indexOf(this.growth.currentFolds)
        const nextIdx = (currentIdx + 1) % foldOptions.length
        this.growth.currentFolds = foldOptions[nextIdx]
        this.growth.lastSymmetryChange = this.time
      }
    }

    // Decay peak flash
    this.growth.peakFlash = Math.max(0, this.growth.peakFlash - deltaTime * 4)

    // ── Zoom reveal ──────────────────────────────────────────────────────
    if (settings.zoomReveal) {
      const targetZoom = 1 - this.growth.accumulatedEnergy * 0.4
      this.growth.zoom += (targetZoom - this.growth.zoom) * deltaTime * 0.2
    } else {
      this.growth.zoom = 1
    }

    // ── Clear canvas with trail effect ───────────────────────────────────
    if (settings.trailOpacity > 0) {
      ctx.fillStyle = `rgba(${this._bgRgb(settings.backgroundColor)},${1 - settings.trailOpacity})`
      ctx.fillRect(0, 0, W, H)
    } else {
      ctx.fillStyle = settings.backgroundColor
      ctx.fillRect(0, 0, W, H)
    }

    // ── Get active palette ───────────────────────────────────────────────
    const pal = this.getPalette(settings)

    // ── Peak flash overlay ───────────────────────────────────────────────
    if (this.growth.peakFlash > 0) {
      const flashColor = energyToColor(pal, 0.9, this.growth.peakFlash * 0.15)
      ctx.fillStyle = flashColor
      ctx.fillRect(0, 0, W, H)
    }

    // ── Apply zoom transform ─────────────────────────────────────────────
    ctx.save()
    ctx.translate(cx, cy)
    ctx.scale(this.growth.zoom, this.growth.zoom)
    ctx.translate(-cx, -cy)

    // ── Draw each layer ──────────────────────────────────────────────────
    settings.layers.forEach((layer) => {
      if (!layer.visible) return

      // Get audio value for this layer's assigned band
      const bandValue = this._getBandValue(audio, layer.audioBand, settings)
      const layerEnergy = 0.3 + bandValue * layer.reactivity

      // Layer color — from palette shifted by energy
      const colorT = this.growth.colorTemperature * 0.7 + bandValue * layer.reactivity * 0.3
      const layerColor = layer.colorOverride ??
        energyToColor(pal, colorT + this.growth.peakFlash * 0.3)

      // Layer-specific rotation
      const layerRotation = layer.rotationOffset +
        this.time * layer.rotationSpeed * settings.globalRotationSpeed +
        this.time * settings.globalRotationSpeed

      // Layer scale with audio pulse
      const layerScale = layer.scale * (1 + bandValue * 0.15 * layer.reactivity)

      // Base radius for this layer
      const baseR = Math.min(W, H) * 0.38 * layerScale

      ctx.save()
      ctx.globalAlpha = layer.opacity

      // Draw geometry based on type
      switch (layer.geometryType) {

        case 'girih-star-6':
        case 'girih-star-8':
        case 'girih-star-10':
        case 'girih-star-12': {
          const n = layer.geometryType === 'girih-star-6'  ? 6
                  : layer.geometryType === 'girih-star-8'  ? 8
                  : layer.geometryType === 'girih-star-10' ? 10 : 12

          // Draw rings of stars radiating from center
          const revealedRings = Math.floor(this.growth.revealedRings)
          const tileSpacing = baseR * 0.55

          for (let ring = 0; ring <= revealedRings && ring <= settings.maxRings; ring++) {
            const positions = getRingPositions(ring, tileSpacing)
            const ringScale = ring === 0 ? 1 : 0.85
            const ringR = baseR * 0.42 * ringScale

            // Rings farther out are slightly dimmer
            const ringAlpha = 1 - (ring / (settings.maxRings + 1)) * 0.4
            ctx.globalAlpha = layer.opacity * ringAlpha

            positions.forEach(([px, py]) => {
              drawGirihStar(
                ctx,
                cx + px, cy + py,
                ringR,
                n,
                ring === revealedRings
                  ? this.growth.lineCompletion
                  : 1,
                layerColor,
                layer.strokeWidth,
                layer.glowIntensity * layerEnergy,
                layerRotation + ring * 0.1
              )
            })
          }
          break
        }

        case 'zellij-field': {
          const tileSize = baseR * 0.5 * (1 / this.growth.zoom)
          drawGirihField(
            ctx, W, H,
            this.growth.currentFolds,
            tileSize,
            this.time,
            energy, bass,
            this.growth.lineCompletion,
            layerColor,
            layer.strokeWidth,
            layer.glowIntensity * layerEnergy
          )
          break
        }

        case 'arabesque': {
          drawArabesque(
            ctx, cx, cy, baseR,
            layer.symmetryFolds,
            this.time + layerRotation,
            layerEnergy,
            this.growth.lineCompletion,
            layerColor,
            layer.strokeWidth,
            layer.glowIntensity * layerEnergy
          )
          break
        }

        case 'muqarnas': {
          drawMuqarnas(
            ctx, cx, cy, baseR,
            layer.symmetryFolds,
            this.time + layerRotation,
            layerEnergy,
            Math.floor(this.growth.revealedRings) + 1,
            this.growth.lineCompletion,
            layerColor,
            layer.strokeWidth,
            layer.glowIntensity * layerEnergy
          )
          break
        }

        case 'khatam': {
          withSymmetry(ctx, cx, cy, layer.symmetryFolds, this.time, layerRotation, (c) => {
            drawKhatam(
              c, 0, -baseR * 0.5, baseR * 0.4,
              this.time,
              layerEnergy,
              this.growth.lineCompletion,
              layerColor,
              layer.strokeWidth,
              layer.glowIntensity * layerEnergy
            )
          })
          break
        }

        case 'rosette': {
          drawRosette(
            ctx, cx, cy, baseR,
            layer.symmetryFolds,
            this.time + layerRotation,
            layerEnergy,
            this.growth.lineCompletion,
            layerColor,
            layer.strokeWidth,
            layer.glowIntensity * layerEnergy
          )
          break
        }
      }

      ctx.globalAlpha = 1
      ctx.restore()
    })

    // ── Restore zoom transform ───────────────────────────────────────────
    ctx.restore()

    // ── Vignette ─────────────────────────────────────────────────────────
    const vignette = ctx.createRadialGradient(cx, cy, Math.min(W, H) * 0.3, cx, cy, Math.min(W, H) * 0.8)
    vignette.addColorStop(0, 'rgba(0,0,0,0)')
    vignette.addColorStop(1, 'rgba(0,0,0,0.6)')
    ctx.fillStyle = vignette
    ctx.fillRect(0, 0, W, H)
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  private _getBandValue(
    audio: AudioFeatures,
    band: string,
    settings: GeometrySettings
  ): number {
    switch (band) {
      case 'bass':   return audio.bass   * settings.bassReactivity
      case 'mids':   return audio.mids   * settings.energyReactivity
      case 'highs':  return audio.highs  * settings.highsReactivity
      case 'energy': return audio.energy * settings.energyReactivity
      case 'sub':    return audio.sub    * settings.bassReactivity
      default:       return audio.energy
    }
  }

  private _bgRgb(hex: string): string {
    const h = hex.replace('#', '')
    return [
      parseInt(h.substring(0, 2), 16),
      parseInt(h.substring(2, 4), 16),
      parseInt(h.substring(4, 6), 16)
    ].join(',')
  }

  resize(width: number, height: number): void {
    if (!this.canvas || !this.ctx) return
    this.canvas.width = width
    this.canvas.height = height
  }

  dispose(): void {
    this.ctx = null
    this.canvas = null
  }
}
