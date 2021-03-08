---
id: 1bce1c33-c14b-4e5e-b493-45683c8cf54f
title: Cook
desc: ''
updated: 1615092736145
created: 1610469139531
---

### Adding a new unified plugin
<!-- - [pr example](https://github.com/dendronhq/dendron/pull/260)  -->
<!-- ea648849f94528d8000a31fd8b89ca8c89de2598 -->

Resources:
- [video of pairing session](https://youtu.be/mHkx17akuCg)
- [commit from pairing session](https://github.com/dendronhq/dendron/commit/ea648849f94528d8000a31fd8b89ca8c89de2598)

Context:
- Dendron uses [remark](https://github.com/remarkjs/remark) and [rehype](https://github.com/rehypejs/rehype) to handle markdown and html transformations
- Dendron uses a series of [processors](https://github.com/unifiedjs/unified#processor) to group unified plugins 
- Dendron currently compiles markdown into output formats listed [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/types.ts#L28:L28)

Steps:

1. add the plugin to engine-server
    - NOTE: we are still using remark12 so make sure to install the remark12 compatible version of the plugin
    - instructions to add new packages [[here|dendron.dev.cook#install-a-new-package]]
1. update `src/markdown/utils.ts` in engine-server
    - import plugin and add it to the appropriate processor (most likely `procFull`)
1. write a test for the plugin. plugin tests are located in `engine-test-utils/src/__tests__/engine-server/markdown/`
    - example [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/markdown/container.spec.ts)
    - `createProcTests` is a special function that sets up a Dendron workspace and can help you run a unified processor for multiple output formats
    - your test should cover every output format that your plugin affects
    - best way to understand is by example, see the other tests in the same folder for additional examples of how to use this function
1. write the plugin implementation
1. make sure your tests pass
    - its helpful to use the `matchSnapshot` functionality that jest provides
    if you use the `checkVFile` helper function, this happens automatically
    - you can view snapshots in `__snapshots__/` folder which is relative to the test
1. add a flag in `DendronConfig` to toggle the plugin
    - by default, new plugins are opt-in
    - if the plugin only affects HTML output, you can put the option in `DendronSiteConfig`
1. go back into `src/markdown/utils.ts` and use the newly created config value
    - pass it in as an optional param in `proc*`
    - conditionally add plugin in config is present
1. add a test that makes sure the plugin doesn't take into affect if the config is not enabled 

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