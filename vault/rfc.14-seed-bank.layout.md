---
id: 6fb5ae82-dec6-41c5-813f-33639b73c447
title: Layout
desc: ''
updated: 1623278985768
created: 1623278705019
---

## Seed Layout
```
└── seed
    ├── seed.yml
    ├── README.md
    ├── LICENSE.md
    └── vault
        └── ...
```

## Seed with Workspace 

A seed, when published, can also be a workspace. Add a `dendron.yml` file to make this happen

```
└── seed
    ├── dendron.yml
    ├── seed.yml
    ├── README.md
    ├── LICENSE.md
    └── vault
        └── ...
```

- dendron.yml
```yml
vaults:
  - fsPath: vault
```


## Workspace with a seed

- file layout
```
.
└── workspace
    ├── dendron.yml.yml
    ├── vault
    └── seeds
        └── seed1
            ├── seed.yml
            └── vault
```

- dendorn.yml

```yml
seeds:
  seed1: {}
vaults:
  - fsPath: vault
  - fsPath: vault
    seed: seed1
```

- dendron-code.workspace
```json
    "folders": [
        {
            "path": "vault",
        },
        {
            "path": "seeds/seed1/vault",
            "name": "seed1
        }
    ],
```
