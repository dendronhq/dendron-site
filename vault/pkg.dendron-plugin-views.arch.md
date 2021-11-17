---
id: 30Z8lwy9T7yq6LaU1QtYy
title: Architecture
desc: ''
updated: 1637109232221
created: 1635705190399
---

## Summary

Dendron views are served using [Webviews](https://code.visualstudio.com/api/extension-guides/webview#loading-local-content)

We use [CRA](https://create-react-app.dev/) to generate a client side React App and customize the `webpack` file to generate one javascript bundle and one css bundle for each webview.


## Development Modes

When developing new views, there are two ways of doing development

- IDE Mode
- Browser Mode

### Browser Mode

![[dendron://dendron.dendron-site/pkg.dendron-plugin-views.concepts#^FIQf5ZoJXIBP:#*]]

Pros:
- realtime changes without running `webpack export`

Cons:
- not natively integrated into vscode, need to shim methods to access the running workspace

Browser mode is great for development speed but it means we're not acutally testing the view integration with VSCode. Instead, we need to manually call `postMessage` to simulate VSCode events. 

### IDE Mode

![[dendron://dendron.dendron-site/pkg.dendron-plugin-views.concepts#^OBOH23affA2J]]

Pros:
- full fidelity webview testing 

Cons:
- slow iteration time, exporting takes time
- takes longer to debug (need to launch vscode, launch a web view developer tools, and then inspect the view inside of there)