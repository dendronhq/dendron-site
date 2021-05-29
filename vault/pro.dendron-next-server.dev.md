---
id: 6293d9dc-9bd3-4b01-8428-34d8256f0a32
title: Dev
desc: |
  Development related
updated: 1622132225281
created: 1621630111186
---

## Development


### Pre-req
- [[Symlink|pro.dendron-cli.dev#symlink]] `dendron-cli`
- [[Setup|dendron.dev.setup]] `plugin-core`

### Steps

You can test the Dendron Next App by launching a workspace using the CLI and then connecting to it. We recommend using the workspace in `dendron/test-workspace` which is alreayd pre-configured to use a local nextjs setup (you can skip step 1 if you are doing this


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

Next Steps:
- read the [[architecture|pro.dendron-next-server.arch]] documents to understand how the next server fits in with other Dendron plugins and how to build on top of it

## Remote Development

Follow the same instructions to run Dendron remotely. If you are using VSCode, use the port forwarding features to forward the ports of both engineServer and the next-server.

## Issues

### Conflicting Views
- if you have conflicting views warning when debugging, its most likely because you've installed Dendron in the same version of VSCode that you are developing on. We highly recommend you keep two instances of VSCode and not install Dendron on the version you use for development

## Cook

The following recipes can be helpful when working on the web ui

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