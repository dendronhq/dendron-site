---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1609440225167
created: 1604539200840
published: true
nav_exclude: true
---
## 0.22.1

### Features
- [[Collections|dendron.topic.publishingv2.collections]] support for 11ty
    - publish blog like archives using Dendron
- CLI Based Doctor ([[docs|dendron.pro.dendron-cli#doctor]])
    - run various tests to make your notes are healthy for the new year
- use frontmatter as title when publishing and in the preview ([[docs|dendron.topic.config#usefmtitle]])

### Enhancements
- additional metadata tags for published pages
- support `noindex` option ([[docs|dendron.topic.publishingv2.configuration#noindex]])
- add anchor links to headers
- use note title for page title
- support [[nav_exclude|dendron.topic.publishingv2.configuration#nav_exclude]] option
- support overriding [[output|dendron.pro.dendron-cli#buildsitev2]] in `buildSiteV2` command
- don't throw error if no syntax highlighter available for code block

### Bug Fixes
- issue connecting to open workspace using CLI
- nav bar when publishing multiple hierarchies will show wrong expansion options