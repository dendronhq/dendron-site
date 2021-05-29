---
id: 7a4955ba-ebf7-4d88-8121-ef1613caa1b1
title: Scrollbar
desc: ''
updated: 1621888732244
created: 1621624558777
---


## Summary

## Design
- fixed height treeview
- style scrollbar

## Tasks
<!-- If your working on a feature, the following are useful to have -->
- [ ] dev
    - [ ] deploy 
    - [ ] verify
- [ ] prod
    - [ ] deploy 
    - [ ] verify



- https://stackoverflow.com/questions/10082155/remove-scrollbar-from-iframe
```
/* width */
::-webkit-scrollbar {
  width: 10px;
  background: black;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
```

## Scratch

```html
<h3 class="title" title="Tree View V2">Tree View V2</h3>
<div id="webview-webviewview-dendron-tree-view" data-keybinding-context="30" style="visibility: visible; position: absolute; overflow: hidden; top: 405px; left: 48px; width: 305px; height: 353px;"><iframe class="webview ready" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads" allow="clipboard-read; clipboard-write;" src="vscode-webview://webviewview-dendron-tree-view/index.html?id=webviewview-dendron-tree-view&amp;extensionId=&amp;purpose=undefined&amp;serviceWorkerFetchIgnoreSubdomain=undefined&amp;platform=electron&amp;vscode-resource-origin=https%3A%2F%2Fwebviewview-dendron-tree-view.vscode-webview-test.com" style="border: none; width: 100%; height: 100%;"></iframe></div>
```

## Scrollbar

https://github.com/microsoft/vscode/issues/30191
```
editor.scrollbar.verticalScrollbarSize": 50
```
