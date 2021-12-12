---
id: gHdxXlNMr1w4xqee0n-Mb
title: User Interface
desc: 1. User Interface
updated: 1639268841555
created: 1625563862198
nav_order: 0
---

Let's do a brief overview on how to navigate the Dendron user interace (UI), which is called the **[[Workbench|dendron.topic.workbench]]**.

_Quick note on running commands in VSCode:_

> If you're unfamiliar with VSCode, the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) is used to quickly run commands, including Dendron commands. To bring up the command palette, use `Ctrl+Shift+P` / `Cmd+Shift+P` and start typing the command. If you see instructions telling you to run a command, remember to bring up the command palette and type the command name to run it.

![[dendron://dendron.dendron-site/asset.preview#tutorial-dendron-layout,1:#*]]

> 💡 TIP: VSCode lets you re-position any of these windows as you'd like, so feel free to rearrange the windows into the view that works best for you! Refer to the [VSCode documentation for more information on the VSCode UI](https://code.visualstudio.com/docs/getstarted/userinterface).

#### 1. Editor View

This is where you can write and edit your notes. **Notes** in Dendron are markdown files (ex. `my.note.md`).

#### 2. Preview View

This shows the rendered Markdown of your currently opened note. If you close this pane, you can bring it back with the `Dendron: Show Preview` command.

>💡 TIP: The preview pane is **read-only** and cannot be used to edit notes. All editing must be done in the editor view.

#### 3. File Explorer Pane

This shows the files and folders in your vault. A **[[vault|dendron.topic.vaults]]** stores your notes and assets (ex. images, pdfs, etc.).

**We discourage folks from using the file explorer for manual navigation.** Use the [[tree view|dendron.tutorial.navigation-basics#6-tree-view-pane]] to navigate notes, instead.

#### 4. Outline Pane

Shows an outline of the currently opened note by listing the headers.

#### 5. Calendar View Pane

![[dendron://dendron.dendron-site/dendron._ref.web-ui#^calendar-view-definition]]

Learn more:

- [[Special Notes: Daily Journal|dendron://dendron.dendron-site/dendron.topic.special-notes]]
- [[Calendar View|dendron://dendron.dendron-site/dendron._ref.web-ui#calendar-view]]

#### 6. Tree View Pane

This shows a hierarchical view of your notes, similar to how a folder structure would appear in your filesystem. You can click here to navigate around your notes.

We encourage using the tree view, as opposed to the workspace panel, for navigating your notes. This is because the workspace panel can become rather unruly, since it lists _all_ of your notes while the tree view panel lists collapsible hierarchies.

#### 7. Backlinks Pane

This shows a list of other notes that have links to the current note. More on links in the [[linking notes section|dendron://dendron.dendron-site/dendron.tutorial.linking-notes]] of the tutorial.

### Next Steps

- Next is Tutorial Step 2: [[Taking Notes|dendron://dendron.dendron-site/dendron.tutorial.taking-notes]]
