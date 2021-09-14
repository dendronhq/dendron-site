---
id: dtMsF12SF2SUhLN10sYe2
title: Test Workspace
desc: ''
updated: 1631472153825
created: 1631471672541
---

If you want to use a workspace to test changes on the workspace at `$REPO_ROOT/test-workspace`

Note that this workspace is currently configured to be used with launching a engine server from the command line. 

## Setup
1. Launch workspace
    ```sh
    cd $REPO_ROOT
    ./scripts/dev.sh
    ```
2. Connect to workspace 
![[pkg.dendron-plugin.qa.debug#launch,1:#*]]

3. Run [[Change Workspace|dendron.topic.commands#change-workspace]] and change into `$REPO_ROOT/test-workspace`


## Cook

### Use with regular workspace
Remove the following lines in `dendron.yml` to launch it without the CLI engine server

```yml
dev:
    nextServerUrl: 'http://localhost:3000'
    engineServerPort: 3005
```