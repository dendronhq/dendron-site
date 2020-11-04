---
id: b239c77e-52f2-4cc3-8390-69e0bc776a72
title: Debugging
desc: ''
updated: 1603252409966
created: 1598653859135
stub: false
---

# Debugging

## Plugin
- run extension
  - launch the `Run Extnesion` build task (copied below for reference)

```json
    {
      "name": "Run Extension",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}"
      ],
      "outFiles": [
        "${workspaceFolder}/out/**/*.js"
      ],
      "env": {
        "STAGE": "dev",
        "VSCODE_DEBUGGING_EXTENSION": "dendron"
      }
    },
```

### Breakpoints

Note that we currently have trouble setting breakpoints inside non-plugin code. That goes for the packages that Dendron depends on (eg. @dendronhq/common-all). The current workaround is to manually add a `debugger;` statement inside the code. The extension will hit it when restarted under the debugger.


## Server

Normally, Dendron will launch an express server at a random port. To debug the server: 

1. Launch the server using the build task `api-server:test launch server`
2. Update the workspace settings of Dendron to use a running server through the following workspace setting `dendron.serverPort": 3005`
3. Reload the workspace for the settings to take affect
