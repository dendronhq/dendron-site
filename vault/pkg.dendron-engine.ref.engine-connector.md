---
id: rEgLFb9EAJPi8Drvxkksq
title: Engine Connector
desc: ''
updated: 1637209649394
created: 1637209557293
---

## Summary

The Engine Connector describes how clients connect to the engine API ([[pkg.dendron-api-server]]). It is used by [[pkg.dendron-cli]] and [[pkg.plugin-core]].

## Pseudocode

### Initialization
- file: src/topics/connector.ts
```ts
EngineConnector.init(opts) {
    portOverride := opts

    if portOverride {
        @tryToConnect
        @initEngine
    } else {
        @createServerWatcher
    }
}

createServerWatcher {
    wsRoot := this

    port = getPortFilePath(wsRoot)

    while !@initialized {
        @connectAndInit
    }
}


connectAndInit {
    ...
    maybeEngine = @_connect
    if (maybeEngine)
        @initEngine
}

initEngine(opts) {
    port, engine := opts

    engine.sync
    @port = port
    @initialized = true
}
```
