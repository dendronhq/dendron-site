---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1614313385678
created: 1604539200840
published: true
nav_exclude: true
---
## 0.30.1

### Features

#### Custom Pods

We now have custom pod support
![[dendron.topic.pod.custom#summary,1:#*]]

If you are interested in developing your own publishing pod, you can docs to do so [[here|dendron.topic.pod.dev]]

#### Dev.to Pod

As an example of what you can do with a custom pod, we created the [[Dev.to Pod|dendron.pro.devto-pod]] which lets you publish your notes to dev.to

### Enhancements

- backlinks in published sites 

![[dendron.topic.publishing.features#backlinks,1]]

### Bug Fixes

- delete node sometimes fails in multi-vault
- publishing multi-vault will sometimes not work if multiple domain notes
- unable to select `root` of multi-vault notes in tree view

### House Cleaning

- if you're working on the codebase, `dendron.code-workspace` has been renamed to `dendron-main.code-workspace`
  - this helps if you're working on dendron while having dendron installed since Dendron, prior to this change, would also activate when you were editing the code

