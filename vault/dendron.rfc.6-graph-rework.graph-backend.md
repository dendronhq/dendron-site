---
id: e53cb939-88f1-4892-9e8d-e98551923995
title: Graph Backend
desc: ''
updated: 1615404954316
created: 1615194010974
---

## Description

Improvement on how the Graph gets handled in the Backend/Engine of Dendron.

## Goals

1. Functionality
    1. Provide a way to quickly get the children of a Hierarchy.
    1. Provide a way to easily map a hierarchy level to a Schema Node.
    1. Provide a way to easily integrate it with different functionality of Dendron
1. Ease of extension
    1. The Backend integration should be extendable.
    1. It should provide ways to easily extend it.
    1. It should be easily understood by Contributors.
1. Integration with the existing Backend/Engine
    1. It should be useable as a replacement for the current Dendron backend structure.
    1. Unification to one way to handle the Data that dendron uses.

## Information's

### Data Structure / Database

- Data Structures
    - [Graphology](https://graphology.github.io/)
        >
        `graphology` is a specification and reference implementation for a robust & multipurpose JavaScript/TypeScript Graph object.
        It aims at supporting various kinds of graphs with the same unified interface.
        A `graphology` graph can therefore be directed, undirected or mixed and can be simple or support parallel edges. 
        Along with those specifications, one will also find a standard library full of graph theory algorithms and common utilities such as graph generators, layouts etc.
    - [gram.js](https://gram-data.github.io/gram-js)
        >
        Gram is a textual format for data graphs. Named values are packed into records, qualified with labels, given identity, and organized into expressive patterns. It’s JSON for data graphs!
- Graph Databases
    - [GunDB / Gun.js](https://gun.eco/)
        >
        GUN is a small, easy, and fast data sync and storage system that runs everywhere JavaScript does. The aim of GUN is to let you focus on the data that needs to be stored, loaded, and shared in your app without worrying about servers, network calls, databases, or tracking offline changes or concurrency conflicts.
    - [Neo4j](https://neo4j.com/) 
        Neo4j is a Full-featured Graph Database Platform

### Caching

- Only in the extension
- In a file that gets committed to the vault?

## Proposal

I would Personally recommend using Gun.js 