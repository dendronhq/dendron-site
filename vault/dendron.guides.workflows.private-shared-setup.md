---
id: 6DZiBObwhZNYRjnokQ422
title: Private and shared vaults
desc: Using Dendron for private and shared use
updated: 1639246566164
created: 1638820992694
---

## Rationale

You want to use Dendron for personal and professional use, keeping some notes private, while sharing others with other team members (or even yourself! -i.e. different machines). Some of these notes, in turn, may be [[published|dendron.topic.publish]], whereas others, not.

Some specific use cases in which following a [[dendron.topic.multi-vault]] strategy would be recommended are:

![[dendron.topic.multi-vault#use-cases,1:#*]]

## Overview

Create a blank worspace that will have [[multiple vaults|dendron.topic.multi-vault]], each serving different purposes and audiences. Each vault can be independent git repositories that can be shared with others as you would with a regular git repository. The workspace, itself, can also be a git repository.

## Step by step

### Start from scratch

1. **Create a [[bare workspace|dendron.topic.workspace#concepts]]**. This workspace will be blank and contain all the needeed [[vaults|dendron.topic.vaults]] as well as the templates and configurations.
   ![[dendron.topic.workspace#bare-workspace:#*]]
   1. Run `Dendron: Initialize Workspace` command.
   2. Type the location where you want it to be stored
   3. Select `blank`
2. Add as many [[dendron.topic.vaults]] as needed, each one serving different purposes or audiences.
   
   1. Create a **local note** for notes that will not be shared ([[more info here|dendron.topic.vaults#vault-add]]):
      1. Run `Dendron: Vault Add`
      2. Select `local`
      3. Type the location where you want it to be stored
      4. Type the name of the vault (can be different from the folder's name)
   2. Add a **remote vault** for notes that will be shared (either with yourself or with others). You can clone a remote vault or create a local vault that you convert into a remote one:
      1. If adding remote vault(s) that already exist: 
         1. Run `Dendron: Vault Add`
         2. Select `remote`
         3. Write the git location of the remote vault you want to clone
         4. The vault will be cloned inside your workspace
      2. If converting local vault(s) into remote vault(s):
         1. Run `Dendron: Convert Vault`
         2. Select the name of your local vault that you want to convert
         3. Select `Convert to remote vault`
         4. Type the git location where you want to store your remote vault
3. **Create notes** in the desired vault using the [[demo.lookup]] tool.
   ![[dendron.topic.multi-vault#lookup:#prompt-for-vault-selection-each-time]]
4. Synchronize notes by running `Dendron: Worskpace sync`
   ![[dendron.topic.workspace#syncing-your-workspace-with-git]]

### Use template

Alternatively, you can use this template from the [[Teams page|dendron.topic.teams]]:

![[dendron.topic.teams#workspace:#*]]


## Acknowledgement

This guide is based on [this gist](https://gist.github.com/kevinslin/0e0f13fedb43732e86938ab1033b7efd)



