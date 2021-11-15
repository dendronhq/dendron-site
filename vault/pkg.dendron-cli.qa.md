---
id: a49370b7-fe61-4174-bf85-f67d15fa35ff
title: Qa
desc: ''
updated: 1636974409693
created: 1614837254472
---

## Running locally built cli for development
When running the locally built cli in `$ROOT/packages/dendron-cli/lib/bin/dendron-cli.js`, run it with the `--devMode true` flag set. 

This will set the Segment client's source to `ide-dev` and let you debug CLI specific analytics as described in [[Segment Debug|dendron.sop.segment-debug]].

Note that running the cli without the flag means analytics will be sent to `ide-prod`, which will make it hard to debug and potentially affect the analytics result.

## Debug
To debug specific dendron-cli commands, run a CLI [[tasks|dendron.dev.ref.vscode#tasks]] from `dendron-cli/.vscode/tasks.json`

See the `build-site` inside `tasks.json` for an example.

Alternatively, you can use the following in the CLI
```sh
env LOG_LEVEL=debug node --inspect $ROOT/packages/dendron-cli/lib/bin/dendron-cli.js buildSite --stage dev 
```