---
id: SuyIgH44sJD5P3dRVBaVZ
title: Quickstart
desc: ''
updated: 1637558458474
created: 1635701411866
---


## Prerequisites

1. Finish steps from [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart]]
1. Launch [[Test Workspace|dendron://dendron.dendron-site/dendron.dev.ref.test-workspace]]

## Steps

- NOTE: unlike all other packages in the monorepo, running the watch script [^watch] will not compile code inside this pacakge

When working on plugin views, there are two modes of development: browser and IDE.

### Developing in Browser Mode

![[dendron://dendron.dendron-site/pkg.dendron-plugin-views.concepts#^FIQf5ZoJXIBP:#*]]

1. Make sure that [[dendron.dev.ref.test-workspace]] is running on port `3005`
1. Navigate to package
    ```sh
    cd $DENDRON_REPO_ROOT/packages/dendron-plugin-views
    ```
1. Run 
    ```sh
    # this builds stylesheets 
    yarn setup
    yarn start
    ```
    This will open up the browser at localhost:3000. When developing on the browser, Dendron will have some defaults loaded depending on what view you are using. 
1. When developing against the browser, you don't have direct access to the workspace. Instead, you'll need to use `window.postMessage` api to simulate vscode actions.
    To do this, open up the developer console (inside browser) and simulate events by pasting the following event:
    ```js
    id = "9eae08fb-5e3f-4a7e-a989-3f206825d490";
    window.postMessage({
        type: "onDidChangeActiveTextEditor",
        data: {note:{id}},
        source: "vscode",
    });
    ```
    You can change the id to any id inside of [[dendron.dev.ref.test-workspace]] to see how different views function

- TIP: to set the theme in browser mode, you can run `env THEME={dark|light} yarn start`

### Developing in IDE Mode

![[dendron://dendron.dendron-site/pkg.dendron-plugin-views.arch#^FIQf5ZoJXIBP:#*]]

1. After you have made code changes, export all assets by running 
    ```sh
    yarn build:dev
    ```
1. After assets are compiled, follow the [[Run|dendron://dendron.dendron-site/pkg.plugin-core.dev#run]] extension for [[pkg.plugin-core]]

[^watch]: [[Dendron Plugin Quickstart|dendron://dendron.dendron-site/pkg.plugin-core.quickstart#^QWJj9cTIcwuX]]