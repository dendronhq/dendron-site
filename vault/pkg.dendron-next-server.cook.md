---
id: 1698aef0-efd4-4c92-a3b0-5ca702b228a3
title: Cook
desc: ''
updated: 1630792959399
created: 1621376746723
---


### Updating the theme

1. Modify the theme values in `dendron-next-server/assets/themes/*`
1. Run `yarn gen:theme`
1. To preview you theme, start the server and navigate to `/vscode/sample` 

- Instructions for updating the theme were originally obtained from [this guide](https://dev.to/joserfelix/dynamic-theme-switching-in-ant-design-how-to-change-between-light-and-dark-themes-5b8p)

### Integrating a view with the plugin
- see [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/ConfigureWithUI.ts#L22:L22) for integrating a command with the web ui

### Integrating a tree view with the plugin
- see [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/views/DendronTreeViewV2.ts) for an example


### Adding a VSCode Webview
- webview naming should follow kebab case
```ts
// good
tree-view.tsx

//bad
treeView.tsx
```


### Send a message

Passing messages to the webview

```js
msg = {
    "type": "onDidChangeActiveTextEditor",
    "data": {
        "note": {
            "id": "70486100-ab5e-434e-bbb7-af8543c66241",
            "title": "One",
            "vault": {
                "fsPath": "vault"
            },
            "type": "note",
            "desc": "",
            "links": [],
            "fname": "bond.one",
            "updated": 1621464283051,
            "created": 1621464283051,
            "parent": "b458d57f-dd08-4d2e-bda1-cdb883f40bf3",
            "children": [],
            "data": {},
            "custom": {},
            "body": "\n"
        },
        "sync": true
    },
    "source": "vscode"
};
window.postMessage(msg, "*");
```

### Find a specific view

- see [[Overflow|scratch.2021.05.21.121558.scrollbar]]

Look for the following html in the webview debugger.

```html
<div id="webview-webviewview-dendron-tree-view" data-keybinding-context="30" style="visibility: visible; position: absolute; overflow: hidden; top: 405px; left: 48px; width: 305px; height: 353px;"><iframe class="webview ready" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads" allow="clipboard-read; clipboard-write;" src="vscode-webview://webviewview-dendron-tree-view/index.html?id=webviewview-dendron-tree-view&amp;extensionId=&amp;purpose=undefined&amp;serviceWorkerFetchIgnoreSubdomain=undefined&amp;platform=electron&amp;vscode-resource-origin=https%3A%2F%2Fwebviewview-dendron-tree-view.vscode-webview-test.com" style="border: none; width: 100%; height: 100%;"></iframe></div>
```

### Using a custom workspace

1. Modify the `dendron.yml` of the workspace you want to use
   ```yml
   dev:
     # use CLI based engine instead of creating a new one
     engineServerPort: 3005
     # for UI components, proxy to next server instead of creating our own
     nextServerUrl: http://localhost:3000
   ```
2. Launch the workspace
   ```sh
   # engine port
   PORT=3005
   # absolute path to your workspace root
   WORKSPACE={path/to/workspace}
   cd $WORKSPACE
   env LOG_LEVEL=info dendron launchEngineServer --init --port $PORT
   ```
3. Connect to the workspace (replace WORKSPACE and PORT with your own values)
   ```
   # for example, if you launched the engine at /user/adam/workspace, WORKSPACE should equal /user/adam/workspace
   http://localhost:3000/vscode/sample?ws=$WORKSPACE&port=$PORT
   ```

### Use Redux Dev Tools

The developer tools inside VSCode is limited. If you want to use all the power of chrome when debugging, you'll want to visit the webview using chrome.

See [[instructions|pkg.dendron-next-server.dev#^MgEdJdyD]] for connecting to a workspace using the browser


### Passing Query Parameters

- [generating query params](https://github.com/dendronhq/dendron/blob/master/packages/dendron-next-server/pages/vscode/note-preview.tsx)
- [Consuming query params in the view](https://github.com/dendronhq/dendron/blob/master/packages/dendron-next-server/pages/vscode/note-preview.tsx)