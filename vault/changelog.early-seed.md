---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1654241849851
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.98.0

Dendron 0.98 has sprouted 🌱

**Template Helpers:** Templates just got more powerful in Dendron. Make your notes programable using built-in helpers like equality checking or date fetching. 
- More information: [[Template Helpers|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers]]

### Features
- feat(views): Preview uses your VSCode theme colors, and supports custom themes ([[docs|dendron://dendron.dendron-site/dendron.topic.theme]]) (#2984) @kaan 
- feat(navigate): Backlink Panel with Hover ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.backlinks]]) (#2904) @jonathan
- feat(edit): template helpers ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers]]) (#3029) @kevin

### Enhancements
- enhance(view): decrease min zoomed font-size for node labels in graph panel (#2996) @joshi
- enhance(workspace): "Migrate to Self Contained Vault" updates logoPath and moves gitignore file (#2998) @kaan
- enhance(extend): add axios to hook function ([[docs|dendron://dendron.dendron-site/dendron.topic.hooks.quickstart#setup]]) (#3001) [[Maarrk 9537|dendron://users/people.maarrk-9537]]

### Fixes
- fix(publish): Export gets stuck if `logoPath` is set but the logo doesn't exist (#2959) @kaan
- fix(views): added default initial theme for webviews (#3013) @joshi
- fix(views): bullet points missing in new theme-matching style (#3023) @kaan
- fix(views): Backlinks Panel Tweaks (#3031) @jonathan
- fix(views): images with encoded URI are not rendered in the Preview (#3006) [tenheadedlion](https://github.com/tenheadedlion)
