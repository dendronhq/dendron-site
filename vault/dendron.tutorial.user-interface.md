---
id: gHdxXlNMr1w4xqee0n-Mb
title: User Interface
desc: 1. User Interface
updated: 1639530909277
created: 1625563862198
nav_order: 0
---

Let's do a brief overview on how to navigate the Dendron User Interace (UI), which is called the **[[Workbench|dendron.topic.workbench]]**.

> 💡 **TIP:** If you're unfamiliar with VSCode, the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) is used to quickly run commands, including Dendron commands. To bring up the command palette, use `Ctrl+Shift+P` / `Cmd+Shift+P` and start typing the command. If you see instructions telling you to run a command, remember to bring up the command palette and type the command name to run it.

![[dendron://dendron.dendron-site/asset.preview#tutorial-dendron-layout-dark,1:#*]]

> 💡 TIP: VSCode lets you re-position any of these windows, so feel free to rearrange the windows to work best for you! Refer to [VSCode documentation for more information on the VSCode UI](https://code.visualstudio.com/docs/getstarted/userinterface).

#### 1. Editor View

Where you can write and edit your notes. **Notes** in Dendron are [[markdown|dendron://dendron.dendron-site/dendron.topic.markdown]] files (ex. `my.note.md`).

#### 2. Preview View

Shows the rendered Markdown of your currently opened note. If you close this pane, you can bring it back with the `Dendron: Show Preview` command.

>💡 TIP: The preview view is **read-only** and cannot be used to edit notes. All editing must be done in the editor view.

#### 3. File Explorer Pane

This shows the files and folders in your vault. A **[[vault|dendron.topic.vaults]]** stores your notes and assets (ex. images, pdfs, etc.).

![[dendron.tutorial.user-interface#^tree-view-vs-file-explorer]]

#### 4. Outline Pane

Shows an outline of the currently opened note by listing the headers for navigation. Jump around areas of larger notes by clicking on the headers in this pane.

#### 5. Calendar View Pane

![[dendron://dendron.dendron-site/dendron._ref.web-ui#^calendar-view-definition]]

![[dendron://dendron.dendron-site/dendron.topic.special-notes#daily-journal:#*]]

- [[Calendar View|dendron://dendron.dendron-site/dendron._ref.web-ui#calendar-view]]

#### 6. Tree View Pane

This shows a hierarchical view of your notes, similar to how a folder structure would appear in your filesystem. You can click here to navigate around your notes.

> 💡 TIP: We encourage using the tree view, as opposed to the file explorer pane, for navigating your notes. ^tree-view-vs-file-explorer

#### 7. Backlinks Pane

This shows a list of other notes that have links to the current note opened in the editor view. This is useful for helping to establish context.

![[dendron://dendron.dendron-site/asset.preview#backlinks,1:#*]]

### Next Steps

- Next is Tutorial Step 2: [[Taking Notes|dendron://dendron.dendron-site/dendron.tutorial.taking-notes]]
