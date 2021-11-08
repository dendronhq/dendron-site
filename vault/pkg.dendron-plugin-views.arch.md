---
id: 30Z8lwy9T7yq6LaU1QtYy
title: Arch
desc: ''
updated: 1636323983730
created: 1635705190399
---

## Summary

Dendron views are served using [Webviews](https://code.visualstudio.com/api/extension-guides/webview#loading-local-content)

We use [CRA](https://create-react-app.dev/) to generate a client side React App and customize the `webpack` file to generate one javascript bundle and one css bundle for each webview.

## Development Modes

TODO

### Browser Mode

In browser mode, we start a webpack dev server in order to see changes in real time. 

Pros:
- realtime changes without running `webpack export`

Cons:
- not natively integrated into vscode, need to shim methods to access the running workspace

When running in browser mode, the expectation is to use it with the [[Test Workspace|dendron://dendron.dendron-site/dendron.dev.ref.test-workspace]] that comes within the monorepo.

The following components have different behavior when run in browser mode:

- src/hooks/index.tsx
```tsx
useWorkspaceProps {
    return [
      {
        port: 3005,
        // TODO: pass in from env
        ws: "/Users/kevinlin/code/dendron/test-workspace",
        browser: true,
        theme: "light",
      },
    ];
}
```

## Components
<!-- Major components -->

## Lifecycle
<!-- Major lifecycles -->

### Stylesheets

The stylesheets used come from multiple different sources.

They are build from 

```sh
yarn build:styles
```

This runs the following

- loc: scripts/buildStyles.js

Styles are written in:
* path.join("public", "static", "css", "themes")
* path.join("build", "static", "css", "themes")

The order that styles are applied:
- bundle (core styles)
- theme (theme styles)

### Webpack Build

#### Generate entry points

VSCode requires that all webviews be self contained. This is why we generate one entry point per view. 

Below is the webpack configuration that makes this happens.

- config/webpack.config.js
```js
entry {
    ...paths.appPages
}

```

- config/paths.js
```js
export {
    appPages: {
        notePreview: resolveApp("src/views/DendronNotePageView"),
        ...
    }
}
```

### View Startup

How does the view start

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