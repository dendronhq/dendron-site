---
id: H7CgvT7YUYAiV7mEmGnky
title: Changelog
desc: ''
updated: 1630797041181
created: 1630796807707
---

## 2021.09.04

### Dendron Standalone Vault Changes
- [[Summary|pkg.dendron-plugin.arch.startup#summary]]
- Work item: [[Tasks|scratch.2021.09.04.161012.workspace-refactoring-for-standalone-vaults#tasks]]
<!-- -->
- `getWS` renamed to `getExtension`
- introduce `getDendronWorkspace`
- `DendronWorkspace.instance` has been removed

- TODO
  - [ ] `DendronWorkspace` type needs to get renamed to `DendronExtension`
    - [ ] various workspace properties need to be dropped from extension and added to `DWorkspace`
