---
id: CBX7ebh0upBfoeC2
title: Remote
desc: ''
updated: 1627140223136
created: 1627140205966
---

## Summary

This goes over testing dendron with the  `Remote - SSH` extension.

### Test:Unit

Make sure you have the following `launch.json` settings

```json
    {
      "name": "Extension Integ Tests - File",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test/suite-integ/index",
      ],
      "env": {
        "STAGE": "test",
        "TEST_TO_RUN": "${fileBasenameNoExtension}"
      },
      "outFiles": ["${workspaceFolder}/out/test/**/*.js"]
    }
```
