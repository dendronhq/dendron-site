---
id: 8ec553b8-5dfc-4a72-b73f-25c8e59d1538
title: Publishing
desc: ''
updated: 1599927898931
created: 1599927898931
stub: false
---

# Publishing
## Summary

## Flows

- src/commands/build-site.ts
```ts
siteHierarchies := read(dendron.yml)

nav_order = 0
nodes = siteHierarchies { hRoot
    note := engine.notes[hRoot]
    note.nav_order = nav_order
    note.parent = null
    ...
}
...
while nodes {
    node = nodes.pop
    note2JekyllMdFile(node, {
        notesDir: siteNotesDirPath
    })
}

```

- src/commands/build-site.ts
```ts
note2JekyllMdFile {
    ...
    note.body = getProcessor()
        ...
        .process(note.body)
}
```
