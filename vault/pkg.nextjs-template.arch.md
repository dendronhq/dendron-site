---
id: LAUb8WcM8rmjxJrR
title: Arch
desc: ''
updated: 1628732944526
created: 1627859879590
---


# Publishing

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