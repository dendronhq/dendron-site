---
id: u8qgpl5l7r4t001meo0n0qr
title: 'Dendron: Convert Link'
desc: Convert selected link to other types of links or plaintext.
updated: 1655131992450
created: 1655131185651
commandId: dendron.convertLink
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

{{fm.title}} is a command that lets you select a link and convert it to various other types of links.

This command works on both broken and valid links, and provide different capabilities depending on the validity of the selected link.

### Broken links

Broken links are links that do not point to an existing note.

You can use **{{fm.title}}** to convert broken links into either plaintext or a different link to an existing note.

These are the available options for converting broken links:
- `alias`: Convert to the selected link's alias text. If the selected link does not have an alias, this option is not suggested.
- `note name`: Convert to the selected link's destination note name (basename excluding all parent hierarchies)
- `hierarchy`: Convert to the selected link's entire hierarchy string
- `prompt`: Convert to the text that the user provides.
- `change destination`: Convert the link to point to another note that exists. You will be prompted a lookup to select a valid note.

### Valid links

Valid links are links that point to an existing note.

You can use **{{fm.title}}** to convert a limited set of valid links to other types of links.

These are the available operations for valid links:
- when cursor is above a usertag, user is asked if they want to convert it to a regular wikilink.
- when cursor is above a regular wikilink with `user.*` hierarchy, user is asked if they want to convert it to a usertag (e.g. `@person`)
- when cursor is above a hashtag, user is asked if they want to convert it to a regular wikilink.
- when cursor is above a regular wikilink with `tags.*` hierarchy, user is asked if they want to convert it to a hashtag (e.g. `#my.tag`)
