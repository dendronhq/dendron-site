---
id: 832a6e4d-4ed9-414f-baa8-d2f20432c934
title: Dev
desc: ''
updated: 1636128346988
created: 1609350672493
---


## Build
- Build dendron monorepo by following steps here: [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart]]

## Run
1. [[Symlink|#symlink]] the dendron-cli from the monorepo 

That's it. Now any changes you make will be immediately accessible when running the `dendron` cli


## Reference

### Symlink
Symlinking `dendron-cli` lets you use the current version of dendron from anywhere inside the CLI

1. Run npm link
    ```sh
    cd packages/dendron-cli
    npm link
    ```
1. Verify
    ```sh
    # output should match the current version inside `dendron/lerna.json`
    dendron --version
    ```
