/**
 * Entry point: wires all modules together and runs the game loop
 * (requestAnimationFrame) along with the FPS and latency counters.
 */

import { startCapture } from './capture.js';
import { initHandLandmarker, detectHands } from './landmark.js';
import { createAudioEngine } from './audio_fx.js';
import { createRenderer } from './video_fx.js';
import { createRecorder } from './recorder.js';
import { createGame } from './game.js';

const stats = {
  fps: 0,
  latencyMs: 0,
};

/**
 * Initializes capture, models, audio, and rendering, then starts the loop.
 */
async function init() {
  // TODO: startCapture → initHandLandmarker → createAudioEngine
  //       → createRenderer → createGame → createRecorder → requestAnimationFrame(loop)
}

/**
 * Runs once per frame: detect → analyze audio → update game → render.
 * @param {DOMHighResTimeStamp} now
 */
function loop(now) {
  // TODO: implement per-frame pipeline and update stats
  requestAnimationFrame(loop);
}

/**
 * Updates the FPS and latency values in `stats`.
 * @param {DOMHighResTimeStamp} frameStart
 * @param {DOMHighResTimeStamp} frameEnd
 */
function updateStats(frameStart, frameEnd) {
  // TODO
}

document.getElementById('btn-start').addEventListener('click', init, { once: true });
