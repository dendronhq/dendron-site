---
id: 8289cf77-51fa-4644-96c6-b5b2c2ef62fc
title: Markdown
desc: ''
updated: 1613753319075
created: 1613752938733
---


## Note Refs

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