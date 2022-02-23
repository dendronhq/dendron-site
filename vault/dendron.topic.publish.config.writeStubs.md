---
id: hklE1MfEaskIwEIo9tPUQ
title: writeStubs
desc: 'Set how stub notes are handled when publishing.'
updated: 1645530301038
created: 1645178878712
---

- type: `boolean`
- default: `false` 
- required: `true`

## Description
{{fm.desc}}

If set to `true`, all stub notes that are getting published will be written to the file system as an empty note in your vault.
Writing stubs will guarantee a permanent URL for the published stub notes.

If set to `false`, stub notes will not be written to the file system.
Note that any link to the stub notes will not be permanent, and will be randomized every time it is published. This is because a stub note that isn't written to the filesystem will always have a randomly generated temporary note id.

See [[Stubs|dendron://dendron.dendron-site/dendron.concepts#stubs]] for more information.

## Example

```yml
  publishing:
    writeStubs: true
```