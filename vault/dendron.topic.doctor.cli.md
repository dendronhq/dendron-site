---
id: hhzzrqc2hgx6kwc07jc4oqt
title: Doctor CLI
desc: 'Fix your notes using doctor'
updated: 1655277913934
created: 1655277714552
---

## Summary

{{fm.desc}}

## Usage
> NOTE: the `fixFrontmatter` option is only available via the plugin at this time

```sh
doctor helps you fix your notes

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
  --action          what action the doctor should take
      [string] [choices: "fixFrontmatter", "h1ToTitle", "h1ToH2", "removeStubs",
              "createMissingLinkedNotes", "regenerateNoteId", "findBrokenLinks",
           "fixRemoteVaults", "fixAirtableMetadata", "addMissingDefaultConfigs",
                    "removeDeprecatedConfigs", "fixSelfContainedVaultsInConfig"]
  --query           run doctor over a query                             [string]
  --limit           limit num changes                                   [number]
  --dryRun          dry run                                            [boolean]
  --podId           podId used to export note(s) to Airtable            [string]
```

<!-- ### Options -->


### Actions
The below provide an overview of the purpose of action the doctor command can run.

#### h1ToTitle
![[dendron.topic.doctor#h1totitle,1:#*]]

#### h1ToH2
![[dendron.topic.doctor#h1ToH2,1:#*]]

#### removeStubs
![[dendron.topic.doctor#removeStubs,1:#*]]

#### createMissingLinkedNotes
![[dendron.topic.doctor#createMissingLinkedNotes,1:#*]]

#### regenerateNoteId
![[dendron.topic.doctor#regenerateNoteId,1:#*]]

#### findBrokenLinks
![[dendron.topic.doctor#findBrokenLinks,1:#*]]

#### fixRemoteVaults
![[dendron.topic.doctor#fixRemoteVaults,1:#*]]

#### fixAirtableMetadata
![[dendron.topic.doctor#fixAirtableMetadata,1:#*]]

#### addMissingDefaultConfigs
![[dendron.topic.doctor#addMissingDefaultConfigs,1:#*]]

#### removeDeprecatedConfigs
![[dendron.topic.doctor#removeDeprecatedConfigs,1:#*]]

#### fixSelfContainedVaultsInConfig
- Fixes issues in the `dendron.yml` when using/moving to a self-contained vault

## Examples

- convert all `h1` tags to frontmatter `title` values for the `readings` hierarchy

```sh
dendron doctor --wsRoot . --action h1ToTitle --limit 10 --query "readings.*" 
```

- see log

```sh
LOG_LEVEL=info LOG_DST=stdout dendron doctor --wsRoot . --action h1ToTitle --limit 10 
```