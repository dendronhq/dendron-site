---
id: 23a1b942-99af-45c8-8116-4f4bb7dccd21
title: Dendron CLI
desc: ''
updated: 1617038588049
created: 1600033791071
---

## Summary
The Dendron CLI exposes Dendron's functionality via the command line. 

## Installation

```
npm install -g @dendronhq/dendron-cli
```

## Engine Commands

### doctor

Use doctor to perform specific fixes over your notes. 

- NOTE: the `fixFrontmatter` option is only available via the plugin at this time

```bash
doctor helps you fix your notes

Options:
  --version     Show version number                                    [boolean]
  --help        Show help                                              [boolean]
  --wsRoot      location of workspace                                 [required]
  --enginePort  If set, connecto to running engine. If not set, create new
                instance of Dendron Engine
  --action      what action the doctor should take
                            [array] [choices: "h1ToTitle", "h1ToH2"]
  --query       run doctor over a query                                 [string]
  --limit       limit num changes                                       [number]
  --dryRun      dry run                                                [boolean]
```

#### available actions

![[dendron.topic.commands#actions,1:#*]]

#### examples

- convert all `h1` tags to frontmatter `title` values for the `readings` hiearchy

```bash
dendron doctor --wsRoot . --action h1ToTitle --limit 10 --query "readings.*" 
```

- see log

```bash
LOG_LEVEL=info LOG_DST=stdout dendron doctor --wsRoot . --action h1ToTitle --limit 10 
```

### launchEngineServer

Launch the [[dendron server|dendron.roadmap.project.n.2020.server-migration]]. Useful for development purposes or to launch the server in a specified port

The CLI will also write out `.dendron.*` [[metadata files|dendron.ref.layout#file-tree]] in the workspace root just the same as the Dendron plugin. 

```
dendron launchEngineServer --wsRoot ~/Dendron/ --port 3005
```

## Publishing Commands

### buildSite

```bash
dendron buildSite

build notes for publication using 11ty

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace                             [required]
  --enginePort      If set, connecto to running engine. If not set, create new
                    instance of Dendron Engine
  --serve           serve over local http server      [boolean] [default: false]
  --stage           serve over local http server
                                       [choices: "dev", "prod"] [default: "dev"]
  --servePort       port to serve over                         [default: "8080"]
  --output          if set, override output from config.yml             [string]
  --custom11tyPath  if set, path to custom 11ty installation            [string]
```

#### Connect to Open Workspace

Normally, this command will spawn a new Dendron Engine that indexes your notes before building them for publication. You can skip this initial indexing if you have a current Dendron workspace running. 

In that case, the CLI can connect to the current engine instead of starting a new one using the following command. 

```bash
cd {root/of/workspace}
# .dendron.port has the port of the current running workspace
npx dendron buildSiteV2 --wsRoot . --stage dev --serve --enginePort `cat .dendron.port`
```

## Pod Commands

- NOTE: you can find pod ids in the [[pods|dendron.topic.pod]] page. Just add a `.import|.export` to the end of the id (eg. `dendron.pod.json.import`)

### Export Pod

- export a pod

- eg: Export notes to JSONPod

```
dendron exportPod --podId dendron.json --wsRoot . 
```

### Import Pod

- eg: Import notes from FilePod

```
dendron importPod --podId dendron.markdown --wsRoot . 
```

### Publish Pod

- eg: Publish a note as regular markdown

```bash
dendron publishPod --wsRoot . --podId dendron.markdown --noteByName dendron
```

