---
id: yueBtcxggyCeqTFm15fyA
title: Create New Note
desc: ''
updated: 1630426372028
created: 1630426372028
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
        acceptResp = @onAcceptNewNode
    ...
    showDocAndHidePicker
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
    ...

    engine.writeNote nodeNew
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

