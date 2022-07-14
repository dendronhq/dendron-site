---
id: c4cf5519-f7c2-4a23-b93b-1c9a02880f6b
title: Workspace
desc: ''
updated: 1657825519258
created: 1622841295415
---

## Summary

A Dendron workspace is a collection of one or more [[vaults|dendron://dendron.dendron-site/dendron.topic.vaults]] (folders with notes).

## Details

Every workspace has a [[dendron.yml|dendron://dendron.dendron-site/dendron.ref.config]] which specifies all vaults and configurations for a particular workspace.

Most workspaces only have a single vault. See [[Multi Vault|dendron://dendron.dendron-site/dendron.topic.multi-vault]] for scenarios of adding additional vaults.

## Concepts

### Workspace Root

The folder that contains files like `dendron.yml` and `dendron.code-workspace` is the top-level directory of a workspace, known as the **workspace root.**

### Code Workspace

A workspace that is created using `dendron.code-workspace` file.

### Native Workspace

A workspace that is created with a `dendron.yml` file and lacking a `dendron.code-workspace` file.

### Bare Workspace

A bare workspace is a workspace where all vaults inside are [[remote vaults|dendron://dendron.dendron-site/dendron.topic.vaults#remote]] (separate git repos).
You can have a **bare code workspace** or a **bare native workspace**.

## Commands

### Workspace: Add and Commit

Add and commit all notes across all vaults to git.

### Workspace: Sync

![[dendron://dendron.dendron-site/dendron.topic.workspace.commands.sync]]

## Workspace Types

Dendron recognizes 2 types of workspaces, Code and Native. When you initialize your workspace with
the [[Initialize Workspace|dendron.ref.commands#initialize-workspace]] command, you get a Code
workspace. Code workspaces include a `dendron.code-workspace` file which sets up vaults and
recommends installing some useful extensions. Code workspaces are great when you are setting up a
knowledge base.

Native workspaces on the other hand don't have a `dendron.code-workspace` file.
They are useful when you are writing notes or documentation, and you want to
keep your notes as part of a project rather than a separate knowledge base.

See [[Native Workspace Setup|dendron.topic.workspace.native#setup]] to see how you can start using a native workspace!

## Cookbook

### Version control your workspace using Git

Inside your workspace, run the following

1. Initialize a git repo
   ```
   git init
   git add .
   git commit -m "initial commit"
   ```
2. Add a remote
   - go to GitHub, and [create a new workspace](https://github.com/new)
   - follow instructions to add an existing git repo to the repository

### Syncing your workspace with Git

`Workspace Sync` does not sync the workspace if all your vaults are separate git repos. In order to synchronize your workspace, you need to explicitly do a `git pull` from the workspace folder.

If you are inside VS Code, you should be able to run `> Create Integrated Terminal...`, choose the folder containing your workspace, and launch the terminal. After launching, run a `git pull` inside of it.
