---
id: 00pqmil4m2u0xasoyd26wta
title: "Dendron: Copy Note Link"
desc: 'Copy the wikilink to the current note to clipboard.'
updated: 1660880160814
created: 1658831124334
---

## Summary

{{fm.desc}}

## Keybindings

- windows: `ctrl+shift+c`
- mac: `cmd+shift+c`

## Details

**{{fm.title}}** is a command that lets you copy the wikilink to the current note into your clipboard.

If you use this command in a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will create a [[cross vault link|dendron.topic.links#cross-vault-links]] to this note.

You can also use this by right clicking in the note and selecting **{{fm.title}}** from the menu.

### Copying a link to a note

If your cursor is not on a header, and you don't have any selection made in the editor, this command will copy a link to the note.
The title of the note will be used as the alias of the wikilink.

### Copying a link to a specific header

If you place your cursor on a header in your note, this command will copy the relative link to the header.
The header text will be used as the alias of the copied wikilink

### Copying a link to part of the note

<a href="https://www.loom.com/share/06d0689d548941219db9708f5b1b70d2"> <img src="https://cdn.loom.com/sessions/thumbnails/06d0689d548941219db9708f5b1b70d2-with-play.gif"> </a>

You can select any line of text, and Dendron will create a link to it by inserting a block anchor, or copy an existing anchor of the selection.

### Copying a link to files that are not notes / files outside the vault

You can use this command in any file inside your workspace, including files that aren't notes or files that are not in
any vault to get [[links to those files|dendron://dendron.dendron-site/dendron.topic.links#file-links]].

Similar to regular notes, you can also highlight a line of text to create a link
to that line.
Dendron will automatically insert a [[Block Anchor|dendron://dendron.dendron-site/dendron.topic.note-reference.concepts.block-anchors]] like it does in notes, and you can change what kind of anchor to use with the [[anchorType|dendron://dendron.dendron-site/dendron.ref.config.commands#anchortype]] configuration.
