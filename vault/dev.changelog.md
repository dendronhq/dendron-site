---
id: H7CgvT7YUYAiV7mEmGnky
title: Changelog
desc: ''
updated: 1634084725871
created: 1630796807707
---


## Dendron CLI Migration
- start: 2021.10.12
- status: WIP

### Summary
The Dendron CLI has logic that needs to be required in `plugin-core` (eg. [Doctor Command](https://github.com/dendronhq/dendron/blob/94d05c8f1b6856c769d0cd2964d1dece9decb37c/packages/plugin-core/src/commands/Doctor.ts#L12-L12)). This is unfortunate because certain command modules like `dendron dev *` are not used by the plugin and take a significant amount of disk space. 

### Changes
Ensure that the core logic for all new functionality in `dendron-cli` is written in an external module (eg. `engine-server`) so that `plugin-core` does not need to depend on Dendron CLI


## Dendron Standalone Vault Changes
- start: 2021.09.04
- complted: 2021.10.12
- status: complete

### Summary
As part of the work to enable [[3 Standalone Vaults|rfc.3-standalone-vaults]], we refactored the Dendron startup process. 

The key change is introducing multiple types of `workspaces` to account for Dendron running inside a code workspace vs a native workspace (by detectinga `dendron.yml` file but not necessarily inside a vscode workspace). What used to be called `DendronWorkspace` is now a `DendronExtension`. The `DendronExtension` can contain a workspace, which can either be a `code` workspace or a `native` workspace. 

The new startup process is described [[here|pkg.plugin-core.arch.lifecycle.startup#summary]]

### Changes
- `DendronWorkspace` renamed to `DendronExtension`
- `getWS` renamed to `getExtension`
- introduce `getDWorkspace` which returns `DWorkspaceV2`
    - `DWorkspaceV2` has a subset of properties from `DendronWorkspace` that (in future releases) can be accessed independently from vscode itself
- removed
    - `DendronWorkspace.instance` (use `getExtension`)
    - `DendronWorkspace.wsRoot` (use `getDWorkspace().wsRoot`)
    - `DendronWorkspace.vaults` (use `getDWorkspace().vaults`)
    - `DendronWorkspace.config` (use `getDWorkspace().config`)
    - `DendronWorkspace.extensionAssetsDir` (use `getDWorkspace().assetUri`)

### Usage
- any property that used to be accessed using `DendronWorkspace.instance` or `getWS` is now either a property of `getExtension` or `getDWorkspace`

### Related
- Work item: [[Tasks|scratch.2021.09.04.161012.workspace-refactoring-for-standalone-vaults#tasks]]
