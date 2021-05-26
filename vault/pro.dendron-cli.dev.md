---
id: 832a6e4d-4ed9-414f-baa8-d2f20432c934
title: Dev
desc: ''
updated: 1621994598072
created: 1609350672493
---


## Symlink
Symlinking `dendron-cli` lets you use the current version of dendron from anywhere inside the CLI

```
cd packages/dendron-cli
npm link
```

## Issues

### Unexpected Token
  name: 'EleventyConfigError',
  originalError:
   /codebuild/output/src896656404/src/staging/node_modules/@dendronhq/dendron-11ty/libs/utils.js:68
     static getUrl = (note) => {
   SyntaxError: Unexpected token =
