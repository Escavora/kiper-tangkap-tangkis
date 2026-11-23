/**
 * Hand tracking with MediaPipe Tasks Vision (Hand Landmarker)
 * and helpers to derive palm center, hand size, openness, and velocity.
 */

/** Landmark indices used to compute the palm center. */
export const PALM_LANDMARKS = [0, 5, 9, 17];

/** Fingertip landmark indices used to compute openness. */
export const FINGERTIP_LANDMARKS = [8, 12, 16, 20];

/** Max consecutive frames to reuse the last position when a hand is lost. */
export const MAX_LOST_FRAMES = 2;

/**
 * Loads the Hand Landmarker model.
 * @returns {Promise<object>} HandLandmarker instance
 */
export async function initHandLandmarker() {
  // TODO
}

/**
 * Runs detection on the current video frame.
 * @param {object} landmarker
 * @param {HTMLVideoElement} videoEl
 * @param {DOMHighResTimeStamp} timestamp
 * @returns {Array<Array<{x: number, y: number, z: number}>>} landmarks per hand
 */
export function detectHands(landmarker, videoEl, timestamp) {
  // TODO
}

/**
 * Palm center = mean of landmarks 0, 5, 9, 17.
 * @param {Array<{x: number, y: number}>} landmarks
 * @returns {{x: number, y: number}}
 */
export function getPalmCenter(landmarks) {
  // TODO
}

/**
 * Hand size = distance from landmark 0 to 9 (scale reference).
 * @param {Array<{x: number, y: number}>} landmarks
 * @returns {number}
 */
export function getHandSize(landmarks) {
  // TODO
}

/**
 * Openness = mean fingertip-to-palm-center distance / hand size.
 * @param {Array<{x: number, y: number}>} landmarks
 * @returns {number}
 */
export function getOpenness(landmarks) {
  // TODO
}

/**
 * Velocity = palm displacement between frames / hand size.
 * @param {{x: number, y: number}} prevCenter
 * @param {{x: number, y: number}} currCenter
 * @param {number} handSize
 * @returns {{vx: number, vy: number, speed: number}}
 */
export function getHandVelocity(prevCenter, currCenter, handSize) {
  // TODO
}

/**
 * Exponential moving average for smoothing a 2D point.
 * @param {{x: number, y: number}} prev
 * @param {{x: number, y: number}} next
 * @param {number} alpha
 * @returns {{x: number, y: number}}
 */
export function smoothPoint(prev, next, alpha) {
  // TODO
}
