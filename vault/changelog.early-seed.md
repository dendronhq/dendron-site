---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1660929665208
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.109.0
August 19, 2022

Dendron 0.109 has sprouted 🌱

### Features
- feat(views): UI to configure `dendron.yml` (#3211) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#configure-ui]])
- feat(structure): merge note command (#3349) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.merge-note]])
- feat(workspace): Create Note Command (#3408) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#lookup-note--create-note]])

### Enhancements
- enhance(views): integrated calendar with vscode theme (#3340) @sam
- enhance(edit): option to not create an alias when copying a wiki link (#3393) @hayata ([[docs|dendron://dendron.dendron-site/dendron.topic.links.commands.copy-note-link.config.alias-mode]])

### Fixes
- fix(structure): correctly match namespace schema nodes, and correctly apply schema to new note when note existed as stub (#3388) @hikchoi
- fix(workspace): duplicate Dendron Delete command in contextual menu (#3406) @joshi
- fix(views): show whitespace for links in headers (#3403) @sam
- fix(workspace): proper visibility on views and commands for web ext (#3423) @jonathan