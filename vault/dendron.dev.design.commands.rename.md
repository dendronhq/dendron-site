---
id: 9bcb030d-3e8e-4173-85fb-846b3c3bc83a
title: Rename
desc: ''
updated: 1598917863248
created: 1598917863248
---

## Summary

## Flows

- loc: plugin-core/src/commands/RenameNoteV2.ts
```ts
...
allUris = getWorkspaceCache.allUris + files.map{ f => f.newUri }
newUris = allUris

```

- 
```ts
getWorkspaceCache {

}

cacheUris {
    markdownUris = DendronWorkspace.instance().engine.notes
}
```