---
id: dtMsF12SF2SUhLN10sYe2
title: Test Workspace
desc: ''
updated: 1637194974228
created: 1631471672541
---

If you want to use a workspace to test changes on the workspace at `$DENDRON_REPO_ROOT/test-workspace`

Note that this workspace is currently configured to be used with launching a engine server from the command line. 

## Pre-requisites
- [[Symlink the dendron cli|dendron://dendron.docs/pkg.dendron-cli.dev#symlink]]

## Setup

1. Launch engine server
    ```sh
    cd $DENDRON_REPO_ROOT/test-workspace && ./scripts/dev.sh
    ```
1. In a separate terminal, start the Next Server
  ```sh
  cd $DENDRON_REPO_ROOT/packages/dendron-next-server && yarn dev
  ```
1. Connect to workspace 
![[pkg.plugin-core.qa.debug#launch,1:#*]]

1. Run [[Change Workspace|dendron.ref.commands#change-workspace]] and change into `$DENDRON_REPO_ROOT/test-workspace`


## Cook

### Use with regular workspace
Comment the following lines in `test-workspace/dendron.yml` to launch it without the CLI engine server

```yml
dev:
    # nextServerUrl: 'http://localhost:3000'
    # engineServerPort: 3005
```
