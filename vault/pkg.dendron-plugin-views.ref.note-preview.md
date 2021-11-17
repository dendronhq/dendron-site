---
id: tMdsz0dYNj3VgOvNAuEUY
title: Note Preview
desc: ''
updated: 1637109556919
created: 1637109406387
---


## Summary

How the Dendron Note Preview gets launched

## PseudoCode

- src/commands/ShowPreview.ts
```ts
execute {

    ...
    panel = createWebviewPanel

    ...
    panel.webview.onDidReceiveMessage

}

```