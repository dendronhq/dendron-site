---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ""
tags:
updated: 1666014995050
created: 1595261816971
nav_order: 3.1
---

> ⚠️ This page is currently under active refactoring.

![[dendron://dendron.dendron-site/dendron.topic.refactoring.commands]]

---

<!-- cut-off point. All content below are going to eventually be refactored -->

## Doctor

![[dendron://dendron.dendron-site/dendron.topic.doctor#commands,1:#*]]

## Notes

### Browse Note

-   shortcuts: None

Open the GitHub repository (if it exists) of the current note. If you have a [[multi vault|dendron.topic.multi-vault]] workspace with different git repositories, this command will

### Copy Codespace URL

- shortcuts: none

The current note's Codespace URL is copied to the clipboard for a Github backed workspace. The information toaster also has a button to open the note in codespaces. 


<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/adbedb82743440a688c3c52f940e4699" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Create Daily Journal Note

-   shortcuts:
    -   key: `ctrl+shift+i`
    -   mac: `cmd+shift+i`
    -   when: `editorFocus`

Create a global journal note

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.daily.gif)


### Copy Note Ref

![[dendron://dendron.dendron-site/dendron.topic.note-reference.commands.copy-note-ref]]

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

### Delete

-   shortcuts:
    -   key: `ctrl+shift+d`
    -   mac: `cmd+shift+d`

Delete a note or schema. A prompt will occur before deletion if any links will break that are referencing the note. When deleting a note and when the note is on the active editor, that editor is closed after running the command.

You can also delete a note from the explorer:

### Delete Node

> ⚠️ This is a deprecated command. Please consider using [[Delete|dendron.ref.commands#delete]] instead.


### Insert Note Index

Insert a block that lists the direct children of the current note to cursor position.

The format of the block is as follows:

```md
## Index

-   [[{ch1}|{noteName}]]
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

-   [[Eggs|recipe.eggs]]
-   [[Bagel|recipe.bagel]]
-   [[Chicken|recipe.chicken]]
```

Running it in the note `recipe.eggs` will insert the following at cursor position:

```md
## Index

-   [[Royale|recipe.eggs.royale]]
-   [[Deviled|recipe.eggs.deviled]]
-   [[Benedict|recipe.eggs.benedict]]
-   [[Florentine|recipe.eggs.florentine]]
```

-   configuration : [[insertNoteIndex|dendron.ref.config#insertnoteindex]]


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

-   If `include` is not specified, then the `include` matching pattern will match all notes.
-   `exclude` takes precedence over `include`, so if the patterns are identical, no notes will match.

### Preview
![[dendron://dendron.dendron-site/dendron.topic.preview.commands]]

---

## Navigation

### Lookup Note / Create Note

-   shortcuts:
    -   mac: `cmd+L`
    -   key: `ctrl+l`

Initiate note lookup

![[dendron.topic.lookup]]

### Create Journal Note

-   shortcuts:
    -   key: `ctrl+shift+j`
    -   mac: `cmd+shift+j`

Creates a [[Journal Note|dendron://dendron.dendron-site/dendron.topic.special-notes#journal-note]].

### Create Scratch Note

-   shortcuts:
    -   key: `ctrl+shift+s`
    -   mac: `cmd+shift+s`

Creates a [[Scratch Note|dendron://dendron.dendron-site/dendron.topic.special-notes#scratch-note]].

### Create Task Note

-   shortcuts: none

Creates a [[task note|dendron.topic.tasks#task-notes]], which comes with some
extra features to keep track of work items.

The `Create Task Note` lookup supports tabbing for autocompletion.

### Set Task Status

![[dendron://dendron.dendron-site/dendron.topic.tasks.commands.set-task-status]]

### Complete Task

![[dendron://dendron.dendron-site/dendron.topic.tasks.commands.complete-task]]

### Create Meeting Note

![[dendron.topic.special-notes.commands.create-meeting-note]]
### Lookup Schema

-   shortcuts:
    -   mac: `cmd+shift+L`
    -   key: `ctrl+shift+l`

Initiate schema lookup

### Open Backup

-   shortcuts: none

Open backup files created by Dendron.

When triggered, you will be prompted to select the key of the backup file. Once selected, you will be prompted again
with a list of all backups saved under the key.

Currently Dendron only creates backups for `dendron.yml`, and these are saved with the key `config`.

This command is a convenience command to open backup files saved under `{workspaceRoot}/.backup/{key}/`.

### Go to Commands

-   See [[Navigation Commands|dendron://dendron.dendron-site/dendron.topic.navigation#commands]]

### Find all References

-   See [[Find All References|dendron://dendron.dendron-site/dendron.topic.navigation#find-all-references]]

--

## Organizing

---

## Hierarchies

### Reload Index

-   shortcuts: none

Reload the index. Necessary for Dendron to pick up on schema changes.

---

## Hooks

### Hook Create

Create a custom [[hook|dendron.topic.hooks]] to trigger during Dendron's lifecycle. This command takes two parameters:

-   hookName: name of your hook
-   hookFilter: a glob pattern that filters what notes your hook applies to
    -   default: `*`, apply hook to all notes by default
-   hookType: where to attach the hook (coming soon - we only support `onCreate` at the moment)
    -   types: onCreate|onDelete|onChange
    -   default: onCreate

### Hook Delete

Delete a custom [[hook|dendron.topic.hooks]]. Will remove the hook from `dendron.yml` and optionally, remove `{workspace}/hooks/{hookName}.js`

Parameters:

-   hookName: name of the hook to remove
-   shouldDeleteScript: whether you should also delete the hook script

---

## Workspace

### Disable Telemetry

Disable [[telemetry|dendron.ref.telemetry]] across all workspaces with Dendron

### Enable Telemetry

Enable [[telemetry|dendron.ref.telemetry]] across all workspaces with Dendron


### Add Existing Vault


### Create New Vault

### Vault Add

> ⚠️ This is a deprecated command and will be removed in upcoming release. Please consider using [[Create New Vault| dendron://dendron.dendron-site/dendron.topic.vaults#create-new-vault]] instead.

### Remove Vault

![[dendron://dendron.dendron-site/dendron.topic.vaults#remove-vault]]

You can also remove a vault from the explorer by:
Right Click on the vault > Dendron: Vault Remove

### Convert Vault

![[dendron://dendron.dendron-site/dendron.topic.vaults#convert-vault]]

### Migrate to Self Contained Vault

Converts an existing vault into a [[self contained vault|dendron.topic.vaults.self-contained]].
See [[migrating a regular vault|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained.migrate#migrating-a-regular-vault]] for details.

### Launch Tutorial

Prompt user to create an initial tutorial workspace and takes user through new tutorial

### Initialize Workspace

-   shortcuts: none

Create a new workspace

### Change Workspace

-   shortcuts: none

Change into existing workspace

### Snapshot Vault

-   shortcuts: none

Create a snapshot of your vault

Takes a snapshot of your entire vault, including assets. This command will ignore version control folders like .git when making a snapshot.
Snapshots are saved under {workspace}/snapshots/{timestamp}

### Restore Vault

-   shortcuts: none

Restore your vault from a snapshot

Restores your vault based on a snapshot. When restoring, it will over-write any notes that have the same name as notes in the snapshot. It will ignore version control directories like .git when restoring your vault

### Show Help

-   shortcuts: none

Dendron will open your current browser to the [[cheatsheet|dendron.cheatsheet]] page.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.help.gif)

### Configure (yaml)

-   shortcuts: none

Modify Dendron Config as raw YAML

### Configure (UI)

-   shortcuts: none

Modify Dendron Config using Dendron UI

 <div style="position: relative; padding-bottom: 53.75%; height: 0;"><iframe src="https://www.loom.com/embed/3eba0f8523ac4d1ab150e8d3af9f1b0b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Workspace: Add and Commit

![[dendron://dendron.dendron-site/dendron.topic.workspace#workspace-add-and-commit,1:#*]]

### Workspace: Sync

![[dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync,1]]

---

## Pods

### Build Pod

-   shortcuts: none

Build your notes for export. Currently, only export to GitHub Pages is supported.

### Configure Pod

-   shortcuts: none

Update your pod configuration

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.configure.gif)

### Configure Export Pod V2

Update your export pod v2 configuration.

### Configure Service Connection

Update your service [[Connections|dendron://dendron.dendron-site/dendron.topic.pod-v2.connections]] config.

### Import Pod

-   shortcuts: none

Import notes from an external data source. Currently, only the local file system is supported

### Import Obsidian Vault

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.commands.import-obsidian-vault]]

### Export Pod

-   shortcuts: none

Export notes to an external data source. Currently only JSON is supported.

<a href="https://www.loom.com/share/d49e5f4155af485cadc9cd810b6cab28"> <img src="https://cdn.loom.com/sessions/thumbnails/d49e5f4155af485cadc9cd810b6cab28-with-play.gif"> </a>

### Publish Pod

-   shortcuts: none

Publish your note to a different format/location

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

-   shortcuts: none

Become an environmentalist and keep Dendron sustainable

This command takes you to Dendron's [Environmentalist](https://accounts.dendron.so/account/subscribe) plans.
Environmentalists are users that can support Dendron financially through a monthly contribution. Environmentalist get access to Insiders builds, priority support, and access to exclusive dev channels.

### Paste File

Takes the path currently in the clipboard, copies the file into `{vault}/assets`, and inserts Markdown link in the current note. This is the file equivalent of Dendron's [[Paste Image|dendron.topic.images]] command

Note that most file types won't be natively supported in the preview. You'll need to use the VS Code built-in `> Open Link` command to open the file.

If you are on macOs, you can find instructions for getting the path to the current file [here](https://www.switchingtomac.com/tutorials/osx/5-ways-to-reveal-the-path-of-a-file-on-macos/#:~:text=To%20see%20it%20for%20yourself,your%20file%20is%20located%20in)

---

## Publishing

### Copy Note URL

-   shortcuts:
    -   mac: `cmd+shift+u`
    -   windows: `ctrl+shift+u`

Get URL of current note from published site

If you highlight a header, will copy the url with the header set as the anchor

The url is taken from the [[siteUrl|dendron.topic.publish-legacy.configuration#siteurl]] property.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.copy-url.gif)


### Publish

-   shortcuts: none

Build, commit and publish your notes with a single command

-   NOTE: this is meant for v1 publishing. V2 publishing currently does not have a publish command.

<a href="https://www.loom.com/share/c58edf543e234a8fa164095237579ccc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/c58edf543e234a8fa164095237579ccc-with-play.gif"> </a>

### Publish Export

-   shortcuts: none

Build and export your notes using publishing v2

### Publish Dev

-   shortcuts: none

Preview your notes on localhost using publishing v2.

---

## Dev

### Dump State

-   shortcuts: none

Dump internal state of Dendron inside logs

This is useful when diagnosing issues in Dendron

### Dendron:Dev: Open Logs

-   shortcuts: none

Open Dendron logs for current session

### Dendron:Dev: Diagnostics Report

![[dendron://dendron.dendron-site/dendron.topic.dev.commands.diagnostic-report]]

### Dendron:Dev: Run Migration

-   shortcuts: none

If your `dendron.yml` configuration file is out of date, you can use this
command to update it. Dendron should automatically prompt you and run the
migration for you, but you can use this command if you didn't get the prompt for
any reason.

## Contextual UI

### File Operations

#### New File

Dendron recognizes a new Markdown file created from VS Code context menu and populate it with the frontmatter.

### Header Operations

These are Dendron-specific features made available as [Quick Fix operations in VS Code](https://code.visualstudio.com/docs/editor/refactoring#_code-actions-quick-fixes-and-refactorings).

A header action is announced by a lightbulb when the cursor is within a header. Clicking on the Code Action lightbulb or using the Quick Fix command `Ctrl+.` will display the following quick fixes.

> 💡 **TIP:** If you prefer to not see the Code Action lightbulb in your editor, you can disable lightbulbs with the `editor.lightbulb.enable` [setting](https://code.visualstudio.com/docs/getstarted/settings). You can still open Quick Fixes through Quick Fix command and `Ctrl+.` keyboard shortcut.

#### Copy Header Reference

![[dendron://dendron.dendron-site/dendron.ref.commands#header-selection,1:#*]]

##
