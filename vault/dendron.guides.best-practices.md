---
id: 8d3c8142-7481-40da-9a5c-69a3d4bab697
title: Best Practices
desc: ''
updated: 1627660513029
created: 1619103186948
nav_order: 3.1
---

## Naming

We recommend using all lower [[kebab case|dendron.concepts#kebab-case]] when naming your files. For example, `awesome apples` would be `awesome-apples`. This would be stored in your file system as `awesome-apples.md`. 

Dendron will auto-generate a human friendly title based on the last part of your hierarchy. By default, Dendron uses [title.sh](https://title.sh/) to generate titles based on your note name. Titles generated are consistent with the [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html). Dendron will replace `-` with a ` `(_space_) when generating titles. 

If you end up adding custom capitalization to your file name, Dendron will not attempt to generate a title but return the last part of your hierarchy as is.

Some examples below:

```
- awesome-apples.md -> title: Awesome Apples
- fruit.awesome-apples.md -> title: Awesome Apples
- fruit.Custom-Capitalization -> title: Custom-Capitalization
```

## Using Dendron Across Machines

There are many ways to accomplish this and will differ based on your use case.

### Synchronizing Everything in One Repo

In this setup, all your notes are synchronized in a single git repository. 

1. After you initialize your workspace, initialize a git repository of your entire workspace. 
	```sh
	cd $workspace
	git init
	git add .
	git commit -m "initial commit"
	```
1. Create a remote git host (github is the most popular and probably easiest to setup) and push your changes there
1. Clone the workspace on any machine you want to use Dendron in

- NOTE: Dendron provides the [[Workspace: Sync|dendron.topic.workspace#workspace-sync]] command to make using a git based workflow easier to manage


### Synchronizing Everything across Multiple Repos

This setup is most useful if you are using [[Multi Vault|dendron.topic.multi-vault]] or are planning on publishing to the [[Seed Bank|dendron.topic.seed-bank]].

In this setup, only your `dendron.yml` and other metadata files are comitted when you commit your workspace. Each [[vaults|dendron.topic.vaults]] will be hosted at its own github endpoint. 

1. After you initialize your workspace, initialize a git repository of everything except your vault
	```sh
	cd $workspace
	git init
	echo vault >> .gitignore
	git add .
	git commit -m "initial commit"
	```
1. Convert your vault to a remote vault by following the instructions [[here|dendron.guides.cook#converting-a-local-vault-to-a-remote-vault]].
1. Create a remote git host (github is the most popular and probably easiest to setup) and push your workspace changes there
1. Clone the workspace on any computer you want to use Dendron on

- NOTE: If you have non-public vaults, make sure each computer that you clone Dendron on has the necessary permissions to clone said vault. Instructions for doing this with github can be found [here](https://saas.dendron.so/notes/L80sFsAAcOO_0ztqZrN1J.html)



