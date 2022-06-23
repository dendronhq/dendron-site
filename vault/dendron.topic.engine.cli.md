---
id: chghz9bvq2wvwuzhojehf2w
title: Engine CLI
desc: 'Launch an instance of dendron engine'
updated: 1655632194693
created: 1655278431696
---

## Summary

{{fm.desc}}


## Usage
Launch the [[Dendron server|dendron.roadmap.project.n.2020.server-migration]]. Useful for development purposes or to launch the server in a specified port

The CLI will also write out `.dendron.*` [[metadata files|dendron._ref.layout#file-tree]] in the workspace root just the same as the Dendron plugin. 


```sh
launch instance of dendron engine

Options:
  --version      Show version number                                   [boolean]
  --help         Show help                                             [boolean]
  --wsRoot       location of workspace
  --vault        name of vault
  --quiet        don't print output to stdout
  --port         port to launch server                                  [number]
  --init         initialize server                                     [boolean]
  --noWritePort  don't write the port to a file                        [boolean]
  --fast         launch engine without indexing                        [boolean]
```

<!-- ### Commands -->

<!-- ### Options -->

## Examples

```sh
dendron launchEngineServer --wsRoot ~/Dendron/ --port 3005
```
