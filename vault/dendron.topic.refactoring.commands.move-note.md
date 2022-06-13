---
id: 98ywiw4211q9sx0v98lbo88
title: 'Dendron: Move Note'
desc: Move a note to another vault and update all backlinks to that note.
updated: 1655129619728
created: 1655129267874
commandId: dendron.moveNote
keybindings:
  mac: none
  windows: none
  linux: none
---

> Dendron will not allow you to move a note if a note already exists in the destination.

> If you are looking to move a note within a hierarchy in one vault, or simply rename the note, use [[dendron.topic.refactoring.commands.rename-note]] instead.

## Summary
{{fm.desc}}

- Command Title: **{{fm.title}}**
- Command ID: **{{fm.commandId}}**
- keybindings:
  - mac: **{{fm.keybindings.mac}}**
  - windows: **{{fm.keybindings.windows}}**
  - linux: **{{fm.keybindings.linux}}**

## Details

{{fm.title}} is a command that lets you move a note between vaults when in a [[Multi-vault|dendron://dendron.dendron-site/dendron.topic.multi-vault]] workspace, and will also update all references in other notes of that note.

## Moving a note using the file explorer
You can also select **{{fm.title}}** after right clicking on a note in the explorer to move that note. This will also update the backlinks as well.
