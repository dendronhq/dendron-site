---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1661525303516
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.110.0
August 26, 2022

Dendron 0.110 has sprouted 🌱

### Features
- feat(workspace): introduce sqlite as a plugabble metadata store (#3401) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace.sqlite]])
- feat(workspace): copy note url command for codespaces (#3411) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.vscode.web#copy-note-url]])

### Enhancements
- enhance(cli): New write notes CLI command (#3392) @tuling ([[docs|dendron://dendron.dendron-site/dendron.topic.notes.cli.write]])

### Fixes
- fix(lookup): allow lookup accept for existing invalid hierarchy (#3421) @hikchoi
- fix(workspace): case insensitive tree view sorting (#3420) @jonathan
- fix(workspace): updated visibility of copy note url command in codespaces (#3447) @joshi
- fix(workspace): sqlite store properly update from cache when encountering existing notes (#3451) @kevin

