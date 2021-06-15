---
id: 5f66bcc7-fcb5-4c83-917b-6e8c68a3fef7
title: Internal
desc: ''
updated: 1619646857277
created: 1619645454250
---

# Parse MD

- src/preview-content-provider.ts

```ts
initPreview {
    connector = EngineConnector.instance()
    if (!connector) { show("engine initializing")}
    ...

    generateHTMLTemplateForPreview(text)
}

```

- src/markdown-engine.ts

```ts
generateHTMLTemplateForPreview {
    @parseMD

}

parseMd {
    ...
    outputString = transformMarkdown
    ...
    MDUtils.procFull().processSync(outputString)
    ...
    html = this.md.render(outputString);
}
```

# Prince Export

- src/preview-content-provider.ts

```
princeExport {
    engine.princeExport
}
```

- src/markdown-engine.ts
```
princeExport {
    @parseMD

}

```
