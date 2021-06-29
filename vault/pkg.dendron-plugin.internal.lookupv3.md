---
id: 75dced84-4ebb-42c1-92bc-a5ed601446a2
title: Lookupv3
desc: ''
updated: 1624930792555
created: 1619740761993
---

## Summary
- status: [[Work In Progress 🚧|dendron.ref.status#work-in-progress-]]

- src/commands/NoteLookupCommand.ts

### Gather Input
```ts
gatherInputs {
    lc = this._controller = LookupControllerV3.create
    this._provider = new NoteLookupProvider("lookup", {
    lc.prepareQuickPick
}
```

- src/components/lookup/LookupControllerV3.ts
```ts
create {
    new LookupControllerV3
}

constructor {

}

prepareQuickPick {
    quickpick.onTriggerButton = @onDidTriggerButton
    refreshButtons
}

showQuickPick {
    provider.onUpdatePickerItems 

}
```

## Modifiers

### General

```ts
onDidTriggerButton(btn) {
    find(btn, @state.buttons).pressed = btn.pressed
    refreshPickerBehavior(@state.buttons)
}
```

```ts
refreshPickerBehavior {
    buttonsEnabled :=
    buttonsDisabled :=

    buttonsEnabled.map bt => bt.onEnable
    buttonsDisabled.map bt => bt.onDisable
}

```


## Accept

### Accept Input
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
