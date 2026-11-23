# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
How to update:
- Add entries under [Unreleased] in the same PR as the change.
- Use only the relevant sections: Added, Changed, Deprecated, Removed, Fixed, Security.
- Entry format: `YYYY-MM-DD HH:MM WIB` — description (#PR or commit hash)
  - Timestamp = commit time of the change (last commit if it spans several).
    Get it with:
      git log -1 --format=%ci <commit>
  - Newest entries first within each section.
- One line per change, written for readers (what changed), not as a commit log.
- On release: rename [Unreleased] to [x.y.z] - YYYY-MM-DD, add a new empty
  [Unreleased] section, and update the comparison links at the bottom.
-->

## [Unreleased]

### Added

- `2026-11-23 19:30 WIB` — Project structure based on the proposal's module design:
  `capture`, `landmark`, `audio_fx`, `video_fx`, `recorder`, and `game` modules
  wired from `main.js` (#1)
- `2026-11-23 19:30 WIB` — HTML entry point with game canvas, webcam feed, and
  control buttons (#1)
- `2026-11-23 19:30 WIB` — Base styles and asset directories for sprites and audio (#1)
- `2026-11-23 19:30 WIB` — Game constants for scoring, catch window, hit zone, and
  shout limits (#1)
- `2026-11-23 19:30 WIB` — README with feature list, local setup, and project
  structure (#1)
- `2026-11-23 19:25 WIB` — Project proposal reference document (25693ce)
- `2026-11-23 19:25 WIB` — Repository configuration: `.gitignore`, `.gitattributes`,
  and Git LFS for large media (be582ee)

[Unreleased]: https://github.com/Escavora/kiper-tangkap-tangkis/commits/main
