---
id: jjaarpk5z6qqptievefgak0
title: Publish Pod CLI
desc: 'Publish a note to a pod'
updated: 1655310044440
created: 1655310044440
---


## Summary

{{fm.desc}}

## Usage

```sh
publish a note

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

### Options

- `--query`: name of note to publish

<!-- ### Actions -->


## Examples
- Publish `dendron.md` note as Markdown

```sh
dendron publishPod --wsRoot . --podId dendron.markdown --query dendron
```