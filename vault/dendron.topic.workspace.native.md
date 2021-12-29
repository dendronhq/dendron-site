---
id: lamzybrD6SgQlJ9BpwkQk
title: Native Workspaces
desc: ''
updated: 1636711898725
created: 1634020995541
---

Native workspaces allow you to use Dendron inside an existing workspace. For
example if you use Visual Studio Code to develop a program, you can use Dendron
to write documentation inside the same workspace.

## Setup

To initialize a Native Dendron workspace, use the [[Initialize Workspace|dendron.ref.commands#initialize-workspace]] command while the workspace you want to use is open.
Select the option to create a native workspace and follow the prompts.

<div style="position: relative; padding-bottom: 67.41573033707866%; height: 0;"><iframe src="https://www.loom.com/embed/4091f78a15cc426690f55fa723f543e5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Automatic Initialization

Dendron looks at files that are added to non-Dendron workspaces to automatically
start everything if a native Dendron workspace is created. This typically should
not affect your experience with VS Code, but you can disable it if you experience
any issues using the [[dendron.watchForNativeWorkspace|dendron://dendron.dendron-site/dendron.ref.config.vscode-config#dendronwatchfornativeworkspace]]
option in the extension settings.

If you disable this setting, you'll need to reload your window with `Developer: Reload Windows`
or otherwise restart VS Code to load the Dendron workspace when you [[create a Dendron Native workspace|#setup]].
