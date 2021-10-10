---
id: e5st4LFLtIwwbQmC6JBaF
title: Quickstart
desc: ''
updated: 1633902773839
created: 1631033401707
---

## Summary 

This guide walks you through. 

- NOTE: if you are migrating from 11ty publishing, please read the [[migration guide|dendron://dendron.dendron-site/dendron.topic.publishing-next.migration]] for changes.

## Prerequisites
1. Install latest version of the [[dendron cli|dendron.topic.cli#installation]]
1. Install yarn (optional)
![[dendron.dev.setup.common#install-yarn,1:#*]]

## Process

### Setup
Run the following commands at the root of your dendron [[workspace|dendron.ref.workspace]]

![[dendron.topic.publishing-next.cook.common#setup-notes,1:#*]]

### Preview
1. Build and preview
    ```sh
    dendron publish dev
    ```
    
### Export

![[dendron.topic.publishing-next.cook.common#export-notes,1:#*]]

Congrats, you did it! At this point, you have a folder of static HTML which you can host and deploy anywhere. You can checkout our [[cookbook|dendron.topic.publishing-next.cook]] for examples of deploying to popular destinations like Github Pages.

