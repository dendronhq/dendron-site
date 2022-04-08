---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1649439584096
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.90.0

Dendron 0.90 has sprouted 🌱

**Vault-Level URLs**: We're improving the experience with published vaults. Vaults can now be configured with their own URL. These URLs will be used when copying or exporting notes, replacing wikilinks with the correct URL for the vault. 

### Features
- feature(publish): support custom urls for vaults ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.config#publishing-properties]]) (#2641) @kevin

### Enhancements
- enhance(publish): open published tree view links in new tab (#2662) @kaan

### Fix
- fix(workspace): error when adding a self contained vault inside a native workspace (#2660) @kaan
- fix(publish): publish issues with latest version of nextjs due to swc module (#2673) @kevin
- fix(workspace): preserve wikilink metadata on export (#2676) @kevin
- fix(workspace): typo "hierarchy", "should" (#2699) [PabloLION](https://github.com/PabloLION)
- fix(workspace): consistent tree item sort order (#2665) @hikchoi