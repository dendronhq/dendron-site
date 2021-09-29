---
id: yQVhJtdQ40n3SLHJKAeeU
title: CLI
desc: ''
updated: 1631987682309
created: 1631401993170
---

## Commands

### init

### build

Prepare notes for publication. Runs [[Nextjs|dendron.topic.pod.builtin.nextjs]] pod in the background. 

#### options
- `--attach`: attach to running engine instead of a new engine ^bfvLB8BY4nLb
- `--overrides`: add additional config overrides 

#### example

![[dendron.topic.publishing-next.cook.common#build-notes,1:#*]]


#### with override

```
dendron publish build --override="siteUrl=foo.com"
```
