---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1608835718603
created: 1604539200840
published: true
nav_exclude: true
---

## 0.20.1

This change brings a whole bunch of additional 11ty publishing features. At this point, we are almost at feature parity with jekyll based publishing minus the following:
- support for math
- integration with dendron-plugin
- run natively on windows without WSL

Latest Versions
- @dendronhq/cli, version: v0.21.1-alpha.3
- @dendronhq/dendron-11ty, version 1.3.7

Installation (inside a running dendron workspace):

```
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty@latest
```

### Enhancements
- add seo tags ([[docs|dendron.topic.publishingv2.configuration#seo-options]])
- enable edit on github link ([[docs|dendron.topic.publishingv2.configuration#github-options]])
- migrate all jekyll `_config.yml` settings to `dendron.yml`

### Bug Fixes
- build-site errors when building from vaults without `asset folder`
- build-site error on certain operating systems
- build-site error on node version != 12

### Docs
- [dendron.so](https://dendron.so) is now published using the new 11ty framework
- add [[publishing to github guide|dendron.topic.publishingv2.github]] using github actions
