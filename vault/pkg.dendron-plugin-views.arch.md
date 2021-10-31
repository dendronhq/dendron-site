---
id: 30Z8lwy9T7yq6LaU1QtYy
title: Arch
desc: ''
updated: 1635708621321
created: 1635705190399
---

## Summary

Dendron views are served using [Webviews](https://code.visualstudio.com/api/extension-guides/webview#loading-local-content)

We use [CRA](https://create-react-app.dev/) to generate a client side React App and customize the `webpack` file to generate one javascript bundle and one css bundle for each webview.

## Development Modes

### Browser Mode

In browser mode, we start a webpack dev server in order to see changes in real time. 

Pros:
- realtime changes without running `webpack export`

Cons:
- not natively integrated into vscode, need to shim methods to access the running workspace


When running in browser mode, the expectation is to use it with the [[Test Workspace|dendron://dendron.dendron-site/dendron.dev.ref.test-workspace]] that comes within the monorepo.


## Components
<!-- Major components -->

## Lifecycle
<!-- Major lifecycles -->

