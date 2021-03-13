---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1615614960609
created: 1604539200840
published: true
nav_exclude: true
---
## 0.32.1

### Features

#### Password protected sites
- [docs](https://dendron.so/notes/8b08d91b-3da8-4b8a-90c5-799d3026ad9b.html#add-password-protection-to-your-site)

You can now use managed publishing with a password. Note that while the instruction says you need a `sprout` membership, it's available for all current environmentalist regardless of what tier you're in 

### Enhancements
- control display for children links ([[docs|dendron.topic.config#hiearchydisplaytitle]])
- [[skipLevels|dendron.topic.publishing.configuration#skiplevels]] also applies to children lins
- [[useNoteTitleForLink|dendron.topic.config#usenotetitleforlink]] also applies to note references
- importing from markdown is now 5x faster 🚀🚀🚀
    - NOTE: this is only for the CLI 
- a bunch of new options when importing a pod ([[docs|dendron.topic.pod.import]])
    - NOTE: these options currently only apply for the [[Markdown Import Pod|dendron.topic.pod.builtin.markdown#import]]
- show progress bar when importing pod from plugin

### Bug Fixes
- dendron will check if dependencies are actually installed before trying to preview your site
- remove un-used extensions

### House Cleaning
- importing a pod now requires a `vaultName` parameter (previous, we just defaulted to the first vault)