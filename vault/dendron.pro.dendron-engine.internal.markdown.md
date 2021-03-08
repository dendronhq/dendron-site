---
id: 8289cf77-51fa-4644-96c6-b5b2c2ef62fc
title: Markdown
desc: ''
updated: 1614024416739
created: 1613752938733
---


## Note Refs - Markdown


- file: src/markdown/remark/noteRefsV2.ts
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
        convertNoteRefHelper 
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