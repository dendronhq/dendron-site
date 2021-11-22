---
id: e53cb939-88f1-4892-9e8d-e98551923995
title: Graph Backend
desc: ''
updated: 1619642183539
created: 1615194010974
---

## Description

Improvement on how the Graph gets handled in the Backend/Engine/Server of Dendron.

## Goals

1. Functionality
    - Provide a way to get the children of a Hierarchy quickly.
    - Provide a way to map a hierarchy level to a Schema Node easily.
    - Provide a way to integrate it with different functionality of Dendron easily
1. Ease of extension
    - The Backend integration should be extendable.
    - It should be easy to extend.
    - It should be easily understood by Contributors.
1. Integration with the existing Backend/Engine
    - It should be usable as a replacement for the current Dendron backend structure.
    - Unification to one way to handle the Data that Dendron uses.

### Data Structure / Database

-   Data Structures
    -   [Graphology](https://graphology.github.io/)
        > `graphology` is a specification and reference implementation for a robust & multipurpose JavaScript/TypeScript Graph object.
        > It aims at supporting various kinds of graphs with the same unified interface.
        > A `graphology` graph can therefore be directed, undirected or mixed and can be simple or support parallel edges.
        > Along with those specifications, one will also find a standard library full of graph theory algorithms and common utilities such as graph generators, layouts, etc.
    -   [gram.js](https://gram-data.github.io/gram-js)
        > Gram is a textual format for data graphs. Named values are packed into records, qualified with labels, given identity, and organized into expressive patterns. It’s JSON for data graphs!
-   Graph Databases
    -   [GunDB / Gun.js](https://gun.eco/)
        > GUN is a small, easy, and fast data sync and storage system that runs everywhere JavaScript does. The aim of GUN is to let you focus on the data that needs to be stored, loaded, and shared in your app without worrying about servers, network calls, databases, or tracking offline changes or concurrency conflicts.
    -   [Neo4j](https://neo4j.com/)
        > Neo4j is a Full-featured Graph Database Platform

### Caching

-   Only in the extension
-   In a file that gets committed to the vault?
    Type Json?

## Proposal

I would go with Gun.js as the Database Backend.

-   Pros:
    -   It runs everywhere
    -   It has different storage adapters.
    -   It is a DocumentDB.
    -   It is a GraphDB.
    -   It is OpenSource.
-   Cons:
    -   The Sourcecode is hard to read.
    -   The documentation is not excellent.

## Author

flammehawk:

-   [@Github](https://github.com/flammehawk)
-   @Discord fudo#1010
