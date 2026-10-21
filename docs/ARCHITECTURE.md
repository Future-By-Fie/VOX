# VOX — audio research foundation

The browser showcase in `index.html` is simulated. The testable `src/audio.js` module provides RMS, dBFS, peak, simple amplitude gating and frame timing. These are genuine signal-processing primitives, **not** speaker identification, speaker isolation or a working virtual microphone.

## Proposed pipeline

Microphone capture (permission required) → frame buffering → latency measurements → optional DSP/model processing → user-controlled monitoring → native virtual microphone adapter (future).

## Performance evaluation

Record end-to-end latency, real-time factor, speech intelligibility and competing-speaker suppression. Compare against unprocessed baseline, across devices and noise environments. Explicitly test voice overlap and false suppression of the intended speaker.

## Privacy and security

Prefer local processing. Do not record or upload audio without informed consent. Respect OS permissions, meeting participants' rights and applicable privacy law. Native virtual audio routing and production speaker separation remain unimplemented.
