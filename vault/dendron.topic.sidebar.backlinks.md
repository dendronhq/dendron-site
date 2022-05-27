---
id: yxkn87ohgomk0tgs12dppur
title: Backlinks
desc: ''
updated: 1653410530655
created: 1653410188509
---

## Summary
This view lets you see all [[backlinks|dendron.topic.links#backlinks]] to the current note.

When you create a link anywhere in Dendron, it becomes a backlink to the destination note and will appear in the backlinks view of the destination note.

![](https://cdn.loom.com/images/originals/25fce495c52a475b9a952e1901b93e4c.jpg?Expires=1626335459&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy8yNWZjZTQ5NWM1MmE0NzViOWE5NTJlMTkwMWI5M2U0Yy5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MjYzMzU0NTl9fX1dfQ__&Signature=HvqcgNlMGeafss5bfNHzXg1yj6alFAtAuTIOvdunRRUHPUH05AGHr6Cv0uv0rrHVuIRzOXHflqLjKVmrYaF5Xms5NBURrQ8qu0TC6s541TLHr0G3vrkd8hZYkkx7-r08WgjKJeAKP9BxmhazRYggwE4SPLD0pK39PKHQ8SPHmIln9E504NHOUgvfyXlR-YCcjrjgxpyNMIEIkJ~9GsKxZ74qVO8fs5yAnRybXQHIlTEzzE3~eCQh6CxdDEWdD5TPw1gj9Nz-Nb3Qh9bk60vaeqiuvVuHyWTzhEHX95z4aSZT5-n2a9FVS90wDyQwxQfnwzkHP2ittDDX~cY8nKMToA__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ)
> The Backlinks view (fully expanded) is shown above with an example note 'eggs.md' open. You can see one link and 3 link candidates shown in the panel.


## Commands 

#### Change Sort Order
Change sort order of the backlinks:
* Lexigraphically: sorts the backlinks by the name of the note.
* By Update time: sorts the backlinks by descending update timestamp of the note (most recently updated notes first). 

Default: Lexigraphically. 

#### Expand All/Collapse all 
* Expand All: Expands all the backlinks in the backlink view.
* Collapse All: Collapses all the backlinks in the backlink view.

## Getting Started

You can focus on the Backlinks view by:
  - using the `Explorer: Focus on Backlinks View` command, or
  - clicking on the Explorer icon in the VS Code Activity Bar and navigating to the Backlinks view at the bottom.
  
<!-- #TODO -->
`Candidates` feature is currently disabled by default. In order to enable link candidates, add the following configuration in `dendron.yml`:

```yaml
dev:
  enableLinkCandidates: true
```

## Common components
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