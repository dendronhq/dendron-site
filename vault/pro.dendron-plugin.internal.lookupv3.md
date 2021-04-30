---
id: 75dced84-4ebb-42c1-92bc-a5ed601446a2
title: Lookupv3
desc: ''
updated: 1619740973806
created: 1619740761993
---


- src/components/lookup/LookupControllerV3.ts
```ts
show {
    provider.provide
}
```

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
gatherInputs {
    ...
    subscribev2(lookupProvider) {
        data = event.data;
        return {...}
    }
}
```