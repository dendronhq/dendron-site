---
id: 3uqYHyu7UDiFacxVn1FwB
title: Dev
desc: ''
updated: 1628466495227
created: 1628466027880
---

## Getting Started

In order to use the graph in development, there are three main processes that should be running:

1. `./bootstrap/scripts/watch.sh`: Compiles code files during development when changed
2. `launchEngineServer`: Necessary during development to use a development Next.js site. Change directories to `test-workspace` and run `env LOG_LEVEL=info dendron launchEngineServer --init --port 3005`.
3. `yarn dev`: Run the Next.js server. Run this command while in the `dendron-next-server` package to start the server.

If you'd like to debug or develop while testing in a directory outside of `test-workspace`, make sure the following properties are set in `dendron.yml`:

```yaml
dev:
  enableWebUI: true
  nextServerUrl: 'http://localhost:3000'
  engineServerPort: 3005
```
