---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1642787802114
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.79.0

### Breaking changes

Since we are disabling [[date variable substitution|dendron://dendron.dendron-site/dendron.topic.templates#template-variables]], current users will not be able to use it for the time being.

### Enhancements
- enhance(publish): logo can reference a full URL path to external image ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.faq#how-do-i-add-a-logo-to-my-website]]) (#2189) @kaan
- enhance(lookup): add configuration for vault selection behavior, change prompt vault selection default to true ([[docs|dendron://dendron.dendron-site/dendron.ref.config.commands#vaultselectionmodeoncreate]]) (#1960) @nickolay
- enhance(publish): attempt to update nextjs template in-place (#2162) [Luke Carrier](https://github.com/LukeCarrier) `lukecarrier#2081`
- enhance(publish): add lockfile to nextjs (#2215) @kevin

### Fix
- fix(server): highlighting breaks when there's too much text (#2163) @kaan
- fix(workspace): stop link candidate logic when disabled (#2136) @hikchoi
- fix(commands): renamed command from goto note to go to note by skfile [skfile](https://github.com/skfile)
- fix(markdown): Exclude parenthesis from tags (#2182) [[people.nicklas-gummesson]]
- fix(publish): logo doesn't respect assetsPrefix (#2189) @kaan
- fix(workspace): cursor moves to top when opening file through the search (#2193) @kaan
- fix(schema): Use string replace instead of lodash for date variable substitution (breaking change)
- fix(publish): some published pages will show error (#2199) @kaan
