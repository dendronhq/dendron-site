---
id: riihqxopsjxloqa3z62273x
title: "Dendron: Paste Link"
desc: 'Format URL in your clipboard to a Markdown link and paste it to a note.'
updated: 1660877763052
created: 1658831176399
---

> This command requires that you have Internet access.

## Summary
{{fm.desc}}

## Keybindings
none

## Details

**{{fm.title}}** is a command that lets you paste a URL in your clipboard as a Markdown link.

If the clipboard contains a valid web link, Dendron will attempt to grab an appropriate title of the web address from the link's [Open Graph Metadata](https://ogp.me/#metadata).
If there are no title metadata associated with the web address, the title will fall back to the URL itself.
The pasted result will be the following:

```
[Title from metadata](link in clipboard)
```

