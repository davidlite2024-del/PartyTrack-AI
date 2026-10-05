import { FilesetResolver, PoseLandmarker, NormalizedLandmark } from '@mediapipe/tasks-vision';

export type PoseFrame = { landmarks: NormalizedLandmark[]; timestamp: number };
/** Creates the MediaPipe detector entirely in-browser; no frame ever leaves this page. */
export async function createPoseTracker(onFrame: (frame: PoseFrame) => void) {
  const vision = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm');
  const detector = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: { modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task', delegate: 'GPU' },
    runningMode: 'VIDEO', numPoses: 1, minPoseDetectionConfidence: .55, minPosePresenceConfidence: .55, minTrackingConfidence: .55
  });
  let running = true;
  const track = (video: HTMLVideoElement) => { if (!running) return; if (video.readyState >= 2) { const result = detector.detectForVideo(video, performance.now()); if (result.landmarks[0]) onFrame({landmarks: result.landmarks[0], timestamp: performance.now()}); } requestAnimationFrame(() => track(video)); };
  return { start: track, stop: () => { running = false; detector.close(); } };
}
