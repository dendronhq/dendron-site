---
id: 6322a2de-34fd-4c93-bcbe-d71c30e5f2b6
title: Custom Pods
desc: ''
updated: 1613844946312
created: 1603308868151
---

## Summary
<!-- - STATUS: DRAFT
- NOTE: this documentation is for future functionality. It is not currently implemented. Progress can be tracked in this [issue](https://github.com/dendronhq/dendron/issues/286). -->

Custom pods can be developed by anyone as a `NodeJS` package and used after a user installs it in their workspace. They can be used with either the `dendron-cli` or from within the Dendron extension to import/export/publish your notes from/to anywhere

## Quickstart (Creating a custom pod)

Run the following inside your Dendron workspace.

### Install a Pod

```bash
npm install -g dendron-cli
npm init
npm install --save {dendron-pod-package}
```

### Execute a Pod (CLI)

```bash
dendron-cli exportPod --wsRoot . --podId dendron.csv --podPkg @dendronhq/csv-pod --podSource remote
```


## Quickstart (Using a custom pod)

Run the following inside your Dendron workspace.

### Install a Pod

```bash
npm install -g dendron-cli
npm init
npm install --save {dendron-pod-package}
```

### Execute a Pod (CLI)

```bash
dendron-cli exportPod --wsRoot . --podId dendron.csv --podPkg @dendronhq/csv-pod --podSource remote
```
