---
id: H7CgvT7YUYAiV7mEmGnky
title: Changelog
desc: ''
updated: 1631285198703
created: 1630796807707
---



## Dendron Standalone Vault Changes
- date: 2021.09.04
- status: w

### Summary
As part of the work to enable [[3 Standalone Vaults|dendron.rfc.3-standalone-vaults]], we refactored the Dendron startup process. 

The key change is introducing multiple types of `workspaces` to account for Dendron running inside a code workspace vs a native workspace (by detectinga `dendron.yml` file but not necessarily inside a vscode workspace). What used to be called `DendronWorkspace` is now a `DendronExtension`. The `DendronExtension` can contain a workspace, which can either be a `code` workspace or a `native` workspace. 

The new startup process is described [[here|pkg.dendron-plugin.arch.startup#summary]]

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
