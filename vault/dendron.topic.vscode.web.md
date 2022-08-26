---
id: svmryfk3iwexs7pfty1j6at
title: Web
desc: ''
updated: 1661522463849
created: 1660914228125
---


## Summary

Dendron now is available in [VSCode on the Web](https://code.visualstudio.com/api/extension-guides/web-extensions) for a subset of features.

The easiest way to try out Dendron on the web is to navigate to your Dendron repository in Github, and press `'.'` - this will launch github.dev (which is a Github hosted instance of VSCode on the web). You can then install Dendron through the extensions tab just like you would in desktop VS Code and you should be good to go!

This makes it very easy to share your notes with someone without needing them to download VS Code themselves. They can also contribute to your notes from within the browser!

_Note, this is a #stage.germ feature. The supported commands and features may have limited functionality._

## Features

Dendron on the web is limited to just a few features right now, but we are working on bringing more of the full Dendron capabilities to the web:

### Lookup

Lookup can be used to find and create notes. There are a few limitations compared with the desktop version:
- [[Modifiers|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers]] are not supported, and a default value is used instead.
- Schema information is not available in the lookup results, and notes created will not have schema templates applied.

### Tree View
- The Dendron tree view is available for quickly navigating between your notes.

### Copy Note URL
- Get URL of current note from published site. The url is taken from the [[siteUrl|dendron.topic.publish-legacy.configuration#siteurl]] property.
- Copy URL of the selected header set as the anchor is not supported yet
## Quickstart

1. Open a Dendron repository in Github, such as `https://github.com/dendronhq/dendron-site`.
1. Press the `.` button on your keyboard while you have the Github page open in your browser. This will launch you to `https://github.dev/dendronhq/dendron-site`
1. Install Dendron for your browser VS Code if you haven't done so before. 
1. After Dendron finishes installing, try running lookup. Keyboard shortcuts will still work in the browser.


