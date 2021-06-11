---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ""
updated: 1623445663476
created: 1595261816971
---


## Lookup

### Contribute

- shortcuts: none

Become an environmentalist and keep Dendron sustainable

This command takes you to Dendron's [Environmentalist](https://accounts.dendron.so/account/subscribe) plans.
Environmentalists are users that can support Dendron financially through a monthly contribution. Environmentalist get access to insider builds, priority support, and access to exclusive dev channels.

---

## Notes

### Browse Note

- shortcuts: None

Open the github repository (if it exists) of the current note. If you have a [[multi vault|dendron.topic.multi-vault]] workspace with different git repositories, this command will

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

Copy wiki link to note. The title of the note will be applied as the note alias. If you highlight a header, dendron will create a relative link to the header with the alias set to the header value.

You can also highlight any line of text, and Dendron will create a link to it by inserting a block anchor, or copy an existing anchor.

<a href="https://www.loom.com/share/06d0689d548941219db9708f5b1b70d2"> <img src="https://cdn.loom.com/sessions/thumbnails/06d0689d548941219db9708f5b1b70d2-with-play.gif"> </a>

If you use this command in a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will create a [[cross vault link|dendron.topic.links#cross-vault-links]] to the note in question.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

### Copy Note Ref

- shortcuts:
  - key: `ctrl+shift+r`
  - mac: `cmd+shift+r`
  - when: `editorFocus`

Copies a reference to the current open document

Lets you quickly create a [[note reference|dendron.topic.refs]] to the current note.
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)

If you have a header selected while running this command, it will copy the note ref with the selected header to the next note ref
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/refs.copy-selection.gif)

If you have some text selected, Dendron can insert block anchors to reference the region you have selected.

<a href="https://www.loom.com/share/b72a562626a0483f967e724ef8f2d457"> <img src="https://cdn.loom.com/sessions/thumbnails/b72a562626a0483f967e724ef8f2d457-1623445533618-with-play.gif"> </a>

