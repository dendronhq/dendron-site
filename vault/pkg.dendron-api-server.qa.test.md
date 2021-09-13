---
id: X6NIty0XA4k6SPNONiW8Q
title: Test
desc: ''
updated: 1631384796429
created: 1629949768284
---

## Test:Unit

### Writing
<!-- Writing unit test -->
Tests can be found [here](https://github.com/dendronhq/dendron/blob/51633edcd0817c9b4aa18ff25f492f7a00e6e088/packages/engine-test-utils/src/__tests__/api-server/engine.spec.ts#L6-L6)

There's two ways of instantiating an express server for testing. 

1. Pass in the express server engine
  - you want to do this when you want to test methods from the DEngineClient [^1]
  - example [engine.spec](https://github.com/dendronhq/dendron/blob/51633edcd0817c9b4aa18ff25f492f7a00e6e088/packages/engine-test-utils/src/__tests__/api-server/engine.spec.ts#L6-L6)
  ```ts
  await runEngineTestV5(
    async () => {
      ...
    },
    {
      createEngine: createEngineFromServer,
    }
  ); 
  ```
2. Standup express server as an API endpoint ^goOLosrw7a1W
  - do this when you need to test an API that falls outside of the scope of DEngineClient [^1]
  - example: [workspace.spec](https://github.com/dendronhq/dendron/blob/1da7714f50acbba312a7e2e7a497f9e53920c96f/packages/engine-test-utils/src/__tests__/api-server/workspace.spec.ts#L7-L7)
  ```ts
    import { createServer, runEngineTestV5 } from "../../engine";
    test("ok: basic", async () => {

      await runEngineTestV5(
        async ({ wsRoot, vaults, engine }) => {
          // this creates the server
          const { port } = await createServer({ wsRoot, vaults });
          const payload = {
            uri: wsRoot,
            config: {
              vaults,
            },
          };
          // creates an API client
          const api = new DendronAPI({
            endpoint: APIUtils.getLocalEndpoint(port),
            apiPath: "api",
          });

          // calls the corresponding API
          let resp = await api.workspaceInit(payload);
          ...
        },
        { expect }
      );
    });
  ```

[^1]: [DEngineClient](https://github.com/dendronhq/dendron/blob/588fba05bbd9e3dabadd5e02d9fde72d80ed8148/packages/common-all/src/types/typesv2.ts#L445-L445)

### Executing
<!-- Running unit test -->

## Test:Integration

### Writing

### Executing

