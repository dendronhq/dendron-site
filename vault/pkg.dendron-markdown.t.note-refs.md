---
id: 8289cf77-51fa-4644-96c6-b5b2c2ef62fc
title: Note Refs
desc: ''
updated: 1631839987446
created: 1613752938733
---



- file: dendron.pub
```ts
case node.type = REF_LINK {
    convertNoteRefASTV2 
}

convertNoteRefASTV2 {
    if link.endsWith("*) {
        ...
    } else {
        ...
    }

    noteRefs.map {
        processRef(ref, note, fname)
    }
}

processRef {
    data = convertNoteRefHelperAST
    if prettyRef {

        id = genRefId
        addRefToProc(id, data)
        return renderPrettyAST(id)
    } else {
        return paragraph(data)
    }

}

convertNoteRefHelperAST(link, note) {
    ...
    anchorStart, anchorEnd, anchorStartOffset := link
    bodyAST = noteRefProc.parse(note.body) as DendronASTNode;
    prepareNoteRefIndices(anchorStart, anchorEnd)
}
```

{
  type: "root",
  children: [
    {
      type: "paragraph",
      children: [
        {
          type: "wikiLink",
          value: "bar",
          data: {
            alias: "Bar",
            permalink: "bar.html",
            exists: true,
            hName: "a",
            hProperties: {
              className: undefined,
              style: undefined,
              href: "bar.html",
            },
            hChildren: [
              {
                type: "text",
                value: "Bar",
              },
            ],
          },
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 1,
              column: 8,
              offset: 7,
            },
            indent: [
            ],
          },
        },
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 1,
          column: 8,
          offset: 7,
        },
        indent: [
        ],
      },
    },
  ],
}

# Old

## Note Refs - Markdown



```ts
compiler {
    if dest != MD_DENDRON:
        convertNoteRef
}

convertNoteRef {

    refLvl := proc
    return if refLvl > MAX_REF_LVL

    noteRefs := 

    noteRefs.map {
        npath = getFullPath it
        note = file2Note npath
        convertNoteRefHelper note
    }

}

convertNoteRefHelper(body) {
    bodyAST = proc.parse body
    let out = proc 
      .processSync(noteRefProc.stringify(bodyAST))
    return out
}
```

```ts

```

## Note Refs - HTML

- file: src/markdown/remark/dendronPub.ts
```ts
data = convertNoteRefASTV2
parent.children = data;
```

```ts
convertNoteRefASTV2 {
        noteRefs :=
        noteRefs.map {
            convertNoteRefHelperAST
        }
}

convertNoteRefHelperAST(noteRefProc) {
    /**
     *  RefLink Node
     */
    bodyAST = noteRefProc.parse(body)

}
```
