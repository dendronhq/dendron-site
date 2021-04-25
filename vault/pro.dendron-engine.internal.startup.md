---
id: af17fd9e-d7d7-4e6c-a2c2-a3bd9ee3be18
title: Startup
desc: ''
updated: 1619227549960
created: 1619225744179
---


## Store
- packages/engine-server/src/drivers/file/storev2.ts

```ts
FileStorage {
    init {
        ...
        @initNotes
    }

    initNotes {
        @vaults.map {
            @_initNotes(vault)
        }

    }

    _initNotes {
        noteFiles = getAllFiles(vault)
        NoteParser.parse(noteFiles, vault)

    }

}
```

### NoteParser

```
parse {
    parseFile {
    }
}

parseFile(files) {
    meta := getFileMeta

    rootNote = @parseNoteProps
    meta[1].map {
        notes = 
    }
}

parseNoteProps(vault, meta, opts, notes) {
    noteProps = file2Note(vault, meta)

    if opts.addParent {

        stubs = addParent(
            noteProps,
        )
    }
    return [noteProps].concat(stubs)
}

```

- src/files.ts
```ts
getAllFiles {

}
```

- alternative
```
parseFile(files) {
    allFiles = files.map { @parseNoteProps }
    conect(allFiles)

}

```