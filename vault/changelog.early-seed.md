---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1668440335211
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.118.0
November 15, 2022

Dendron 0.118 has sprouted 🌱

### Fixes
- fix(workspace): completionProvider and other bulk operations for engine v3 (#3747) @jonathan
- fix(sync): next js export pod fix on engine v3 (#3751) @jonathan
- fix(workspace): decoration does not display correct custom color for hashtags (#3761) @joshi
- fix(workspace): Correctly handle deleted notes in editor when checking for duplicate entries (#3719) [Matthew Falkowski](https://github.com/wookiefriseur)
- fix(workspace): correctly populate backlink when creating new note using go to note (#3769) @hikchoi
- fix(sync): needless modified notes after workspace sync (#3768) @joshi