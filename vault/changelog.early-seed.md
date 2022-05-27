---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1653672794318
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.97.0

Dendron 0.97 has sprouted 🌱


**Task Note Status:** Wait, did I finish that task? Dendron now displays the status of a linked task note in preview and on published pages so you are always up-to-date with your tasks. 

**Handlebar Templates:** Dendron adds a powerful tool for templating: [Handlebars](https://handlebarsjs.com/guide/), enabling you to use variables, conditionals, for loops and more in your notes. 

**Publishing Configuration**: This release also extends your ability to customize the Side Nav of your published notes. You can now configure whether or not a published note should show it's children in the tree view, allowing you to prevent overcrowding or undesired navigational destinations. 


### Features
- feat(workspace): Add a command to migrate regular vaults into self contained vaults ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained.migrate.md]]) (#2915) @kaan
- feat(views): display task note status when linking to task notes in publishing and in preview  ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.enableTaskNotes.md]]) (#2931) @kaan
- feat(markdown): handlebar based templates ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.handlebars]]) (#2954) @kevin
- feat(publish): ability to exclude children in dendron side nav ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.nav_exclude_children]]) (#2962) @kevin

### Enhancements
- enhance(publish): implement dark theme support ([[docs|dendron://dendron.dendron-site/dendron.topic.theme.publish.md]]) (#2941) @kaan
- enhance(views): upgrade mermaid to v9.1.1 (#2951) @kaan
- enhance(navigate): make wikilinks clickable in hover (#2949) @jonathan

### Fixes
- fix(publish): publishing to respect enableHierarchyDisplay (#2946) @joshi
- fix(workspace): give better feedback to users for invalid dendron.yml (#2940) @hikchoi
- fix(publish): assetsPrefix breaks images (#2963) @kaan
- fix(publish): "edit this page on ..." link uses the wrong path for self contained vaults (#2966) @kaan
- fix(workspace): Help and Feedback Panel shows info when not in Dendron WS (#2974) @jonathan