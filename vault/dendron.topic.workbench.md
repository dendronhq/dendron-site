---
id: f7ebd4aa-8ba7-4bc5-bd00-a1efc5315f07
title: Workbench
desc: ''
updated: 1595170237255
created: 1595170237255
custom: {}
---


# Workbench

The Dendron workbench is the overall UI that surrounds the editor. It is equivalent to the [VSCode workbench](https://code.visualstudio.com/api/extension-capabilities/extending-workbench).

![workbench](https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png)
> Image from [Visual Studio Docs](https://code.visualstudio.com/api/extension-capabilities/extending-workbench)

Dendron has a few custom workbench components to deal with hierarchal notes.

## Dendron Tree View

The Dendron Tree View lets you view your hierarchal notes as a traditional folder hierarchy. Besides for the tree hierarchy, it has the following capabilities:
- click to open note
- show indicators for `stub` and `schema` notes
- show title using tooltip
- realtime update when you create/delete notes

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.treeview.gif)
