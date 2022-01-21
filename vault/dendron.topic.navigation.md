---
id: cphUwSPk12j4lS0tKjBdC
title: Navigation
desc: ''
updated: 1641313664558
created: 1638899506405
---

## Summary

General navigation features

## References

- NOTE: References in this case means note headers and are not to be confused with [[note references|dendron.topic.note-reference]] 

### Find All References

When you highlight a header, you can run `> References: Find All References` to see all files that reference this particular header


<a href="https://www.loom.com/share/c4fdd88be98d4fc58b4a4f9765eb9e89">
    <p>Code - Insiders - hello.md — dendron (Workspace) - 7 December 2021 - Watch Video</p>
    <img style="" src="https://cdn.loom.com/sessions/thumbnails/c4fdd88be98d4fc58b4a4f9765eb9e89-with-play.gif">
</a>

## Go to

### Go to Note
- shortcuts:
  - key: `ctrl+enter`
  - when: `editorFocus`

Go to the note in the [[wikilinks|dendron://dendron.dendron-site/dendron.topic.links#wiki-links]] or the [[File Links|dendron://dendron.dendron-site/dendron.topic.links#file-links]] under the cursor, creating them if they doesn't exist.

### Go to Definition

Dendron lets you rename symbols using the IDE's native `Go to Definition` command.

Dendron currently supports the following symbols:

- [[Wiki Links|dendron://dendron.dendron-site/dendron.topic.links#wiki-links]]
- [[File Links|dendron://dendron.dendron-site/dendron.topic.links#file-links]]

### Go Up

- shortcuts:
  - mac: `cmd+shift+up`
  - key: `ctrl+shift+up`
  - when: `editorFocus`

Go to closet non-stub parent of the currently open note

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-up.gif)

### Go Next Sibling

- shortcuts:
  - key: `ctrl+shift+]`
  - when: `editorFocus`

Go to the next sibling

Siblings with numeric names will be sorted numerically, whereas siblings with alphabetical names will be sorted alphabetically when determining the next sibling.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Go Previous Sibling

- shortcuts:
  - key: `ctrl+shift+[`
  - when: `editorFocus`

Go to the previous sibling

Siblings with numeric names will be sorted numerically, whereas siblings with alphabetical names will be sorted alphabetically when determining the previous sibling.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Go Down

- shortcuts:
  - mac: `cmd+shift+down`
  - key: `ctrl+shift+down`
  - when: `editorFocus`

Go down the hierarchy.

The `Go Down` lookup supports tabbing for autocompletion.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-down.gif)

## Graph View
Dendron lets you explore your notes via a graph. Read about the [[Graph View|dendron://dendron.dendron-site/dendron.topic.graph-view]] here.

## Related

- [Navigation in Visual Studio Code](https://code.visualstudio.com/docs/editor/editingevolved)
- [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) 
