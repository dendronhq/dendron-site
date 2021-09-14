---
id: KkeAKEgYvQVA05YbncTCm
title: Nextjs Pod
desc: ''
updated: 1628732920478
created: 1628732714908
---

## Summary

Running this pod will create the following files in the `data` directory of `@dendronhq/nexts-template`
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

## Properties

### noteIndex
This corresponds to the `siteIndex` set in dendron.yml

