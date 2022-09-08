---
id: svmryfk3iwexs7pfty1j6at
title: Web
desc: ''
updated: 1662654720459
created: 1660914228125
---


## Summary

Dendron now is available in [VSCode on the Web](https://code.visualstudio.com/api/extension-guides/web-extensions) for a subset of features.

The easiest way to try out Dendron on the web is to navigate to your Dendron repository in Github, and press `'.'` - this will launch github.dev (which is a Github hosted instance of VSCode on the web). You can then install Dendron through the extensions tab just like you would in desktop VS Code and you should be good to go!

This makes it very easy to share your notes with someone without needing them to download VS Code themselves. They can also contribute to your notes from within the browser!

_Note, this is a #stage.germ feature. The supported commands and features may have limited functionality._

## Features

> NOTE: Dendron on the web is limited to just a few features right now, but we are working on bringing more of the full Dendron capabilities to the web:

### Lookup

Lookup can be used to find and create notes. There are a few limitations compared with the desktop version:
- [[Modifiers|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers]] are not supported, and a default value is used instead.
- Schema information is not available in the lookup results, and notes created will not have schema templates applied.

### Tree View

![[dendron://dendron.dendron-site/dendron.topic.sidebar.tree-view]]

### Copy Note URL

![[dendron://dendron.dendron-site/dendron.ref.commands#copy-note-url]]

> NOTE: Copy URL of the selected header set as the anchor is not supported yet

### Preview
- The Dendron Preview is available in the web extension. Some rendering capabilities such as Note References are currently not supported.

## Quickstart

1. Open a Dendron repository in Github, such as `https://github.com/dendronhq/dendron-site`.
1. Press the `.` button on your keyboard while you have the Github page open in your browser. This will launch you to `https://github.dev/dendronhq/dendron-site`
1. Install Dendron for your browser VS Code if you haven't done so before. 
1. After Dendron finishes installing, try running lookup. Keyboard shortcuts will still work in the browser.

<div style="position: relative; padding-bottom: 64.5933014354067%; height: 0;"><iframe src="https://www.loom.com/embed/c8e00408f4314174b3014879f243c9f4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>