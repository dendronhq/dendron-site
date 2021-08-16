---
id: 5fGMHyXmErIV9odz01BBH
title: Nextjs
desc: ''
updated: 1628955423045
created: 1628955339442
---

## Summary
- id: `dendron.json`
- coverage
  - ✅ export 

#### Export

Running this pod will create the following files in `dest`.

```
.
├── meta
│   ├── {id}.json
│   └── ...
├── notes
│   ├── {id}.html
│   └── ...
└── notes.json
```

The notes.json file has the following property.
```ts
export type NoteData = {
  /**
   * All notes that are published
   */
  notes: NotePropsDict;
  /**
   * All top level domains that are published
   */
  domains: NoteProps[] ;
  /**
   * The note for the home page
   */
  noteIndex: NoteProps;
};
```