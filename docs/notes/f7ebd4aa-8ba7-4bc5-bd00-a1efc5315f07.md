---
custom: {}
id: f7ebd4aa-8ba7-4bc5-bd00-a1efc5315f07
title: Workbench
desc: ''
updated: 1595170237255
created: 1595170237255
data: {}
fname: dendron.topic.workbench
stub: false
parent: 7a7af2fa-b9d0-4adc-81e6-f03186123539
children: []
hpath: dendron.topic.workbench
---
# Workbench

The Dendron workbench is the overall UI that surrounds the editor. It is equivalent to the [VSCode workbench](https://code.visualstudio.com/api/extension-capabilities/extending-workbench).

![workbench](https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png)

> Image from [Visual Studio Docs](https://code.visualstudio.com/api/extension-capabilities/extending-workbench)

Dendron has a few custom workbench components to deal with hierarchal notes.

## Dendron Tree View

The Dendron Tree View lets you view your hierarchal notes as a traditional folder hierarchy. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.treeview.gif)

The Dendron Tree View has the following capabilities:

- click to open note

- show indicators for `stub` and `schema` notes

- show title using tooltip

- realtime update when you create/delete notes

- toggle all functionality

- click to create from stub 
  ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.treeview.stub.gif)

- reveal currently open text document

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.treeview-active-doc.gif)
