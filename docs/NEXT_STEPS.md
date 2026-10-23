# Developer roadmap

## Current boundary
VOX is a browser concept showcase. It does not isolate a speaker in live meetings and does not provide an operating-system virtual microphone.

## Getting started
Open `index.html` in a browser. With Node.js 20+, run `npm test` and `npm run check`. These commands have not been executed as part of this review.

## Technical milestones
1. Define measurable targets for target-speaker retention, background-voice suppression, latency and CPU usage.
2. Prototype an isolated audio-processing pipeline with explicit mic permission and local processing.
3. Compare candidate SDKs under identical noisy-room conditions; verify actual licensing and feature availability.
4. Design a native virtual-microphone adapter separately for Windows and macOS.
5. Test fail-safe behavior, microphone access indicators and privacy boundaries.

## Good first issue
Add a documented benchmark protocol using consented, non-sensitive audio samples and objective latency/quality measures.
