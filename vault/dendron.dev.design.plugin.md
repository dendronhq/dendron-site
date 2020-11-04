---
id: 2d0f95dd-89f9-4f7b-a945-acf059b07717
title: Plugin
desc: ''
updated: 1604341966162
created: 1599073669594
stub: false
---

# Summary

The plugin is the code responsible for the vscode bindings between the dendron engine and vscode.


## Init

- file: plugin-core/src/_extension.ts

```ts
_activate {
    ws :=

    if ws.isActive {
        port = startServer
        updateEngineAPI(port)
        startLSPClient
        ws.reloadWorkspace
        ws.activateWatchers
    }

}
```

- reloadWorkspace
```ts
reloadWorkspace {
    ws.reloadWorkspace
    if isFirstInstall {
        showTutorial
    }
    postReloadWorkspace
    emit(extension, initialized)
}
```

- postReloadWorkspace
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


## Welcome Message

- file: plugin-core/src/_extension.ts
```ts

showWelcomeOrWhatsNew {
    previousVersion := config.get(dendron.version)
    version :=

    // 1st install
    if !previousVersion {
        config.set(GLOBAL_STATE.VERSION, version)
        config.set(GLOBAL_STATE.VERSION_PREV, 0.0.0)
        return showWelcome()
    }

    // not 1st install
    if (version != previousVersion) {
        config.set(GLOBAL_STATE.VERSION, version)
        config.set(GLOBAL_STATE.VERSION_PREV, previousVersion)
        showInformationMessage(dendron has upgraded)

    }
}

```


## SetupWorkspace
- note: `dendron.code-workspace` is completely overwritten when running setup