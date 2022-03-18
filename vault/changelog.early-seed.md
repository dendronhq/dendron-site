---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1647629183354
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.87.0

### Features
- feat(vaults): early implementation of self contained vaults ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained]]) (#2517) @kaan

### Enhancements
- enhance(workspace): faster preview refresh (#2527) @tuling
- enhance(workspace): faster editing in large workspaces (#2527) @tuling
- enhance(internal): provide a standard way to create and read backup files #2521 [[docs|dendron.ref.commands#open-backup]] @hikchoi


### Fix
- fix(workspace): fix crash that can happen when bad frontmatter is present during doc save (#2535) @jonathan
- fix(publish): customHeaderPath breaks publishing if value is set to anything except `header.html` (#2565) @joshi
- fix(basics): ensure note title is always a string to avoid errors (#2551) @kaan
- fix(sync): better error message on `Workspace Add and Commit` (#2552) @joshi
- fix(lookup): lookup (without spaces) should be case-insensitive (#2570) @joshi
- fix(workspace): issue with notes not being saved on export (#2574) @tuling
- fix(workspace): race condition when backing up configuration  (#2581) @kevin
