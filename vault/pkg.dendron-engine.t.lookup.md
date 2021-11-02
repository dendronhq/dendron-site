---
id: 9Nms3px87t1OvqIch8qpp
title: Lookup
desc: ''
updated: 1635379964185
created: 1630426588705
---

## Components

### Fuse.js
- https://fusejs.io
- powers dendron fuzzy search


## Logic

### Query

The query logic for engine lookup has a bunch of special cases.
- if nothing is selected, show all the top level children
- special handling of wikilinks (will strip away wikilinks when searching)
- custom sorting logic depending on schemas
- etc.


#### Code
- common-all/src/fuse.ts
```ts
queryNote(qs) {

    if qs == "" {
        ...
    } else if qs == "*" {
        ...
    } else {
        formatQueryForFuse
    }

}

sortResults(results, originalQS) {
    groupedByScore = groupBy(results)
    ...
    

    sorted := groupedByScore

    if originalQS {
        sorted = moveOriginalQSFirst(sorted, originalQS)
    }
    return sorted
}
```

## Lifecycle

### Initialize the Index
For indexing, would use [fusejs](https://fusejs.io/) - this is the same indexing mechanism as we do for lookup. 

Some incomplete pseudo code on how lookup indexes here: [[queryNotes|pkg.dendron-engine.t.lookup#querynotes]]

FuseEngine is initialized here: https://github.com/dendronhq/dendron/blob/dev/packages/engine-server/src/enginev2.ts#L88:L88

Code where we specify fields to index [here](https://github.com/dendronhq/dendron/blob/dev/packages/engine-server/src/fuseEngine.ts#L110:L110)

### Refreshing the Index
When a note changes on disk, we use a [fileWatcher](https://github.com/dendronhq/dendron/blob/dev/packages/plugin-core/src/fileWatcher.ts#L65:L65) to keep track of changes and we call [updateNote](https://github.com/dendronhq/dendron/blob/dev/packages/engine-server/src/engineClient.ts#L348:L348) to update the version of the note we have in the engine



