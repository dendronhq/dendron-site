---
id: 89281554-099e-4f10-b6e1-2aedd37fd419
title: Create New Note
desc: ''
updated: 1617510245522
created: 1610206609498
published: false
---


## Summary
- onDidAccept
- onDidAcceptForSingle

### onDidAcceptForSingle
- file: src/components/lookup/LookupProviderV2.ts

```ts
selectedItem := result from the picker
if selectedItem {
    if isCreateNewNotePickForSingle
}
```


### _onAcceptNewNote
- file: src/components/lookup/LookupProviderV2.ts

```ts
_onAcceptNewNote {
    ...
    nodeNew = NoteUtils.create(fname, vault)
    match = SchemaUtils.matchPath(fname)
    if (match) {
        NoteUtils.addSchema(nodeNew)
    }

    maybeTemplate = nodeNew.schema
    SchemaUtils.applyTemplate
}

```

### applyTemplate
- file: src/dnode.ts

```ts
applyTemplate {
    ...
    tempNoteProps = _.pick(tempNote, ["body", "desc", "custom"]);
    _.forEach(tempNoteProps, (v, k) => {
        note[k] = v;
    });


}

```