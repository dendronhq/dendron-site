---
id: e5st4LFLtIwwbQmC6JBaF
title: Quickstart
desc: ''
updated: 1640726064785
created: 1631033401707
---

## Summary 

This guide walks you through publishing with Next.js. 

<!-- - NOTE: if you are migrating from 11ty publishing, please read the [[migration guide|dendron://dendron.dendron-site/dendron.topic.publish.migration]] for changes. -->

## Prerequisites
1. Install the latest version of the [[Dendron CLI|dendron://dendron.dendron-site/dendron.ref.cli]]

1. Install yarn (optional)

- NOTE: we use yarn to manage all our js commands. npm works as well if you'd rather use it instead. All code examples will use `yarn`

```sh
npm install -g yarn
```

## Steps

### Setup
Run the following commands at the root of your Dendron [[workspace|dendron.topic.workspace]]

![[dendron.topic.publish.cook.common#setup-notes,1:#*]]

### Preview
1. Build and preview
    ```sh
    npx dendron publish dev
    ```
### Export

![[dendron.topic.publish.cook.common#export-notes,1:#*]]

Congrats, you did it! At this point, you have a folder of static HTML which you can host and deploy anywhere. You can checkout our [[cookbook|dendron.topic.publish.cook]] for examples of deploying to popular destinations like GitHub Pages.
