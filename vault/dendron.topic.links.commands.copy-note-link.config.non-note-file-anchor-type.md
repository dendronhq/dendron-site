---
id: e8rbpopcyavlrta8p7jb1zt
title: >-
    nonNoteFile.anchorType
desc: ''
updated: 1660921222768
created: 1660921056987
---

- type: `enum`
- default: `block` 
- options: `line`, `block`, `prompt`

## Description

In non-note files, Copy Note Link can use both block anchors and line numbers.

Line numbers link to a specific line number in the file, but they are less
reliable as your links will become stale as the file changes and lines move
around.

Block anchors are more reliable because they will always refer to the marked
line, but Dendron has to modify the file to insert a block anchor which looks
like `^this`. You are free to move the anchor anywhere in the file or to put
comment markers like `//` or `#` or anything else before them.

You can also set it to `prompt`. When set to prompt, Dendron will instead prompt
which type of anchor to use each time.


## Example

```yml
commands:
    copyNoteLink:
        nonNoteFile:
          anchorType: line
```