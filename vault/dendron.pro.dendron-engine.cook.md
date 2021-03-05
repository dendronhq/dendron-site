---
id: 1bce1c33-c14b-4e5e-b493-45683c8cf54f
title: Cook
desc: ''
updated: 1614812191772
created: 1610469139531
---

### Adding a new unified plugin
<!-- - [pr example](https://github.com/dendronhq/dendron/pull/260)  -->

1. add the plugin to engine-server
    - NOTE: we are still using remark12 so make sure to install the remark12 compatible version of the plugin
    - instructions to add new packages [[here|dendron.dev.cook#install-a-new-package]]
1. update `src/markdown/utils.ts` in engine-server
    - import plugin and add it to the appropriate processor (most likely `procFull`)
1. write a test for the plugin. plugin tests are located in `engine-test-utils/src/__tests__/engine-server/markdown/`
    <!-- - eg. example test -->

Notes on testing:
- when testing `transformers`, `process` will run over the node that is passed in to the processor
- when testing `parsers` and `compilers`, `process` will run over the text that you pass into it 

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