---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ''
updated: 1595261816971
created: 1595261816971
---

# Commands
---
## Notes
### Dendron: Create Daily Journal Note
- shortcuts: 
  - key: `ctrl+shift+i`
  - mac: `cmd+shift+i`
  - when: `editorFocus`


Create a global journal note



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.daily.gif)

### Dendron: Create Journal Note
- shortcuts: 
  - key: `ctrl+shift+j`
  - mac: `cmd+shift+j`
  - when: `editorFocus`


Create a hierarchy specific journal note



<a href="https://www.loom.com/share/da562a166af9427e908a76be8bc38355"><img src="https://cdn.loom.com/sessions/thumbnails/da562a166af9427e908a76be8bc38355-with-play.gif"></a>

### Dendron: Create Scratch Note
- shortcuts: 
  - key: `ctrl+shift+s`
  - mac: `cmd+shift+s`


Create a hierarchy specific scratch note



<a href="https://www.loom.com/share/104a3e0bb10f4012a831194d02483e4a"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/104a3e0bb10f4012a831194d02483e4a-with-play.gif"> </a>

### Dendron: Copy Note Link
- shortcuts: 
  - key: `ctrl+shift+c`
  - mac: `cmd+shift+c`
  - when: `editorFocus`


Copy wiki link to note



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

### Dendron: Copy Note Ref
- shortcuts: 
  - key: `ctrl+shift+r`
  - mac: `cmd+shift+r`
  - when: `editorFocus`


Copies a reference to the current open document

 See [[references | dendron.topic.refs]] for more details 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)

### Dendron: Delete Node
- shortcuts: 
  - key: `ctrl+shift+d`
  - mac: `cmd+shift+d`


Delete a note or schema





### Dendron: Rename Note
- shortcuts: none


Rename a note and all backlinks



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

### Dendron: Show Preview
- shortcuts: 
  - windows: `windows+ctrl+p`
  - mac: `cmd+ctrl+p`


Show Markdown Preview





---
## Navigation
### Dendron: Lookup
- shortcuts: 
  - mac: `cmd+L`
  - key: `ctrl+l`


Initiate note lookup



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-cli.gif)

### Dendron: Lookup Schema
- shortcuts: 
  - mac: `cmd+shift+L`
  - key: `ctrl+shift+l`


Initiate schema lookup



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

### Dendron: Open Link
- shortcuts: none


Open link to external file (eg. pdf, .mov, etc) use system default



<a href="https://www.loom.com/share/01250485e20a4cdca2a053dd6047ac68"><img src="https://cdn.loom.com/sessions/thumbnails/01250485e20a4cdca2a053dd6047ac68-with-play.gif"> </a>

---
## Hierarchies
### Dendron: Reload Index
- shortcuts: none


Reload the index. Necessary for Dendron to pick up on schema changes.





### Dendron: Archive Hierarchy
- shortcuts: none


Move current note and all children under the `archive` hierarchy

 This is a convenience method around `Refactor Hierarchy` for the case of archiving hierarchies you are no longer using. For example, if you were currently at `pro.foo`, running `Archive Hierarchy` would be equivalent to running `Refactor Hierarchy` with the following arguments:
- matcher: `pro.foo`
- replacement:  `archive.pro.foo` 

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>

### Dendron: Refactor Hierarchy
- shortcuts: none


Update hierarchy using regex

 Like `Rename Note` but works on an entire hierarchy of notes. This command takes two arguments: 
- matcher: regex that matches text you want to capture for replacement
- replacer: regex that represents text you want to use as replacement

After running the command, you will be taken to a preview that shows all files that will be affected. You will be given an option in a dropdown to either proceed with the refactor or cancel the operation. 

- NOTE: Dendron will warn you if refactoring will overwrite existing files. You will need to either change your `replacer` or move the affected files before Dendron will perform a refactor 

<a href="https://www.loom.com/share/11d90a86fd1348a5a504406b52d79f85"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/11d90a86fd1348a5a504406b52d79f85-with-play.gif"> </a>

### Dendron: Go Up
- shortcuts: 
  - mac: `cmd+shift+up`
  - key: `ctrl+shift+up`
  - when: `editorFocus`


Go to closet non-stub parent of the currently open note



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-up.gif)

### Dendron: Go Next Sibling
- shortcuts: 
  - mac: `cmd+shift+right`
  - key: `ctrl+shift+right`
  - when: `editorFocus`


Go to the next sibling



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Dendron: Go Previous Sibling
- shortcuts: 
  - mac: `cmd+shift+left`
  - key: `ctrl+shift+left`
  - when: `editorFocus`


Go to the previous sibling



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

### Dendron: Go Down
- shortcuts: 
  - mac: `cmd+shift+down`
  - key: `ctrl+shift+down`
  - when: `editorFocus`


Go down the hierarchy



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-down.gif)

---
## Workspace
### Dendron: Initialize Workspace
- shortcuts: none


Create a new workspace



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workspace-init.gif)

### Dendron: Change Workspace
- shortcuts: none


Change into existing workspace

 Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation. 



### Dendron: Show Help
- shortcuts: none


Dendron will open your current browser to the [[cheatsheet|dendron.cheatsheet]] page. 



![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.help.gif)

---
## Pods
### Dendron: Build Pod
- shortcuts: none


Build your notes for export. Currently, only export to github pages is supported.





### Dendron: Import Pod
- shortcuts: none


Import notes from an external data source. Currently, only the local file system is supported





---
## Dev
### Dendron: Doctor
- shortcuts: none


Auto fix issues with frontmatter

 This makes sure your workspace is up to date. It will execute the following actions:
- add ids and titles to the frontmatter of all notes that are missing it
- setup a `docs` folder if it doesn't exist. Required if you want to [[publish | dendron.topic.publishing]] your notes 

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> </a>

### Dendron:Dev: Open Logs
- shortcuts: none


Open Dendron logs for current session





