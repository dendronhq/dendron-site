---
id: o350dnypumec34m7xha2g6f
title: "Dendron: Archive Hierarchy"
desc: "Move current note and all children under the `archive` hierarchy"
updated: 1655184589843
created: 1655184272177
commandId: dendron.archiveHierarchy
keybindings:
  mac: none
  windows: none
  linux: none
---

## Summary

{{fm.desc}}

- Command Title: **{{fm.title}}**
- Command ID: **{{fm.commandId}}**
- keybindings:
  - mac: **{{fm.keybindings.mac}}**
  - windows: **{{fm.keybindings.windows}}**
  - linux: **{{fm.keybindings.linux}}**

## Details

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>

{{fm.title}} is a convenience command for archiving an entire hierarchy that is no longer in use. This is built to use [[dendron.topic.refactoring.commands.refactor-hierarchy]] to match everything under the current active note's hierarchy in to the hierarchy `archive`.

### Example

Given that we have the note `pro.foo` open, running this command is equivalent to running [[dendron.topic.refactoring.commands.refactor-hierarchy]] with the following inputs:

match text: `pro.foo`
replace text: `archive.pro.foo`
