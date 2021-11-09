---
id: 30Z8lwy9T7yq6LaU1QtYy
title: Arch
desc: ''
updated: 1636431461825
created: 1635705190399
---

## Summary

Dendron views are served using [Webviews](https://code.visualstudio.com/api/extension-guides/webview#loading-local-content)

We use [CRA](https://create-react-app.dev/) to generate a client side React App and customize the `webpack` file to generate one javascript bundle and one css bundle for each webview.


## Development Modes

When developing new views, there are two ways of doing development

- IDE Mode
- Browser Mode

### Browser Mode

![[dendron://dendron.dendron-site/pkg.dendron-plugin-views.concepts#^FIQf5ZoJXIBP:#*]]

Pros:
- realtime changes without running `webpack export`

Cons:
- not natively integrated into vscode, need to shim methods to access the running workspace

Browser mode is great for development speed but it means we're not acutally testing the view integration with VSCode. Instead, we need to manually call `postMessage` to simulate VSCode events. 

### IDE Mode

![[dendron://dendron.dendron-site/pkg.dendron-plugin-views.concepts#^OBOH23affA2J]]

Pros:
- full fidelity webview testing 

Cons:
- slow iteration time, exporting takes time
- takes longer to debug (need to launch vscode, launch a web view developer tools, and then inspect the view inside of there)


## Lifecycle 

### Browser Mode

1. User runs `yarn:start` 
    This runs the following tasks:
    ```json
    "yarn build:index && node scripts/start.js"
    ```
    - NOTE: `build:index` generates the `index.html` file that is used to load the plugin. More details in [[Build Index|dendron://dendron.dendron-site/pkg.dendron-plugin-views.ref.build-index]]
1. Remaining steps are described in [[view startup|#view-startup]]


## IDE Mode

TODO


### View Startup

1. Import a component and wrap it with its own DOM renderer
    - src/views/DendronNotePageView.tsx
    ```tsx
    import DendronNotePage from "../components/DendronNotePage";

    renderOnDOM(DendronNotePage)
    ```
1. renderOnDOM
    - this is a helper: wraps the component with the parent `DendronApp` container and renders it using `ReactDOM`
    ```tsx
    renderOnDOM(Component) {
        ReactDOM.render(
            {renderWithDendronApp(Component)}
        )
    }
    ```
1. renderWithDendronApp
    - wraps the component with `DendronVSCodeApp`
    ```tsx
    DendronApp {
        <Provider>
            <DendronVSCodeApp />
        </Provider>
    }
    ```
- DendronVSCodeApp
    ```tsx
    DendronVSCodeApp {

        useEngine
        useEffect {
            postVSCodeMessage
        }
        useVSCodeMessage {
            ...
        }
    }
    ```


1. Component
    - src/components/DendronNotePage.tsx

### Change Active Editor

- DendronVSCodeApp
```tsx
useVSCodeMessage(msg) {
    switch(msg) {
        case ON_DID_CHANGE_ACTIVE_TEXT_EDITOR {
            note, sync := msg

            if sync {
                dispatch(initNotes)
            }
            ...

            dispatch(setNoteActive(note))

        }
    }

}
```