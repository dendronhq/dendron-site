---
id: 19f4e85e-da75-44cf-881c-51c43bf8aeea
title: Multi-vault
desc: ''
updated: 1614108543429
created: 1608098066514
published: false
---

## Working with Multiple Vaults
- NOTE: this tutorial is currently in DRAFT status

In this module, you'll learn how to initialize a multi-vault workspace, manage notes within a multi-vault workspace and publish public/private content within a multi-vault workspace. 

To checkout the end example, you can clone this [repo](https://github.com/kevinslin/example-multivault-workspace) and then run `> Dendron: Change Workspace`. 

Otherwise, follow the instructions below.

## Commit your first vault

> Create Integrated Terminal

```sh
git init
git add .
git commit -m "initial commit"
```

- [Create](https://github.com/new) a new github repository
- we're going to name ours `example-public-vault`
- copy the instructions under `push an existing repository from the command line` (they will look like the instructions below)

```sh
git remote add origin git@github.com:{USERNAME}/example-public-vault.git
git branch -M main
git push -u origin main
```
