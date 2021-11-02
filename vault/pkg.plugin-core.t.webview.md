---
id: bxF3WklJUyFBPmAqhNvlZ
title: Webview
desc: ''
updated: 1635548450278
created: 1635542102371
---

## Summary

Describes how webview components work in Dendron

## Lifecycle

1. We initialize a webview with following javascript

```js

vscode = acquireVsCodeApi()
...

window.addEventListener("message", (e) => {
    switch(message.source) {
        case "webClient"
    }
});
```

...

1. Check if engine has been initialized, if not, initialize it

- location: common-frontend/src/features/engine/hooks.ts
```ts
useEngine(engineState) {
    if (engineState = "idle" && isEmpty(engineState.notes)) dispatch(initNotes
}
```