---
id: 3b39c820-5250-48f4-935a-284f74a8930e
title: Configuration
desc: ''
updated: 1623342553640
created: 1623095865798
---


## seeds.yml

Configuration for seeds are kept in `seeds.yml`. It is located at the root of a vault.

### name
- required: true

This is the name of your seed. It has the format `{publisher}.{seed-name}`

### description

Description of the repository

### publisher

The name of the publisher

### root
- default: vault

Path to the vault. 

### version
- [[Next Phase ⏩|dendron._ref.status#next-phase-]]

The version of this vault. For the initial phase, all seeds will just pull from latest

### contact

#### name

#### email

#### url

### license

The license for this particular seed

### schemas

List of schemas to publish alongside the vault.

```
schemas: [dendron-site]
```

### repository

#### type
- choices: git

#### url
- eg: "ssh://git@github.com/dendronhq/dendron.git",

#### directory
- required: no
- eg: "packages/common-all"

## dendron.yml

Configuration added to `dendron.yml`

### seeds

What seeds a workspace depends on. When initializing a workspace with seeds, Dendron will automatically fetch the given vaults.

Optionally, you can provide the registry where this seed will be installed from. Unless specified, the default is `root` which is Dendron's public seed endpoint. In the future, we will populate this with additional properties (eg. version).

Format:
- {name-of-seed}: SeedConfig?

#### SeedConfig

##### registry
- default: `root`

Which registry to look at . Currently, the only option is `root` which is the default registry used by Dendron

##### addAttribution
- default: true
- type: boolean

When publishing this seed, should add attribution to the top of the page

## Examples

### Simple
```yml
name: dendron.vscode
```

### Workspace with two seeds
```yml
seeds:
    "dendron.vscode": {},
    "dendron.dendron-site": {},
```

- registry
```yml
dendron:
  dendron-site:
    src: git@github.com:dendronhq/dendron-site.git
  lang.npm:
    src: git@github.com:dendronhq/npm.git
```
