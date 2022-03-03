---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1645811413446
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.84.0

### Features
- feat(pods): support pods v2 in CLI ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.cli]]) (#2402) @joshi

### Enhancements
- enhance(views): separate tag configuration for preview and publish ([[docs|dendron://dendron.dendron-site/dendron.ref.config.preview]]) (#2460) @hikchoi
- enhance(views): faster image preview by using native vscode webview urls (#2432) @kaan
- enhance(views): faster webviews by reducing engine sync operations (#2472) @jonathan

### Fix
- fix(schema): Apply schema template for goto-note-command if template is in different vault (#2429) @tuling
- fix(publish): Table of Contents is missing user tags, inline code, dashes and underlines (#2465) @kaan
- fix(workspace): dendron can hang when trying to provide hover for large non-dendron file (#2457)  @kevin
- fix(views): clicking preview links for non-note files (#2455) @kaan
- fix(views): Code blocks and spans in preview are html encoded (#2471) [flammehawk](https://github.com/flammehawk)
- fix(workspace): don't call reload index if action is findIncompatibleExtension (#2458) @hikchoi
- fix(views): don't refresh tree view if note visible (#2487) @hikchoi
