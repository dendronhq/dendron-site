---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1653684962171
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.97.0

Dendron 0.97 has sprouted 🌱

**Task Note Status:** Wait, did I finish that task? Dendron now displays task status information in the preview as well as when publishing.

**Handlebar Templates:** Get a handle on templates - Dendron now supports [Handlebars](https://handlebarsjs.com/guide/), a minimal templating language that lets you create flexible templates!

**Clean up your published sidebarn:** It's not too late for spring cleaning! You can now configure whether or not a published note should show it's children in the tree view.

### Features
- feat(markdown): handlebar based templates (#2954) ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.handlebars]]) @kevin 
- feat(edit): add command to apply a template @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.commands.apply-template]])
- feat(views): display task note status when linking to task notes in publishing and in preview (#2931) @kaan
- feat(workspace): Add a command to migrate regular vaults into self contained vaults (#2915) ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#migrate-to-self-contained-vault]]) @kaan
- feat(publish): dark theme support (#2941) @kaan ([[docs|dendron://dendron.dendron-site/dendron.topic.theme.publish.quickstart#using-the-built-in-dark-theme]])
- feat(publish): ability to exclude children in dendron side nav ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.nav_exclude_children]]) (#2962) @kevin

### Enhancements
- enhance(edit): additional built-in variables for templates ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables#handlebar-only]]) (#2954) @kevin
- enhance(views): upgrade mermaid to v9.1.1 (#2951) @kaan
- enhance(navigate): make wikilinks clickable in hover (#2949) @jonathan
- enhance(workspace): better feedback to users for invalid dendron.yml (#2940) @hikchoi

### Fixes
- fix(publish): publishing to respect enableHierarchyDisplay (#2946) @joshi
- fix(publish): assetsPrefix breaks images (#2963) @kaan
- fix(publish): "edit this page on ..." link uses the wrong path for self contained vaults (#2966) @kaan
- fix(workspace): Help and Feedback Panel not empty outside of dendron ws (#2974) @jonathan
