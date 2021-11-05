---
id: dHRMZ8Qy3t4UUe5AXoyG3
title: Tree View
desc: ''
updated: 1636133600955
created: 1629993468111
---

## Summary
<!-- What is this module about -->

## Lifecycle
<!-- Startup process for this module -->

```tsx
DendronTreeMenu(props) {

  noteActiveId := dendronRouter
  domains := props

  useEffect {
    activeNoteIds = getAllParents(noteActiveId)
    setActiveNoteIds(activeNoteIds)
  }

  // top level hierarchies
  roots = domains.map note {
    // TODO: should be optimized
    // recursively generate ALL children 
    note2TreeDatanote(note)
  }

  return <MenuView 
    // these should always be visible in the navbar
    roots={roots}
    // the keys that are expanded: current note and all its parents
    expandKeys={activeNoteIds}
    // highlight the active note
    activeNote={noteActiveId}
  />
}

MenuView {
  ...
}
```

## Design
- author: @sam
- source: [Nextjs template style improvements by namjul · Pull Request #1193 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1193#issuecomment-906258835)

Based on an obversation from a community member https://discord.com/channels/717965437182410783/739186036495876126/880136154253516851 the question arose which icons are the right one to use for signaling an opening of a submenu (accordion movement).

There was a study done https://www.nngroup.com/articles/accordion-icons/ to answer that exact question. The result was more or less that there is no significant difference between using the caret, arrow or plus sign but still showing that the caret performed slightly best.

Based on this I would say we leave it the way it is currently implemented (caret).

## Lookup
- [Code - components/DendronTreeMenu.tsx](https://github.com/dendronhq/dendron/blob/34872138131f030f460dc4cd8e81c65fe7654524/packages/nextjs-template/components/DendronTreeMenu.tsx#L14)

## Changelog
<!-- All changes -->
