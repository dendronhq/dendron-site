---
id: zIBErZ8tT7oU6nm0JESFc
title: Export
desc: ''
updated: 1640428757015
created: 1623502889261
---


## Summary

Transfer contents of Dendron to a table on [Airtable](https://airtable.com/)

## Features

### Checkpointing

The pod maintains a checkpointing file to keep track of the latest file that has been successfully exported to Airtable.

### Idempotency

This pod will check if a note has already been exported and not duplicate already exported notes

## Requirements
![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.common#requirements,1:#*]]

## Side Effects
![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.common#side-effects,1:#*]]

## Configuration

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.common#configuration,1:#object-value]]

### srcHierarchy  
The src .md file from where to start the sync

### noCheckpointing
hen enabled, disables [[#checkpointing]]


## Quickstart

1. Create an Airtable table with fields (all fields are text fields)

    | DendronId | Title | Summary |
    | --------- | ----- | ------- |

2. Run [[Configure Pod|dendron://dendron.dendron-site/dendron.ref.commands#configure-pod]], select `airtable.export`, and add the following configuration
    ```yml
    dest: workspace # eg. appGB8ES***
    tableName: Novels
    srcHierarchy: books
    apiKey: ***
    baseID: ***
    srcFieldMapping: {DendronId: id, Title : title, Summary: body}
    ```
3. Create the following notes in your vault
    ```
    └── vault
        ├── books.harrypotter.md
        └── books.alchemist.md
    ```
4. Run [[Export Pod|dendron://dendron.dendron-site/dendron.ref.commands#export-pod]] and select `airtable.export`. You should get the following results on Airtable

    | DendronId     | Title       | Summary                                                                                                                                                                                          |
    | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | 04236d97-d45b | Harrypotter | Harry Potter, a boy who lives in the fictional town of Little Whinging, Surrey with his aunt, uncle, and cousin                                                                                  |
    | 07736d97-d45b | Alchemist   | The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning |



    
