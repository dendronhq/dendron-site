---
id: f7ebd4aa-8ba7-4bc5-bd00-a1efc5315f07
title: Workbench
desc: ''
updated: 1646113890634
created: 1595170237255
stub: false
---

The Dendron workbench is the overall Dendron User Interface (UI) that surrounds the editor. It is equivalent to the [VS Code workbench](https://code.visualstudio.com/api/extension-capabilities/extending-workbench).

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

## Backlinks View

This view lets you see all [[backlinks|dendron.topic.links#backlinks]] to the current note.

When you create a link anywhere in Dendron, it becomes a backlink to the destination note and will appear in the backlinks view of the destination note.

![](https://cdn.loom.com/images/originals/25fce495c52a475b9a952e1901b93e4c.jpg?Expires=1626335459&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy8yNWZjZTQ5NWM1MmE0NzViOWE5NTJlMTkwMWI5M2U0Yy5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MjYzMzU0NTl9fX1dfQ__&Signature=HvqcgNlMGeafss5bfNHzXg1yj6alFAtAuTIOvdunRRUHPUH05AGHr6Cv0uv0rrHVuIRzOXHflqLjKVmrYaF5Xms5NBURrQ8qu0TC6s541TLHr0G3vrkd8hZYkkx7-r08WgjKJeAKP9BxmhazRYggwE4SPLD0pK39PKHQ8SPHmIln9E504NHOUgvfyXlR-YCcjrjgxpyNMIEIkJ~9GsKxZ74qVO8fs5yAnRybXQHIlTEzzE3~eCQh6CxdDEWdD5TPw1gj9Nz-Nb3Qh9bk60vaeqiuvVuHyWTzhEHX95z4aSZT5-n2a9FVS90wDyQwxQfnwzkHP2ittDDX~cY8nKMToA__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ)
> The Backlinks view (fully expanded) is shown above with an example note 'eggs.md' open. You can see one link and 3 link candidates shown in the panel.

### Backlink View: Command Palette 

#### Change Sort Order
Change sort order of the backlinks:
* Lexigraphically: sorts the backlinks by the name of the note.
* By Update time: sorts the backlinks by descending update timestamp of the note (most recently updated notes first). 

Default: Lexigraphically. 

#### Expand All/Collapse all 
* Expand All: Expands all the backlinks in the backlink view.
* Collapse All: Collapses all the backlinks in the backlink view.

### Accessing the Backlinks view
The Backlinks view is located in the Explorer side bar.

You can focus on the Backlinks view by:
  - using the `Explorer: Focus on Backlinks View` command, or
  - clicking on the Explorer icon in the VS Code Activity Bar and navigating to the Backlinks view at the bottom.
  
`Candidates` feature is currently disabled by default. In order to enable link candidates, add the following configuration in `dendron.yml`:

```yaml
dev:
  enableLinkCandidates: true
```

### Common components
The view is structured to display information about backlinks as a tree.

When you first open the Backlinks view, you will be able to see a list of different notes. These are notes that have at least one backlink to the current note.

Each of the item in the list will have an arrow on the left. If you click on the arrow, the item will expand to display what type of backlinks are in that note.

You will be able to see an item labeled `Linked` or `Candidates` depending on what type of backlinks that note has to the current note. See the sections below for more information on each item.

If you click on an item anywhere other than the arrow, it will open that note in your editor.


#### Linked backlinks
If your current note has a linked backlink to it, you can see them in a subtree labeled `Linked` after expanding each source item.

Each `Linked` backlink will have a label that contains the text that comes before the link to give you a rough context of how the link was used in that location.

Clicking on a linked item will open the note that contains the link.

#### Candidate backlinks
If your current note has link candidates, you can see them in a subtree labeled `Candidates` after expanding each source item.

Each `Candidate` backlink will have a label that contains the text that comes before the link candidate to give you a rough context of how it was used in that location.

Clicking on a link candidate item will open the note that contains the candidate, and convert the link candidate into a wikilink, turning it into `Linked` backlink.)

## Dendron Calendar View
![[dendron://dendron.dendron-site/dendron._ref.web-ui#calendar-view,1:#*]]

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

## Lookup View

This view lets you see the status of the lookup operation that is being done.
When you use `Dendron: Lookup Note`, you will notice that a view called `Lookup View` will appear along with the lookup bar if you have the side bar opened. This view will disappear once the lookup has been confirmed or cancelled.

### Changing lookup modifiers within the view
The view will provide you with a form that shows the current state of [[lookup modifiers|dendron.topic.lookup.modifiers]], which you can also control within the view.

The changes in the lookup view will also be synced to the modifier buttons on the lookup bar and vice-versa.

- Hovering over the question mark next to each form will show you the description of that form
- Hovering over the form item will show you a description of the functionality of each item.
- Clicking on the X icon that appears when you hover over a text form will remove the currently set modifier that form displays.

### Selection
This lets you view and select what the [[selection type|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#selectiontype]] should be for the currently active note lookup. 

### Effect type
This lets you view and select what the [[effect type|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#effecttype]] should be for the currently active note lookup.

Note that in this form you can select multiple items, and clicking on individual items will add / remove accordingly. Clicking on the X icon that appears when you hover over this form will remove all set effect types.

### Split Horizontally
This switch lets you toggle the [[horizontal|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#horizontal]] split behavior for the currently active note lookup.

### Apply Direct Child Filter
This switch lets you toggle the [[direct child only|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#directchildonly]] filter behavior for the currently active note lookup.

<!-- TODO

### Zen Mode

### Useful Shortcuts
-->

