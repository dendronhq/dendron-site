---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1642189167528
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release.

## Enhancements
- enhance(pod): Markdown import pod avoids reformatting files ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import]]) (#2084) @kaan
- enhance(workspace): `Dendron: Initialize Workspace` can use file picker to select destination, instead of typing it out ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#initialize-workspace]]) (#2130) @tuling
- enhance(markdown): allow notes to override the pretty refs setting ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#configuration]]) (#2124) @kaan
- enhance(workspace): detect config / client compatibility mismatch in cli (#2113) @hhikchoi

## Fix
- fix(lookup): add sort by levenshtein distance prior to sorting by update date to lookup results of the same match score ([[docs|dendron://dendron.dendron-site/dendron.topic.lookup.find#sort-ordering]]) (#2111) @nickolay
- fix(commands): paste-link-title-trim (#1961) [KamQb](https://github.com/KamQb) `@qKi#0849`
- fix(workspace): insert note index enablement (#2133) @hikchoi
- fix(views): hover preview containing local images on Windows (#2047) @kaan
- fix(views): enable copy plaintext from preview (#2152) @kevin
- fix(server): highlighting breaks when there's too much text (#2163) @kaan
