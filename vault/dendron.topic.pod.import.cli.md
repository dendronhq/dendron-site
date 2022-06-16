---
id: 8u22iemj3j2bhgukmyxx16y
title: Import Pod CLI
desc: 'Use pods to import your notes from another pod type'
updated: 1655309563232
created: 1655309563232
---

## Summary

{{fm.desc}}

## Usage

```sh
use a pod to import notes

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
- Import notes from FilePod

```sh
dendron importPod --podId dendron.markdown --wsRoot . 
```
