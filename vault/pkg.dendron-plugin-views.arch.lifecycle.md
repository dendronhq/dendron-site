---
id: lZSr7StwPU5ukltzLg4mL
title: Lifecycle
desc: ''
updated: 1636433012356
created: 1636432981026
---



## Browser Mode - Startup

1. User runs `yarn:start` 
    This runs the following tasks:
    ```json
    "yarn build:index && node scripts/start.js"
    ```
    - NOTE: `build:index` generates the `index.html` file that is used to load the plugin. More details in [[Build Index|dendron://dendron.dendron-site/pkg.dendron-plugin-views.ref.build-index]]
1. Remaining steps are described in [[view startup|#view-startup]]


## IDE Mode - Startup

TODO


## View Startup

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