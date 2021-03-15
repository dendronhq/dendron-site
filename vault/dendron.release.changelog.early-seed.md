---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1615833439032
created: 1604539200840
published: true
nav_exclude: true
---
## 0.32.2

### Features
#### Markdown Export
![[dendron.topic.pod.builtin.markdown#export,1:#*]]

#### GitPod
![[dendron.topic.pod.builtin#dendrongitpunchard,1]]

### Enhancements
- disable git linking on a per note basis ([[docs|dendron.topic.publishing.configuration#gitnolink]])
- set a custom path for git url  ([[docs|dendron.topic.publishing.configuration#gitnotepath]])
- `dendron-cli` is now named `dendron` (`dendron-cli` will continue to work)
- `buildSiteV2` has been renamed to `buildSite` (`buildSiteV2` will continue to work but is now considered `deprecated`)
- add [tldr](https://github.com/tldr-pages/tldr) to remote vault presets ([[docs|dendron.topic.multi-vault#preset-remote-vaults]])
- support `useFMTitle` when publishing to markdown
- fix link textwrap issue when publishing for mobile

### House Cleaning
- consolidate `engine-server` and `common-server` tests into `engine-test-utils`

## 0.32.1

### Features

#### Password protected sites
- [docs](https://dendron.so/notes/8b08d91b-3da8-4b8a-90c5-799d3026ad9b.html#add-password-protection-to-your-site)

You can now use managed publishing with a password. Note that you'll need [sprout membership](http://accounts.dendron.so/) to use the feature. 

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
- failure when importing large amounts of markdown files using import pod

### House Cleaning
- importing a pod now requires a `vaultName` parameter (previous, we just defaulted to the first vault)