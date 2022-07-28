---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1659017290594
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.106.0
July 29, 2022

Dendron 0.106 has sprouted 🌱

### Breaking

- the `Delete Node` command is now replaced with the `Delete` command (if you haven't set any custom keyboard shortcuts for `Delete Node`, no change is necessary)
- the `Show Preview` command is now replaced with the `Toggle Preview` command (if you haven't set any custom keyboard shortcuts for `Show Preview`, no change is necessary)

### Enhancements
- enhance(edit): remove delete node command (#3285) @kevin
- enhance(workspace): 'Fix It' button in warning toaster for duplicate note id (#3237) @joshi
- enhance(retrieve): remove `Show Preview` command (#3276) @kevin
- enhance(retrieve): fix default keyboard shortcut of toggle preview (#3276) @kevin

### Fix
- fix(workspace): List dendron.dendron-markdown-preview-enhanced as unwanted (#3281) @derek