---
id: 8d09cc3f-25e3-42a2-ac86-82806c0c8c65
title: Startup
desc: ''
updated: 1630708608862
created: 1610160007286
---
## Summary

- check if we are in a dendron workspace
    - workspace can be a code workspace (a .code-workspace file) or a native workspace (folder with dendron.yml)
- depending on what sort of workspace we're in, Dendron will instantiate either a Dendron[Native|Code]Workspace
- start engine (local server that does indexing)
- reload workspace (connect to the local server)
- activate file watchers 

## Code

- file: plugin-core/src/\_extension.ts

### Check for workspace

```ts
_activate {
    ws := DendronWorkspace.getOrCreate

    if ws.isActive {
        port = startServer
        updateEngineAPI(port)
        ws.reloadWorkspace // 312
        ws.activateWatchers
    }

}
```

- related
    - [[Internal|pkg.dendron-api-server.internal]]

### Reload Workspace
- src/commands/ReloadIndex.ts

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

#### postReloadWorkspace

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

## showWelcome

```ts
showWelcomeOrWhatsNew {
    switch(extensionInstallStatus) {
        case INITIAL_INSTALL {
            showWelcome
        }
        ....
    }
}

showWelcome {
    welcomeContent := 
    view = createWebviewPanel(welcomeContent)

    view.on(msg => {

        switch(msg {
            case initializeWorkspace {
                SetupWorkspaceCommand().run(workspaceInitializer: TutorialInitializer)
            }
        })

    })
}
```

## SetupWorkspaceCommand

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

- file: src/\_extension.ts: 
- related: [[launch|pkg.dendron-api-server.internal#launch]]

```ts
startServer {
    maybePort :=
    if !maybePort {
        launch()
    }
}
```

### updateEngine

- [[workspace.vaults|pkg.dendron-plugin.internal#workspacevaults]]

- src/utils.ts
```
WSUtils.updateEngineAPI {
    EngineAPIService.create
}
```

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

