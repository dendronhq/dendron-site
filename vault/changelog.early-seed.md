---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1662056047038
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.111.0
September 02, 2022

Dendron 0.111 has sprouted 🌱

### Enhancements
- enhance(view): context menu for tree view (#3442) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.tree-view#context-menu]])
- enhance(structure): new api for onCreate of note traits (#3450) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.api#return]])
- enhance(view): added settings UI tip (#3470) @joshi

### Fixes
- fix(workspace): diagnostics regression (#3424) @hayata
- fix(sync): nextjs export pod to fetch latest dendron config (#3455) @joshi
- fix(workspace): noisy warnings in engine startup (#3452) @kevin