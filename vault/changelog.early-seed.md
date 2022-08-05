---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1659709211380
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.107.0
August 05, 2022

Dendron 0.107 has sprouted 🌱


**Add Toggle Preview Lock command**: You can now lock in the preview of a specific note and navigate other notes without changing your preview.

### Features
- feat(views): add "Toggle Preview Lock" command (#3293) @sam ([[dendron://dendron.dendron-site/dendron.topic.preview.commands.toggle-preview-lock]])

### Enhancements
- enhance(structure): support xvault template in note traits (#3329) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.api#what-needs-to-be-returned]])
- enhance(views): toggle preview lock from inside preview (#3327) @sam

### Fixes
- fix(views): nested bullets in preview (#3326) [cquick01](https://github.com/cquick01)
- fix(lookup): validate file name on note lookup (#3312) @hikchoi
- fix(workspace): remote vault not recognized by dendron for windows (#3316) @joshi
- fix(workspace): correctly decorate begin and end anchors (#3339) @hikchoi
