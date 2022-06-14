---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ""
tags:
  - stage.seed
updated: 1655740580959
created: 1595261816971
nav_order: 3.1
---

> ⚠️ This page is currently under active refactoring.

![[dendron://dendron.dendron-site/dendron.topic.refactoring.commands]]

***

<!-- cut-off point. All content below are going to eventually be refactored -->

## Doctor

![[dendron://dendron.dendron-site/dendron.topic.doctor#commands,1:#*]]

## Notes

### Browse Note

- shortcuts: None

Open the GitHub repository (if it exists) of the current note. If you have a [[multi vault|dendron.topic.multi-vault]] workspace with different git repositories, this command will

### Create Daily Journal Note

- shortcuts:
  - key: `ctrl+shift+i`
  - mac: `cmd+shift+i`
  - when: `editorFocus`

Create a global journal note

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.daily.gif)

### Copy Note Link

- shortcuts:
  - key: `ctrl+shift+c`
  - mac: `cmd+shift+c`
  - when: `editorFocus`

Copy wiki link to note. The title of the note will be applied as the note alias. If you highlight a header, Dendron will create a relative link to the header with the alias set to the header value.

You can also highlight any line of text, and Dendron will create a link to it by inserting a block anchor, or copy an existing anchor.

<a href="https://www.loom.com/share/06d0689d548941219db9708f5b1b70d2"> <img src="https://cdn.loom.com/sessions/thumbnails/06d0689d548941219db9708f5b1b70d2-with-play.gif"> </a>

If you use this command in a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will create a [[cross vault link|dendron.topic.links#cross-vault-links]] to the note in question.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

You can also copy note link by Right Click on editor and select `Dendron: Copy Note Link` from the context menu.

#### Files that are not notes, or files outside your vaults

You can use this command in any file inside your workspace, including files that aren't notes or files that are not in
any vault to get [[links to those files|dendron://dendron.dendron-site/dendron.topic.links#file-links]].

Similar to regular notes, you can also highlight a line of text to create a link
to that line. Dendron will automatically insert a [[Block Anchor|dendron://dendron.dendron-site/dendron.topic.note-reference#block-anchor]] like it does in notes, but you can change
what kind of anchor to use with the [[anchorType|dendron://dendron.dendron-site/dendron.ref.config.commands#anchortype]] configuration.

### Copy Note Ref

- shortcuts:
  - key: `ctrl+shift+r`
  - mac: `cmd+shift+r`
  - when: `editorFocus`

Copies a reference to the current open document

This lets you quickly create a [[note reference|dendron.topic.note-reference]] to the current note.
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)

#### Header Selection

If you have a header selected while running this command, it will copy the note ref with the selected header to the next note ref.

Having the cursor within a header will also show a lightbulb for the [[Contextual UI Header Operations|dendron://dendron.dendron-site/dendron.ref.commands#header-operations]], which includes a [[Copy Header Reference|dendron://dendron.dendron-site/dendron.ref.commands#copy-header-reference]] quick fix. This will copy the note ref to your clipboard.

#### Block Selection

If you have some text selected, Dendron can insert block anchors to reference the region you have selected.

<div style="position: relative; padding-bottom: 57.78491171749599%; height: 0;"><iframe src="https://www.loom.com/embed/b72a562626a0483f967e724ef8f2d457" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Range Selection

If you highlight multiple blocks, Dendron can create a range selection that spans the blocks selected. Watch the following video starting at the 10s mark for an example.

<div style="position: relative; padding-bottom: 57.78491171749599%; height: 0;"><iframe src="https://www.loom.com/embed/b72a562626a0483f967e724ef8f2d457" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### MultiVault

If you use this command in a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will create a [[cross vault link|dendron.topic.links#cross-vault-links]] to the note in question.

### Delete Node

- shortcuts:
  - key: `ctrl+shift+d`
  - mac: `cmd+shift+d`

Delete a note or schema. A prompt will occur before deletion if any links will break that are referencing the note.

You can also delete a note from the explorer:

- Right Click on the note
- `Dendron: Delete Node`

### Insert Note Link

Insert the note link into the current document using lookup.

There are two modifiers that can be passed into this command:

1. `multiSelect`
1. `aliasMode`

#### multiSelect

This modifier enables the multi-select mode.
With multi-select enabled, you can select all the notes you want the links to be inserted.

This can be toggled on by clicking on the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></svg> button, or setting `multiSelect: true` in `dendron.yml` as below:

```yaml
---
insertNoteLink:
  multiSelect: true
  ...
---
```

You can also pass it as a command argument through a custom keybinding as below:

```json
/* in keybindings.json.
* Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
*/
[
  ...
  {
    "key": "{desired keybinding}",
    "command": "dendron.insertNoteLink",
    "args": {
      "multiSelect": true
    }
  },
  ...
]
```

#### aliasMode

This modifier enables different alias modes.

Here is the list of available alias modes:

1. `snippet`: Inserted note link resolves into a VS Code snippet string
1. `selection`: Extracts the selection of the active note and use it as the alias.
1. `title`: Use the note title of the linked note as alias.
1. `prompt`: Open an input box that will prompt for an input for the alias.
1. `none`: Does not add alias. (default)

You can override the default alias mode in `dendron.yml` as below:

```yaml
// dendron.yml
insertNoteLink:
  aliasMode: "snippet" // choose one from the list
```

You can also pass it as a command argument through a custom keybinding as below:

```json
/* in keybindings.json.
* Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
*/
[
  ...
  {
    "key": "{desired keybinding}",
    "command": "dendron.insertNoteLink",
    "args": {
      "aliasMode": "snippet" // choose one from the list
    }
  },
  ...
]
```

##### snippet

Inserted note link will resolve into a [VS Code snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets) in the form of

`[[{$1: alias}|note-name]]$0`

If multi-select is enabled, each subsequent alias field will be available as separate tabstops like so:

```
[[{$1: alias}|note1]]
[[{$2: alias}|note1]]
[[{$3: alias}|note1]]
[[{$4: alias}|note1]]
[[{$5: alias}|note1]]
...
[[{$n: alias}|note1]]$0
```

##### selection

Selection present in the active editor will be extracted and used as the alias.

The original selection will be replaced by the link inserted.

If multi-select is enabled, all inserted note links will have identical aliases.

##### title

The title of the note that is being linked is used as the link's alais.

##### prompt

An input box will be prompted that will let you type in the desired alias.

If multi-select is enabled, you will be prompted for each of the note links you want to insert.

##### none

No alias will be used for the inserted note link(s).

### Insert Note Index

Insert a block that lists the direct children of the current note to cursor position.

The format of the block is as follows:

```md
## Index

- [[{ch1}|{noteName}]]
  ...
```

If used in a multi-vault workspace and [[noXVaultWikiLink|dendron.ref.config#noxvaultwikilink]] is not set, the wikilinks will have a vault prefix added to avoid ambiguity.

Given the following hierarchy:

```
├── recipe
├── recipe.eggs
├── recipe.eggs.royale
├── recipe.eggs.deviled
├── recipe.eggs.benedict
├── recipe.eggs.florentine
├── recipe.bagel
├── recipe.bagel.with-gravlax
├── recipe.chicken
└── recipe.chicken.curry
```

Running this command with the note `recipe` open will insert the following at cursor position:

```md
## Index

- [[Eggs|recipe.eggs]]
- [[Bagel|recipe.bagel]]
- [[Chicken|recipe.chicken]]
```

Running it in the note `recipe.eggs` will insert the following at cursor position:

```md
## Index

- [[Royale|recipe.eggs.royale]]
- [[Deviled|recipe.eggs.deviled]]
- [[Benedict|recipe.eggs.benedict]]
- [[Florentine|recipe.eggs.florentine]]
```

- configuration : [[insertNoteIndex|dendron.ref.config#insertnoteindex]]

### Paste Link

Transform URL in clipboard to nicely formatted Markdown link

### Random Note

Navigates to a random note in the workspace. By default, all notes are included in the set that can be navigated to with this command. This can be adjusted with the `randomNote` setting in the Dendron Config (see [[Configure (yaml)|dendron.ref.commands#configure-yaml]]).

```yaml
# Sample configuration in dendron.yml:
randomNote:
  include:
    - alpha
    - beta.foo
  exclude:
    - alpha.bar
```

This pattern would specify a set including all notes under `alpha` _except_ for notes in the alpha.bar hierarchy. The set would also include notes under `beta.foo*`.

- If `include` is not specified, then the `include` matching pattern will match all notes.
- `exclude` takes precedence over `include`, so if the patterns are identical, no notes will match.

### Show Preview

- shortcuts:
  - windows: `windows+ctrl+p`
  - mac: `cmd+ctrl+p`

Shows a Markdown preview view. This preview supports rendering Dendron features, such as note refs, wikilinks, custom image properties, and more. `Show Preview` supports previewing Dendron notes and regular Markdown files such as a project `README.md`.

### Show Preview (legacy)

> ⚠️ This is a deprecated command. Please consider using [[Show Preview|dendron.ref.commands#show-preview]] instead.

- shortcuts:
  - windows: `windows+ctrl+p`
  - mac: `cmd+ctrl+p`

Show Markdown Preview.
See [[Preview|dendron.topic.preview]] for more details.

---

## Navigation

### Lookup Note

- shortcuts:
  - mac: `cmd+L`
  - key: `ctrl+l`

Initiate note lookup

![[dendron.topic.lookup]]

### Create Journal Note

- shortcuts:
  - key: `ctrl+shift+j`
  - mac: `cmd+shift+j`

Creates a [[Journal Note|dendron://dendron.dendron-site/dendron.topic.special-notes#journal-note]].

### Create Scratch Note

- shortcuts:
  - key: `ctrl+shift+s`
  - mac: `cmd+shift+s`

Creates a [[Scratch Note|dendron://dendron.dendron-site/dendron.topic.special-notes#scratch-note]].

### Create Task Note

- shortcuts: none

Creates a [[task note|dendron.topic.tasks#task-notes]], which comes with some
extra features to keep track of work items.

The `Create Task Note` lookup supports tabbing for autocompletion.

### Set Task Status

- shortcuts: none

Changes the status for a [[task note|dendron.topic.tasks#task-notes]]. If you
have a link selected, it will set the task status for that note. If you don't
have a link selected but you have a task note open, it will set the status for
that note.

The statuses displayed when you use the command are based on the [[statusSymbols|dendron://dendron.dendron-site/dendron.topic.tasks#statussymbols]]
configuration.

You can create a keyboard shortcut that sets a task to a specific status.
Please see [[Keyboard shortcut for a task status|dendron://dendron.dendron-site/dendron.topic.tasks#keyboard-shortcut-for-a-task-status]] for details.

### Complete Task

- shortcuts: none

Marks a [[task note|dendron.topic.tasks#task-notes]] as complete. This works in the same way as [[Set Task Status|dendron://dendron.dendron-site/dendron.ref.commands#set-task-status]],
but doesn't prompt for the status to use. Instead, it will use the first status set in the [[taskCompleteStatus|dendron://dendron.dendron-site/dendron.topic.tasks#taskcompletestatus]] configuration.

### Create Meeting Note

- shortcuts: none

Creates a [[meeting note|dendron://dendron.dendron-site/dendron.topic.special-notes#meeting-note]], which applied a pre-built template to help you take notes during a meeting. The template is fully customizable.

### Lookup Schema

- shortcuts:
  - mac: `cmd+shift+L`
  - key: `ctrl+shift+l`

Initiate schema lookup

### Open Backup

- shortcuts: none

Open backup files created by Dendron.

When triggered, you will be prompted to select the key of the backup file. Once selected, you will be prompted again
with a list of all backups saved under the key.

Currently Dendron only creates backups for `dendron.yml`, and these are saved with the key `config`.

This command is a convenience command to open backup files saved under `{workspaceRoot}/.backup/{key}/`.

### Go to Commands

- See [[Navigation Commands|dendron://dendron.dendron-site/dendron.topic.navigation#commands]]

### Find all References

- See [[Find All References|dendron://dendron.dendron-site/dendron.topic.navigation#find-all-references]]

--

## Organizing

---

## Hierarchies

### Reload Index

- shortcuts: none

Reload the index. Necessary for Dendron to pick up on schema changes.

---

## Hooks

### Hook Create

Create a custom [[hook|dendron.topic.hooks]] to trigger during Dendron's lifecycle. This command takes two parameters:

- hookName: name of your hook
- hookFilter: a glob pattern that filters what notes your hook applies to
  - default: `*`, apply hook to all notes by default
- hookType: where to attach the hook (coming soon - we only support `onCreate` at the moment)
  - types: onCreate|onDelete|onChange
  - default: onCreate

### Hook Delete

Delete a custom [[hook|dendron.topic.hooks]]. Will remove the hook from `dendron.yml` and optionally, remove `{workspace}/hooks/{hookName}.js`

Parameters:

- hookName: name of the hook to remove
- shouldDeleteScript: whether you should also delete the hook script

---

## Workspace

### Disable Telemetry

Disable [[telemetry|dendron.ref.telemetry]] across all workspaces with Dendron

### Enable Telemetry

Enable [[telemetry|dendron.ref.telemetry]] across all workspaces with Dendron

### Vault Add

![[dendron://dendron.dendron-site/dendron.topic.vaults#vault-add,1:#*]]

You can also add a vault from the explorer by:
Right Click on the explorer > Dendron: Vault Add

### Vault Remove

![[dendron://dendron.dendron-site/dendron.topic.vaults#vault-remove,1:#*]]

You can also remove a vault from the explorer by:
Right Click on the vault > Dendron: Vault Remove

### Vault Convert

![[dendron://dendron.dendron-site/dendron.topic.vaults#vault-convert,1:#*]]

### Migrate to Self Contained Vault

Converts an existing vault into a [[self contained vault|dendron.topic.vaults.self-contained]].
See [[migrating a regular vault|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained.migrate#migrating-a-regular-vault]] for details.

### Launch Tutorial

Prompt user to create an initial tutorial workspace and takes user through new tutorial

### Initialize Workspace

- shortcuts: none

Create a new workspace

### Change Workspace

- shortcuts: none

Change into existing workspace

### Snapshot Vault

- shortcuts: none

Create a snapshot of your vault

Takes a snapshot of your entire vault, including assets. This command will ignore version control folders like .git when making a snapshot.
Snapshots are saved under {workspace}/snapshots/{timestamp}

### Restore Vault

- shortcuts: none

Restore your vault from a snapshot

Restores your vault based on a snapshot. When restoring, it will over-write any notes that have the same name as notes in the snapshot. It will ignore version control directories like .git when restoring your vault

### Show Help

- shortcuts: none

Dendron will open your current browser to the [[cheatsheet|dendron.cheatsheet]] page.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.help.gif)

### Configure (yaml)

- shortcuts: none

Modify Dendron Config as raw YAML

### Configure

- shortcuts: none

Modify Dendron Config using Dendron UI

 <div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/5b6689eb76344fbb814a3d4405ef62b8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Workspace: Add and Commit

![[dendron://dendron.dendron-site/dendron.topic.workspace#workspace-add-and-commit,1:#*]]

### Workspace: Sync

![[dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync,1]]

---

## Pods

### Build Pod

- shortcuts: none

Build your notes for export. Currently, only export to GitHub Pages is supported.

### Configure Pod

- shortcuts: none

Update your pod configuration

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.configure.gif)

### Configure Export Pod V2

Update your export pod v2 configuration.

### Configure Service Connection

Update your service [[Connections|dendron://dendron.dendron-site/dendron.topic.pod-v2.connections]] config.

### Import Pod

- shortcuts: none

Import notes from an external data source. Currently, only the local file system is supported

### Import Obsidian Vault

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.commands.import-obsidian-vault]]

### Export Pod

- shortcuts: none

Export notes to an external data source. Currently only JSON is supported.

<a href="https://www.loom.com/share/d49e5f4155af485cadc9cd810b6cab28"> <img src="https://cdn.loom.com/sessions/thumbnails/d49e5f4155af485cadc9cd810b6cab28-with-play.gif"> </a>

### Publish Pod

- shortcuts: none

Publish your note to a different format/location

### Copy Note URL

- shortcuts:
  - mac: `cmd+shift+u`
  - windows: `ctrl+shift+u`

Get URL of current note from published site

If you highlight a header, will copy the url with the header set as the anchor

The url is taken from the [[siteUrl|dendron.topic.publish-legacy.configuration#siteurl]] property.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.copy-url.gif)

---

## Seeds

### Browse the Seed Registry

Browse the Seeds available in the Seed Registry and view detailed information about each one. You can also add seeds to your workspace through the UI.

### Add Seed to Workspace

Add a [[seed|dendron.topic.seeds]] to your current workspace.

### Remove Seed from Workspace

Remove a [[seed|dendron.topic.seeds]] from your current workspace.

---

## Misc

### Contribute

- shortcuts: none

Become an environmentalist and keep Dendron sustainable

This command takes you to Dendron's [Environmentalist](https://accounts.dendron.so/account/subscribe) plans.
Environmentalists are users that can support Dendron financially through a monthly contribution. Environmentalist get access to Insiders builds, priority support, and access to exclusive dev channels.

### Paste File

Takes the path currently in the clipboard, copies the file into `{vault}/assets`, and inserts Markdown link in the current note. This is the file equivalent of Dendron's [[Paste Image|dendron.topic.images]] command

Note that most file types won't be natively supported in the preview. You'll need to use the VS Code built-in `> Open Link` command to open the file.

If you are on macOs, you can find instructions for getting the path to the current file [here](https://www.switchingtomac.com/tutorials/osx/5-ways-to-reveal-the-path-of-a-file-on-macos/#:~:text=To%20see%20it%20for%20yourself,your%20file%20is%20located%20in)

---

## Publishing

### Publish

- shortcuts: none

Build, commit and publish your notes with a single command

- NOTE: this is meant for v1 publishing. V2 publishing currently does not have a publish command.

<a href="https://www.loom.com/share/c58edf543e234a8fa164095237579ccc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/c58edf543e234a8fa164095237579ccc-with-play.gif"> </a>

### Publish Export

- shortcuts: none

Build and export your notes using publishing v2

### Publish Dev

- shortcuts: none

Preview your notes on localhost using publishing v2.

---

## Dev

### Dump State

- shortcuts: none

Dump internal state of Dendron inside logs

This is useful when diagnosing issues in Dendron

### Dendron:Dev: Open Logs

- shortcuts: none

Open Dendron logs for current session

### Dendron:Dev: Diagnostics Report

- shortcuts: none

Copy last 3000 lines of all logs and config to clipboard. Use when submitting an issue to Dendron

Information displayed:

- workspace type
- current dendron version
- previous workspace version
- previous global version
- extension install status
- contents of `dendron.yml`
- contents of `dendron.code-workspace`
- telemetry status
- last 3000 lines of logs from client and server

### Dendron:Dev: Run Migration

- shortcuts: none

If your `dendron.yml` configuration file is out of date, you can use this
command to update it. Dendron should automatically prompt you and run the
migration for you, but you can use this command if you didn't get the prompt for
any reason.

## Contextual UI

### File Operations

#### New File

Dendron recognises a new Markdown file created from VS Code context menu and populate it with the frontmatter.

### Header Operations

These are Dendron-specific features made available as [Quick Fix operations in VS Code](https://code.visualstudio.com/docs/editor/refactoring#_code-actions-quick-fixes-and-refactorings).

A header action is announced by a lightbulb when the cursor is within a header. Clicking on the Code Action lightbulb or using the Quick Fix command `Ctrl+.` will display the following quick fixes.

> 💡 **TIP:** If you prefer to not see the Code Action lightbulb in your editor, you can disable lightbulbs with the `editor.lightbulb.enable` [setting](https://code.visualstudio.com/docs/getstarted/settings). You can still open Quick Fixes through Quick Fix command and `Ctrl+.` keyboard shortcut.

#### Copy Header Reference

![[dendron://dendron.dendron-site/dendron.ref.commands#header-selection,1:#*]]

##
