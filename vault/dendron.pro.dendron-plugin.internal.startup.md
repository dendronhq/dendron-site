---
id: 8d09cc3f-25e3-42a2-ac86-82806c0c8c65
title: Startup
desc: ''
updated: 1610160307560
created: 1610160007286
---

## Summary 
- check for dendron.code-workspace 
- start engine (local server that does indexing)
- reload workspace (connect to the local server)
- activate file watchers 

## Code
- file: plugin-core/src/_extension.ts


### Check for workspace 

```ts
_activate {
    ws := DendronWorkspace.getOrCreate

    if ws.isActive {
        port = startServer
        updateEngineAPI(port)
        startLSPClient
        ws.reloadWorkspace // 312
        ws.activateWatchers
    }

}
```

### Reload Workspace

```ts
// 49
reloadWorkspace {
    ws.reloadWorkspace
    if isFirstInstall {
        showTutorial
    }
    postReloadWorkspace
    emit(extension, initialized)
}
```

####  postReloadWorkspace

```ts
postReloadWorkspace {
    ws :=
    previousWsVersion = config.get(WORKSPACE_STATE.WS_VERSION)

    if previousWsVersion == 0.0.0 {
        execute(Upgrade)
        config.set(WORKSPACE_STATE.WS_VERSION, ws.version)
    } else {
        newVersion :=
        if (newVersion > previousWsVersion) {
            execute(Upgrade)
            config.set(WORKSPACE_STATE.WS_VERSION, ws.version)
            emit(extension, upgraded)
        }
    }
}

```

## Reference

### getOrCreate

```ts
if !_DendronWorkspace
    _DendronWorkspace = new DendronWorkspace
```

```ts
constructor {
    @_setupCommands
    ...
}
```

### startServer
- file: src/_extension.ts: 
- related: [[launch|dendron.pro.dendron-api-server.internal#launch]]

```ts
startServer {
    maybePort :=
    if !maybePort {
        launch()
    }
}
```

### updateEngine
- [[workspace.vaults|dendron.pro.dendron-plugin.internal#workspacevaults]]

```ts
class EngineAPIService {
    create {
        const vaults =
            DendronWorkspace.instance().vaults?.map((ent) => ent.fsPath) || [];
        DendronEngineClient.create({ vaults, ws, port, history })
    }
}
```

### workspace.vaults

```ts
get vaults {

}

```


### ws.reloadWorkspace

```ts
executeCommand(RELOAD_INDEX)
```
