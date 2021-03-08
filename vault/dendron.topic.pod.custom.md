---
id: 6322a2de-34fd-4c93-bcbe-d71c30e5f2b6
title: Custom Pods
desc: ''
updated: 1614312977869
created: 1603308868151
---

## Summary

<!-- - STATUS: DRAFT
- NOTE: this documentation is for future functionality. It is not currently implemented. Progress can be tracked in this [issue](https://github.com/dendronhq/dendron/issues/286). -->

Custom pods can be developed by anyone as a `NodeJS` package and used after a user installs it in their workspace. They can be used with either the `dendron-cli` or from within the Dendron extension to import/export/publish your notes from/to anywhere

- NOTE: at the current time, custom pods can only be run using `dendron-cli`. We're working on building them into the plugin within the next couple of weeks
- NOTE: currently, only custom pods for **publishing** is supported. We're working on adding support for `import` and `export` pods


## Quickstart (Using a custom pod)

Run the following inside your Dendron workspace.

### Install a Pod

```bash
cd {workspace}
npm init -y 
npm install -g dendron-cli
npm install --save {dendron-pod-package}
```

### Execute a Pod (CLI)

```bash
dendron-cli publishPod --wsRoot . --podId {podId} --podPkg {npmPkg} --podSource custom --config {podConfig}
```

## List of Custom Pods
- [[Dev.to Pod|dendron.pro.devto-pod]]: publish notes to dev.to
