---
id: f7ebd4aa-8ba7-4bc5-bd00-a1efc5315f07
title: Workbench
desc: ''
updated: 1617553275054
created: 1595170237255
stub: false
---
The Dendron workbench is the overall UI that surrounds the editor. It is equivalent to the [VSCode workbench](https://code.visualstudio.com/api/extension-capabilities/extending-workbench).

![workbench](https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png)

> Image from [Visual Studio Docs](https://code.visualstudio.com/api/extension-capabilities/extending-workbench)

Dendron has a few custom workbench components to deal with hierarchal notes.

## Output View

Open the command palette and type `>View: Toggle Output` to toggle the output view. 

You can filter the output by application by using the dropdown menu.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/output.jpg)

## Outline View

<a href="https://www.loom.com/share/41d1bd75be8e4fa0b0666b6e8f22174b"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/41d1bd75be8e4fa0b0666b6e8f22174b-with-play.gif"> </a>

### Updating Outline

The outline can be sorted a variety of ways. You can control this by clicking the three dots on the side. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Fullscreen_2_25_21__1_24_PM.jpg)

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

## Backlinks 

You can see all notes that are linked to the current note via the backlink panel.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Fullscreen_2_25_21__7_41_PM.jpg)

## Working with Multiple Columns

VSCode lets you create multiple columns of your editor and arrange them any way you want them.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.windows.gif)

### Expanding the Current Editor

You can use the `toggleEditorWidth` command with a hotkey to quickly expand the current editor.

```json
{
    "command": "workbench.action.toggleEditorWidths",
    "key": "ctrl+cmd+m"
}
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/workbench.toggle-editor.gif)

<!-- TODO

### Zen Mode

### Useful Shortcuts
-->

