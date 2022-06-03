---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1654267941057
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.98.0

Dendron 0.98 has sprouted 🌱

**Template Helpers:** Templates just got more powerful in Dendron. Make your notes programable using built-in helpers like equality checking or date fetching. 
- More information: [[Template Helpers|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers]]

**Custom Themes in Preview**: You asked for it and now its here. Customize the preview with your own css (and share them in our new #themes channel).
- More information: [[Theme|dendron://dendron.dendron-site/dendron.topic.theme]]

**Hovers Are Coming to Backlinks**: Backlinks will now preview the contents of the note when hovering over a link.
- More information: [[Backlinks|dendron://dendron.dendron-site/dendron.topic.sidebar.backlinks]]

### Features
- feat(views): preview uses your vscode theme colors ([[docs|dendron://dendron.dendron-site/dendron.topic.theme]]) (#2984) @kaan 
- feat(views): custom theme support for preview ([[docs|dendron://dendron.dendron-site/dendron.topic.theme]]) (#2984) @kaan 
- feat(navigate): backlink panel with hover ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.backlinks]]) (#2904) @jonathan
- feat(edit): template helpers ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers]]) (#3029) @kevin

### Enhancements
- enhance(view): decrease min zoomed font-size for node labels in graph panel (#2996) @joshi
- enhance(workspace): "migrate to self contained vault" updates logopath and moves gitignore file (#2998) @kaan
- enhance(extend): add axios to hook function ([[docs|dendron://dendron.dendron-site/dendron.topic.hooks.quickstart#setup]]) (#3001) [[Maarrk 9537|dendron://users/people.maarrk-9537]]

### Fixes
- fix(publish): export gets stuck if `logoPath` is set but the logo doesn't exist (#2959) @kaan
- fix(views): added default initial theme for webviews (#3013) @joshi
- fix(views): bullet points missing in new theme-matching style (#3023) @kaan
- fix(views): backlinks panel tweaks (#3031) @jonathan
- fix(views): images with encoded uri are not rendered in the preview (#3006) [tenheadedlion](https://github.com/tenheadedlion)
