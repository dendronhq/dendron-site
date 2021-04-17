---
id: b0313bed-3a7d-4368-bf60-e9f3d4e19c17
title: Lookup Modifiers
desc: ''
updated: 1618676177955
created: 1618674343209
---


### updatePickerBehavior
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


***

### _onAcceptNewNote
- see [[_onAcceptNewNote|dendron.pro.dendron-plugin.internal.lookup-createNewNote#_onacceptnewnote]]

### picker.onCreate