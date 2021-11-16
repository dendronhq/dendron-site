---
id: bjzpa6oDr0dvBv6W4ZFNW
title: Airtable
desc: ''
updated: 1636920702570
created: 1635700484374
---

## Lifecycle
- location: src/builtin/AirtablePod.ts

```ts
plant {

    verifyDir(dest)
    filteredNotes = filteredNotes(srcHierarchy)

    if (!noCheckpointing) {
        filterdNotes := filterByCheckpointFile
    }

    {created, updated} = processNote(filteredNotes)
    updateAirtableIdForNewlySyncedNotes(created)
}

processNote {
    {create, update, lastUpdate} = notesToSrcFieldMap(filteredNotes, srcFieldMapping)

    api = new AirtableApi(...)

    chunkAndCall(create, api)
    chunkAndCall(update, api)

    if (checkpointing) {
        writeFile(checkpointFile, lastUpdate)
    }
}

updateAirtableIdForNewlySyncedNotes(records) {

    records.map note => {  
        if (!noteAirtableId := note.airtableId) {
            note = {
                ...note,
                noteAirtableId
            }
            engine.writeNote(note)
        }
    }

}
```