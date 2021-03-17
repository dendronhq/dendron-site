---
id: f528e8ad-a3f9-4f66-af1d-0af400014383
title: Lookup
desc: ''
updated: 1615940352067
created: 1610205567544
---

## Summary


## Code

### updateItems

```ts
onUpdatePickerItem {
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
- see [[queryNotes|dendron.pro.dendron-engine.internal.lookup#querynotes]]

```ts
createPickerItemsFromEngine {
    resp = await engine.queryNotes
    if resp.length > PAGINATE_LIMIT:
        resp.slice(0, PAGINATE_LIMIT)
    ...
}
```


### queryNotes