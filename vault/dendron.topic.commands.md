---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ''
updated: 1595261816971
created: 1595261816971
---
# Commands

Dendron has a series of builtin commands. They are all prefixed with `Dendron:` and can be accessed through the [command prompt](https://www.dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#command-bar).

## Note Commands

### Copy Note Link

- shortcut: `CMD+SHIFT+C` (mac), `CTRL+SHIFT+C` (windows, linux)

Copies the current open document as a wiki link.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

### Copy Note Ref
- shortcut: `CMD+SHIFT+R` (mac), `CTRL+SHIFT+R` (windows, linux)

Copies a reference to the current open document. See [[references | dendron.topic.refs]] for more details.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)

### Rename Note 

Rename files will rename your note. It will also make sure that all links referencing said note are also updated. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)

## Hierarchy Commands

### Archive Hierarchy 

This is a convenience method around `Refactor Hierarchy` for the case of archiving hierarchies you are no longer using. For example, if you were currently at `pro.foo`, running `Archive Hierarchy` would be equivalent to running `Refactor Hierarchy` with the following arguments:
- matcher: `pro.foo`
- replacement:  `archive.pro.foo`

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>

### Refactor Hierarchy

Like `Rename Note` but works on an entire hierarchy of notes. This command takes two arguments: 
- matcher: regex that matches text you want to capture for replacement
- replacer: regex that represents text you want to use as replacement

After running the command, you will be taken to a preview that shows all files that will be affected. You will be given an option in a dropdown to either proceed with the refactor or cancel the operation. 

- NOTE: Dendron will warn you if refactoring will overwrite existing files. You will need to either change your `replacer` or move the affected files before Dendron will perform a refactor

<a href="https://www.loom.com/share/11d90a86fd1348a5a504406b52d79f85">
 <img style="" src="https://cdn.loom.com/sessions/thumbnails/11d90a86fd1348a5a504406b52d79f85-with-play.gif"> </a>

## Workspace Commands

### Initialize Workspace
- input: 
    - path to workspace
    - initialization mode
        - initialize with dendron tutorial notes,
        - initialize empty repository,

Create a new workspace. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workspace-init.gif)


### Change Workspace
- input: path to workspace

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### Reload Index

Dendron will re-initialize the index. This is currently necessary if you add new entries to a [[schema | dendron.topic.schema]] and want to see the updates in the current session. Otherwise, Dendron will re-index schemas the next time you reload/open your workspace.

### ShowHelp

Dendron will open your current browser to the [[quickstart | dendron.quickstart]] page. 

<a href="https://www.loom.com/share/b81ce02f30b84d79b92584f339184a00">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/b81ce02f30b84d79b92584f339184a00-with-play.gif"> 
</a>

### ShowPreview

- shortcut: `CTRL+SHIFT+R`

Dendron will open up `Dendron Markdown Preview` to the site if it is installed. It will open the regular markdown preview otherwise. 

### Upgrade Settings

Dendron will automatically update your workspace settings during version upgrades to make sure they stay up to date with new features and bundled extensions. If you've modified the settings or want to restore your settings back to their default, you can run this command.


## Pod Commands

Podslet you import and export notes in and out of Dendron. You can look at [[pods docs | dendron.topic.pod]] for a list of pod commands.

## Dev Commands

These commands should not be needed for regular use of Dendron but can aid in development and debugging. They are prefixed with `Dev:Dendron:`

### Doctor 

This makes sure your workspace is up to date. It will execute the following actions:
- add ids and titles to the frontmatter of all notes that are missing it
- setup a `docs` folder if it doesn't exist. Required if you want to [[publish | dendron.topic.publishing]] your notes

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> 
</a>

###  Open Logs

This opens up the dendron logs file. If you are submitting a bug, please paste the output of this command to your issue.
