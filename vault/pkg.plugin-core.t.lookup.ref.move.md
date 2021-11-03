---
id: KO6JTyFZY6XFWxHtvsgsG
title: Move
desc: ''
updated: 1635974893294
created: 1635974821993
---

## Pseudocode

- loc: src/commands/MoveNoteCommand.ts

```tsx
gatherInputs {
    lc = LookupControllerV3.create
    provider = new NoteLookupProvider("move", {...})
    provider.registerOnAcceptHook(ProviderAcceptHooks.oldNewLocationHook)
}
```

### oldNewLocationHook

```

```