---
id: 7HUiVD19WLHJMW2sMMO7g
title: Internal
desc: ''
updated: 1630426478059
created: 1630426478059
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

## write new note

- src/enginev2.ts
```ts
writeNote {
  @store.writeNote
}
```

- src/drivers/file/storev2.ts
```ts
writeNote(note, opts) {
  maybeNote := note
  if (maybeNote.stub || opts.updateExisting) {
    ...
  } else {
    @_writeNewNote()
  }

  SchemaUtils.matchPath(h)


}

_writeNewNote() {
  ....
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

