---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1654869904786
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 1.00.0

Dendron 1.00 has sprouted 🌱

**Recent Workspaces Panel:** Navigating through multiple workspaces has never been easier! This new panel will show you your last 5 opened Dendron workspaces and you can access them with just a click.
- More information: [[Recent Workspaces|dendron://dendron.dendron-site/dendron.topic.sidebar.recent-workspaces]]

**Faster Link Completions:** Tired of manually looking through all your notes to complete your links? Now you can delegate that to lookup. On initial trigger, instead of showing you all the possible results, you will only see the top level notes. 
- More information: _need confirmation on docs_

**BREAKING:** Handlebars are now set as the default template format. Users that were using <% %> syntax for template variables will no longer work. Please see the [[Migration|dendron://dendron.dendron-site/dendron.topic.templates.handlebars.migration]] guide to switch to handlebar based templates. 

**DEPRECATED:** `Insert Note` command replaced by the `Apply Template` command to [[Create a template|dendron://dendron.dendron-site/dendron.topic.templates.handlebars#create-a-template]]. 

### Features
- feat(views): recent workspaces panel (#3052) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.recent-workspaces]])

### Enhancements
- enhance(cli): updated dendron lookup command (#3043) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.notes.cli.lookup]])
- enhance(views): add tooltip on hover for graph nodes (#3060) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#features]])
- enhance(edit): this sets handlebars as the default template format (#3070) @kevin
- enhance(edit): configure templateHierarchy when applying template (#3069) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.config.templateHierarchy]])
- enhance(retrieve): faster link completions (#3044)  @kevin
- enhance(edit): remove deprecated `Insert Note` command (#3083) @kevin
- enhance(workspace): prompt to update seed vault configuration during sync if the seed configuration changed (#3080) @kaan
- enhance(workspace): v100 landing page (#3103) @jonathan

### Fixes
- fix(workspace): migrate to self contained vault causes `EBUSY` errors on Windows (#3067) @kaan
- fix(refactor): updated refactor hierarchy message to include no. of files changed (#3078) @joshi
- fix(views): double click issue on help and feedback panel (#3089) @jonathan