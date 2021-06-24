---
id: d1usLHSTfJc-3_JKuYLBr
title: Arch
desc: ''
updated: 1624559033380
created: 1624552964184
---


## Commands

### Exceptions

When a command throws an exception that is not caught, it is caught by the parent. The parent will log the exception and show a message to the user. The error prompt will be what is in `error.message`.


## File Watchers

### File Changes

File changes are watched by [fileWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/fileWatcher.ts#L65:L65).

Hooks into `onDidChange`, `onDidCreate` and `onDidDelete` should be added here.