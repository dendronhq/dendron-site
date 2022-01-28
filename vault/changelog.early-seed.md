---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1643390434310
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.80.0

### Enhancements
- enhance(pods): import note metadata on markdown import ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import#importfrontmatter]]) (#2195) @joshi

### Fix
- fix(lookup): bad title text when creating new schema (#2253) @eleweek
- fix(publish): numbered lists without content stack on top of each other (#2219) @kaan
- fix(publish): bad logo text position on mobile (#2183) [Pvorona](https://github.com/pvorona)
- fix(publish): Search Bar Results to not stay anchored to the search bar when scrolling up (#2292) @eleweek
- fix(schema): fix schema template match when there is same grandchild from two different schema parents (#2158) @nickolay
