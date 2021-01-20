---
id: 1bce1c33-c14b-4e5e-b493-45683c8cf54f
title: Cook
desc: ''
updated: 1611160607927
created: 1610469139531
---

### Connecting to the engine

```ts
import { DEngineClientV2, EngineConnector } from "@dendronhq/engine-server";

let dendronEngine: DEngineClientV2;
const connector = EngineConnector.instance();
if (_.isUndefined(connector._engine)) {
    return vscode.window.showInformationMessage(
    "Still initializing. Please close this window and try again after Dendron has been initialized",
    );
}
dendronEngine = connector.engine;
if (!engine) {
    engine = this.initMarkdownEngine({ sourceUri, dendronEngine });
}
```

### Querying notes by ID

- [type definitions](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/typesv2.ts#L362:L362)
```ts

engine.queryNote

```

### Query notes by file name
- note: make sure that the engine is initialized

- with vault
```ts
import {NoteUtilsV2} from "@dendronhq/engine-server";

const maybeNode = NoteUtilsV2.getNoteByFnameV4({
    fname: dirname,
    notes: nodes,
    vault,
});
```

- without vault (gets all notes with this name)

```ts
import {NoteUtilsV2} from "@dendronhq/engine-server";

const maybeNode = NoteUtilsV2.getNotesByFname({({
    fname: dirname,
    notes: nodes,
});
```

### Note Response

![[dendron.pro.dendron-engine.ref.note-response]]