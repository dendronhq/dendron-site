---
id: 5a7103be-eb92-4380-8207-598e9f10724c
title: Dendron-engine
desc: ''
updated: 1605287511510
created: 1605108924902
---


# Schema
```
  "root": Object {
    "fname": "root",
    "imports": Array [],
    "root": Object {
      "children": Array [],
      "id": "root",
      "parent": "root",
      "title": "root",
    },
    "schemas": Object {
      "root": Object {
        "body": "",
        "children": Array [],
        "created": 1605108880847,
        "data": Object {},
        "desc": "",
        "fname": "__empty",
        "id": "root",
        "links": Array [],
        "parent": "root",
        "title": "root",
        "type": "schema",
        "updated": 1605108880847,
        "vault": undefined,
      },
    },
    "version": 1,
  },
```

# Renaming a Note

## Flow

- engine-server/src/drivers/file/storev2.ts

```ts
renameNote opts {
  oldNote, oldLoc, newLoc := opts
  notesToChange = getNotesWithLinkTo(oldNote)
  notesToChange.forEach { n =>
    replaceLinks(n, from: oldLoc, to: newLoc)
  }
}
```

- src/topics/markdown/utilsv2.ts
```ts
replaceLinks opts {
  remark = getRemark(dendronLinksOpts: {replaceLink: { from, to }} )
  return remark.process(opts.content).toString()
}
```

- See [[Remark|dendron.dev.design.remark]]
