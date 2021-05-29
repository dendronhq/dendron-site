---
id: b3b50dd4-fb60-449e-8d1f-334b75c7295d
title: Vault Add
desc: ''
updated: 1618781705093
created: 1618781639892
---

# Vault Add

- src/commands/VaultAddCommand.ts 

```ts
execute:
    vaults = handleRemote

handleRemote:
    repoDir := 
    ensureDir(repoDir)
    git clone gitRepo
    vaults := getVaultsFromRepo
    vaults.map { addVaultToWorkspace }

addVaultToWorkspace vault
    createVault(vault)
    addToWorkspaceFile(vault)
```
