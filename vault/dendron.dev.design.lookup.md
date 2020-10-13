---
id: 99f7dd68-b2dc-46d0-a556-8a607223dc25
title: Lookup
desc: ''
updated: 1602392064100
created: 1602392064100
stub: false
---

# Lookup

## Lookup Command

- src: plugin-core/src/components/lookup/LookupControllerV2.ts

```ts
show {
    ...
    provider = new LookupProviderV2
    picker :=

    @updatePickerBehavior(provider, picker)
    quickPick.onDidTriggerButton = ...
    ...
    provider.provide(quickPick)
    ...
    quickPick.show
}
```

### updatePickerBehavior
```ts
updatePickerBehavior(quickpick, provider) {
    buttons := 
    selectedPath := buttons
    selectedSelection := buttons

    switch selectedPath {
        case journal {
            quickpick.value := 
            provider.onUpdatePickerItem(
                ....
            )
        }
    }

    switch selectedSelection {
        case {
            ...
        }
    }

}
```

### provide
- file: src/components/lookup/LookupProviderV2.ts

```ts
provider picker {
    picker.onDidAccept = @onDidAccept
    picker.onDidChangeValue = @onUpdatePickerItem
}

```