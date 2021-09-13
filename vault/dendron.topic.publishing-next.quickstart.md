---
id: e5st4LFLtIwwbQmC6JBaF
title: Quickstart
desc: ''
updated: 1631296679286
created: 1631033401707
---

## Prerequisites
1. Install latest version of [[dendron.topic.cli#installation]]
1. Install yarn (optional)
![[dendron.dev.setup.common#install-yarn,1:#*]]

## Gotchas
- Dendron Next publishing uses pretty urls which means pages will no longer have a `.html` suffix. If you are migrating an existing 11ty based Dendron site to Next, make sure to redirect `.html` pages to preserve existing links

## Process

### Setup
Run the following commands at the root of your dendron [[workspace|dendron.ref.workspace]]

![[dendron.topic.publishing-next.cook.common#setup-notes,1]]

### Preview
1. Build note metadata
    ```sh
    dendron publish build
    ```
1. Preview changes
    ```sh
    cd .next && npm run dev
    ```
### Export

![[dendron.topic.publishing-next.cook.common#export-notes,1:#*]]

<!-- ## Manual Process

Under the hood, Dendron Next Publishing is just NextJs with some defaults. Instead of using `dendron publish init`, you can also manually pull down the repository by running the following command in your workspace.

### Initializing nextjs
```
git clone https://github.com/dendronhq/nextjs-template.git .next
```
 -->
