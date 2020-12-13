---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1607641499175
created: 1604539200840
---

## 0.19.2

### Features

#### Dendron Seed Bank

((ref: [[dendron.topic.seed-bank]]#seed bank,1))

#### Support refactor for multi-vault 

One of our most requested features for multi-vault is now out. Refactor will now work across multiple vaults. All rename operations take place in the same vault as the file being renamed (so a refactor operation that affects files in multiple vaults will end up renaming files within each vault). You can see an example of this below:

```
.
├── vault1
│   └── bond.one
└── vault2
    └── bond.two
```

- after refactoring `bond -> james`
```
.
├── vault1
│   └── james.one
└── vault2
    └── james.two
```

#### Support Specifying Vault Location when Creating a Note

((ref: [[dendron.topic.multi-vault]]#lookup,3:#*))

With this change, you can now pick the vault for new notes.  To enable,  add `lookupConfirmVaultOnCreate: true` in the dendron configuration. Instructions to do so below.

1. > Dendron: Configure (yaml)
2. add `lookupConfirmVaultOnCreate: true` so your configuration looks like the following:
```yml
version: 0
...
lookupConfirmVaultOnCreate: true
```

### Enhancements
- add aws to the seed bank ([818bc05](https://github.com/dendronhq/dendron/commit/818bc0510e3b3b99057ef7cda8d9c61be2b6ebc6))
- nicer refactor formatting ([0e7749a](https://github.com/dendronhq/dendron/commit/0e7749a175a0ce80903cde5c9773649779100a9c))
- add remote vault to gitignore if exist ([1c252db](https://github.com/dendronhq/dendron/commit/1c252db60c0ea69be8dd10c1768c2dd302711e13))
- initialize all remote vaults on startup ([1919fe4](https://github.com/dendronhq/dendron/commit/1919fe4e6d853d1f6ef63564ebbcc9af1e11a41a))
- write remote url to dendron config ([2a285ea](https://github.com/dendronhq/dendron/commit/2a285eacaeef8224d2a3530dc991b4977443c039))
- add github sponsor badge on github repository to recruit more [[environmentalists|dendron.community.roles#environmentalist]] 👨‍🌾 👩‍🌾


### Bug Fixes

- completion on schema suggestions ([223d6a5](https://github.com/dendronhq/dendron/commit/223d6a501bd9e51331d28e21d77408b7ca3fba50))

## 0.19.1

### Bug Fixes
- image preview regex match wrong range 