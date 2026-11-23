/**
 * Records gameplay with sound: canvas.captureStream(30) + mixed audio
 * track → MediaRecorder → downloadable .webm.
 */

export const RECORD_FPS = 30;
export const RECORD_MIME_TYPE = 'video/webm';

/**
 * @param {HTMLCanvasElement} canvas
 * @param {MediaStream} audioStream - master mix from audio_fx
 * @returns {object} recorder handle
 */
export function createRecorder(canvas, audioStream) {
  // TODO
}

/** Starts recording. */
export function startRecording(recorder) {
  // TODO
}

/**
 * Stops recording and resolves with the recorded video.
 * @returns {Promise<Blob>}
 */
export function stopRecording(recorder) {
  // TODO
}

/**
 * Points the download link at the recorded blob.
 * @param {Blob} blob
 * @param {HTMLAnchorElement} linkEl
 */
export function createDownloadLink(blob, linkEl) {
  // TODO
}
