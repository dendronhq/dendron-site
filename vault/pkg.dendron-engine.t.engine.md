---
id: T1p8qUHJyooO1aKlBNa1X
title: Engine
desc: ''
updated: 1631658755106
created: 1631658445346
---


## Connector

How external applications connect to the dendron engine


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