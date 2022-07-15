---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1657898972309
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.104.0
July 15, 2022

Dendron 0.104 has sprouted 🌱

### Features
- feat(edit): support note references on beginning of a doc (#3186) @kevin([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#positional-reference]])

### Enhancements
- enchance(navigation): navigate through journal notes in chronological order (#3184) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation.commands.go-next-sibling#^x8aubxke0i61]])
- enhance(workspace): show names of duplicate vaults in error message (#3199) @hayata
- enhance(retrieve): add toggle preview command (#3164) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.preview.commands.toggle-preview]])
- enhance: add uri field to gdoc pod (#3210) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.google-docs.export#side-effects]])
- enhance(views): filter backlinks and outward links from graph panel (#3207) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.graph-panel]])

### Fixes
- fix(edit): template gets applied twice if user undoes initial template (#3186) @kevin
- fix(workspace): workspace sync will maintain proper engine state (#3233) @jonathan