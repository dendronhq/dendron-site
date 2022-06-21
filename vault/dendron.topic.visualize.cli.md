---
id: ztfe0hyxje2z0x6qyv244ez
title: CLI
desc: ""
updated: 1655853503693
created: 1655853461335
templateId: 39menlcx30lpo1ci4px7aew
---

## Synopsis

```bash
dendron visualize

Positionals:

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace
  --vault           name of vault
  --quiet           don't print output to stdout
  --enginePort      If set, connect to to running engine. If not set, create new
                    instance of Dendron Engine
  --attach          Use existing engine instead of spawning a new one
  --useLocalEngine  If set, use in memory engine instead of connecting to a
                    server                                             [boolean]
  --out             Path to the output file

```

## Methods

### visualize

Produces a packed circles visualization in a svg file for each vault in the workspace. When `--wsRoot` is not provided, the command assumes the working directory as the workspace root. To specify the directory into which to add svg files, use `--out` option. Otherwise, the svg files are produced in the workspace root directory.
