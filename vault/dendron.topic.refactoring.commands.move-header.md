---
id: hdnewljy94gvsnlwwwft6zq
title: 'Dendron: Move Header'
desc: Move the selected header to another note.
updated: 1655130677907
created: 1655130405782
commandId: dendron.moveHeader
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

{{fm.title}} is a command that lets you select a header from a note, remove it, and append it to the end of the destination note.

All wikilinks that point to the moved header will be automatically updated to point to the new header that was appended to the destination note.

If the destination note does not exist yet, it will be created before appending the selected header.
