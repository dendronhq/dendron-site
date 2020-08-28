---
id: b239c77e-52f2-4cc3-8390-69e0bc776a72
title: Debugging
desc: ''
updated: 1598653859135
created: 1598653859135
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