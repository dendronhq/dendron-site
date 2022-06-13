---
id: g0iqmyiyxje6ndjmecshb8b
title: 'Dendron: Rename Note'
desc: Rename a note and update all backlinks to that note.
updated: 1655136188599
created: 1655109426539
commandId: dendron.renameNote
keybindings:
  mac: none
  windows: none
  linux: none
---

> Dendron will not allow you to rename a note to a note that already exists

> If you are looking to move a note to a different vault while keeping the same name in a [[dendron.topic.multi-vault]] workspace, use [[Move Note|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.move-note]] instead.

## Summary
{{fm.desc}}

- Command Title: **{{fm.title}}**
- Command ID: **{{fm.commandId}}**
- keybindings:
  - mac: **{{fm.keybindings.mac}}**
  - windows: **{{fm.keybindings.windows}}**
  - linux: **{{fm.keybindings.linux}}**

## Details

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

{{fm.title}} is a command that lets you rename a note. When renaming, it will also update all references in other notes of that note.

### Title generation
If the title of the note is the default title that Dendron generated when the note was created, this command will also create a new title as if a new note was created with the renamed filename.

Otherwise (if the note's title is anything other than the Dendron-generated title), renaming a note will not change the title of that note.

### Renaming from the file explorer
You can also select **{{fm.title}}** after right clicking on a note in the explorer to rename that note. This will also update the backlinks as well.

See the following [video](https://www.loom.com/share/dcc2df8f598a463894278f9b5926a92e) to learn more about how to rename a Dendron note in the file explorer.

Please note that using the `rename` command in the menu that VSCode provides will not update the backlinks and only rename the selected file.

### Renaming a note that is linked using `Rename Symbol`

Dendron makes use of the [VS Code `Rename Symbol` command](https://code.visualstudio.com/docs/editor/refactoring#_rename-symbol) (`F2`) to perform the equivelant of `Rename Note` on a [[wikilink|dendron://dendron.dendron-site/dendron.topic.links#wiki-links]].

- Place the cursor inside a wikilink
- Press `F2` (or the command `Rename Symbol`) 

`Rename Symbol` will rename the note that the wikilink is referencing, and updates all the backlinks as if you opened the linked note and used **{{fm.title}}**.

Dendron currently supports the following symbols:

- [[Wiki Links|dendron://dendron.dendron-site/dendron.topic.links#wiki-links]]
- [[File Links|dendron://dendron.dendron-site/dendron.topic.links#file-links]]
