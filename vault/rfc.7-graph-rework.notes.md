---
id: 46fba044-81d8-4c07-a12c-78bbbf7952b4
title: Graph Rework - Notes
desc: ''
updated: 1619642502573
created: 1618136427656
---

## Description

THis part of RFC is meant to define how a note gets represented in the Graph.

## Options

1. As is:
   A note is just represented as a Node in the graph.
1. A note extends the graph with its headings as children hierarchies of its hierarchy level.
1. Every block inside a note becomes a hierarchy level being hidden by default,
   except the Headings. As soon as a block gets linked to by another note it gets shown in the graph.
    - How do the blocks get titled in the graph?

## Proposal

In my opinion we should go with Option 2 and then extend it to Option 3 later.
By doing this we can extend the schemas to handle the Hierarchies of the Notes as well.

## Author

flammehawk:

-   [@Github](https://github.com/flammehawk)
-   @Discord fudo#1010
