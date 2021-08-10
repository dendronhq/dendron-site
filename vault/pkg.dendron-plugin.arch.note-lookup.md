---
id: ZbtRI22izXCapbjW
title: Note Lookup
desc: ''
updated: 1628546862398
created: 1627839920509
---

## Summary

This describes the logic for Note Lookup

## Steps
- [[Gather Input|pkg.dendron-plugin.arch.note-lookup#gather-input]]
  - [[Prepare Quickpick|pkg.dendron-plugin.arch.note-lookup#prepare-quickpick]]
    - initialize all buttons
- enrichInput
  - show `QuickPick`
- showQuickPick
  - updatePickerItems
  - if `noConfirm`, don't show widget
    - update selected items to current current items
    - call `provider.onDidAccept`
  - else show the widget
    - wait until user accepts or cancels
- execute
  - open `picks`
  - [[OnAccept|pkg.dendron-plugin.arch.note-lookup#onaccept]]


## Code

### Gather Input
- src/commands/NoteLookupCommand.ts
```ts
gatherInputs {
    lc = this._controller = LookupControllerV3.create
    this._provider = new NoteLookupProvider("lookup", {
    lc.prepareQuickPick
}
```

### Prepare Quickpick
- src/components/lookup/LookupControllerV3.ts

```ts
prepareQuickPick {
    quickpick.onTriggerButton = @onDidTriggerButton
    refreshButtons
}

showQuickPick {
    provider.onUpdatePickerItems 

}
```

#### OnDidTriggerButton
```ts
onDidTriggerButton(btn) {
    find(btn, @state.buttons).pressed = btn.pressed
    refreshPickerBehavior(@state.buttons)
}
```

#### RefreshPickerBehavior
```ts
refreshPickerBehavior {
    buttonsEnabled :=
    buttonsDisabled :=

    buttonsEnabled.map bt => bt.onEnable
    buttonsDisabled.map bt => bt.onDisable
}
```

### OnAccept
- src/components/lookup/LookupProviderV3.ts
```ts
onDidAccept {
    selectedItems := picker
    resp = @_onAcceptHooks.map {
        it(picker, selectedItems)
    }

    HistoryInstance.add {
        source: lookupProvider,
        action: done,
        id: @id,
        data: {
            selectedItems,
            onAcceptHookResp: resp
        }
    }

}
```


```ts
execute {
    @acceptItem
}

acceptItem(item, picker) {

    throw if not picker.validate(item)

    if isNew(item) {
        @acceptNewItem
    } else {
        @acceptExistingItem
    }
}

acceptExistingItem {
    uri := item
    show uri
}

acceptNewItem(item, picker) {
    fname := picker
    if isStub(item) {
        note = notes[item.stub]
        delete note.stub
    } else {
        note = Note.create item
        if matchSchema(note) {
            addSchema(note)
        }
        if note.schema.template {
            applyTemplate(note)
        }
    }
    note = picker.transformTitle(note)
    picker.onCreate(note)
    writeNote note
}

```

## Design Decisions

### Debounce
