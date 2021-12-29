---
id: RxnYiCjR7BQajXrpTqhDQ
title: Publish
desc: ''
updated: 1640428777083
created: 1633392768530
---

## Summary

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#summary,1:#*]]

## Features

### Idempotency
![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#idempotency,1:#*]]

## Requirements
![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#requirements,1:#*]]

## Side Effects
![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.common#side-effects,1:#*]]

## Configuration

![[dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.common#configuration,1:#object-value]]

## Quickstart

1. Create an Airtable table with fields (all fields are text fields)

    | DendronId | Title | Summary |
    | --------- | ----- | ------- |

2. Run [[Configure Pod|dendron://dendron.dendron-site/dendron.ref.commands#configure-pod]], select `airtable.publish`, and add the following configuration
    ```yml
    dest: workspace # eg. appGB8ES***
    tableName: Novels
    apiKey: ***
    baseID: ***
    srcFieldMapping: {DendronId: id, Title : title, Summary: body}
    ```
3. Create the following notes in your vault
    ```
    └── vault
        └── books.alchemist.md
    ```
4. Run [[Publish Pod|dendron://dendron.dendron-site/dendron.ref.commands#publish-pod]] and select `airtable.publish`. You should get the following results on Airtable

    | DendronId     | Title       | Summary                                                                                                                                                                                          |
    | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | 07736d97-d45b | Alchemist   | The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning |



