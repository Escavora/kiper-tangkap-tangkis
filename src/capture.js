/**
 * Media capture: webcam and microphone via getUserMedia,
 * plus the shared AudioContext.
 */

export const VIDEO_CONSTRAINTS = {
  width: 640,
  height: 480,
  frameRate: 30,
};

/**
 * Requests webcam + mic access and prepares the <video> element.
 * @param {HTMLVideoElement} videoEl
 * @returns {Promise<{
 *   stream: MediaStream,
 *   audioContext: AudioContext,
 *   micSource: MediaStreamAudioSourceNode
 * }>}
 */
export async function startCapture(videoEl) {
  // TODO
}

/**
 * Stops all tracks and closes the AudioContext.
 * @param {MediaStream} stream
 * @param {AudioContext} audioContext
 */
export function stopCapture(stream, audioContext) {
  // TODO
}
