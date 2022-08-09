---
id: gHdxXlNMr1w4xqee0n-Mb
title: User Interface
desc: 1. User Interface
updated: 1660038393108
created: 1625563862198
nav_order: 0
---

Let's do a brief overview on how to navigate the Dendron User Interace (UI), which is called the **[[Workbench|dendron://dendron.dendron-site/dendron.topic.workbench]]**.

> 💡 **TIP:** If you're unfamiliar with VS Code, the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) is used to quickly run commands, including Dendron commands. To bring up the command palette, use `Ctrl+Shift+P` / `Cmd+Shift+P` and start typing the command. If you see instructions telling you to run a command, remember to bring up the command palette and type the command name to run it.

![[dendron://dendron.dendron-site/asset.preview#tutorial-dendron-layout-dark,1:#*]]

> 💡 **TIP:** VS Code lets you re-position any of these windows, so feel free to rearrange the windows to work best for you! Refer to [VS Code documentation for more information on the VS Code UI](https://code.visualstudio.com/docs/getstarted/userinterface).

## 1. Editor View

Where you can write and edit your notes. **Notes** in Dendron are [[Markdown|dendron://dendron.dendron-site/dendron.topic.markdown]] files (e.g., `my.note.md`).

## 2. Preview View

Shows the rendered Markdown of your currently opened note. If you close this pane, you can bring it back with the `Dendron: Toggle Preview` command.

You may see two additional sections at the bottom of the preview view, **Children** and **Backlinks**, which will be covered later in the tutorial.

>💡 **TIP:** The preview view is **read-only** and cannot be used to edit notes. All editing must be done in the editor view.

## 3. File Explorer Pane

This shows the files and folders in your vault. A **[[vault|dendron://dendron.dendron-site/dendron.topic.vaults]]** stores your notes and assets (ex. images, PDFs, etc.).

> 💡 **TIP:** We encourage using the **[tree view](#6-tree-view-pane)**, as opposed to the file explorer pane, for navigating your notes.

## 4. Outline Pane

Shows an outline of the currently opened note by listing the headers for navigation. Jump around areas of larger notes by clicking on the headers in this pane.

## 5. Calendar View Pane

Shows days where you've created a **[[Details|dendron.topic.daily-journal-note#details]]** entry. If no journal entry exists for a given day, clicking on the date in the calendar will automatically create it.

![[dendron://dendron.dendron-site/asset.preview#create-daily-journal-from-calendar,1:#*]]

## 6. Tree View Pane

This shows a hierarchical view of your notes, similar to how a folder structure would appear in your filesystem. You can click here to navigate around your notes.

![[dendron://dendron.dendron-site/asset.preview#tree-view-dark,1:#*]]

## 7. Backlinks Pane

This shows a list of other notes that have links to the current note opened in the editor view.

![[dendron://dendron.dendron-site/asset.preview#backlinks-dark,1:#*]]

## Next Steps

- Next is Tutorial Step 2: [[Taking Notes|dendron.tutorial.taking-notes]]