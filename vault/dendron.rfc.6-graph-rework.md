---
id: c998c642-a748-4f77-9285-cfec35330251
title: 6 Graph Improvements
desc: Improvement Proposal For the Graph
updated: 1615133298617
created: 1615106291022
---

## Description

This RFC contains Multiple Proposals on how to improve the Graph handling of Dendron.

## Goals

- Functional improvment of the Graph
  - View
  - Filtering
  - Coloring
  - Embedding
- Performance Improvements
- Connection between Graph's
  - Multi-Vault
  - Other publisched Garden's and their Graph's see [[RFC 5|dendron.rfc.5-publishing-registry]]
- [[What role play the Schemas in the Graph|dendron.rfc.6-graph-rework.schemas]]

## Tenants

- Ownership of the Graph
- Functionality
- Performance
- Entrypoint to a Decentralised Graph
- Connectability

## Use Cases

- Graph View improvements
- Connection of Graphs
- Verification of Graphs against Schemas

## Proposal

1. Graph backend
    1. I would propose the implementation of some form of Graph Data Structure Library or Database to Improve how the Graph gets handled
        - Graphology
        - gram.js
        - GunDB / Gun.js
        - Neo4j
    1. Caching of the Graph
        - Only in the extension
        - In a file that gets commited to the vaul?
2. Graph rendering
    1. What customization Options are wanted/needed
        - Coloring
        - Highlighting
        - Hiding
    1. What types of Filters
        - Hireacial Structure
        - Schema
        - Tags
        - Links
        - Location
        - Text
    1. What Interactions do we want?
        - Just clicking on Nodes
        - The ability to move Nodes from One Hierarcy to another?
        - Creating a Schema from Selected Nodes?
3. How are the Graphs embedded
    - Code Blocks?
        - rendering of gram.js format?
    - Generate SVGs to embedd them?
    - Embedd as IMG
        - after exporting from Graph View
    - Referencing a filter so that the Graph updates?

## Comments

## Author

flammehawk:

- [@Github](https://github.com/flammehawk)
- @Discord fudo#1010
