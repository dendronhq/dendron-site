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
