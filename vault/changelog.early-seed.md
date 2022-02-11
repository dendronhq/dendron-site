---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1644597020361
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.82.0

### Enhancements
- enhance(schemas): Extend date subsitution to include week numbers ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.schema-template#template-variables]]) (#2372) [`opcon`](https://github.com/opcon)

### Fix
- fix(workspace): avoid workspace watcher crashing if folder is deleted (#2359) @kaan
- fix(workspace): correct title generation of notes within sub-hierarchy starting with `md` (#2369) @joshi
- fix(pod): acknowledge cli args for publish pod (#2352) @joshi
