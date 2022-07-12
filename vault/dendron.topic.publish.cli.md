---
id: yQVhJtdQ40n3SLHJKAeeU
title: Publish CLI
desc: 'Commands for publishing your notes'
updated: 1655632041252
created: 1631401993170
---

## Summary

{{fm.desc}}

## Usage
```sh
dendron publish <cmd>

commands for publishing notes

Positionals:
  cmd  a command to run
                 [string] [required] [choices: "init", "build", "dev", "export"]

Options:
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
  --wsRoot     location of workspace
  --vault      name of vault
  --quiet      don't print output to stdout
  --dest       override where nextjs-template is located                [string]
  --attach     use existing dendron engine instead of spawning a new one
                                                                       [boolean]
  --noBuild    skip building notes                    [boolean] [default: false]
  --overrides  override existing siteConfig properties                  [string]
  --target     export to specific destination                           [string]
  --sitemap    generates a sitemap
  --yes        automatically say yes to all prompts
```

See [[dendron.topic.publish]] for more information about publishing your notes.

### Commands

#### init
Initialize Next.js template and all dependencies

#### build
Prepare notes for publication. Runs [[Next.js|dendron.topic.pod.builtin.nextjs]] pod in the background. 

#### dev
Builds notes and starts a local dev server. Behind the scenes, runs `dendron publish build && npx next dev`

#### export
Export notes as static HTML

<!-- ### Options -->
<!-- #### `--target {target}`
Export to specific destination

Values: 
- github: creates a `/docs` directory and export notes there. If a `docs` folder exists, will issue prompt before deleting contents -->

## Examples

- build and preview the site locally

```sh
dendron publish dev
```
- build your site to prepare for publication
![[dendron.topic.publish.cook.common#build-notes,1:#*]]

- override a default option while building
```sh
dendron publish build --overrides="siteUrl=foo.com"
```
