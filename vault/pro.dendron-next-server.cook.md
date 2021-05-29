---
id: 1698aef0-efd4-4c92-a3b0-5ca702b228a3
title: Cook
desc: ''
updated: 1622130399057
created: 1621376746723
---


### Updating the theme

1. Modify the theme values in `dendron-next-server/assets/themes/*`
1. Run `yarn gen:theme`
1. To preview you theme, start the server and navigate to `/vscode/sample` 

- Instructions for updating the theme were originally obtained from [this guide](https://dev.to/joserfelix/dynamic-theme-switching-in-ant-design-how-to-change-between-light-and-dark-themes-5b8p)

### Integrating a view with the plugin

- see [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/ConfigureWithUI.ts#L22:L22) for integrating a command with the web ui


### Adding a VSCode Webview
- webview naming should follow kebab case
```ts
// good
tree-view.tsx

//bad
treeView.tsx
```
