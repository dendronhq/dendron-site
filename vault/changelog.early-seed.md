---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1660227174680
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.108.0
August 12, 2022

Dendron 0.108 has sprouted 🌱

** **

### Features
- feat(workspace): code workspaces support (#3343) @jonathan

### Enhancements

### Fixes
- fix(workspace): always treat `begin|end` block anchors as valid (#3339) @hikchoi
- fix(workspace): remove bad dependency which was causing error on parsing notes @kevin
- fix(navigate): do not run goto sibling if not in a dendron note (#3363) @hayata
- fix(publish): deprecate Dendron: Publish Dev command (#3368) @joshi