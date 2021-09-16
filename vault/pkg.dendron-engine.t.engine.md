---
id: T1p8qUHJyooO1aKlBNa1X
title: Engine
desc: ''
updated: 1631813542721
created: 1631658445346
---


## Connector

How external applications connect to the dendron engine


- file: src/topics/connector.ts
```ts
EngineConnector.init(opts) {
    portOverride := opts

    if portOverride {
        @tryToConnect
        @initEngine
    } else {
        @createServerWatcher
    }
}

createServerWatcher {
    wsRoot := this

    port = getPortFilePath(wsRoot)

    while !@initialized {
        @connectAndInit
    }
}


connectAndInit {
    ...
    maybeEngine = @_connect
    if (maybeEngine)
        @initEngine
}

initEngine(opts) {
    port, engine := opts

    engine.sync
    @port = port
    @initialized = true
}
```

## Create 
- file: src/engineClient.ts


```ts
writeNote(note, updateExisting) {

    maybeNote := note
    if (!maybeNote.stub || !updateExisting) _writeNewNote 
}

_writeNewNote(maybeNote) {
    if (maybeNote) {
        parentNote := maybeNote

    }
}
```

## Delete
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

## Rename

```ts
renameNote(oldLoc, newLoc) {
    oldNote := oldLoc
    newNote := newLoc

    ...
    deleteNote(oldNote)
    writeNote(newNote)
}

```