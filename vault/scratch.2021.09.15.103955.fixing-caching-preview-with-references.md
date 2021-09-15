---
id: eOhPQV5dc0HkI3bbVJ9jr
title: Fixing Caching Preview with References
desc: ''
updated: 1631701509171
created: 1631677196658
---

### Current state
Current preview caching uses the `updated` stamp of the note to decide whether the cached preview is still valid or has become stale.

This strategy introduces a problem when we are dealing with notes that contain references. 

As example if we have a note 'foo' which contains a preview reference to note 'bar' 
```
// foo contents:
![[bar]]
```

```
GIVEN that 'foo' preview is cached 
    WHEN 'bar' changes
        EXPECTED: 'foo' preview is invalidated from the cache.
        ACTUAL: 'foo' preview remains in the cache.
```

### Approach 1: Invalidate cache on note update
Anytime a note is updated such that anytime 'bar' is updated invalidate any of the notes that that point to it. 

In our example when 'bar' gets updated look at the all of its backlinks find 'foo' and invalidate 'foo' preview cache.

With our current method of finding backlinks [by looping through the notes getNotesWithLinkTo](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts#L781-L800) it becomes very troublesome performance wise when we have multiple levels of linking. 

Meaning cases such as:
```
foo -> bar -> baz -> faz
gas -> bar
```
Anytime faz changes we have to do a loop through all the notes for each note that transitively points to faz.

#### Approach 1a: Fix the stale data and lookup links instead of looping for them
Same solution as above but instead of doing a loop for finding backlinks we do a look up from stored state. Proposal is to use existing stored state in `storev2.FileStorage.notes`. This state `FileStorage.notes` does currently contain backlink data which gets set upon initialization. However, after initialization the backlink data is not updated in `FileStorage.notes`, hence, it gets very stale and cannot be used as is. So we would need to address this issue by keeping `FileStorage.notes` up to date for all operations that can affect the backlink state including [note removal, note update, note rename].

### Approach 2: traverse the links down from rendered note
When the render is called traverse down through any of the 'ref' links (we only care if the 'ref' linked notes have updated for the preview invalidation). 

Below is example data for a direct link from note 'foo' to note 'bar'. 

```
  {
        "type": "ref",
        "from": {
          "fname": "foo",
          "id": "u55hXqqYtI1CgCRmVH2To",
          "vaultName": "vault-a"
        },
        "value": "bar",
        "position": {
          "start": {
            "line": 3,
            "column": 1,
            "offset": 16
          },
          "end": {
            "line": 3,
            "column": 9,
            "offset": 24
          },
          "indent": []
        },
        "xvault": false,
        "to": {
          "fname": "bar"
        }
      }
```

The challenge here is that we only have the file name in the link, we do not have an id of the note.
```
"to": {
    "fname": "bar"
}
```

While inside the storage engine we keep notes indexed by the id [FileStorage.notes](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/drivers/file/storev2.ts#L74)

And the largest piece that doesn't align is that we require a vault when looking up a note by file name.
[getNoteByPath](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/engineClient.ts#L221)
[requires vault](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/typesv2.ts#L227-L228)

And as pointed out above the link to does not contain a vault just contains a file name. 

Do we have constraints that a file name is unique within a workspace? To allow us to index by fname without a vault. 

## Discussion thread
https://github.com/dendronhq/dendron/discussions/1342


  
