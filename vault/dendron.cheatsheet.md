---
id: f9540bb6-7a5a-46db-ae7c-e1a606f28c73
title: 'Cheatsheet'
desc: ''
updated: 1596374871110
created: 1596374871110
nav_order: 8.5
---
# Cheatsheet

This is a cheatsheet for Dendron.

# Useful Links
- [Dendron Discord](https://discord.gg/6j85zNX): Get answers to all your questions here
- [Dendron Onboarding](https://calendly.com/thence/dendron): If you are a new user, [Kevin](http://kevinslin.com/), our founder, does a personal onboarding to help you setup your workspace. You can see an example of said onboarding [here](https://www.dendron.so/notes/e8d6241e-1708-4bde-bd3d-93b440a1eaad.html).
- [Github Issues](https://github.com/dendronhq/dendron/issues): If you found a bug or want to submit a feature request, you can file a ticket
- [Hierarchal First Approach to Note Taking](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html): An article about the principle that Dendron was built around
- [VSCode Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)

# Commands
---
## Notes
### Dendron: Create Daily Journal Note
- [[docs|dendron.topic.special-notes.md]]
- description: Create a global journal note
- shortcuts: 
  - key: `ctrl+shift+i`
  - mac: `cmd+shift+i`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.daily.gif)

### Dendron: Create Journal Note
- [[docs|dendron.topic.special-notes.md]]
- description: Create a hierarchy specific journal note
- shortcuts: 
  - key: `ctrl+shift+j`
  - mac: `cmd+shift+j`
  - when: `editorFocus`

<a href="https://www.loom.com/share/da562a166af9427e908a76be8bc38355"><img src="https://cdn.loom.com/sessions/thumbnails/da562a166af9427e908a76be8bc38355-with-play.gif"></a>

### Dendron: Create Scratch Note
- [[docs|dendron.topic.special-notes.md]]
- description: Create a hierarchy specific scratch note
- shortcuts: 
  - key: `ctrl+shift+s`
  - mac: `cmd+shift+s`

<a href="https://www.loom.com/share/104a3e0bb10f4012a831194d02483e4a"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/104a3e0bb10f4012a831194d02483e4a-with-play.gif"> </a>

### Dendron: Copy Note Link
- [[docs|dendron.topic.commands.md]]
- description: Copy wiki link to note
- shortcuts: 
  - key: `ctrl+shift+c`
  - mac: `cmd+shift+c`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

### Dendron: Copy Note Ref
- [[docs|dendron.topic.commands.md]]
- description: Copies a reference to the current open document
- shortcuts: 
  - key: `ctrl+shift+r`
  - mac: `cmd+shift+r`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)

### Dendron: Delete Node
- [[docs|dendron.topic.lookup.md]]
- description: Delete a note or schema
- shortcuts: 
  - key: `ctrl+shift+d`
  - mac: `cmd+shift+d`



### Dendron: Rename Note
- [[docs|dendron.topic.commands.md]]
- description: Rename a note and all backlinks
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

### Dendron: Show Preview
- [[docs|dendron.topic.commands.md]]
- description: Show Markdown Preview
- shortcuts: 
  - windows: `windows+ctrl+p`
  - mac: `cmd+ctrl+p`



---
## Navigation
### Dendron: Lookup
- [[docs|dendron.topic.lookup.md]]
- description: Initiate note lookup
- shortcuts: 
  - mac: `cmd+L`
  - key: `ctrl+l`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-cli.gif)

### Dendron: Lookup Schema
- [[docs|dendron.topic.lookup.md]]
- description: Initiate schema lookup
- shortcuts: 
  - mac: `cmd+shift+L`
  - key: `ctrl+shift+l`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

### Dendron: Open Link
- [[docs|dendron.topic.links.md]]
- description: Open link to external file (eg. pdf, .mov, etc) use system default
- shortcuts: none

<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

---
## Hierarchies
### Dendron: Reload Index
- [[docs|dendron.topic.commands.md]]
- description: Reload the index. Necessary for Dendron to pick up on schema changes.
- shortcuts: none



### Dendron: Archive Hierarchy
- [[docs|dendron.topic.commands.md]]
- description: Move current note and all children under the `archive` hierarchy
- shortcuts: none

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>

### Dendron: Refactor Hierarchy
- [[docs|dendron.topic.commands.md]]
- description: Update hierarchy using regex
- shortcuts: none

<a href="https://www.loom.com/share/11d90a86fd1348a5a504406b52d79f85"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/11d90a86fd1348a5a504406b52d79f85-with-play.gif"> </a>

### Dendron: Go Up
- [[docs|dendron.topic.commands.md]]
- description: Go to closet non-stub parent of the currently open note
- shortcuts: 
  - mac: `cmd+shift+up`
  - key: `ctrl+shift+up`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-up.gif)

### Dendron: Go Next Sibling
- [[docs|dendron.topic.commands.md]]
- description: Go to the next sibling
- shortcuts: 
  - mac: `cmd+shift+right`
  - key: `ctrl+shift+right`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Dendron: Go Previous Sibling
- [[docs|dendron.topic.commands.md]]
- description: Go to the previous sibling
- shortcuts: 
  - mac: `cmd+shift+left`
  - key: `ctrl+shift+left`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Dendron: Go Down
- [[docs|dendron.topic.commands.md]]
- description: Go down the hierarchy
- shortcuts: 
  - mac: `cmd+shift+down`
  - key: `ctrl+shift+down`
  - when: `editorFocus`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-down.gif)

---
## Workspace
### Dendron: Initialize Workspace
- [[docs|dendron.topic.commands.md]]
- description: Create a new workspace
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workspace-init.gif)

### Dendron: Change Workspace
- [[docs|dendron.topic.commands.md]]
- description: Change into existing workspace
- shortcuts: none



### Dendron: Show Help
- [[docs|dendron.topic.commands.md]]
- description: Dendron will open your current browser to the [[cheatsheet|dendron.cheatsheet]] page. 
- shortcuts: none

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.help.gif)

---
## Pods
### Dendron: Build Pod
- [[docs|dendron.topic.pod.md]]
- description: Build your notes for export. Currently, only export to github pages is supported.
- shortcuts: none



### Dendron: Import Pod
- [[docs|dendron.topic.pod.md]]
- description: Import notes from an external data source. Currently, only the local file system is supported
- shortcuts: none



---
## Dev
### Dendron: Doctor
- [[docs|dendron.topic.commands.md]]
- description: Auto fix issues with frontmatter
- shortcuts: none

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> </a>

### Dendron:Dev: Open Logs
- [[docs|dendron.topic.commands.md]]
- description: Open Dendron logs for current session
- shortcuts: none



