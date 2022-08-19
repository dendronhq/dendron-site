---
id: 3d4lr7glouhrvpd7y9t76bf
title: "Dendron: Go to"
desc: "Navigate to where the link under the cursor is pointing to."
updated: 1660884902707
created: 1660882024801
---

## Summary

{{fm.desc}}

## Keybindings

none

## Details

**{{fm.title}}** is a command that lets you navigate to a link under your cursor.
This command works on all link types and have different behavior depending on the type of link.

Links with relative paths will be opened relative to the vault that the note is located.

### Links to external files or web address

When this command is used on a link to an external file or web address, the link will be opened by the system's default application.

### Links to notes

When this command is used on a link to a note, the behavior is identical to [[dendron.topic.links.commands.go-to-note]]

### Links to proxy notes

When this command is used on a link to a [[proxy note|dendron://dendron.dendron-site/dendron.topic.special-notes#proxy-notes]], instead of opening the note in VSCode, the link that is specified in the frontmatter property `uri` will be opened with the system's default application.