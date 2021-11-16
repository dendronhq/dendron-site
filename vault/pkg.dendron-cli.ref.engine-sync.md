---
id: wJAlKZ0wSat0dDTzOAqqd
title: Engine Sync
desc: ''
updated: 1636919989684
created: 1636914823812
---

## Summary

How the CLI synchronizes data with the engine


## Lifecycle


- loc: src/commands/utils.ts
```ts
setupEngine(opts) {
    ...
    if opts.attach || opts.enginePort {
        con = new EngineConnector
        con.init

    }
}
```

- loc: src/topics/connector.ts
- class: EngineConnector
```ts
init(opts) {
    portOverride := portOverride
    engine = tryToConnect

    if portOverride {
        @initEngine
    } else {
        @createServerWatcher
    }
}

initEngine(opts) {
    init := opts

    if init { engine.init }
    else { engine.sync }
}

```
