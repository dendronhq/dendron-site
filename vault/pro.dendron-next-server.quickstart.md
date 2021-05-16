---
id: 9aa25182-4f40-45ce-b94c-f9eaf7a9a073
title: Quickstart
desc: |
  Getting started with the project
updated: 1621202400106
created: 1621201571965
---


## Instructions
1. Follow instructions [[here|dendron.dev.setup]] to clone the repository and install dependencies
1. NOTE: we made some significant changes to this project. If you have a local copy of the repo checked out before 2021.05.16, please follow the instructions about pulling after a [[new packages|dendron.dev.setup#new-packages]] has been updated.
1. navigate to server package
   ```bash
   cd {repo-root}/packages/dendron-next-server
   ```
1. start server
   ```bash
   yarn dev
   ```

## Development

You can test the Dendron Next App by launching a workspace using the CLI and then connecting to it. 

1. Launch a workspace
  ```sh
  # engine port
  PORT=3005
  # your workspace root
  # you can test it aga
  WORKSPACE=packages/dendron-11ty/fixtures/test-workspace
  cd $WORKSPACE
  env LOG_LEVEL=info dendron launchEngineServer --init --port $PORT
  ```
1. Connect to the workspace (replace WORKSPACE and PORT with your own values)
  ```
  http://localhost:3000/vscode/sample?ws=$WORKSPACE&port=$PORT
  ```

## Tools
When working with the webapp, download the following extensions
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) (Chrome): inspect redux state
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) (Chrome): inspect reac tstate

## Lookup
Its useful to get familiar with the following technologies when working with the webapp:
- NextJS
- React
- Redux
- AntD

### Related
- [[Test Workspace|dendron.dev.qa#test-workspace]]