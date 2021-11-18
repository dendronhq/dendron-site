---
id: PZ3IzgdeZBbFRvalzI9fp
title: Internal
desc: ''
updated: 1637203158354
created: 1630426129273
---

## Summary

This describes the logic for Note Lookup

## State Diagram

```mermaid
stateDiagram-v2
    [*] --> LookupCommand

    state LookupCommand {
        [*] --> run
        run --> gatherInput
        gatherInput --> prepareQuickPick
        gatherInput --> constructProvider
        gatherInput --> enrichInput
        enrichInput --> subscribe
        enrichInput --> subscribedToListener
        subscribedToListener --> showQuickPick
        lookupExecute --> [*]

      state Controller {
        prepareQuickPick
        prepareQuickPick --> gatherInput
        showQuickPick --> onUpdatePickerItems
        showQuickPick --> [*]
      }

      state Provider {
        constructProvider --> gatherInput
        onUpdatePickerItems --> updatePickerItems
      }

      state Quickpick {
        state updatePickerItems <<choice>>
        updatePickerItems --> fetchRootResults: if qs = ""
        updatePickerItems --> [*]: if noChangeValue(picker)
        updatePickerItems --> fetchPickerResultsp
        fetchRootResults --> [*]
      }

    }

    state HistoryListener {
      state listen <<choice>>
      subscribe  --> listening
      listening --> listen
      listen --> done : if action = done
      listen --> done : if action = changeState & data = hide & !picker.pending
      listen --> done : if action = error
      listen --> listening: otherwise
      done --> [*]
    }

    HistoryListener --> lookupExecute
```


## Steps
- [[Gather Input|pkg.dendron-plugin.t.lookup.internal#gather-input]]
  - [[Prepare Quickpick|pkg.dendron-plugin.t.lookup.internal#prepare-quickpick]]
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
  - [[OnAccept|pkg.dendron-plugin.t.lookup.internal#onaccept]]


## Code

### Gather Input

- this method is responsible for configuring and instantiating the lookup controller and provider
  - controller controls presentation of the quickinput
  - provider controls the data retrieval behavior 
  - on success, will return the following [response type](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/components/lookup/LookupProviderV3.ts)
  - NOTE: because we can't simply block on `showQuickInput`, we return a promise that listens to a `lookupProvider` event with the corresponding `id` of the particular command

- src/commands/NoteLookupCommand.ts
```ts
gatherInputs {

    lc = this._controller = LookupControllerV3.create(buttons:[...], ...)
    @provider = new NoteLookupProvider("lookup", {
        allowNewNote: true,
        ...
    })
    lc.prepareQuickPick
}
```

#### NoteLookup Provider

- src/components/lookup/LookupProviderV3.ts
```tsx

create {
    @_onAcceptHooks = [];
}

provide {
}

onDidAccept {

    selectedItems := picker

    ...
    resp = @_onAcceptHooks.map hooks {
        hook(picker, selectedItems)
    }

    HistoryService.add(
        source: lookupProvider,
        action: done,
        data: resp
    )
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

### OnUpdatePickerItems

```ts
onUpdatePickerItems {

    // modify for just activated behavior
    if picker.justActivated && !picker.nonInteractive  {
        pickerValue = getQsForCurrentLevel
    }
    querystring := pickerValue
    ...
    items = [...picker.items]
    updatedItems = fetchPickerResults(querystring)
    ...

    shouldAddCreateNew = @allowNewNote && !queryOrig.endsWith(".") && !picker.canSelectMany && vaultsHaveSpaceForExactMatch
    if (shouldAddCreateNew) {
        entryCreateNew = createNoActiveItem
        if shouldBubbleUpCreateNew {
            ...
        } else {
            ...
        }

    }

    ...
    picker.items = updatedItems

}

```

### OnAccept

This gets triggered when the user selects a result form the quickpick.

Type Signature
```ts
quickpick: DendronQuickPick
selectedItems: NoteItemSelection[]
```

#### Pseudocode

- src/components/lookup/LookupProviderV3.ts
```ts
onDidAccept {
    selectedItems := picker

    selectedItems ??= fetchPickerResultsNoInput
    
    if hasNextPicker(picker)

    resp = @_onAcceptHooks.map { hooks
        hook(picker, selectedItems)
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

        if picker.hasSelectionProcessFunc {
            picker.hasSelectionProcessFunc(note)
        }

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

## Related
- [[Lookup|dendron://dendron.dendron-site/pkg.dendron-engine.t.lookup]]