---
id: 9aa25182-4f40-45ce-b94c-f9eaf7a9a073
title: Quickstart
desc: |
  Getting started with the project
updated: 1628151492105
created: 1621201571965
---


## Instructions
1. Follow instructions [[here|pkg.plugin-core.quickstart]] to clone the repository and install dependencies
1. NOTE: we made some significant changes to this project. If you have a local copy of the repo checked out before 2021.05.16, please follow the instructions about pulling after a [[new packages|pkg.plugin-core.quickstart#new-packages]] has been updated.
1. navigate to server package
   ```bash
   cd {repo-root}/packages/dendron-next-server
   ```
1. If this is your first time running this, you need to generate the style files
  ```
  yarn gen:theme
  ```
1. start server
   ```bash
   yarn dev
   ```

## Development 

![[dendron://dendron.dendron-site/pkg.dendron-next-server.dev#development,1:#*]]

## Static Build
the goal isn't to transform these links to localhost
![[dendron://dendron.dendron-site/pkg.dendron-next-server.dev#static-build,1:#*]]

## Tools
When working with the webapp, download the following extensions
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) (Chrome): inspect redux state
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) (Chrome): inspect react state

## Lookup
Its useful to get familiar with the following technologies when working with the webapp:
- NextJS
- React
- Redux
- AntD

### Related
- [[Test Workspace|dendron.dev.qa#test-workspace]]
