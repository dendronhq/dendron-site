---
id: f9540bb6-7a5a-46db-ae7c-e1a606f28c73
title: 'Cheatsheet'
desc: ''
updated: 1639201224958
created: 1596374871110
nav_exclude: true
---

#prune

This is a cheatsheet for Dendron.

# Useful Links
- [Dendron Discord](https://link.dendron.so/discord): Get answers to all your questions here
- [Dendron Onboarding](https://calendly.com/d/mqtk-rf7q/onboard): If you are a new user, [Kevin](http://kevinslin.com/), our founder, does a personal onboarding to help you setup your workspace. You can see an example of said onboarding [here](https://www.dendron.so/notes/e8d6241e-1708-4bde-bd3d-93b440a1eaad.html).
- [GitHub Issues](https://github.com/dendronhq/dendron/issues): If you found a bug or want to submit a feature request, you can file a ticket
- [Hierarchal First Approach to Note Taking](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html): An article about the principle that Dendron was built around
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)

# Commands
---
## Lookup
### Dendron: Contribute
- description: Become an environmentalist and keep Dendron sustainable
- shortcuts: none



---
## Notes
### Dendron: Create Daily Journal Note
- description: Create a global journal note
- shortcuts: 
  - key: `ctrl+shift+i`
  - mac: `cmd+shift+i`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.daily.gif)

### Dendron: Copy Note Link
- description: Copy wiki link to note
- shortcuts: 
  - key: `ctrl+shift+c`
  - mac: `cmd+shift+c`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

### Dendron: Copy Note Ref
- description: Copies a reference to the current open document
- shortcuts: 
  - key: `ctrl+shift+r`
  - mac: `cmd+shift+r`
  - when: `editorFocus`



### Dendron: Delete Node
- description: Delete a note or schema
- shortcuts: 
  - key: `ctrl+shift+d`
  - mac: `cmd+shift+d`



### Dendron: Rename Note
- description: Rename a note and all backlinks
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

### Dendron: Show Preview
- description: Show Markdown Preview
- shortcuts: 
  - windows: `windows+ctrl+p`
  - mac: `cmd+ctrl+p`



---
## Navigation
### Dendron: Lookup
- description: Initiate note lookup
- shortcuts: 
  - mac: `cmd+L`
  - key: `ctrl+l`



### Dendron: Lookup (Journal Note)
- description: Initiate note lookup with journal note pre-selected
- shortcuts: 
  - key: `ctrl+shift+j`
  - mac: `cmd+shift+j`
  - args: `{'noteType': 'journal'}`



### Dendron: Lookup (Scratch Note)
- description: Initiate note lookup with scratch note pre-selected
- shortcuts: 
  - key: `ctrl+shift+s`
  - mac: `cmd+shift+s`
  - args: `{'noteType': 'scratch', 'selectionType': 'selection2link'}`



### Dendron: Lookup Schema
- description: Initiate schema lookup
- shortcuts: 
  - mac: `cmd+shift+L`
  - key: `ctrl+shift+l`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

### Dendron: Open Link
- description: Open link to external file (eg. pdf, .mov, etc) use system default
- shortcuts: none

<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

---
## Hierarchies
### Dendron: Reload Index
- description: Reload the index. Necessary for Dendron to pick up on schema changes.
- shortcuts: none



### Dendron: Archive Hierarchy
- description: Move current note and all children under the `archive` hierarchy
- shortcuts: none

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>

### Dendron: Refactor Hierarchy
- description: Update hierarchy using regex
- shortcuts: none

<a href="https://www.loom.com/share/11d90a86fd1348a5a504406b52d79f85"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/11d90a86fd1348a5a504406b52d79f85-with-play.gif"> </a>

### Dendron: Go Up
- description: Go to closet non-stub parent of the currently open note
- shortcuts: 
  - mac: `cmd+shift+up`
  - key: `ctrl+shift+up`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-up.gif)

### Dendron: Go Next Sibling
- description: Go to the next sibling
- shortcuts: 
  - key: `ctrl+shift+]`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Dendron: Go Previous Sibling
- description: Go to the previous sibling
- shortcuts: 
  - key: `ctrl+shift+[`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Dendron: Go Down
- description: Go down the hierarchy
- shortcuts: 
  - mac: `cmd+shift+down`
  - key: `ctrl+shift+down`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-down.gif)

---
## Workspace
### Dendron: Vault Add
- description: Add a new vault
- shortcuts: none

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b4171372f9794dd7be609c043f343fa3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Dendron: Vault Remove
- description: Remove a vault
- shortcuts: none

Remove a vault from your workspace. Note that the underlying files wil **not** be deleted - the vault will lose its association with your workspace.
<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/307effc22b8d4c59a32933529a8393e1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Dendron: Initialize Workspace
- description: Create a new workspace
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workspace-init.gif)

### Dendron: Change Workspace
- description: Change into existing workspace
- shortcuts: none



### Dendron: Snapshot Vault
- description: Create a snapshot of your vault
- shortcuts: none



### Dendron: Restore Vault
- description: Restore your vault from a snapshot
- shortcuts: none



### Dendron: Show Help
- description: Dendron will open your current browser to the [[cheatsheet|dendron.cheatsheet]] page. 
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.help.gif)

### Dendron: Configure (yaml)
- description: Modify Dendron Config as raw YAML
- shortcuts: none



### Dendron: Configure
- description: Modify Dendron Config using Dendron UI
- shortcuts: none



---
## Pods
### Dendron: Build Pod
- description: Build your notes for export. Currently, only export to GitHub pages is supported.
- shortcuts: none



### Dendron: Configure Pod
- description: Update your pod configuration
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.configure.gif)

### Dendron: Import Pod
- description: Import notes from an external data source. Currently, only the local file system is supported
- shortcuts: none



### Dendron: Export Pod
- description: Export notes to an external data source. Currently only JSON is supported. 
- shortcuts: none

<a href="https://www.loom.com/share/d49e5f4155af485cadc9cd810b6cab28"> <img src="https://cdn.loom.com/sessions/thumbnails/d49e5f4155af485cadc9cd810b6cab28-with-play.gif"> </a>

### Dendron: Publish Pod
- description: Publish your note to a different format/location
- shortcuts: none



### Dendron: Copy Note URL
- description: Get URL of current note from published site
- shortcuts: 
  - mac: `cmd+shift+u`
  - windows: `ctrl+shift+u`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.copy-url.gif)

---
## Publishing
### Dendron: Publish
- description: Build, commit and publish your notes with a single command
- shortcuts: none

<a href="https://www.loom.com/share/c58edf543e234a8fa164095237579ccc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/c58edf543e234a8fa164095237579ccc-with-play.gif"> </a>

### Dendron: Site Build
- description: Build your notes using publishing v2
- shortcuts: none



### Dendron: Site Preview
- description: Preview your notes on localhost using publishing v2
- shortcuts: none



---
## Dev
### Dendron: Doctor
- description: Auto fix issues with frontmatter
- shortcuts: none

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> </a>

### Dendron: Dump State
- description: Dump internal state of Dendron inside logs
- shortcuts: none



### Dendron:Dev: Open Logs
- description: Open Dendron logs for current session
- shortcuts: none



 
