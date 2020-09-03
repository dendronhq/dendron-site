---
id: 2d0f95dd-89f9-4f7b-a945-acf059b07717
title: Plugin
desc: ''
updated: 1599073669594
created: 1599073669594
---

# Summary

The plugin is the code responsible for the vscode bindings between the dendron engine and vscode.

# Upgrades
- [ ] oneV
- [x] oneV

## Flow

- loc: plugin-core/extension.ts
```ts
_activate(context) {
    if DendronWorkspace.isActive {
        ws.reloadWorkspace
        
        showWelcome if !context.globalState.DENDRON_FIRST_WS 
        HistorySerivce.add "initialized"

        const previousGlobalVersion = context.globalState.get GLOBAL_STATE.VERSION_PREV
        const previousWSVersion = context.workspaceState.get WORKSPACE_STATE.WS_VERSION

        // first time install
        if !prevVersion {
            execute UPGRADE_SETTINGS
            context.workspaceState.update(WS_VERSION, DendronWorkspace.version)
        } else {
            newVersion := 
            if prevVersion < newVersion {

            }
        }
    }


}

```