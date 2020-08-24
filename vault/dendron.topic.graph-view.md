---
id: 587e6d62-3c5b-49b0-aedc-02f62f0448e6
title: Graph View
desc: ''
updated: 1595120707814
created: 1595120707814
custom: {}
---

#  Graph View

Dendron provides support for graph view using a fork of the [markdown-links](https://marketplace.visualstudio.com/items?itemName=tchayen.markdown-links) extension. 

The Dendron graph view is generated using our hierarichal index. It also shows different relationships than most of the graph views you're probably used to.

Instead of showing edges as links between nodes, Dendron edges are the hierarichal relationships between your notes. Think of it as a 20,000 foot view of the structure of your knowledge base. 

Note that this command is not optimized for performance and you might notice slowdowns if you have more than a few hundred notes. If you are running into performance issues, please upvote this [issue](https://github.com/dendronhq/dendron/issues/107) to prioritize the performacne work!

## Commands

### Dendron: Show Note Graph

Show your note hierarchies visually in a graph.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/graph.show-notes.gif)


### Dendron: Show Schema Graph

Show your note schemas visually in a graph. Schemas will be labelled by their `title` attribute. If `title` is not set, default to its `id`.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/graphs.show-schema.gif)

### Dendron: Reload Graphs

Reload all graphs. Use this when you update a schema or add/remove files from within your workspace. 

- NOTE: This command acts over all **open** graph panels. If you have closed a panel, you must re-open it for Dendron to reload it

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/graphs.reload.gif)