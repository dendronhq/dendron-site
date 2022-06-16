---
id: rmvbsf3t0fx130zlbqazwkm
title: Export Pod CLI
desc: 'Use pods to export your notes to another pod type'
updated: 1655286838041
created: 1655286838041
---

## Summary

{{fm.desc}}

## Usage


### Actions
The below provide an overview of the purpose of action the doctor command can run.

```sh
use a pod to export notes

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
  --podId           id of pod to use
  --showConfig      show pod configuration
  --genConfig       show pod configuration
  --podPkg          if specifying a custom pod, name of pkg
  --config          pass in config instead of reading from file. format is comma
                    delimited {key}={value} pairs
  --podSource       podSource[choices: "custom", "builtin"] [default: "builtin"]
```

<!-- ### Options -->

<!-- ### Actions -->

## Examples
- export note to a JSONpod

```sh
dendron exportPod --podId dendron.json --wsRoot . 
```