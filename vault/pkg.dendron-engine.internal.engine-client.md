---
id: cc302bfb-bf82-4ec7-9956-b989d2d68338
title: Engine Client
desc: ''
updated: 1631812380476
created: 1620440278503
---

## Summary

Engine client is used when Dendron is run as client/server.


## Flows

### Writing a new note
- file: src/engineClient.ts

```ts
writeNote props {
    
    /**
     *  [{note, status: update}, {note, status: create}]
     * /
    resp = @api.engineWrite props
    ...
    @refreshNotesV2 resp.data
}

```

- See [[Create|pkg.dendron-engine.t.engine#create]]


## Ref

### refreshNotesV2

```ts

refreshNotesV2(notes) {
    notes.map {
        uri, id := it

        if it.status = 'create' {
            @history.add(action: create, uri)
        }
        @notes[id] = it
    }
    @fuseEngine.update(notes)
}

```
