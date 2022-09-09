---
id: 50kdbcwwda3gphjhccb0e5t
title: Changelog
desc: ''
updated: 1662699737208
created: 1662695712727
manager: [[user.hikchoi]]
---

## 2022-09-13

Default keyboard shortcut for [[dendron.topic.special-notes.commands.create-scratch-note]] has changed due to a conflict with the built-in VSCode keyboard shortcut for the command `File: Save As...` (command id: `workbench.action.files.saveAs`)

- Original: 
  - mac: `shift+cmd+s`
  - windows: `shift+ctrl+s`
- New:
  - mac: `cmd+k s`
  - windows: `ctrl+k s`

To revert back to using the original keyboard shortcut,

1. Open the command palette and run `Preferences: Open Keyboard Shortcuts (JSON)`
2. Copy and paste the following JSON in to the opened file:
> Note that this should be inserted between the square brackets.
```
  {
    "command": "dendron.createScratchNote",
    "key": "shift+cmd+s", // "shift+ctrl+s" if you are on a Windows system
    "when": "dednron:pluginActive"
  }
```
