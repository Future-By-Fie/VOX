# VOX — audio research foundation

The browser showcase in `index.html` is simulated. The testable `src/audio.js` module provides RMS, dBFS, peak, simple amplitude gating and frame timing. These are genuine signal-processing primitives, **not** speaker identification, speaker isolation or a working virtual microphone.

## Proposed pipeline

Microphone capture (permission required) → frame buffering → latency measurements → optional DSP/model processing → user-controlled monitoring → native virtual microphone adapter (future).

## Performance evaluation

Record end-to-end latency, real-time factor, speech intelligibility and competing-speaker suppression. Compare against unprocessed baseline, across devices and noise environments. Explicitly test voice overlap and false suppression of the intended speaker.

## Privacy and security

Prefer local processing. Do not record or upload audio without informed consent. Respect OS permissions, meeting participants' rights and applicable privacy law. Native virtual audio routing and production speaker separation remain unimplemented.

## Current demo features (v0.3)

- Local microphone capture, live waveform, dBFS and threshold-based gate indication.
- Peak level, gate-open percentage, frame count and resettable session statistics.
- No recording, uploads, audio output routing or speaker isolation. The gate indicator does **not** process outgoing meeting audio.

## Next engineering challenges

1. Implement and benchmark an actual low-latency audio processing path; distinguish UI frame timing from audio processing frames.
2. Compare simple DSP with target-speaker extraction and evaluate overlapping voices.
3. Create a safe headphone-only monitor mode and test feedback prevention.
4. Add browser/device compatibility testing and measurable latency budgets.
5. Design OS-specific virtual microphone integration and consent flows.
