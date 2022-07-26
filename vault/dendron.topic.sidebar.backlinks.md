---
id: yxkn87ohgomk0tgs12dppur
title: Backlinks Panel
desc: ''
updated: 1658768467592
created: 1653410188509
---

## Summary

The backlinks panel shows you all [[backlinks|dendron.topic.links#backlinks]] to the current note.

![[dendron://dendron.dendron-site/asset.preview#backlinks-dark,1:#*]]

## Features

### Hovers

![Backlinks Panel with Hover](https://org-dendron-public-assets.s3.amazonaws.com/images/vscode-hover-in-backlinks-panel.gif)
> The Backlinks view (fully expanded) is shown above with an example note `dendron.ref.links` open. You can see 1 link and 1 link candidate shown in the panel.

### Explicit and Candidate Backlinks

Dendron supports both explicit (wiklilinks, note refs) and candidate backlinks.
 
A note has a candidate backlink if a different note has the name of the current note appear anywhere in its text. For example, if your current note is named `apple`, and in a different note called `recipes`, the word `apple` appears in the note body but is not explicitly linked, then `recipes` is said to have a link candidate to the `apple` note.

This feature is currently disabled by default. In order to enable link candidates, add the following configuration in `dendron.yml`:

```yaml
dev:
  enableLinkCandidates: true
```

There is an icon next to each reference to indicate what kind of backlink it is. Explicit links have a link/chain icon. Candidates have the double plug / unplugged icon. See the sections below for more information on each item.

If you click on an item anywhere other than the arrow, it will open that note in your editor. Furthermore, clicking on a link candidate item will open the note that contains the candidate, and convert the link candidate into a wikilink, turning it into `Linked` backlink.

### Hover Context

You can hover over a backlink to see more context in the source note. The reference text will be highlighted. To make hover more responsive, we suggest modifying the following VSCode setting, which will make the hover appear sooner after you place your cursor on the link.  300 ms is a good setting for this feature, the default in VSCode is 1500 ms.

```yaml
"workbench.hover.delay": 300
```

## Getting Started

You can focus on the Backlinks view by:
  - clicking on the Dendron icon in the VS Code Activity Bar and navigating to the Backlinks panel.
  - using the `Explorer: Focus on Backlinks View` command

### Options 

#### Change Sort Order
Change sort order of the backlinks:
* By Update time: sorts the backlinks by descending update timestamp of the note (most recently updated notes first). 
* Lexigraphically: sorts the backlinks by the name of the note.

Default: By Update Time.

#### Expand All/Collapse all 
* Expand All: Expands all the backlinks in the backlink view.
* Collapse All: Collapses all the backlinks in the backlink view.