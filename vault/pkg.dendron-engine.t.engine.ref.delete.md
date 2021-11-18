---
id: c0YayZJV3lDrZuk6j9upH
title: Delete
desc: ''
updated: 1637209756211
created: 1637209750043
---

## Pesudocode
```ts
deleteNote(id, metaOnly) {
    noteToDelete := id
    if (!metaOnly) fs.unlink(noteToDelete)
    if (noteToDelete.children {
        noteToDelete.stub = true
        @updateNote(noteToDelete)
    } else {
        parentNote := noteToDelete
        parentNote.children.reject! noteToDelete
        @notes.delete! noteToDelete
        while parentNote.stub {
            @deleteNote parentNote
        }
    }

}

```
