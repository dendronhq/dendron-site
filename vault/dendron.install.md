---
id: d95b93bf-5e6f-4dd0-b7d7-c8e29e061876
title: Install
desc: ''
updated: 1595537796868
created: 1595537796868
stub: false
nav_order: 0.9
---

# Getting Started

[Ed](https://www.youtube.com/channel/UCBDaEQKIAgU-U6bsUfPcWnA), our fellow Dendrite, has made a fantastic getting started video to help folks install and setup Dendron. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/BRLLZ9IEh10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Install
Dendron can be installed as a [vscode plugin](https://marketplace.visualstudio.com/items?itemName=dendron.dendron). If you don't already have VSCode, you can download it [here](https://code.visualstudio.com/).

After you have downloaded the plugin, following the instructions to create your first **workspace**.

1. With VSCode in focus, launch the _command bar_:

((ref: [[dendron.cook]]#launch the command bar,3:#*))

2. Paste the following command and press `Enter`: 
```sh
> Dendron: Initialize Workspace
```
3. Select a folder that will act as the root of your dendron workspace.


![Initialize workspace](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/dendron-init.gif)

When the workspace opens, it will show dialogue to install the recommended extensions. Though not required, these extensions add all the **non-core** features of Dendron like wiki links and tagging support.
