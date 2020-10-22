---
id: 6322a2de-34fd-4c93-bcbe-d71c30e5f2b6
title: Custom
desc: ''
updated: 1603309437113
created: 1603308868151
---
# Custom Pods
- STATUS: DRAFT
-  NOTE: this documentation is for future functionality. It is not currently implemented. Progress can be tracked in this [issue](https://github.com/dendronhq/dendron/issues/286).

Custom pods can be developed by anyone as a `NodeJS` package and used after a user installs it in their workspace. They can be used with either the `dendron-cli` or from within the Dendron extension to import/export/publish your notes from/to anywhere

## Quickstart

Run the following inside your Dendron workspace.

### Install a Pod
```sh
npm install -g dendron-cli
npm init
npm install --save {dendron-pod-package}
```

### Execute a Pod (CLI)

```sh
dendron-cli importPod --podId {id-of-imported-pod} --wsRoot . --vault ./vault
```
