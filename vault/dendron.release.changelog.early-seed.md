---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1610749294039
created: 1604539200840
published: true
nav_exclude: true
---
## 0.24.1

### Features



### Enhancements
- preview and Build Notes for Publication for Windows (V2) ([[docs|dendron.topic.commands#site-build]])
    - NOTE: if you use the `Site Preview` command, dendron currently doesn't close the connection when you `cancel` 
    - kill on powershell
    ```powershell
    Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess
    Stop-process -Id 8464
    ```
- fine grained publishing options on a per vault per hiearchy basis ([[docs|dendron.topic.publishingv2.configuration#publishbydefault]])
- inject custom headers to published site ([[docs|dendron.topic.publishingv2.configuration#customheaderpath-optional]])
- google analytics support ([[docs|dendron.topic.publishingv2.configuration#ga_tracking-optional]])
- multi-vault github links ([[docs|dendron.topic.publishingv2.configuration#gh_edit_repository]])

### Bug Fixes
- issue with breadcrumbs not generating correctly on multi-vault
- dendron-cli not building site for windows

### Docs
- brand new getting started guide to publishing using publishing v2 ([[docs|dendron.topic.publishingv2.quickstart]])