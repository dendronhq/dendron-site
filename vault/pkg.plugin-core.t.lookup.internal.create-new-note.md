---
id: yueBtcxggyCeqTFm15fyA
title: Create New Note
desc: ''
updated: 1632929060294
created: 1630426372028
---

## Summary


- src/commands/NoteLookupCommand.ts
```ts
acceptItem(item) {
    if isCreateNewNotePick(item)
        result = acceptNewItem
    ...
}

acceptNewItem(item) { 

    if item.stub
        nodeNew = @engine.notes[item]
    else
        vault = getVaultForNewNote(item)
        ...
}

getVaultForNewNote {

    vaultsWithMatchingFile := @engine.notes
    vault = @picker.vault ??= getVaultForOpenEditor
    if vault in vaultsWithMatchingFile {
        availVaults = vaults not in vaultsWithMatchingFile
        if availVaults.length > 1 
            return promptVault(availVaults)
        else if availVaults = 1
            return availVaults
    }

}
```
