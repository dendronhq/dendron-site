---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ''
updated: 1595261816971
created: 1595261816971
---
# Commands

Dendron has a series of builtin commands. They are all prefixed with `Dendron:` and can be accessed through the [command prompt](https://www.dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#command-bar).

## Normal Commands

### Initialize Workspace

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

### Upgrade Settings

Dendron will automatically update your workspace settings during version upgrades to make sure they stay up to date with new features and bundled extensions. If you've modified the settings or want to restore your settings back to their default, you can run this command.

## Refactor Commandso

### Rename File 🚧

NOTE: this command is still experimental and requires a little bit of setup. It's advisable to backup your files before running it. 

Rename files will rename your note. It will also make sure that all links referencing said note are also updated. This command currently requires you download a separate program to help with the renaming. 

Installation Instructions:
1. Install pyenv by following instructions [here](https://github.com/pyenv/pyenv)
1. Install python 3.7.5 by running `pyenv install 3.7.5`
1. Run `pip install dendron-notesdir`
1. Run `pyenv which notesdir` and copy the output 
5. Run `Preferences: Open Workspaces Setting (JSON)` inside your Dendron Workspace
6. Set `dendron.notesDirPath` to the output of `pyenv which notesdir`

Limitations:
- rename currently doesn't rename links in frontmatter
- rename currently doesn't rename titles in the frontmatter or in `h1` headers
- you need to run `Dendron: Reload Index` afterwards or navigate to the renamed link for Dendron to index the changes

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command-rename.gif)


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
