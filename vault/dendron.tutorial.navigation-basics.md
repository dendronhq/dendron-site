---
id: gHdxXlNMr1w4xqee0n-Mb
title: Navigation Basics
desc: 1. Navigation Basics
updated: 1639114511406
created: 1625563862198
nav_order: 0
---

Let's do a brief overview on how to navigate the Dendron UI.

_Quick note on running commands in VS Code:_

>If you're unfamiliar with VS Code, the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) is used to quickly run commands, including the commands for Dendron. To bring up the command palette, use `Ctrl+Shift+P` / `Cmd+Shift+P` and start typing the command. Throughout the tutorial, if you see instructions telling you to run a command, remember to bring up the command palette and then type the command name to run it.

![[asset.preview#tutorial-dendron-layout,1:#*]]

#### 1. Editor Pane

This is where you can write and edit your notes. Notes in Dendron are Markdown files.

#### 2. Preview Pane

This shows the rendered Markdown of what your currently opened note looks like. If you close this pane, you can always bring it back by opening the command palette `Ctrl+Shift+P` / `Cmd+Shift+P` and running the `Dendron: Show Preview` command.

>💡 The preview pane is read-only and cannot be used to edit notes. All editing must be done in the editor pane.

#### 3. Dendron Workspace

This shows the files in your vault. A vault is where Dendron stores your markdown notes, assets, and some other helper files. Clicking on a note here will open it into the editor pane.

#### 4. Outline

Shows an outline of the currently opened note. This observes the header levels in the Markdown of the note.

#### 5. Calendar View

![[dendron._ref.web-ui#^calendar-view-definition]]

Learn more:

- [[Special Notes: Daily Journal|dendron.topic.special-notes]]
- [[Calendar View|dendron._ref.web-ui#calendar-view]]

#### 6. Tree View

This shows a hierarchical view of your notes, similar to how a folder structure would appear in your filesystem. You can also click in the tree view to navigate around your notes.

#### 7. Backlinks

This shows a list of other notes that have links to the current note. More on links in Section 3 of the tutorial.

> 💡 VS Code lets you reposition any of these windows as you'd like, so feel free to rearrange the windows into the view that works best for you!

### Next Steps

- Next is Tutorial Step 2: [[Taking Notes|dendron.tutorial.taking-notes]]
