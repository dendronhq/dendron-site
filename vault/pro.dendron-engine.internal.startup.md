---
id: af17fd9e-d7d7-4e6c-a2c2-a3bd9ee3be18
title: Startup
desc: ''
updated: 1619309515135
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

### old impl

```
  async parseFile(fpath: string[], vault: DVault): Promise<NoteProps[]> {
    const ctx = "parseFile";
    const fileMetaDict: FileMetaDict = getFileMeta(fpath);
    const maxLvl = _.max(_.keys(fileMetaDict).map((e) => _.toInteger(e))) || 2;
    const notesByFname: NotePropsDict = {};
    const notesById: NotePropsDict = {};
    this.logger.debug({ ctx, msg: "enter", fpath });

    // get root note
    if (_.isUndefined(fileMetaDict[1])) {
      throw new DendronError({ status: ENGINE_ERROR_CODES.NO_ROOT_NOTE_FOUND });
    }
    const rootFile = fileMetaDict[1].find(
      (n) => n.fpath === "root.md"
    ) as FileMeta;
    if (!rootFile) {
      throw new DendronError({ status: ENGINE_ERROR_CODES.NO_ROOT_NOTE_FOUND });
    }
    const rootNote = this.parseNoteProps({
      fileMeta: rootFile,
      addParent: false,
      vault,
    })[0];
    this.logger.debug({ ctx, rootNote, msg: "post-parse-rootNote" });

    notesByFname[rootNote.fname] = rootNote;
    notesById[rootNote.id] = rootNote;

    // get root of hiearchies
    let lvl = 2;
    let prevNodes: NoteProps[] = fileMetaDict[1]
      // don't count root node
      .filter((n) => n.fpath !== "root.md")
      .flatMap((ent) => {
        const notes = this.parseNoteProps({
          fileMeta: ent,
          addParent: false,
          vault,
        });
        return notes;
      });
    prevNodes.forEach((ent) => {
      DNodeUtils.addChild(rootNote, ent);
      notesByFname[ent.fname] = ent;
      notesById[ent.id] = ent;
    });

    // get everything else
    while (lvl <= maxLvl) {
      const currNodes: NoteProps[] = (fileMetaDict[lvl] || [])
        .filter((ent) => {
          return !globMatch(["root.*"], ent.fpath);
        })
        .flatMap((ent) => {
          const node = this.parseNoteProps({
            fileMeta: ent,
            parents: prevNodes,
            notesByFname,
            addParent: true,
            vault,
          });
          // need to be inside this loop
          // deal with `src/__tests__/enginev2.spec.ts`, with stubs/ test case
          node.forEach((ent) => {
            notesByFname[ent.fname] = ent;
            notesById[ent.id] = ent;
          });
          return node;
        });
      lvl += 1;
      prevNodes = currNodes;
    }

    // add schemas
    const out = _.values(notesByFname);
    const domains = rootNote.children.map(
      (ent) => notesById[ent]
    ) as NoteProps[];
    const schemas = this.opts.store.schemas;
    await Promise.all(
      domains.map(async (d) => {
        return SchemaUtils.matchDomain(d, notesById, schemas);
      })
    );
    return out;
  }
```