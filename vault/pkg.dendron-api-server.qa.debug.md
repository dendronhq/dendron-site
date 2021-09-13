---
id: 9yF0IDLdWksfkmas
title: Debug
desc: ''
updated: 1631385177191
created: 1627140555421
---

## Components

### Tests
Tests that use the [[engine server|pkg.dendron-api-server.qa.test#writing]] connect to a dynamically created express server when making api calls. These calls can be hard to debug. If you want to step through the server side code, pass in `createEngineByConnectingToDebugServer` to the tests instead while testing

```diff
createEngineByConnectingToDebugServer
  await runEngineTestV5(
    async () => {
      ...
    },
    {
-        createEngine: createEngineFromServer,
+        createEngine: createEngineByConnectingToDebugServer,
    }
  ); 
```

In order to debug, [[launch the debug server|pkg.dendron-api-server.qa.debug#^vLg6HUbLAzne]]. Afterwards, follow regular debugging instructions as described in [[debugging|dendron.dev.qa.debug]]. 

### Existing Workspace
1. Launch the server using the build task `start debug server` launch task ^vLg6HUbLAzne
2. Update the workspace settings of Dendron to use a running server through the following workspace setting `dendron.serverPort": 3005`
3. Reload the workspace for the settings to take affect

![debug task](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/api-debug.png)
