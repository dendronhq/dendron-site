---
id: 032e4abc-f292-465f-9b6a-5a1360c2c974
title: Intellisense
desc: ''
updated: 1626375303344
created: 1599755804490
---

## Summary

Intellisense is the auto completion mechanism used inside VS Code. 

You can read the docs about it [here](https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features).

To customize intellisense behavior, read the section on customization [here](https://code.visualstudio.com/docs/editor/intellisense#_customizing-intellisense)


## Link Completion

Dendron provides intellisense for writing links. For example, typing `[[` will activate intellisense to suggest notes.

![](https://i.imgur.com/m6G8XE9.png)

## Header Completion

Dendron can also suggest completions for headers. You can type `[[#` to get the headers for the current file, and ``[[some.note#` to get the headers of `some.note`.

![](https://i.imgur.com/3PTNhdj.png)

## Anchor Completion

Similarly, if you have any [[block anchors|dendron.topic.note-reference#block-anchor]], you can get them by typing `[[#^` for the current file, and ``[[some.note#^` to get the anchors from `some.note`.

![](https://i.imgur.com/SU20pQr.png)

You can also get all blocks within the current file by typing `[[^`. This includes every paragraph, list item, and table within the note. If these blocks don't already have block anchors, Dendron will automatically insert one once you select one.

<a href="https://www.loom.com/share/56f7bd5b95fb49d9844199efd91aea11"><img src="https://cdn.loom.com/sessions/thumbnails/56f7bd5b95fb49d9844199efd91aea11-with-play.gif"> </a>


## Details

- in [[dendron.topic.multi-vault]] workspaces, completions will be sorted by vault names
