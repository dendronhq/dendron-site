---
id: c4cf5519-f7c2-4a23-b93b-1c9a02880f6b
title: Workspace
desc: ''
updated: 1622948628626
created: 1622841295415
---


## Summary

In Dendron, your **workspace** is the root of where all your files are located. It's set when you first run `Dendron: Initialize Workspace`. The folder that contains your workspace is also known as your **workspace root**.

A workspace has a `dendron.yml` file that specifies its [[vaults|dendron.ref.vaults]].

## Commands

### Workspace: Add and Commit

Add and commit all notes across all vaults to git.

### Workspace: Sync

Synchronizes all notes across all vaults with git. Any changes you made will be pushed back to remote, and any changes in the remote will be pulled.

@SeriousBug 
