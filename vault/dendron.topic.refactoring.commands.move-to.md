---
id: vxwt27afcjgwqtduz51dced
title: "Dendron: Move To"
desc: Move the currently selected block of text to another note and update all backlinks.
updated: 1661486076936
created: 1661484643912
---

> Selections should be non-empty (contains at least one character), and not contain frontmatter

> Destination note cannot be the current active note.

## Summary

{{fm.desc}}

## Keybindings
none

## Details

**{{fm.title}}** is a command that lets you move a selected block of text in the current active note to another note.

If the destination doesn't exist, a new note will be created, and the selected text will be moved to the newly created note.
Otherwise, the selected text will be appended to the end of the destination note.

The effect of this command is identical to toggling [[selectionExtract|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#selectionextract]] on during lookup.

As a result, this command will also respect the [[leaveTrace|dendron://dendron.dendron-site/dendron.ref.config.commands#leavetrace]] configuration and leave a note reference to the moved selection if enabled.

### Getting started

1. Open a note that contains a block of text you want to move to another note.
2. Select the text you want to move.
3. Open the command palette and use **{{fm.title}}**
4. A prompt will show up.
Select your desired destination and hit enter.
5. The destination note will open up and your selected text will be appended to the end of the note.
