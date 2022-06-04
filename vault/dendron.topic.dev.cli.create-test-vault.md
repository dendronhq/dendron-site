---
id: f9kwfyvtocr1as6lupesv5y
title: Create Test Vault
desc: 'Create a vault for testing purposes'
updated: 1654385503886
created: 1654385503886
templateId: 39menlcx30lpo1ci4px7aew
---

## Summary

{{fm.desc}}

- NOTE: will only create self contained vaults

## Options

### wsRoot
root of workspace 

### jsonData

path to json data. expected data in following format
```ts
{
  // number of notes
  "numNotes": number,
  // number of vaults
  "numVaults": number,
  // ratios of each type of note
  // formula is [typeOfNote]/totalOfAllNotes * $numNotes
  "ratios": {
    "tag": number,
    "user": number,
    "reg": number
  }
}
```

## Examples

This following creates a self contained vault with 3 additional vaults. It will contain 3k tag notes, 3k user notes, and 3k regular notes.

- test.json
```json
{
  "numNotes": 10e3,
  "numVaults": 3,
  "ratios": {
    "tag": 3,
    "user": 3,
    "reg": 3
  }
}
```

```sh
dendron dev create_test_vault --wsRoot /tmp/test-vault --jsonData /tmp/test.json
```
