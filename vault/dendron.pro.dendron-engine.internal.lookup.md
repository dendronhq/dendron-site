---
id: d77cc114-5c4b-4185-a353-47888e5a8976
title: Lookup
desc: ''
updated: 1615940397389
created: 1615940090746
---

## queryNotes

```ts
fuseEngine.queryNote({ qs }) 
```

- src/fuseEngine.ts

```ts
queryNote { 
    if qs = "":                     
        @index.search "root"
    else if qs = "*":
        @index._docs
    else:
        @index.search qs
}
```

# Reference

## fuseEngine Options

- src/fuseEngine.ts

```ts
  const options = {
    shouldSort: true,
    threshold: opts.exactMatch ? 0.0 : 0.6,
    location: 0,
    distance: 50,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ["fname"],
    useExtendedSearch: true,
    includeScore: true,
  };
```