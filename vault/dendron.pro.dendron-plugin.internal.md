---
id: 4b8f0470-dacb-433b-8d0c-f5a7d8f5245d
title: Lookup
desc: ''
updated: 1610160273101
created: 1608838048476
---
```ts
show {
    quickpick := create
    provider := new LookupProvider
    @refreshButtons
    @updatePickerBehavior
    provider.provide quickpick
    quickpick.show
}
```

```ts
refreshButtons(buttons) {
    @state.buttonsPrev = quickpickButtons
    quickpick.buttons = buttons
}
```

```ts
updatePickerBehavior {
    @updateBehaviorByEffect

    if changedNoteType {
        @updateBehaviorByNoteType
    }

    if changedFilterType
        @provider.onUpdatePickerItem

    quickpick.oncreate :=
}
```

## Example

### Normal

- show
- updatePickerBehavior
  - source: updateBehaviorByNoteType(normal)

### Change Value

- updatePickerBehavior
  - source: onValueChange

## Ref

### Times when Picker is Updated

- onUpdatePickerItem
  - lc.show, on init
  - lc.updateBehaviorByNoteType, note type toggle
  - lc.updatePickerBehavior, direct filter toggle

### sources

#### UPDATE_PICKER_FILTER

- when direct filter has changed

#### updatePickerBehavior

- when changing note type
- values
  - normal
  - journal
  - scratch

## Lookup: onButton

- src/components/lookup/LookupControllerV2.ts

```ts
onTriggerButton {

}
```

# TreeView

## init

- onInitialize, reconstruct the whole tre

## refresh

- ReloadIndex
- SchemaWatcher
- FileWatcher


# Welcome Message

- file: plugin-core/src/\_extension.ts

```ts

showWelcomeOrWhatsNew {
    previousVersion := config.get(dendron.version)
    version :=

    // 1st install
    if !previousVersion {
        config.set(GLOBAL_STATE.VERSION, version)
        config.set(GLOBAL_STATE.VERSION_PREV, 0.0.0)
        return showWelcome()
    }

    // not 1st install
    if (version != previousVersion) {
        config.set(GLOBAL_STATE.VERSION, version)
        config.set(GLOBAL_STATE.VERSION_PREV, previousVersion)
        showInformationMessage(dendron has upgraded)

    }
}

```

## SetupWorkspace

- note: `dendron.code-workspace` is completely overwritten when running setup

# Vault Add

- src/commands/VaultAddCommand.ts 

```ts
execute:
    vaults = handleRemote

handleRemote:
    repoDir := 
    ensureDir(repoDir)
    git clone gitRepo
    vaults := repoDir
    vaults.map { addVaultToWorkspace }

addVaultToWorkspace vault: 
    createVault(vault)
    addToWorkspaceFile(vault)
```


# Reload Index

```ts
ws.getEngine()
engine.vaultsv3.map {

}
```