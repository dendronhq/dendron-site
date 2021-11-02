---
id: bsQMDdNBiDn81KmEi88Do
title: Workspace
desc: ''
updated: 1635719005493
created: 1635718751978
---


## Summary
<!-- What is this module about -->

There are two types of workspaces Dendron supports:
- native
- code

## Types of workspaces

### Native

### Code

TODO

## Lifecycle

- location: src/workspace.ts
```ts
activateWatchers {

    ... 
    fileWatcher = new FileWatcher(vaults)
    schemaWatcher = new SchemaWatcher(vaults)

}
```

## Changelog
<!-- All changes -->

- [feat: native workspaces by SeriousBug · Pull Request #1482 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1482)