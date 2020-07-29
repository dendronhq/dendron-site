---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: Commands
desc: ''
updated: 1595261816971
created: 1595261816971
---
# Commands

Dendron has a series of builtin commands. They are all prefixed with `Dendron:` and can be accessed throught the command prompt inside vscode. 

## Normal Commands

### Initialize Workspace

### Change Workspace
- input: path to workspace

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### Reload Index

Dendron will re-initialize the index. This is currently necessary if you add new entries to a [[schema | dendron.topic.schema]] and want to see the updates in the current session. Otherwise, Dendron will re-index schemas the next time you reload/open your workspace.

### Upgrade Settings

Dendron will automatically update your workspace settings during version upgrades to make sure they stay up to date with new features and bundled extensions. If you've modified the settings or want to restore your settings back to their default, you can run this command.

### Doctor #TODO

This makes sure your workspace is up to date. It will execute the following commands:
- Backill Notes: add frontmatter to all notes that are missing 
- Setup a `docs` folder if it doesn't exist. Required if you want to [[publish | dendron.topic.publishing]] your notes
- Make sure your settings are up to date

## Dev Commands

These commands should not be needed for regular use of Dendron but can aid in development and debugging. They are prefixed with `Dev:Dendron:`

###  Open Logs

This opens up the dendron logs file. If you are submitting a bug, please paste the output of this command to your issue.
