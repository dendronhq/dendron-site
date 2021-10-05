---
id: 290d95a9-83b4-4a2a-8c1e-49fc0d83fbea
title: Tree View
desc: ''
updated: 1619566393098
created: 1619558733127
---



- src/_extension.ts
```ts
activate {
    DendronTreeView.register
}
```

- src/views/DendronTreeView.ts
```ts
register {
    subscribe(extension, initialized) {
        p = new EngineNoteProvider
        p.getChildren
        window.createTreeView(p)
        ws.treeView = new DendronTreeView()
    }
}
```

## Ref

- EngineNoteProvider
```ts
getChildren(id?) {
    if id {
        @tree[id].children
    } else {
        @parseTree(roots)
    }

}
```
