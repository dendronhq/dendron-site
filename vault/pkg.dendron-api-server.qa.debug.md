---
id: 9yF0IDLdWksfkmas
title: Debug
desc: ''
updated: 1633068132703
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

### Debugging api-server in another IDE
1. Start the api-server with debug port open:
  ```
    cd $DENDRON_REPO_ROOT/packages/api-server
    npm run start:integ:debug
  ```
  This starts api-server with port 9229 open.
2. Attach to api-server from your IDE. Example settings for InteliJ/WebStorm:
```
  Run/Debug Configuration:
    Attach to Node.js/Chrome:
      Host: localhost
      Port: 9229
      Attach To: Chrome or Node.js > 6.3 started with --inspect 
```

