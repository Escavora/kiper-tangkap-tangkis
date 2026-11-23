# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
How to update:
- Add entries under [Unreleased] in the same PR as the change.
- Use only the relevant sections: Added, Changed, Deprecated, Removed, Fixed, Security.
- One line per change, written for readers (what changed), not as a commit log.
- On release: rename [Unreleased] to [x.y.z] - YYYY-MM-DD, add a new empty
  [Unreleased] section, and update the comparison links at the bottom.
-->

## [Unreleased]

### Added

- Project structure based on the proposal's module design: `capture`, `landmark`,
  `audio_fx`, `video_fx`, `recorder`, and `game` modules wired from `main.js` (#1)
- HTML entry point with game canvas, webcam feed, and control buttons (#1)
- Base styles and asset directories for sprites and audio (#1)
- Game constants for scoring, catch window, hit zone, and shout limits (#1)
- README with feature list, local setup, and project structure (#1)
- Project proposal reference document
- Repository configuration: `.gitignore`, `.gitattributes`, and Git LFS for large media

[Unreleased]: https://github.com/Escavora/kiper-tangkap-tangkis/commits/main
