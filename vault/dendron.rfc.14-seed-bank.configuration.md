---
id: 3b39c820-5250-48f4-935a-284f74a8930e
title: Configuration
desc: ''
updated: 1623198863909
created: 1623095865798
---

## Summary

These are new configuration values that will be added to `dendron.yml`

### name
- required: true

This is the name of your seed. It has the format `{namespace}.{seed-name}`

#### description

Description of the repository

### version
- [[Next Phase ⏩|dendron.ref.status#next-phase-]]

The version of this vault. For the initial phase, all seeds will just pull from latest

### author

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

### seeds

What seeds a workspace depends on. When initializing a workspace with seeds, Dendron will automatically fetch the given vaults.

Optionally, you can provide the registry where this seed will be installed from. Unless specified, the default is `root` which is Dendron's public seed endpoint. In the future, we will populate this with additional properties (eg. version).

Format:
- {name-of-seed}: SeedConfig?

#### SeedConfig

##### registry
- default: `root`

Which registry to look at . Currently, the only option is `root` which is the default registry used by Dendron

##### visibility
- default: `private`

Identical to `visibilty for vaults`. 

![[dendron.ref.vaults#visibility,1:#*]]

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