---
id: 7cdd9a74-8b8f-4564-906b-c963bed34273
title: Dendron Next Server
desc: ''
updated: 1614924050218
created: 1604511741960
---
## Quickstart

1. follow instructions [[here|dendron.dev.setup]] to clone the repository and install dependencies
2. navigate to server package
   ```bash
   cd {repo-root}/packages/dendron-next-server
   ```
3. start server
   ```bash
   yarn dev
   ```
4. Open `dendron-next-server.code-workspace` to start editing the code

## Working with the Dendron Engine

If your working with the Dendron Engine (eg. fetching notes, config or schemas), you'll need to start an instance of the engine.

First, install the Dendron CLI
((ref:[[dendron.topic.cli]]#installation,1:#*))

Next, use the `launchEngineServer` command to start the server to an existing workspace

```
LOG_DST=/tmp/server.txt LOG_LEVEL=debug dendron-cli launchEngineServer --port 3005 --wsRoot ~/Dendron/
```

Create an `.env.local` file under `dendron-next-server` and add the following 

```
ENGINE_ENDPOINT_PORT=3005
```

Run `yarn dev` to start the next server 

