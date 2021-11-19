---
id: LAUb8WcM8rmjxJrR
title: Arch
desc: ''
updated: 1637355391310
created: 1627859879590
---

## Summary

You can see a video walkthrough of how we generate notes for publishing and the static export [here](https://youtu.be/Uyyb_s74lzM)

## Design

The Dendron NextJS Template is meant to be used with [[dendron.topic.pod.builtin.nextjs]]. 

The NextJS pod serializes the subset of notes that the user wants to publish. Running `next export` will generate a static page for each note published. 

A published Dendron site is a hybrid of static site and dynamic web app. Each page is statically generated but any subsequent page navigation (via menu or lookuup) is then dynamically fetched using javascript.

- NOTE: currently, the published site is not optimzied and will load ALL notes before rendering to fill out the nav bar and other UI elements. we are aware of this issue and are implementing a fix so that the initial page load can render without any external fetches


## Components
<!-- Major components -->

## Lifecycle

### Startup

What happens when you visit a statically generated Dendron site. 

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