---
id: d1usLHSTfJc-3_JKuYLBr
title: Arch
desc: ''
updated: 1630020660911
created: 1624552964184
---

## Summary

Describes how various parts of Dendron Work

## Index
- [[Commands|pkg.plugin-core.t.commands]]

## Other
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
