---
id: eea2b078-1acc-4071-a14e-18299fc28f47
title: commands
desc: ''
updated: 1595261816971
created: 1595261816971
data: {}
custom: {}
fname: pro.dendron.topic.commands
parent: null
children: []
---


# Commands

Dendron has a series of builtin commands. They are all prefixed with `Dendron:` and can be accessed throught the command prompt inside vscode. 

### Change Workspace
- input: path to workspace

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.
