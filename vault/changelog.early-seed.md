---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1664894096525
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.115.0
October 05, 2022

Dendron 0.115 has sprouted 🌱


**Autocomplete everywhere**: Tab-autocomplete now works on all commands. This was previously just limited to `Lookup`

### Features
- feat(workspace): copy as command (#3544) @joshi
- feat(lookup): Add Create New with Template label to note lookup (#3563) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.lookup.create]])

### Enhancements
- enhance(lookup): tab autocomplete in all lookup controls (#3559) @jonathan
- enhance(structure): Add day of week string template variables (#3595) @hikchoi ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables]])

### Fixes
- fix (workspace): correctly update dendron.yml when adding / deleting vaults with dendronrc.yml (#3588) @hikchoi
- fix(workspace): autocomplete past first level of hierarchy for mentions and tags (#3610) @joshi
- fix(views): remove schema icon from tree view and published sidebar (#3620) @joshi
- fix(structure): regression in apply template command (#3623) @kevin

