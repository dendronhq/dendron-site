---
id: 65b03213-d3d1-46c0-9881-a6280ed9bdeb
title: New
desc: ''
updated: 1603344945504
created: 1602096212957 
published: false
nav_exclude: true
---

## [0.13.2](https://github.com/dendronhq/dendron/compare/v0.13.2-alpha.2...v0.13.2) (2020-10-22)

### Features


#### Pod Publishing

- **pods:** add publish pod cmd ([8947a60](https://github.com/dendronhq/dendron/commit/8947a60cbc2e76f00d214a1913952c58db86f2f1))

In addition to **import** and **export**, you can now also **publish** notes with pods.

((ref: [[dendron.topic.pod]]#publish,1:#*))


### Enhancements
- **publishing:** preserve abbreviations ([06d9191](https://github.com/dendronhq/dendron/commit/06d91912b34bc5f81b20fce77652366c501865ec)) --> thank you [Luke Carrier](https://github.com/LukeCarrier) for the pull request
- **pods:** add json publish pod ([127dd7c](https://github.com/dendronhq/dendron/commit/127dd7c02a0081b027e06c40d6189904c5da0694))
- **pods:** add markdown publish pod ([127dd7c](https://github.com/dendronhq/dendron/commit/127dd7c02a0081b027e06c40d6189904c5da0694))
- **pods:** update placeholder text ([57a4af8](https://github.com/dendronhq/dendron/commit/57a4af8887404c21d07b45a3a565516bf73cc944))
- **refs:** render error when ref doesn't exist ([ba1be1a](https://github.com/dendronhq/dendron/commit/ba1be1a12c4a1742e93ab4058d0f132b320be539))
- **schemas:** realtime schema updates (server mode) ([42191bcd](https://github.com/dendronhq/dendron/commit/42191bcd))

### Breaking
- `dendron.pod.file` has been renamed `dendron.markdown`
- `dendron.pod.json` has been renamed `dendron.json`

### Documentation Updates
#### Pods

Documentation for pods has been re-written for clarity. 

((ref: [[dendron.topic.pod]]))
