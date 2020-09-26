---
id: 012b49e8-7638-4856-afc2-2db3c6406a86
title: kevin response to jojo
desc: ''
updated: 1599506314235
created: 1599506314235
stub: false
source: >
  -
  https://discordapp.com/channels/717965437182410783/735365126227493004/752606691518054450
---

# Log

## Jojo
@kevins8 vaults have somewhat sparse documentation, especially possible multi-vault setups. Let's say I'd like to separate work and home into distinct vaults, maybe even so that other vault is a symbolic link to dropbox or whatever. Would that work? Also, what happens if there's a filename collision across vaults?

## Jojo

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


"why don't we just show all matches for an unprefixed link" - this would work inside vscode, but if the user just publishes the workspace with conflicting vaults, I guess the link must point to some single pre-selected place(?). Also, I think the intent behind the link is to point to a single location, so asking user to fix it would probably be reasonable.
There's probably all kind of complex scenarios that we could envision (e.g. what if the user would like to merge domains across vaults and show all merged notes in the published page as a merged web page?), but then again 99.9% of the real cases probably just want to use multiple folders and avoid conflicts. Showing errors would probably be the easiest and still sufficient solution.

### Kevin

coming back to this thread. agree with your conclusion. the other solution would be to generate a popup/intermediary page for links with multiple destinations and let the user choose.
e
for v1, would bias for what you suggested and error at build time. 
