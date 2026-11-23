/**
 * Game rules: calibration, kick scheduling, catch/parry detection,
 * conceded goals, and scoring.
 */

export const SCORE = {
  CATCH: 3,
  PARRY: 1,
};

/** Window between open palm and grip for a valid catch. */
export const CATCH_WINDOW_MS = 300;

/** Ball scale range in which it can be caught or parried. */
export const HIT_ZONE = { min: 0.8, max: 1.0 };

/** Shout power-up limits. */
export const SHOUT = {
  MAX_PER_ROUND: 3,
  DURATION_MS: 2000,
};

/** Whistle cue plays this long before each kick. */
export const WHISTLE_LEAD_MS = 500;

/** Game event types emitted by update(). */
export const EVENTS = {
  WHISTLE: 'whistle',
  KICK: 'kick',
  CATCH: 'catch',
  PARRY: 'parry',
  SHOUT: 'shout',
  GOAL: 'goal',
};

/**
 * @returns {object} initial game state
 */
export function createGame() {
  // TODO
}

/**
 * Records open-palm and fist openness values to set per-player thresholds.
 * @param {object} game
 * @param {'open' | 'fist'} pose
 * @param {number} openness
 */
export function calibrate(game, pose, openness) {
  // TODO
}

/**
 * Picks a random kick target and schedules the whistle + kick.
 * @param {object} game
 * @param {number} canvasWidth
 */
export function scheduleKick(game, canvasWidth) {
  // TODO
}

/**
 * Advances the game by one frame and returns the events that occurred.
 * @param {object} game
 * @param {{center: {x: number, y: number}, openness: number, speed: number} | null} hand
 * @param {{rms: number}} audio
 * @param {number} dt - elapsed time in ms
 * @returns {Array<{type: string, payload?: object}>}
 */
export function update(game, hand, audio, dt) {
  // TODO
}

/** Resets score and shout counter for a new round. */
export function resetRound(game) {
  // TODO
}