If you use this command in a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will create a [[cross vault link|dendron.topic.links#cross-vault-links]] to the note in question.

### Delete Node

- shortcuts:
  - key: `ctrl+shift+d`
  - mac: `cmd+shift+d`

Delete a note or schema

### Insert Note

Insert the contents from a note into another note. You can configure a starting hierarchy for this command. Useful if you designated a hierarchy (eg. `templates`) for insertions.

- configuration: [[defaultInsertHierarchy|dendron.topic.config.dendron#defaultinserthierarchy]]

### Insert Note Link

Insert the note link into the current document using lookup.

### Move Note

Move a note. Also includes option to move a note between vaults

### Paste Link

Transform URL in clipboard to nicely formatted markdown link

### Random Note

- [[Early Seed 🌱|dendron.ref.status#early-seed-]]

Navigates to a random note in the workspace. By default, all notes are included in the set that can be navigated to with this command. This can be adjusted with the `randomNote` setting in the Dendron Config (see [[Configure (yaml)|dendron.topic.commands#configure-yaml]]).

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

### Rename Note

- shortcuts: none

Rename a note and all backlinks.

If the title is the same as what Dendron would autogenerate (kebab-case capitalized), then refactor will change the title as well. Otherwise, it will preserve the existing title.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

### Show Preview

- shortcuts:
  - windows: `windows+ctrl+p`
  - mac: `cmd+ctrl+p`

Show Markdown Preview

---

## Navigation

### Lookup

- shortcuts:
  - mac: `cmd+L`
  - key: `ctrl+l`

Initiate note lookup

![[dendron.topic.lookup]]

### Lookup (Journal Note)

- shortcuts:
  - key: `ctrl+shift+j`
  - mac: `cmd+shift+j`
  - args: `{'noteType': 'journal'}`

Initiate note lookup with journal note pre-selected

### Lookup (Scratch Note)

- shortcuts:
  - key: `ctrl+shift+s`
  - mac: `cmd+shift+s`
  - args: `{'noteType': 'scratch', 'selectionType': 'selection2link'}`

Initiate note lookup with scratch note pre-selected

### Lookup Schema

- shortcuts:
  - mac: `cmd+shift+L`
  - key: `ctrl+shift+l`

Initiate schema lookup

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

### Open Link

- shortcuts: none

Open link to external file (eg. pdf, .mov, etc) use system default. Relative files paths will be opened relative to the vault that the note is in.

<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

---

## Hierarchies

### Reload Index

- shortcuts: none

Reload the index. Necessary for Dendron to pick up on schema changes.

### Archive Hierarchy

- shortcuts: none

Move current note and all children under the `archive` hierarchy

This is a convenience method around `Refactor Hierarchy` for the case of archiving hierarchies you are no longer using. For example, if you were currently at `pro.foo`, running `Archive Hierarchy` would be equivalent to running `Refactor Hierarchy` with the following arguments:

- matcher: `pro.foo`
- replacement: `archive.pro.foo`

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>

### Refactor Hierarchy

- shortcuts: none

Update hierarchy using regex

Like `Rename Note` but works on an entire hierarchy of notes. This command takes two arguments:

- matcher: regex that matches text you want to capture for replacement
- replacer: regex that represents text you want to use as replacement

After running the command, you will be taken to a preview that shows all files that will be affected. You will be given an option in a dropdown to either proceed with the refactor or cancel the operation.

- NOTE: Dendron will warn you if refactoring will overwrite existing files. You will need to either change your `replacer` or move the affected files before Dendron will perform a refactor

Refactor Hierarchy is a huge time-saver:
<https://discordapp.com/channels/717965437182410783/743194856788328497/743195382795993291>

<a href="https://www.loom.com/share/11d90a86fd1348a5a504406b52d79f85"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/11d90a86fd1348a5a504406b52d79f85-with-play.gif"> </a>

### Goto Note
- shortcuts:
  - key: `ctrl+enter`
  - when: `editorFocus`

Goto to the note under the cursor, creating it if it doesn't exist.

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

Go down the hierarchy

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-down.gif)

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

Disable [[telemetry|dendron.topic.telemetry]] across all workspaces with Dendron

### Enable Telemetry

Enable [[telemetry|dendron.topic.telemetry]] across all workspaces with Dendron

### Vault Add

![[dendron://dendron-site/dendron.ref.vaults#vault-add,1:#*]]

### Vault Remove

![[dendron://dendron-site/dendron.ref.vaults#vault-remove,1:#*]]

### Initialize Workspace

- shortcuts: none

Create a new workspace

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workspace-init.gif)

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

![[dendron://dendron-site/dendron.ref.workspace#workspace-add-and-commit,1:#*]]

### Workspace: Sync

![[dendron://dendron-site/dendron.ref.workspace#workspace-sync,1]]

---

## Pods

### Build Pod

- shortcuts: none

Build your notes for export. Currently, only export to github pages is supported.

### Configure Pod

- shortcuts: none

Update your pod configuration

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.configure.gif)

### Import Pod

- shortcuts: none

Import notes from an external data source. Currently, only the local file system is supported

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

The url is taken from the [[siteUrl|dendron.topic.publishing.configuration#siteurl]] property.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.copy-url.gif)

---

## Misc

### Paste File

Takes the path currently in the clipboard, copies the file into `{vault}/assets`, and inserts markdown link in the current note. This is the file equivalent of Dendron's [[Paste Image|dendron.topic.images]] command

Note that most file types won't be natively supported in the preview. You'll need to use the vscode built-in `> Open Link` command to open the file. 

If you are on macOs, you can find instructions for getting the path to the current file [here](https://www.switchingtomac.com/tutorials/osx/5-ways-to-reveal-the-path-of-a-file-on-macos/#:~:text=To%20see%20it%20for%20yourself,your%20file%20is%20located%20in)

---

## Publishing

### Publish

- shortcuts: none

Build, commit and publish your notes with a single command

- NOTE: this is mean for v1 publishing. V2 publishing currently does not have a publish command.

<a href="https://www.loom.com/share/c58edf543e234a8fa164095237579ccc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/c58edf543e234a8fa164095237579ccc-with-play.gif"> </a>

### Site Build

- shortcuts: none

Build your notes using publishing v2

This command works by running `dendron-cli` in the background.

### Site Preview

- shortcuts: none

Preview your notes on localhost using publishing v2.

This command works by running `dendron-cli` in the background.

---

## Dev

### Doctor

- shortcuts: none

Automatically fix various issues with Dendron. 

You can pick among various actions for the doctor to perform.

- Doctor performs it's actions on **_the entire workspace_** by default
- You can toggle this behavior with the `Change Scope` button on the top right corner of panel so that it runs **_only on the active open document_**.
- This requires you to have a note open and in focus before running the doctor command.

#### Actions

- `fixFrontmatter`
  - Add ids and titles to the frontmatter of all notes that are missing it
  - Setup a `docs` folder if it doesn't exist. Required if you want to [[publish|dendron.topic.publishing]] your notes

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> </a>

- `h1ToTitle` 
  - Remove initial `h1` header and use it to replace contents of `title` field in frontmatter
- `h1ToH2`
  - Convert all initial `h1` header to `h2` header
- `removeStubs`:
  - Remove all stub docs
- `oldNoteRefToNew`
  - Convert legacy note refs to new style note refs
- `createMissingLinkedNotes`
  - **This doctor action is currently only supported in file scope.**
  
  - Create notes that do not exist yet but has a wikilink to it.
  - A preview pane will appear with the notes that will be created before proceeding.

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
