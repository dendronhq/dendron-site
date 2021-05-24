---
id: 6293d9dc-9bd3-4b01-8428-34d8256f0a32
title: Dev
desc: |
  Development related
updated: 1621630200658
created: 1621630111186
---
## Development

You can test the Dendron Next App by launching a workspace using the CLI and then connecting to it. 

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
   WORKSPACE=/packages/dendron-11ty/fixtures/test-workspace
   cd $WORKSPACE
   env LOG_LEVEL=info dendron launchEngineServer --init --port $PORT
   ```
3. Connect to the workspace (replace WORKSPACE and PORT with your own values)
   ```
   # for example, if you launched the engine at /user/adam/workspace, WORKSPACE should equal /user/adam/workspace
   http://localhost:3000/vscode/sample?ws=$WORKSPACE&port=$PORT
   ```

## Static Build

When your ready to ship a UI related feature, export the static assets. 

```
yarn build
```

Afterwards, update `dendron.yml` in your test workspace

```yml
dev:
  # use CLI based engine instead of creating a new one
  engineServerPort: 3005
  # replace ROOT with absolute location of your workspace 
  nextStaticRoot: /{ROOT}/packages/dendron-next-server
```

You should see the following line in the logs

## Remote

Follow the same instructions to run Dendron remotely. If you are using VSCode, use the port forwarding features to forward the ports of both engineServer and the next-server.

## Cook

### Send a message

Passing messags to the webview

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

