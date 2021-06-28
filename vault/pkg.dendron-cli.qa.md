---
id: a49370b7-fe61-4174-bf85-f67d15fa35ff
title: Qa
desc: ''
updated: 1624851705289
created: 1614837254472
---

## Debug
To debug specific dendron-cli commands, run a CLI [[tasks|dendron.dev.ref.vscode#tasks]] from `dendron-cli/.vscode/tasks.json`

See the `build-site` inside `tasks.json` for an example.

Alternatively, you can use the following in the CLI
```sh
env LOG_LEVEL=debug node --inspect $ROOT/packages/dendron-cli/lib/bin/dendron-cli.js buildSite --stage dev 
```