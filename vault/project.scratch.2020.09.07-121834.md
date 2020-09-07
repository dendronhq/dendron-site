---
id: 012b49e8-7638-4856-afc2-2db3c6406a86
title: kevin response to jojo
desc: ''
updated: 1599506314235
created: 1599506314235
source: >
  -
  https://discordapp.com/channels/717965437182410783/735365126227493004/752606691518054450
---

# Log

## Jojo
@kevins8 vaults have somewhat sparse documentation, especially possible multi-vault setups. Let's say I'd like to separate work and home into distinct vaults, maybe even so that other vault is a symbolic link to dropbox or whatever. Would that work? Also, what happens if there's a filename collision across vaults?

## Kevin

multi-vault support is on the roadmap for this year. for naming collisions, i was thinking the following:
- by default, surface all results with the vault name in the prefix

say a user has the following vaults
```
.
└── workspace
    ├── kevin-vault
    │   └── python.hello.md
    └── jojo-vault
        └── python.hello.md
```

user enters the following lookup: `python.hello`

they should see the following result
```
python.hello - kevin vault
python.hello - jojo vault
```

we can also introduce a vault specific prefix (eg. {vault}/{path}) to un-ambiguously specify our result

user would type `kevin-vault/python.hello` to specify they want to access `kevin-vault`
