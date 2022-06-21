---
id: ppom8vmsp8xbh0zbq726dkn
title: Concepts
desc: ""
updated: 1655853165681
created: 1655853156473
---

---

id: chdawqol33tc986pwxdfst9
title: CLI
desc: ''
updated: 1655852891826
created: 1655341127405

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
