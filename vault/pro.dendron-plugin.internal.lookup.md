---
id: f528e8ad-a3f9-4f66-af1d-0af400014383
title: Lookup
desc: ''
updated: 1621041806322
created: 1610205567544
---
## Summary

## Lookup

### show
- src/components/lookup/LookupControllerV2.ts

```ts
show({value}) {
    opts :=

    quickPick =:

    provider =: opts
    // set buttons
    @refreshButtons
    @updatePickerBehavior 
    ...
    provide.provide
    ...
    quickPick.show
}
```

### updatePickerBehavior
- paarms: value

```ts
@updateBehaviorByEffect
@updateBehaviorByNoteType
quickPick.onCreate = () => {]}
...
@onUpdatePickerItem

```

### updateBehaviorByNoteType

```ts

onUpdateValue = 

```

### provide

- src: src/components/lookup/LookupProviderV2.ts

```ts

picker.onDidAccept =:
...
picker.onDidChangeValue = @onDidChangeValueDebounced

```

### onUpdatePickerItem

```ts
onUpdatePickerItem {
    picker.busy = true
    if picker.justActivated {
        modify picker value to be current parent
    }

    @showRootResults if querystring = ""

    items = picker.items
    updatedItems = filterDefault(items)
    updatedItems = createPickerItemsFromEngine()

    // check for single letter queries
    if no activeItems and querystring.length = 1  {
        picker.items = updatedItems
        return;
    }

    if $noteQuery {
        // add schema to suggestion
        // ...
    }

    // empty results
    if !updatedItems {
        return
    }
}
```

### createPickerItemsFromEngine

- see [[queryNotes|pro.dendron-engine.internal.lookup#querynotes]]

```ts
createPickerItemsFromEngine {
    resp = await engine.queryNotes
    if resp.length > PAGINATE_LIMIT:
        resp.slice(0, PAGINATE_LIMIT)
    ...
}
```

