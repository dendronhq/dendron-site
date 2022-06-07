---
id: f7ebd4aa-8ba7-4bc5-bd00-a1efc5315f07
title: Workbench
desc: ''
updated: 1654469893079
created: 1595170237255
---

## Summary

The Dendron workbench is the overall Dendron User Interface (UI) that surrounds the editor. 

![[dendron://dendron.dendron-site/dendron.concepts.workbench]]

<!-- Dendron has a few custom workbench components to deal with hierarchal notes. -->

We divide available views between:
- dendron side panel views: custom components created by Dendron to manage your notes
- built-in views: native vscode components that integrate with Dendron to manage your notes

## Dendron Side Panel Views

![[dendron://dendron.dendron-site/dendron.topic.sidebar#summary,1:#*]]

### Backlinks View

![[dendron://dendron.dendron-site/dendron.topic.sidebar.backlinks#summary,1]]

### Dendron Calendar View
![[dendron://dendron.dendron-site/dendron._ref.web-ui#calendar-view,1:#*]]

### Dendron Tree View

![[dendron://dendron.dendron-site/dendron.topic.sidebar.tree-view#summary,1:#*]]

## Built-in Views

Built-in views are native to VSCode and provide integration with Dendron

### Outline View

<a href="https://www.loom.com/share/41d1bd75be8e4fa0b0666b6e8f22174b">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/41d1bd75be8e4fa0b0666b6e8f22174b-with-play.gif"> </a>

#### Updating Outline

The outline can be sorted a variety of ways. You can control this by clicking the three dots on the side.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Fullscreen_2_25_21__1_24_PM.jpg)

<!-- #TODO: remove from workspace. currently tutorial links to this -->
### Output View

Open the command palette and type `>View: Toggle Output` to toggle the output view.

You can filter the output by application by using the dropdown menu.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/output.jpg)

<!-- #TODO: move -->
## Contextual UI

Dendron has a number of built-in commands to the VS Code workbench environment. Right clicking a file will allow for the option to run Dendron specific commands over it. The details of this feature are discussed in depth [here](https://docs.dendron.so/notes/VellOqHuzrUyzrWc0ajvg/).

## Working with Multiple Columns

VS Code lets you create multiple columns of your editor and arrange them any way you want them.

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

