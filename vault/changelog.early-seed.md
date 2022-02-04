---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1643996560337
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.81.0

### Enhancements

- enhance(schemas) support cross vault links in schema templates (#2274) @tuling
- enhance(schemas) support template prompt when multiple templates match a schema (#2274) @tuling
- enhance(views) improve hover preview performance (#2312) @kaan
- enhance(sync): Workspace Sync now stash and unstash local changes to pull even when there are uncommitted changes @kaan
- enhance(sync): Workspace Sync now can detect merge conflicts and ongoing rebases to avoid committing bad notes @kaan
- enhance(sync): Workspace Sync now can detect bad or misconfigured remotes and warn about them @kaan
- enhance(sync): Workspace Sync now can detect that a push would fail, and avoid pushing to remote @kaan
- enhance(sync): Workspace Sync now can detect that a push is not needed, and skip pushing @kaan
- enhance(sync): Workspace Sync now has better error messages if something went wrong @kaan
- enhance(sync): Workspace Sync commit messages now include the version of Dendron, the names of vaults in that repository, and the hostname of the committing machine @kaan
- docs: Updates based on Workspace Sync improvements ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]]) @kaan

### Fix

- fix(preview): preview opens wrong path on Windows (#2326) @kaan
- fix(views): show preview doesn't display targeted files when using file explorer(#2327)
- fix(views): windows hover preview now shows images @kaan
- fix(schemas): Do not include stubs as part of template suggestions when applying a template (#2357)
