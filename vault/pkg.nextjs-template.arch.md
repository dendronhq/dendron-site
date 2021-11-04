---
id: LAUb8WcM8rmjxJrR
title: Arch
desc: ''
updated: 1636063180047
created: 1627859879590
---


## Startup

- pages/_app.tsx

- see generated asset files in [[References|dendron://dendron.dendron-site/dendron.topic.pod.builtin.nextjs#references]]
```tsx
DendronApp {

  useEffect {
    data = fetchNotes { fetch("/data/notes.json") }
    setNoteData data
    fetchConfig { fetch("/data/dendron.json") }
  }
}
```

- components/DendronNotePage.tsx

```tsx
Note {
  id = getActiveNoteId

  ...
}
```

## Publishing

This describes how notes are filtered for publishing

- src/builtin/NextjsExportPod.ts
```ts
SiteUtils.filterByConfig 
```

### filterByConfig

```ts
siteHierarchies := sconfig

hiearchiesToPublish = 
```

### filterByHiearchy

```ts
filterByHiearchy(domain, notes) {
  hconfig := getConfigForHierarchy

  notes = notesGet(domain, notes)
  if notes.length > 1 {
    domainNote = handleDup(...)
  } else {
    domainNote = notes[0]
  }

  ...
  processQ = [domainNote]
  while processQ {
    note = processQ.pop
    maybeNote = filterByNote(note)
    if (!maybeNote) return;

    children = getChildren(maybeNote)
    ...
    children.filter(canPublish)!

    children.forEach { 
      processQ.push it
    }


  }
}
```

### home page
The `index` page is generated from the [[noteIndex|pkg.nextjs-template.arch.nextjs-pod#noteindex]] of the nextjs pod.