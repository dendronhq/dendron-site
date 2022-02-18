---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1645203887656
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.83.0

### Enhancements
- enhance(pods): add vault filter for pods-v2 hierarchy export ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#exportscope]]) (#2419) @joshi
- enhance(notes): change dendron id format to be alphanumeric lowercase ([[docs|dendron://dendron.dendron-site/dendron.topic.frontmatter#id]]) (#2403) @kevin
- enhance(workspace): Block Anchor support for non-note files ([[docs|dendron://dendron.dendron-site/dendron.topic.links#file-links]]) (#2377) @kaan
- enhance(workspace): calculate backlinks and anchors in engine for improved editor responsiveness (#2389) @kaan

### Fix
- fix(workspace): Journal Note Consistency with Title and Traits (#2401) @jonathan
- fix(workspace): Dendron will try to parse non-dendron files in `onFirstOpen` (#2405) @kevin
- fix(workspace): error message to be readable in error toast (#2426) @joshi
- fix(publish): horizontal line's height in publishing (#2441) @kaan
- fix(publish): properly set siteIndex when it's not explicitly set by config (#2443) @hikchoi
