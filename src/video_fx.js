/**
 * Canvas 2D rendering: webcam frame, glove and ball sprites,
 * particles, score/FPS overlay, screen shake, and debug panel.
 */

/**
 * Prepares the 2D context and loads sprites.
 * @param {HTMLCanvasElement} canvas
 * @returns {Promise<object>} renderer handle
 */
export async function createRenderer(canvas) {
  // TODO
}

/**
 * Draws the current webcam frame as the background.
 * @param {object} renderer
 * @param {HTMLVideoElement} videoEl
 */
export function drawFrame(renderer, videoEl) {
  // TODO
}

/**
 * Glove sprite attached to the palm, switching open/closed and rotated
 * to follow the hand direction.
 * @param {object} renderer
 * @param {{x: number, y: number, angle: number, isOpen: boolean, scale: number}} glove
 */
export function drawGlove(renderer, glove) {
  // TODO
}

/**
 * Pseudo-3D ball that grows as it approaches, with a target ring
 * when it is inside the hit zone (scale 0.8–1.0).
 * @param {object} renderer
 * @param {{x: number, y: number, scale: number, inHitZone: boolean}} ball
 */
export function drawBall(renderer, ball) {
  // TODO
}

/**
 * Spawns grass particles at a position (used on parry).
 * @param {object} renderer
 * @param {{x: number, y: number}} origin
 * @param {{vx: number, vy: number}} direction
 */
export function spawnParticles(renderer, origin, direction) {
  // TODO
}

/** Updates and draws active particles. */
export function drawParticles(renderer, dt) {
  // TODO
}

/** Net shake + screen shake when a goal is conceded. */
export function triggerGoalShake(renderer) {
  // TODO
}

/**
 * Score, remaining shouts, FPS, and latency overlay.
 * @param {object} renderer
 * @param {{score: number, shoutsLeft: number, fps: number, latencyMs: number}} hud
 */
export function drawHud(renderer, hud) {
  // TODO
}

/**
 * Optional debug panel: openness, hand speed, mic RMS.
 * @param {object} renderer
 * @param {{openness: number, speed: number, rms: number}} debug
 */
export function drawDebugPanel(renderer, debug) {
  // TODO
}
