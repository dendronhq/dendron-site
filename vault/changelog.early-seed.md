---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1646416561645
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.85.0

### Enhancements
- enhance(workspace): doctor command, `fixRemoteVaults`, to fix remote vaults that don't have a remote set ([[docs|dendron://dendron.dendron-site/dendron.topic.doctor#fixremotevaults]]) (#2484) @kaan

### Fix
- fix(lookup): add selection2link button for CreateScratchNoteCommand (#2496) @hikchoi
- fix(pods): fix issue with url links not showing up when using markdown export inside a note reference (#2486) @joshi
- fix(vaults): sometimes see same vault multiple times in vault dropdown (#2501) @tuling
- fix(internal): some edge cases when deleting a note that interferred with tree view and refactoring @hikchoi
