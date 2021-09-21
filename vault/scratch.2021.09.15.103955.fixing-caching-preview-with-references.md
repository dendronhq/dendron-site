---
id: eOhPQV5dc0HkI3bbVJ9jr
title: Fixing Caching Preview with References
desc: ''
updated: 1632216667636
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

#### Approach 1b: Go one level deep


```
foo -> !baz 
bar -> !baz
```

Anytime baz is updated go up to find all of the direct backlinks to `baz` do not go up to levels beyond the first one. 


This solution does not account for nested reference previews. Meaning
```
foo -> !bar -> !baz
```
If `baz` is updated and `foo` had a cached preview, `foo` preview will not be updated when `baz` is updated. 

Note that this will still require looping through all the notes and doing a string comparison for each update. Since we will need to call [getNotesWithLinks](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts#L783-L802). 
`getNotesWithLinks` is O(n * m) if the file names are the same length where (n) is the number of notes and (m) is the file length. Doing benchmarking shows that we should be in a happy place for ~100k notes (being able to loop through in 3-7ms) and still work for ~1Mil notes (being able to loop through in 20-70ms). Our current largest note keeper users have ~20k notes in their workspace, hence we got some runway. Presumably eventually we will fix the cached state and just use the cached state. If we are ok with recursive previews not being updated we can go ahead with this solution.m
 

<details>
<summary>
Benchmark code
</summary>

```
import { v4 as uuidv4 } from 'uuid';

export const uuid = () => {
  return uuidv4();
};

function createSingleId(howManyUuidsInOneId1: number) {
  let id = '';
  for (let j = 0; j < howManyUuidsInOneId1; j++) {
    id += uuid();
  }
  return id;
}

function generate(howManyIds: number, howManyUuidsInOneId: number) {
  const ids = [];
  for (let i = 0; i < howManyIds; i++) {
    ids.push(createSingleId(howManyUuidsInOneId));
  }
  return ids;
}

const main = (howManyIds: number, howManyUuidsInOneId:number) => {

  const ids = generate(howManyIds, howManyUuidsInOneId);

  const toFind = createSingleId(howManyUuidsInOneId);

  console.log(`Sample id being compared: '${toFind}'`);

  const before = new Date().getTime();

  ids.filter(id => id === toFind);

  console.log(`Took '${new Date().getTime() - before}ms' to loop through and equal compare '${howManyIds}' when stacked '${howManyUuidsInOneId}' in single id`);
};
main(100000, 3);
main(100000, 1);
main(1000000, 3);
main(1000000, 1);
```
</details>

<details>
<summary>
Benchmark code output:
</summary>

```
Sample id being compared: '261e8f8c-8e97-40c8-8059-162946183917f5c38160-47fe-4a82-b069-3624000c82c4548b9878-a620-48ad-891a-9f3c1bc149ca'
Took '7ms' to loop through and equal compare '100000' when stacked '3' in single id
Sample id being compared: 'dc25aff2-d82b-4b53-be4d-dc8825857bb7'
Took '3ms' to loop through and equal compare '100000' when stacked '1' in single id
Sample id being compared: '634f88c1-64ef-4b2d-813a-8b76281697186eb503a4-ef98-43c2-87dc-c437c111a2b94c12c2f6-58b2-431e-a700-cbe8494eb244'
Took '72ms' to loop through and equal compare '1000000' when stacked '3' in single id
Sample id being compared: '509283b2-dff0-4c23-a949-369b136a6ff6'
Took '18ms' to loop through and equal compare '1000000' when stacked '1' in single id
```
</details>

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

**Giving more thought this approach isn't going to work since we render the backlinks in the preview.**

## Discussion thread
https://github.com/dendronhq/dendron/discussions/1342


  
