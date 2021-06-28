---
id: d1usLHSTfJc-3_JKuYLBr
title: Arch
desc: ''
updated: 1624833163910
created: 1624552964184
---


## Commands

### Exceptions

When a command throws an exception that is not caught, it is caught by the parent. The parent will log the exception and show a message to the user. The error prompt will be what is in `error.message`.


## File Watchers

### File Changes

File changes are watched by the following watchers:
	- [VaultWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/fileWatcher.ts#L65:L65).
	- [WorkspaceWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/WorkspaceWatcher.ts#L61:L61)
	- [WindowWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/windowWatcher.ts#L31:L31)

Hooks into `onDidChange`, `onDidCreate` and `onDidDelete` should be added here.

### WorkspaceWatcher

Modify files before saving them

Related:
- [[Workspace Watcher Internal|pkg.dendron-plugin.internal.workspace-watcher]]

#### onDidChangeTextDocument
- triggerUpdateDecorations


### FileWatcher

Modify engine state in response to files changing

- NOTE: this is called `VaultWatcher`

#### onDidChange
- updates note links
- updates note anchors


### WindowWatcher

Modify UI in response to active note

#### onDidChangeActive

- triggerUpdateDecorations
- triggerNoteGraphViewUpdate
- triggerSchemaGraphViewUpdate