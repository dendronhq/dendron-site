---
id: ISzfxyqy6mZTakIshcekk
title: Dev
desc: ''
updated: 1636128470907
created: 1633299166158
---

## Build
- Build dendron monorepo by following steps here: [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart]]

## Run
1. Make sure you have a [[symlink|dendron://dendron.dendron-site/pkg.dendron-cli.dev#symlink]] to the [[pkg.dendron-cli]]
1. Use the pod commands inside the CLI to test out CLI changes
    - eg
    ```sh
    # use the NextJS Export Pod and pass in a custom configuration 
    dendron exportPod --podId dendron.nextjs --config "dest=/Users/kevinlin/code/dendron/packages/nextjs-template"
    ```
