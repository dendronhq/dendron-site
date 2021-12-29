---
id: 6e87249b-358f-4f4b-8049-dff6e6a8463b
title: Better Graph View – Design
desc: ''
updated: 1640425555933
created: 1621277234750
---

> This design document pertains to the Next.js/VS Code graph implementation. If you're looking for the GraphViz export pod, [[you can find its documentation here. | dendron.topic.pod.builtin.graphviz]]

## Summary

<!-- High level overview of solution -->

The goal of this graph redesign is to create a better-performing, filterable graph view useable by both a published Next.js site and within VS Code.

## Lookup

<!-- Research and similar projects -->

-   [Obsidian's Graph View](https://help.obsidian.md/Plugins/Graph+view)
-   [Foam's Graph View](https://github.com/foambubble/markdown-links)
    -   Also forked from `markdown-links`, so maybe not super useful

## Proposal

### Libraries

In the interest of balancing development speed and flexibility, the current recommendation is to use [Cytoscape.js](https://js.cytoscape.org/) for rendering and graph structuring. This is for a couple of reasons:

-   Fully-featured network/graph structuring and rendering
-   Robust graph manipulation and filtering
-   Functions as both rendering and graph structuring library
-   Straightforward documentation
-   Battle-tested: used in production by both companies and researchers
-   Future-proof: option to run in headless mode
    -   Option to use custom rendering logic if needed while still maintaining graph structure and filtering already implemented

Here is the [[list of all libraries researched.|dendron.rfc.7-graph-rework.library-research]]

### Implementation

#### Graph Structure

One of the benefits of going with a Next.js-centered approach is we get all the benefits of React and global state. Since notes will be loaded into the global Redux store already, querying them and creating the graph structure should be fairly straightforward.

#### Styling

Styling in Cytoscape is done through a style object, which is a CSS-like style array. There are two clear options for styling: either a dedicated CSS stylesheet or a config file with various options. Since the Cytoscape styling method is slightly abstracted from direct CSS, it may be easier to use a config file and lightly parse it into a useable form.

#### Performance

One of the biggest issues with visualization libraries is performance. While adding many nodes and edges to a graph can degrad`e performance, Cytoscape contains [a number of optimization options](https://js.cytoscape.org/#performance/optimisations) to scale large, complex graphs.

Performance is determined primarily by the layout algorithm used. The current implementation will use the [cytoscape.js-euler](https://github.com/cytoscape/cytoscape.js-euler) layout, as it is able to display a graph with thousands of nodes and edges in an understandable format.

#### Accessibility

##### Keyboard Navigation

Basic keyboard navigation will be implemented for the new graph view. This will include navigating up and down between hierarchies, cycling between child nodes, and opening notes. Cytoscape offers [a number of events](https://js.cytoscape.org/#events) that can be listened to, making it fairly straightforward to create robust keyboard-driven navigation.

##### Other Notes

Making a graph truly accessible is a difficult task. Most visualization libraries (including those researched) say virtually nothing about accessibility. While a tradeoff of creating a rich graph may be accessibility, some of the [canvas accessibility ideas shared by Mozilla](https://web.archive.org/web/20210512193630/https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility) creating possibilities for creating a more accessible graph display.

---

## Tasks

<!-- Tasks that need to be done -->

### Stage 1: Replacing Markdown Links

Create a more or less 1 to 1 drop in replacement for `markdown-links`, accessible at `/graph` in the Next.js app

-   [ ] Create graph structure in Cytoscape out of Redux-stored notes
-   [ ] Initialize graph, layout nodes
-   [ ] Display graph
-   [ ] Embedding capability in VS Code

After this initial integration, work will be done on:

-   [ ] Keyboard navigation/accessibility

### Stage 2: Core Features

-   [ ] Filtering
-   [ ] Styling
    -   [ ] Coloring based on schema/hierarchy/etc.?

### Stage 3: Secondary Features

-   [ ] Local graph view
    -   Display on individual note pages, much like Obsidian
-   [ ] Multi-vault graph view
    -   Likely most useful for VS Code
