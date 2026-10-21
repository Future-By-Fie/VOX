# VOX

> Your voice. Only your voice.

**Future-by-Fie · Concept-stage open showcase**

A proposed cross-platform voice-isolation layer for online meetings. VOX aims to reduce repeated mute/unmute actions and suppress nearby speech while preserving the intended speaker.

## Project status

**Concept / interactive browser demonstration.** This repository does not claim production readiness or completed native integrations. The demo uses local browser state only and no backend.

## Proposed capabilities
- Voice-first meeting controls
- Target-speaker isolation (research objective)
- App-agnostic virtual microphone routing
- Privacy-first on-device processing target

## Run locally

Open `index.html` in a modern browser. No installation, accounts, API keys or network calls required.

## Architecture direction

- **Presentation:** accessible, responsive HTML/CSS/JavaScript proof of concept.
- **Domain layer (future):** typed models, validation, state transitions and explicit user consent.
- **Integration layer (future):** platform-specific adapters behind clear interfaces.
- **Quality gates (future):** automated tests, security review, performance benchmarks and accessibility checks.

## Limitations and risks

Real-time speaker isolation is not implemented. Cross-app virtual audio devices require native OS integrations, consent and latency testing.

## Next validation milestones

1. Interview 10 target users and document actual pain points.
2. Prototype the single highest-value technical capability.
3. Define measurable success criteria and compare existing alternatives.
4. Run privacy, threat-model and legal review before collecting real user data.
5. Evaluate willingness to pay before building a full product.

## Collaboration

We welcome technical collaborators, product partners and constructive feedback. Open an issue to discuss feasibility, competitive alternatives or a narrowly scoped proof of concept.

## Intellectual property and licensing

Copyright © 2026 Future-by-Fie. **No open-source license has been granted yet.** Public visibility does not automatically grant reuse rights. Contact the project owner to discuss licensing or collaboration.

## Disclaimer

Exploratory design only. Interface interactions are simulated and must not be confused with functioning underlying technology.


## Try the interactive demo

**No build, account, npm install, API keys or backend required.** The full browser demo is in [index.html](./index.html).

1. Download this repository as a ZIP using **Code → Download ZIP** and extract it.
2. Serve the extracted folder at `http://localhost:8000` (for example `python -m http.server 8000`) and visit that address. Browsers require a secure context (HTTPS or localhost) for microphone access. Allow microphone access when prompted.
3. Move the gate threshold while speaking to see real microphone levels and a live waveform. This is **not** speaker recognition, noise cancellation or virtual-mic routing.

**Developer quick check:** With Node.js 20 or later installed, run `npm test` to execute the independent domain/audio unit tests. CI configuration lives in [GitHub Actions](./.github/workflows/ci.yml).

**Online hosting:** GitHub Pages requires the repository owner to enable Pages and a successful deployment. Until then, the GitHub Pages URL may return 404; the source demo above remains available.

### Build with us

If you see a better implementation, please open an issue with a concrete proposal. The source code is available under the [MIT License](./LICENSE), including commercial use, with attribution and the license notice retained. See [Contributing](./CONTRIBUTING.md) for collaboration guidelines.

## License

Source code is licensed under [MIT](./LICENSE). Contributions are welcome via issues and pull requests. The Future-by-Fie name and brand identity are not a grant of trademark rights.
