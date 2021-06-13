---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1623460596345
created: 1604539200840
published: true
nav_exclude: true
---

## Features

### Copy Note Ref Range Selections
![[dendron.topic.commands#range-selection,1:#*]]

### Random Note Command 
![[dendron://dendron-site/dendron.topic.commands#random-note,1:#*]]

### Show Schema Graph V2
![[dendron.topic.graph-view#show-schema-graph-v2,1:#*]]


### Better Graph Filtering Options

![[dendron.topic.graph-view#filter-view,1:#rfcs]]
## Enhancements
- copy note ref will create a block ref and insert block anchors when you have a block element selected ([[docs|dendron.topic.commands#copy-note-ref]])
- copy note link will create a block link and insert block anchors when you have a block element selected ([[docs|dendron.topic.commands#copy-note-link]])

### Bug Fixes
- published assets now respect vault configuration
- template error when publishing in windows

### House Cleaning
- Analytics
	- we now measure `duration` when installing and upgrading Dendron (see [[docs|dendron.topic.telemetry#installationupgrade]])
- Deprecation Notices
	- Dendron Markdown Links is now deprecated and replaced with Dendron's Native Graph Commands. It will be removed July 12, 2021

<!-- ### Bug Fixes
- `#` in alias can be used again ([#790](https://github.com/dendronhq/dendron/issues/790)) -->
