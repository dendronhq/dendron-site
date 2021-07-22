---
id: af17fd9e-d7d7-4e6c-a2c2-a3bd9ee3be18
title: Startup
desc: ''
updated: 1626916008876
created: 1619225744179
---


## Engine Initialize - Store Logic
- packages/engine-server/src/drivers/file/storev2.ts

```ts
FileStorage {
    init {
        ...
        @initNotes
    }

    initNotes {
        @vaults.map {
            notes, cacheUpdates = @_initNotes(vault)
            notesWithLinks notes.filter{ n.links }
            writeNotesToCache(cacheUpdates)
        }

        addBacklinks(notesWithLinks)
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

#### parse
```ts
parse {
    parseFile {
    }
}

parseFile(files) {
    meta := getFileMeta
    rootNote = @parseNoteProps
    maxLvl := meta

    // 1st level notes
    lvl = 1
    prevNodes = meta[lvl]
    prevNodes.map  {
        note = @parseNoteProps it
        if !(note in $cache) { updateCache note }
        return note
    }
    prevNodes.map {
        addChild(rootNote, it)
    }
    lvl++

    // remaining notse
    while lvl < maxLvl {
        notes = meta[lvl]];
        notes.map {
            note = @parseNoteProps it
        }
    }
}

```

#### parseNoteProps
```ts

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
