---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1647021647642
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.86.0

### Enhancements
- enhance(pods): support null entries for dates in Airtable export pod v2 ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#date]]) (#2520) @joshi
- enhance(workspace): Dendron still loads if there's a missing local vault (#2526) @kaan

### Fix
- fix(pods): Google Docs Export pod displays Bad Request error on export (#2529) @joshi
- fix(publish): better error messages when publishing (#2538) @kevin
- fix(views): block anchors showing up in the preview (#2548) @kaan
