---
id: 6DZiBObwhZNYRjnokQ422
title: Private and shared vaults
desc: Using Dendron for private and shared use
updated: 1639167925364
created: 1638820992694
---

## Use case

You want to use dendron for personal and professional use, keeping some notes private, while sharing others with other team members (or even yourself! -i.e. different machines). Some of these notes, in turn, may be [[published|dendron.topic.publish]], whereas others, not.

## Overview

Create a blank worspace that will have [[multiple vaults|dendron.topic.multi-vault]]. , each of them serving different purposes and audiences. Some of all of this vaults can be independent git repositories that can be shared with others as you would with a regular git repo. The workspace, in turn, can also be a git repo itself.

## Step by step

### Start from scratch

1. **Create a [[bare workspace|dendron.topic.workspace#concepts]]**. This workspace will be blank and contain all the needeed [[vaults|dendron.topic.vaults]] as well as the templates and configurations.
   1. Run `Dendron: Initialize Workspace` command.
   2. Type the location where you want it to be stored
   3. Select `blank`
2. Add as many [[dendron.topic.vaults]] as needed, each one serving different purposes or audiences:
   1. Create a local note for notes that will not be shared:
      1. Run `Dendron: Vault Add`
      2. Select `local`
      3. Type the location where you want it to be stored
      4. Type the name of the vault (can be different from the folder's name)
   2. Add a remote vault for notes that will be shared (either with yourself or with others) you can either clone a remote note or create a local vault and then convert it into a remote one:
      1. Adding a remote vault: 
         1. Run `Dendron: Vault Add`
         2. Select `remote`
         3. Write the git location of the remote vault you want to clone
         4. The vault will be cloned inside your workspace
      2. Converting a local vault into a remote vault:
         1. Run
3. Write content
   1. Make sure you add notes into the correspondent vault
4. Syncronize notes by running `Dendron: Worskpace sync`





