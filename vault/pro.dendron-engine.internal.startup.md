---
id: af17fd9e-d7d7-4e6c-a2c2-a3bd9ee3be18
title: Startup
desc: ''
updated: 1619535943103
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
            notes = @_initNotes(vault)
            notesWithLinks notes.filter{ n.links }
            addBacklinks(notesWithLinks)
        }

    }

    _initNotes {
        noteFiles = getAllFiles(vault)
        notes = NoteParser.parse(noteFiles, vault)
        notes.map n {
            findLinks(n)
        }
        return notes
    }

    addBacklinks(notesWithLinks, allNotes) {
        notesWithLinks.each note {
            note.links.each l {
                n = allNotes[l.to.fname]
                addBacklinks(n)
            }
        }
    }

}
```

- src/topics/markdown/utilsv2.ts
```ts
findLinks(note) {
    ast = remark.parse(note)
    links = selectAll(wikiLink, ast)
    return links
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
