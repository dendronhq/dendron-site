---
id: c998c642-a748-4f77-9285-cfec35330251
title: 7 Graph Rework
desc: Improvement Proposal For the Graph
updated: 1621614459260
created: 1615106291022
---

## Description

This RFC contains Multiple Proposals on how to improve the Graph handling of Dendron.

## Goals

-   Functional improvements of the Graph
    -   View
    -   Filtering
    -   Coloring
    -   Embedding
-   Performance Improvements
-   Connection between Graph's
    -   Multi-Vault
    -   Other published Gardens and their Graph's see [[RFC 5|rfc.5-publishing-registry]]
-   Clarify what is part of the Graph.

## Questions

-   What does the Graph represent?
-   [[Hierarchies and the Graph|rfc.7-graph-rework.hierarchy]]bet
-   [[How are Notes represented in the Graph|rfc.7-graph-rework.notes]]
-   [[What role do Schemas play in the Graph|rfc.7-graph-rework.schemas]]

## Tenets

-   Ownership of the Graph
-   Functionality
-   Performance
-   Entry point to a Decentralized Graph
-   Connectivity

## Use Cases

-   Graph View improvements
-   Connection of Graphs
-   Verification of Graphs against Schemas

## Proposal

1. [[Graph backend|rfc.7-graph-rework.graph-backend]]
    1. I would propose the implementation of some form of Graph Data Structure Library or Database to Improve how the Graph gets handled
        - Graphology
        - gram.js
        - GunDB / Gun.js
        - Neo4j
    2. Caching of the Graph
        - Only in the extension
        - In a file that gets committed to the vault?
2. [[Graph rendering|rfc.7-graph-rework.graph-rendering]]
    1. What customization Options are wanted/needed
        - Coloring
        - Highlighting
        - Hiding
    2. What types of Filters
        - Hierarchical Structure
        - Schema
        - Tags
        - Links
        - Location
        - Text
    3. What Interactions do we want?
        - Just clicking on Nodes
        - The ability to move Nodes from One Hierarchy to another?
        - Creating a Schema from Selected Nodes?
3. [[How are the Graphs embedded|rfc.7-graph-rework.graph-embedding]]
    - Code Blocks?
        - rendering of gram.js format?
    - Generate SVGs to embed them?
    - Embed as IMG
        - after exporting from Graph View
    - Referencing a filter so that the Graph updates?

## Comments

To comment on this Request for comment, feel free to either submit a pull request for changes to it or commenting on Pull requests for this RFC.
Additionally, you can comment on the corresponding [discussion](https://github.com/dendronhq/dendron/discussions/615).

## Author

flammehawk:

-   [@Github](https://github.com/flammehawk)
-   @Discord fudo#1010
