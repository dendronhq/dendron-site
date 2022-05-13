---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1652460647999
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.95.0

Dendron 0.95 has sprouted 🌱

**Local Configuration:** We are releasing an early build of Config Overrides, which allows a local configuration to override values in the default configuration. This lets you configure custom settings within a larger group workspace, enabling conveniences like adding local vaults to team workspaces. 

- More information [[docs|dendron://dendron.dendron-site/dendron.topic.local-config-override]]

**🚀 Initialization Speed-Up:** Good news for the impatient! This release drastically improves workspace initialization. 



### Features
- feat(chore): germ stage implementation of config overrides ([[docs|dendron://dendron.dendron-site/dendron.topic.local-config-override]])  (#2794) @kevin
- feat(views): allow customization of tree view label / sorting to preserve old tree view behavior ([[docs|dendron://dendron.dendron-site/dendron.ref.config.workspace]])(#2858) @hikchoi

### Enhancements
- enhance(views): make full graph view as default (#2890) @joshi
- enhance(views): display workspace information in full graph view (#2886) @joshi
- enhance(workspace): Speed up workspace initialization (#2903) @tuling
- enhance(workspace): new user tutorials (#2889) @hikchoi

### Fixes
- fix(publish): published images missing leading forward slashes (#2899) @kaan