---
id: SuyIgH44sJD5P3dRVBaVZ
title: Quickstart
desc: ''
updated: 1636216833525
created: 1635701411866
---


## Prerequisites

1. Finish steps from [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart]]
1. Launch [[Test Workspace|dendron://dendron.dendron-site/dendron.dev.ref.test-workspace]]

## Steps

- NOTE: unlike all other packages in the monorepo, running the watch script [^watch] will not compile code inside this pacakge

### Developing with Browser

1. Navigate to package
    ```sh
    cd packages/dendron-plugin-views
    ```
1. Run 
    ```sh
    yarn start
    ```
    This will open up the browser at localhost:3000. When developing on the browser, Dendron will have some defaults loaded depending on what view you are using. 
1. When developing against the browser, you don't have direct access to the workspace. Instead, you'll need to use `window.postMessage` api to simulate vscode actions.
    To do this, open up the developer console and simulate events by pasting the following event:
    ```js
    id = "9eae08fb-5e3f-4a7e-a989-3f206825d490";
    window.postMessage({
        type: "onDidChangeActiveTextEditor",
        data: {note:{id}},
        source: "vscode",
    });
    ```

### Developing with VSCode
1. After you have made code changes, build in dev mode
    ```sh
    yarn build:dev
    ```

[^watch]: [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart#^QWJj9cTIcwuX]]