---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1662735107375
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.112.0
September 09, 2022

Dendron 0.112 has sprouted 🌱

### Features
- feat(workspace): preview for web extension (#3462) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.preview]])
- feat(structure): Add Move Selection To command (#3440) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.move-selection-to]])
- feat(workspace): copy codespace url command (#3480) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#copy-codespace-url]])


### Enhancements
- enhance(structure): new api for onCreate of note traits (#3450) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.api]])
- enhance(workspace): speed up md export (#3493) @kevin

### Fixes
- fix(workspace): migrate self contained vaults command does not migrate the vault correctly (#3483) @joshi
- fix(workspace): bad error message when importing notes without a configuration (#3494) @kevin
- fix(workspace): tree view empty when note title is number (#3495) @kevin
