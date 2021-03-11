---
id: ed4162aa-5474-4483-9fbc-c0b505310c59
title: 0.1.X
desc: ''
updated: 1615427862023
created: 1610397097347
---
## 0.19.3

### Bug Fixes

- be able to name remote vaults ([6da3973](https://github.com/dendronhq/dendron/commit/6da39730f735f4700479f002f57d2a7802398ff5))
- doctor command shouldn't create stubs ([e812f34](https://github.com/dendronhq/dendron/commit/e812f34246d88b007fb45ca03443a74ac27a5e62))
- help command not working ([02fc08a](https://github.com/dendronhq/dendron/commit/02fc08a907e196b39c23db36b82565c15588673f))
- nested git repos not showing up in source control view ([37adc5e](https://github.com/dendronhq/dendron/commit/37adc5e528e0b9fa6c86105b39ebb40384023da4))
- clicking a stub on tree view would show a false error ([ea0e17e](https://github.com/dendronhq/dendron/commit/ea0e17e7ec8afed44cee1fd0fe442ba4c2064f92))

## 0.19.2

### Features

#### Dendron Seed Bank

((ref:[[dendron.topic.seed-bank]]))

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

((ref:[[dendron.topic.multi-vault]]#specify vault location when creating a note,1:#*))

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

## 0.18.2

### Features

- support image hover ([8fee313](https://github.com/dendronhq/dendron/commit/8fee313785dfc4ac2564f74911a4b51879be0673))

  ```
  - you can now hover over markdown image links and get the image preview
  ```

  <div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/82119bc9ee184e3ca8e619c3d7e48209" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Enhancements

- faster completion ([d9d4598](https://github.com/dendronhq/dendron/commit/d9d4598c1996fdb5eb24e4bda0e51e777b476f6e))

### Bug Fixes

- doctor errors when backfilling frontmatter ([862e917](https://github.com/dendronhq/dendron/commit/862e9173e92a2e5d964273bb87c19e79177a6200))
- properly parsing links that start at beginning of line ([b2dbdfc](https://github.com/dendronhq/dendron/commit/b2dbdfc9e49aa1fa74d5097500eeaddf05bf7ccc))
- limit completion prompts to inside wiki links ([f49972e](https://github.com/dendronhq/dendron/commit/f49972ee436f9f637bd68729e702ba2169e68faf))
- adding local vault with fail if using relative path ([fb202e9](https://github.com/dendronhq/dendron/commit/fb202e91e501cfd5506fd73c9a005807954e48d3))
- make completion match the whole link ([d9d4598](https://github.com/dendronhq/dendron/commit/d9d4598c1996fdb5eb24e4bda0e51e777b476f6e))
- tree view containing out of date hierarchy
- alias notes will no longer display alias portion as part of the link when publishing

## 0.18.1

### Features

#### Support adding remote vaults

- commit: ([d7501b9](https://github.com/dendronhq/dendron/commit/d7501b9a5cb116faae64d26798cfd7ccfc73a4b0))

You can now natively add published Dendron git repos as a _remote vault_ inside Dendron. These vaults are stored in a custom `repos` folder underneath your `workspaceRoot`. Since a remote vault is just a git repo, you are able to perform all the usual git operations on it like `push`, `pull`, `merge`, and `blame`. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/ef3fa948460c4f2cb4f7a7b8242579d1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Enhancements

- support pods for multi-vault ([661fe21](https://github.com/dendronhq/dendron/commit/661fe218d448e6f32f86bf60dabe635b71d67251))
- much faster lookup performance for large vaults 🚀🚀🚀  ([3ddeba8](https://github.com/dendronhq/dendron/commit/3ddeba8a596be4bc9316e0cc5e63025d7bf4460f))
- support [[sibling nav|dendron.topic.commands#go-next-sibling]] for multi-vault ([235bfc7](https://github.com/dendronhq/dendron/commit/235bfc77505b403bf32c78ce3df6b7005c37dfba))

### Bug Fixes

- publishing fails in some cases when multi-vault is enabled ([0ebac81](https://github.com/dendronhq/dendron/commit/0ebac8191291f48ab42fbc30279e9615c96a5245))
- journal and scratch notes fail in some cases for multi-vault ([5c04ccd](https://github.com/dendronhq/dendron/commit/5c04ccd666511abb79554b7a24c02efd46d93c3a))
- multiple commands not working properly for multi-vault([fd5a381](https://github.com/dendronhq/dendron/commit/fd5a381674384588850b07b193fc0bf609abc0fd))

### House Cleaning

- breaking: the [[go to sibling|dendron.topic.commands#go-next-sibling]] commands have a new keyboard shortcut since the old one was conflicting with the vscode default. the new shortcuts are `ctrl+shift+]` and `ctrl+shift+[`

## 0.17.2

### Features

#### Dendron Web UI 🚧

During office hours and onboardings, many of you said how you loved Dendron's functionality but wished that it was a little easier to use, especially on the UI front.

This is why I'm excited to introduce Dendron's first Web UI - an interface build using modern web technologies integrated into VSCode. 

This initial launch features the Dendron Configuration editor. Prior to the UI, you would have to manually edit YAML to update the configuration. With the web ui, you no longer have to understand YAML and your changes will be validated before being saved. 

The configuration editor is just the first step in making Dendron easier to use and expect to see more updates on this front soon.

Note that the Web UI is still deemed experimental and functionality like keyboard shortcuts currently don't work.

Special thanks to [Tyler Nieman](https://github.com/tsnieman) for the UI work!

((ref:[[dendron.topic.commands]]#configure,1:#*))

### Enhancements

- update config commands ([44dce76](https://github.com/dendronhq/dendron/commit/44dce76b6fd447cd29a2f4f594632ef758eff927))
- enable rename with multi-vault ([e26b294](https://github.com/dendronhq/dendron/commit/e26b294e8bbe1e49e44318152c247595e82639bb))
- tree view and backlinks panel no longer appear when Dendron is not active (thank you [Christopher Corley](https://github.com/cscorley))

### Bug Fixes

- rename would fail if backlink existed at root note
- numerous fixes to refactor hierarchy

### House Cleaning

- the `Dendron: Configure` command will now launch the config editor with the web ui
- the old `Dendron: Configure` command as been renamed to `Dendron: Configure (yaml)`

## 0.17.1

### Features

#### Automatic Hover's for Links

- add hover provider ([8d19a1b](https://github.com/dendronhq/dendron/commit/8d19a1b47f114ae738f7483fd751b62f68b46d24))

You can now preview notes and references inside the editor as a hover without ever opening the link. Previews are compatible with note references and will show references as inlined markdown.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/aee387226d5c4bb0a4e38cee76a1aa3e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Bug Fixes

- **workbench:** copy header cmd will sometimes chop of last character ([34c2530](https://github.com/dendronhq/dendron/commit/34c253036cf959ef00620db9063c8de36ae9c848))
- **markdown:** relative links sometimes don't resolve ([c1ffa54](https://github.com/dendronhq/dendron/commit/c1ffa54ab780bec98cb5b322b4d0905cc26acce7))

### Work in Progress

- continued multi-vault compatibility for existing features
- integrating [Dendron's first Web UI component](https://github.com/dendronhq/dendron/pull/351) 
- backend changes to enable new [[multi vault layout|dendron.roadmap.project.n.2020.multi-vault#initialization]]
- heaps of performance and stability improvements

## 0.16.3

### Enhancements

- **language**: better completion on partial links  ([e7489b3](https://github.com/dendronhq/dendron/commit/e7489b324fb8b5b1a0cb3daf4bd33978073bd90a))
- **workbench**: remove color theme and minimap presets ([6b6bd8d](https://github.com/dendronhq/dendron/commit/6b6bd8d1b866bfe881b8ed7c341e5f2191bfa741))
- **publishing**: support relative links in publishing ([d7d612d](https://github.com/dendronhq/dendron/commit/d7d612d00bf0fedfc5e7dc9beda1e00927be83a9))
- **notes:** rename the frontmatter title when note is renamed ([32c77a1](https://github.com/dendronhq/dendron/commit/32c77a1a97162150b88c97c9266bd2a42a816aa0))
- **workbench:** auto upgrade deprecated workspace settings

### Bug Fixes

- **language**: re-enable preview functionality when peeking at a definition ([afe71c4](https://github.com/dendronhq/dendron/commit/afe71c41daff3acc935cb5bed7b51d20ef8e6267))
- **language**: creating a note by going to its definition now respects schema templates
- **workbench**: initialize dendron in the absence of a workspace file ([c1aabb4](https://github.com/dendronhq/dendron/commit/c1aabb4a6b2084990269ea169c1a90d800b430c3))
- **workbench**: cancel adding a vault if input is blank ([86baed6](https://github.com/dendronhq/dendron/commit/86baed6e0938132709e4cfbd2008f1f8fadc77cb))
- **pods:** publish issue when multi-vault is enabled ([cc50327](https://github.com/dendronhq/dendron/commit/cc503276a0ca0545e2793449f7382bc810216377))
- **ui:** note will show up in wrong place in treeview when multi-vault is enabled ([6daeebc](https://github.com/dendronhq/dendron/commit/6daeebc7bd2bbc68fc105766d30bc10444bcaf61))

## 0.16.2

- NOTE: with this change, Dendron now has all the functionality of **Dendron Markdown Notes** built-in (and then some). To make sure you get the new link functionality, uninstall Dendron Markdown Notes

![uninstall ](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/etc.install.jpg)

### Features

#### Support Relative Wiki Links

You can now navigate to a specific section within a note using relative wiki links: `[[foo#header]]` 

Note that the header is expected in [github slug](https://github.com/gosimple/slug) format. This means that spaces and special characters should be replaced with `-`. 

- **NOTE**: Relative wiki links currently don't work in the markdown-preview

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b21501b47e64449882a369590a630d7f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Copy Relative Wiki Links

Similarly to copying a note ref, if you select any part of a header while running `Copy Note Link`, a relative wiki-link will be automatically generated.

((ref:[[dendron.topic.commands]]# copy note link:# *))

#### All link features are now multi-vault aware

Link related features like navigation and auto complete can now detect notes in all vaults. 

When the same note exists in multiple vaults, Dendron will show you a prompt to pick the note you want to navigate to.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/1108e35e262c4d428629d0a4034090d0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Link Completion with Aliases

You can now auto complete notes that have aliases. This was a common issue for folks that were using [[pretty tags|dendron.topic.tags]]

### Bug Fixes

- Issue with creating notes with same name in a new vault

### House Cleaning

- remove dependency on markdown-notes

## 0.16.1

### Bug Fixes

- new dendron installation missing welcome note

## 0.15.3

### Features

#### Better Lookup Performance 🚀 🚀 🚀

We've made a whole bunch of optimizations to make lookup hum. You should notice everything about it feel a little faster now

Changelog:

- **lookup:** multiple lookup optimizations([f14eed8](https://github.com/dendronhq/dendron/commit/f14eed8da822eb75f130edb7364a1f9f0c2fe354))
- **lookup:** intelligently debounce queries ([2f0ac56](https://github.com/dendronhq/dendron/commit/2f0ac56bd6f64d0b99fcb82d6effa9f062d18fc2))

### Enhancements

- update getting started ([af5dde9](https://github.com/dendronhq/dendron/commit/af5dde91d153ce46089c8688caec0e583eddb939))
  - instead of 100+ notes, new vaults will be initialized with a single quickstart note (with links to the 100+ notes)

- better logging ([2d7fd78](https://github.com/dendronhq/dendron/commit/2d7fd780d3c548a362dcf01a2620409b1bcdff3e))
  - let logs talk for you the next time you submit [an issue](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title) (no 🌲 harmed in this process) 

- nicer error messages ([e1e87a1](https://github.com/dendronhq/dendron/commit/e1e87a16186b1e8b8aae6f77fe8a2c5c865c4071))
  - we'll let you know if you need to submit an issue instead of giving you the silent treatment

- keep old log files ([3f1362c](https://github.com/dendronhq/dendron/commit/3f1362c224ff7dae5de721dd2f2c8cba22db4d84))
  - dendron currently wipes all logs on startup. this change makes it keep around the last log for debugging purposes

### Bug Fixes

- creating scratch notes can sometimes fail ([c31c611](https://github.com/dendronhq/dendron/commit/c31c611d975b8eeee4f63abec742edf88dac66ac))
- sync issues btw server and client nodes that would cause certain commands to fail  ([a446aba](https://github.com/dendronhq/dendron/commit/a446aba9d931d7732553e1ecb43302208d6f798a))

## 0.15.2

### Features

#### Experimental Multi-Vault Support

(Early Experimental ) [[Multi Vault Support|dendron.roadmap.project.n.2020.multi-vault]]  is here! Multi Vault lets you add additional [vaults](https://dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#vaults-) to your Dendron workspace.

Each vault is logically separate (they reside in separate directories) but can be universally queried using lookup.

Multi vault enables a bunch of exciting use cases.

((ref:[[dendron.roadmap.project.n.2020.multi-vault]]#use cases,1:#*))

Currently, the following commands are supported with multi-vault:

- Lookup 
- Deleting a Note
- Navigating to a note using Tree View 

Other commands like rename/refactor will still work when performed in your primary vault. They will probably not work if performed against a note not inside your primary vault.

When you use **Lookup** to create a new note with multi vault, the note will be created inside the same vault as the current opened note. **Lookup** will also show you the vault that each note belongs to while performing lookup.

Currently known issues (with supported commands):

- unable to create a note using Lookup that has the same name as an existing note inside **any** of your vaults 
- unable to navigating to the root of a vault using Tree View

#### Vault Add Command

Add a new vault to your workspace. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b4171372f9794dd7be609c043f343fa3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Vault Remove Command

Remove a vault from your workspace. Note that the underlying files wil **not** be deleted - the vault will lose its association with your workspace.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/307effc22b8d4c59a32933529a8393e1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Enhancements

### Bug Fixes

- **engine:** init with empty config won't throw error ([7beb90f](https://github.com/dendronhq/dendron/commit/7beb90fa243bc73563a3ce16b5305345f7348d9f))
- **engine:** don't delete old note if new note wasn't created by rename ([de44f9f](https://github.com/dendronhq/dendron/commit/de44f9f4d38651d75433ae885fdc78bb762fb1f6))
- **notes:** fix issue when importing note that already exists ([a08a34a](https://github.com/dendronhq/dendron/commit/a08a34a0563bb4047bd9c7cfc5f2bf150873fdc8))

### House Cleaning

- vault metadata will be added to `dendron.yml`
- `dendron.yml` comments will be stripped on workspace initialization

## 0.15.1

### Features

#### Wildcard Note Ref Links

- **refs:** wildcard note ref links ([98a1177](https://github.com/dendronhq/dendron/commit/98a117715a967492ab9d7b8749d964b07bde4055))

((ref:[[dendron.topic.refs]]#wildcard note refs,1))

#### Dendron: Configure Command

- **workbench:** add configure command ([db51dc3](https://github.com/dendronhq/dendron/commit/db51dc35864d0c4434f70620ef0e88451c198fa4))

This is a quick way to update the `dendron.yml` file. You can run it by using `Dendron: Configure`

### Bug Fixes

- **notes:** fix issue when importing note that already exists ([a08a34a](https://github.com/dendronhq/dendron/commit/a08a34a0563bb4047bd9c7cfc5f2bf150873fdc8))

### House Cleaning

- add `.dendron.ws` file under workspace to store workspace specific metadata

## 0.14.2

### Features

### Enhancements

- **pods:** better markdown import pod  (d1eaa264)
  - address multiple edge cases that would cause import pod to fail
  - auto-convert wiki-links from folder-based systems like obsidian into dendron
- **cli:** launch engine server using cli ([25eae3f](https://github.com/dendronhq/dendron/commit/25eae3fddd6a2d26dcf9e2f3e664b377c2cca978))

((ref:[[dendron.topic.cli]]#launchengineserver:#*))

- **workspace:** write server port in workspace ([6a0ff84](https://github.com/dendronhq/dendron/commit/6a0ff845ebbf010073b271123779fc3f56ac2821))
  - used by bundled extensions to talk to dendron server
- **engine:** add sync method ([ec58d39](https://github.com/dendronhq/dendron/commit/ec58d395003640384b7764f4f8b483429cc1ece3))
  - used by bundled extensions to talk to dendron server

### Bug Fixes

- **engine:** properly handle \* in refs when refactoring ([704a14f](https://github.com/dendronhq/dendron/commit/704a14f17196e18cb5b26f5fc98ed9f8d492e16a))
- **workbench:** fix daily journal note command signature ([5ec96ef](https://github.com/dendronhq/dendron/commit/5ec96efd9a006e5e5999f2704dfb3d1e97e60a5c))

## [0.14.1](https://github.com/dendronhq/dendron/compare/v0.14.1-alpha.7...v0.14.1) (2020-11-05)

### Features

#### Lookup Copy WikiLink Modifier

- **lookup:** copy note link cmd ([e38743d](https://github.com/dendronhq/dendron/commit/e38743ddbac8486f2ac778bd546a6373a15a4f6d))

((ref:[[dendron.topic.lookup.modifiers]]#copywikilink,1:#*))

#### Lookup Multi-Select Modifier

- **lookup:** support multi-select ([b409c05](https://github.com/dendronhq/dendron/commit/b409c05d3b19797de714dbf10b6a4249758eae8a))

((ref:[[dendron.topic.lookup.modifiers]]#multiselect,1:#*))

### House Cleaning

#### Code Cleanup

With the server migration behind us, we took some time to make Dendron more hygenic by removing old code and consolidating existing code. All in all, we eliminated ~8k lines. If you are currently working on a branch, I suggest you merge with master to get the latest changes 😅 

- before cleanup

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                            73              6              0          72744
TypeScript                     246           3089           3089          31790
Markdown                        50           4682              0           5947
JavaScript                      16            168             76           1349
Bourne Shell                    23             40              9            179
YAML                            13              3              3            158
CSS                              2             17             32             72
HTML                             1              0              0             14
SVG                              1              0              0             12
-------------------------------------------------------------------------------
SUM:                           425           8005           3209         112265
-------------------------------------------------------------------------------
```

- after cleanup

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                            73              6              0          72745
TypeScript                     224           2343           1810          24352
Markdown                        34           4772              0           5974
JavaScript                      16            168             76           1349
Bourne Shell                    24             40              9            181
YAML                             6              3              3             78
CSS                              2             17             32             72
HTML                             1              0              0             14
SVG                              1              0              0             12
-------------------------------------------------------------------------------
SUM:                           381           7349           1930         104777
-------------------------------------------------------------------------------
```

## 13.6

### Features

#### Add Contribute Command

- **workbench:** ([130a58a](https://github.com/dendronhq/dendron/commit/130a58a62cc40eb4178afac554f8f4ff30c93055))

((ref:[[dendron.topic.commands]]#contribute:#*))

#### Add Snapshot Capability to Dendron

- **workbench:**  ([3af64b7](https://github.com/dendronhq/dendron/commit/3af64b701d47ed28818d7e6017c758f63be617f0))

((ref:[[dendron.topic.capabilities.snapshot]]#Snapshots:#*))

## [0.13.5](https://github.com/dendronhq/dendron/compare/v0.13.4...v0.13.5) (2020-10-28)

### Bug Fixes

- **workbench:** tree view can delete notes with caps ([d37926d](https://github.com/dendronhq/dendron/commit/d37926d7f38d784f847a4c2a58fb75ba7c03b0e0))

## [0.13.4](https://github.com/dendronhq/dendron/compare/v0.13.4-alpha.1...v0.13.4) (2020-10-28)

### Features

#### Migrate Existing Workspaces to Server Mode

- commit ([d19b6ec](https://github.com/dendronhq/dendron/commit/d19b6ecb97fb60d8706e14f0181795113b5e108b))

This is the last phase in Dendron's server mode migration. All new workspaces are already running in server mode as well as well as users that have opted into it. This update transparently migrates remaining workspaces to server mode. 

As a reminder, [[server mode|dendron.roadmap.project.n.2020.server-migration]] is a re-architecture of Dendron that enables both better performance and a vast array of new features. 

Finally, we do have an escape valve in things something goes terribly wrong. You can set the following option to revert server mode behavior. If you end up using this, please also cut as [a ticket](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title=) or a message in [discord](https://discord.gg/QbKsNx). 

### Enhancements

- **notes:** selection2link will auto generate a title based on the selection ([9964339](https://github.com/dendronhq/dendron/commit/9964339138bde18dc022fdd62ce9ba9d529cfa2b))

- **workbench:** graceful failure on bad schema ([4db5064](https://github.com/dendronhq/dendron/commit/4db5064e4eef61d9c95b9abe34f2dec41550bd9d))
  - instead of refusing to initialize, Dendron will skip bad schemas and generate an error report post-startup

- **workbench:** nicer error messages  ([9e371e1](https://github.com/dendronhq/dendron/commit/9e371e132b565ae2abebaa2bf1307a5a03a91b9b))
  - certain errors now have human friendly messages instead of JSON goop

### Bug Fixes

- **workbench:** read json config with comments ([1741553](https://github.com/dendronhq/dendron/commit/1741553695b1c7cced54bf04b26700076a38a19c))
  - Dendron gets sad if your workspace has comments

### Community

#### Horticulturalist

Dendron now has a new role -> the **Horticulturalist**. These are folks who have contributed to the Dendron code base: 👨‍🌾👩‍🌾

Kudos to **@britt#3020** and **@lukecarrier#2081** for being the first to earn this distinction!

#### Dendrologist

Excited to welcome a new dendrologist --> @I'm a lightbulb#6986 

@I'm a lightbulb#6986 was one of our earliest users and one of the first to [publish](https://dendron.so/notes/3a82c5ff-7945-46ae-8bf9-3b2275fc6642.html#jacks-page) using dendron. 

As a reminder, dendrologist are active members of the community who are recognized with said title and a few additional discord super powers. 

## [0.13.3](https://github.com/dendronhq/dendron/compare/v0.13.3-alpha.1...v0.13.3) (2020-10-24)

### Features

#### Direct Child Filter

- **lookup:** support direct child filter ([1cae082](https://github.com/dendronhq/dendron/commit/1cae08294baa844c0c0ee3c8d390e337bd6172be))

((ref:[[dendron.topic.lookup]]#filter toggle,1:#*))

- you can create a keyboard shortcut to do a lookup with the direct child filter pre-selected
  ((ref:[[dendron.topic.lookup.modifiers]]#filtertype:#*))

### Enhancements

- **publish:** be able to set config for all hierarchies ([a27d94a](https://github.com/dendronhq/dendron/commit/a27d94a3c469a4efaf2ee8c2bca40a8a471773f2))
  ((ref:[[dendron.topic.publishing.configuration]]#config:#*))

- **schema:** add custom props from schema template ([5264544](https://github.com/dendronhq/dendron/commit/52645449b8e155e168baaac0fa4e99903efafcf0))

((ref:[[dendron.topic.schema]]#schema templates,1:#*))

- **workbench:** reload index re-create root if not exist ([c66e242](https://github.com/dendronhq/dendron/commit/c66e242bac91c73404a5dd21ed3813c0dc2f022b))
  - dendron requires `root.md` and `root.schema.yml` to start indexing and would previously throw an error if these files were deleted
  - this change will create these files within the vault instead of throwing said error

### Bug Fixes

- **comp:common-server:** don't throw error on missing log vars ([9d00e55](https://github.com/dendronhq/dendron/commit/9d00e55b2104efa7739ec94f0bb2793daa888450))
- **notes:** refactor will miss links in newly created notes ([c8a5dde](https://github.com/dendronhq/dendron/commit/c8a5dde2ca46e2402bc50b1a8f635d9fb5318c9d))
- **lookup:** don't update lookup text unless a _note btn_ is pressed ([30140f7](https://github.com/dendronhq/dendron/commit/30140f7a16c6fb5ab81a9eae8af13f17575c78f3))
- **workbench**: Doctor command will create two `doc` directories if no `doc` directory is found ([43f7bfc9](https://github.com/dendronhq/dendron/commit/43f7bfc9)) --> ( 🙏 thanks to [Britt](https://github.com/bs) for the pull request)

### House Cleaning

#### Dendron: Change Workspace will no longer create a workspace if no workspace exists

Previously, if you wanted to use an existing folder (aka vault) with a workspace, we recommended you run `Change Workspace` which would create a Dendron workspace **inside** the folder if it didn't exist. This turns out to be an anti-pattern that interferes with features like publishing which expect the workspace to be in a separate folder from its vaults.

## [0.13.2](https://github.com/dendronhq/dendron/compare/v0.13.2-alpha.2...v0.13.2) (2020-10-22)

### Features

#### Pod Publishing

- **pods:** add publish pod cmd ([8947a60](https://github.com/dendronhq/dendron/commit/8947a60cbc2e76f00d214a1913952c58db86f2f1))

In addition to **import** and **export**, you can now also **publish** notes with pods.

((ref:[[dendron.topic.pod]]#publish,1:#*))

#### Realtime Schema Validation

- **schemas:** realtime schema validation (server mode) ([42191bcd](https://github.com/dendronhq/dendron/commit/42191bcd))

You will now get a warning if you are trying to save a badly formatted schema.

### Enhancements

- **publishing:** preserve abbreviations ([06d9191](https://github.com/dendronhq/dendron/commit/06d91912b34bc5f81b20fce77652366c501865ec)) --> thank you [Luke Carrier](https://github.com/LukeCarrier) for the pull request
- **pods:** add json publish pod ([127dd7c](https://github.com/dendronhq/dendron/commit/127dd7c02a0081b027e06c40d6189904c5da0694))
- **pods:** add markdown publish pod ([127dd7c](https://github.com/dendronhq/dendron/commit/127dd7c02a0081b027e06c40d6189904c5da0694))
- **pods:** update placeholder text ([57a4af8](https://github.com/dendronhq/dendron/commit/57a4af8887404c21d07b45a3a565516bf73cc944))
- **refs:** render error when ref doesn't exist ([ba1be1a](https://github.com/dendronhq/dendron/commit/ba1be1a12c4a1742e93ab4058d0f132b320be539))

### Breaking

- `dendron.pod.file` has been renamed `dendron.markdown`
- `dendron.pod.json` has been renamed `dendron.json`

### Documentation Updates

#### Pods

Documentation for pods has been re-written to reflect recent changes with pods

((ref:[[dendron.topic.pod]]#pods:#*))

## [0.13.1](https://github.com/dendronhq/dendron/compare/v0.13.1-alpha.2...v0.13.1) (2020-10-21)

### Features

#### Generate table of contents when Publishing

- **publishing:** generate toc when publishing ([53ee270](https://github.com/dendronhq/dendron/commit/53ee270c89f530b9224f33a28dc811de7e5cb2ad))

((ref:[[dendron.topic.publishing.configuration]]#toc:#*))

- **publishing:** set frontmatter overrides globally when publishing ([782d637](https://github.com/dendronhq/dendron/commit/782d6374c55b00bcda36da9149fb2cedeac0c3d9))

### Enhancements

- **lookup:** add contrast btw note/schema lookup ([4faec8e](https://github.com/dendronhq/dendron/commit/4faec8e4548a80eb56469c46efadd608c26e0230))
    ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/change.lookup-note.jpg)
    ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/change.lookup-schema.jpg)

### Bug Fixes

- **publish:** issues with Publish command in server mode ([7f3789a](https://github.com/dendronhq/dendron/commit/7f3789a88a01465cca30efe3b3d261bf89a100df))
- **lookup:** re-enable schema suggestions on namespace ([56ee6c4](https://github.com/dendronhq/dendron/commit/56ee6c460dd562200931381923e72971681d1390))
- **workbench:** reload index will update tree view ([deadedc](https://github.com/dendronhq/dendron/commit/deadedc30358ee668806434196ddd45b74aff0cc))
- **lookup:** display schema id if title undefined ([6c7cc70](https://github.com/dendronhq/dendron/commit/6c7cc70cf85181b11654074e17672e39a44fb874))
- **seeds:** update replace merge strategy to really replace ([a02e08a](https://github.com/dendronhq/dendron/commit/a02e08a753c0603871a1ff76e6de78906a04b056))

## 0.12.11

### Features

#### Recursive Note References

((ref:[[dendron.topic.refs]]#recursive reference,1))

### Bug Fixes

- **time decorator lose position**: updating the frontmatter will cause the time decorator to sometimes lose its position
- **time decorator not updating**: turned off temporarily to investigate performance impact
- **rename note**: doesn't update all links in some cases

### Other

- we've created a **bug catcher** role for folks that reported bugs to Dendron. currently trying to backfill with all the people that have contributed bugs. feel free to ping me if I missed you and big thanks to the current bug catchers!

## [0.12.10](https://github.com/dendronhq/dendron/compare/v0.12.10-alpha.4...v0.12.10) (2020-10-16)

### Features

#### Rename and Refactor Commands an Order of Magnitude Faster Now (server mode) 🚀🚀🚀

These commands have been completely re-written and use a proper markdown parser to find links (vs many fragile regex statements). 
The re-write results in both much faster performance as well as a more correct implementation. 

### Enhancements

- **progress indicator on startup (server mode)**: loading indicator to help with large workspaces
- **rename command support (server mode)**: rename command is now available in server mode
- **refactor command support (server mode)**: refactor hierarchy command is now available in server mode
- **publish notes support (server mode)**: publish notes command is now available in server mode
- **archive command support (server mode)**: archive hierarchy is now available in server mode
- **doctor command support (server mode)**: doctor command is now available in server mode

### Bug Fixes

- **schema templates not working (server mode)**: issue where schema templates were not being applied

## [0.12.9](https://github.com/dendronhq/dendron/compare/v0.12.9-alpha.1...v0.12.9) (2020-10-15)

### Features

#### Human Friendly Timestamps (server mode)

Timestamps now have human friendly decorators on the side.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/daily.ts.jpg)

### Enhancements

- **copyAssets configuration**: when publishing, you can now toggle whether you want to copy assets or not
- **dump state**: dendron now has a `Dump State` command which will dump the internal state into the logs (useful for debugging)

### Bug Fixes

- **assets not being copied:** assets not copied on publishing when `assetsPrefix` was set
- **GoUp comman go to wrong note (server mode):** GoUp would sometimes try to open a stub node which would result in an error
- **Multiple workspaces result in bad timestamps (server mode):** Having multiple workspaces of the same vaults open could result in bad timestamps

### Documentation

((ref:[[dendron.guides.troubleshooting]]#error upgrading:#*))

## [0.12.8](https://github.com/dendronhq/dendron/compare/v0.12.8-alpha.2...v0.12.8) (2020-10-14)

### Features

#### Really update time in frontmatter (server only)

Dendron notes have frontmatter with an **updated** field. This field is supposed to show you the time in milliseconds of when the document was last updated. Until today's update, this field did not actually change  😅

```
id: 65b03213-d3d1-46c0-9881-a6280ed9bdeb
title: New
desc: ''
updated: 1602096212957
created: 1602096212957
```

Today's update makes **updated** update! 

### Enhancements

- **support BuildPod command (server mode)**: build pod now works when server mode is enabled

### Bug Fixes

- **navigating to special notes**: scratch/journal notes could fail to open if note already exists

### Other

((ref:[[dendron.topic.extensions]]#useful extensions))

((ref:[[dendron.guides.tips]]#copy and paste web content into dendron:#*))

((ref:[[dendron.guides.cook]]#mobile support:#*))

## [0.12.7](https://github.com/dendronhq/dendron/compare/v0.12.7-alpha.10...v0.12.7) (2020-10-13)

### Features

#### (Local) Server Side Indexing

Dendron can now index and manage your notes as a standalone **local** server independent from VSCode. 

This is part of the [[server migration milestone|dendron.roadmap.project.n.2020.server-migration]] which we took on for October. 

Dendron's server side indexing is a **complete rewrite** of the [[Dendron engine|dendron.dev.design.engine]] which powers Dendron's lookup capabilities. The new engine is **leaner, meaner, and significantly faster** (especially when initializing your workspace with a large amount of notes).

Server site indexing is a pre-cursor enables our upcoming roadmap items which include:

- [[multi-vault support|dendron.roadmap.project.n.2020.multi-vault]]
- rich graphical interfaces for schemas, pods, and publishing
- unified index for all dendron extensions (currently each extension makes a separate index of your notes and requires manual reloading)
- realtime updates for graph extensions
- custom dendron extensions written in any language 

Server side indexing is currently off by default since it's still a beta feature. You can turn it on by adding the following in your settings.

```json
"dendron.useExperimentalLSPSupport": true
```

Note that the current commands are currently un-available when you switch on on server side indexing:

- RenameNote
- Refactor Hierarchy
- Archive Hierarchy
- Realtime Schema Updates
- Pod Commands

You can switch back to regular indexing at anytime by changing the above setting to `false` and running `> Developer: Reload Window`. 

### Enhancements

- **Additional Arguments for lookup**: You can now use `noConfirm` and `value` arguments when creating custom lookup shortcuts ([docs](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#passing-arguments-to-lookup))
- **Update Default Snippets**: default todo snippet now leaves a space after insertion
- **Set custom log levels**: you can now define the verbosity of dendron logs using the `dendron.logLevel` configuration
- **Upgraded Schema defaults** (server only): new schemas will be created using version one defaults
- **Cleaner note frontmatter** (server only): new notes won't have the optional attributes in frontmatter

### Bug Fixes

- **Missing logs**: issue where `Open Logs` would not show logs
- **Tree View empty**: tree view would not populate in some cases
- **Upgrade Snippets with comments**: Upgrading settings would fail if they had comments inside the JSON

### Breaking Changes

- **Remove Scratch Note Command**: replaced by Lookup Scratch Note shortcut
- **Remove Journal Note Command**: replaced by Lookup Journal Note shortcut

### Progress

#### Server Migration

These past two weeks have been spent on server migration work. We are almost at the end and I'm aiming to have full coverage of all existing functionality by early next week.

((ref:[[dendron.roadmap.project.n.2020.server-migration]]#tasks,1:#*))

### Other

- Add overview of [[configuration|dendron.topic.config]]
- Add proposal for [[custom color tabs|dendron.roadmap.project.n.backlog.color-tabs]]

## [0.12.6](https://github.com/dendronhq/dendron/compare/v0.12.5...v0.12.6) (2020-10-07)

### Features

#### Default Snippets

Dendron now initializes your workspace with common default snippets

((ref:[[dendron.topic.snippets]]#default snippets,1:#*))

#### Latex Support on Published Site

((ref:[[dendron.pro.dendron-jekyll.topic.math]]#math,1:#*))

#### Introduce siteRepoDir Customization

((ref:[[dendron.topic.publishing.configuration]]#siterepodir,1:#*))

### Bug Fixes

- trying to publish the `dendron-template` no longer results in a missing links report
- issue with schemas not showing up under lookup

### Progress

This section tracks our progress against the milestones in our [[public roadmap|dendron.roadmap]]

- [x] [[Seeds v0|dendron.roadmap.project.n.2020.seeds]]
- [ ] Server migration, progress: 70/100
  ```
  - below is a summary of our progress. we are currently about half way done
  - aiming to have a workable version using the Dendron server by next week
  ```
  ((ref:[[dendron.roadmap.project.n.2020.server-migration]]#tasks,1:#*))

### Other

#### Seeds

- We launched two [[seeds|dendron.topic.seeds]]. A seed is a dendron site that tries to be be a all encompassing reference for a particular vertical. Dendron provides specific libraries and CLIs that make it easy for users to create seeds from existing open source content as well as personal notes.

Current Seeds:

```
- open PKM catalogue
- open AWS catalogue
```

![[dendron.community.showcase#open-pkm-catalogue,1:#*]]

![[dendron.community.showcase#Open-AWS-Catalogue,1:#*]]

#### Alternatives

this announcement also comes with an ask. Dendron is now in [AlternativesTo](https://alternativeto.net/), a crowdsourced catalogue for software recommendations. If you like Dendron and want to help us spread the word 🌱, please leave us a review [here](https://alternativeto.net/software/dendron/reviews/) 🙏

## [0.12.4](https://github.com/dendronhq/dendron/compare/v0.12.4-alpha.11...v0.12.4) (2020-09-30)

### Features

#### Live schema updates

- schema changes are now updated in realtime. no more `Reload Index`
- NOTE: this doesn't yet apply to `Show Schema Graph`. you'll still need to run `Reload Index` to see the changes in the graph

### Enhancements

- **lookup:** special notes are now created via lookup ([da825a9](https://github.com/dendronhq/dendron/commit/da825a9d2b1ec10a3f9d3eac20db06448fe5344b))
  - instead of being a separate command, journal and scratch notes are now created using the regular lookup interface
  - new keybindings have been introduced to [map old commands to new style lookups](https://dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3.html#passing-arguments-to-lookup)
  - `Create Journal Note` and `Create Scratch Note` still exist as commands but will be deprecated in the next minor release 

- **lookup:** support lookups opening with a new split ([da825a9](https://github.com/dendronhq/dendron/commit/da825a9d2b1ec10a3f9d3eac20db06448fe5344b))

((ref:[[dendron.topic.lookup]]#split toggle))

- **refs:** easier note ref selection([114ff87](https://github.com/dendronhq/dendron/commit/114ff87be04f8d746b0be28f7627ba0d1ec9b504))

Dendron will now recognize a header selection if you have any part of the header highlighted (vs needing to highlight the entire line)

((ref:[[dendron.topic.commands]]#copy note ref:#*))

### Documentation

- we published our public roadmap

((ref:[[dendron.roadmap]]))

- changelog moved to dedicated [page](https://dendron.so/notes/9bc92432-a24c-492b-b831-4d5378c1692b.html)
- lookup menu docs
  ((ref:[[dendron.topic.lookup]]#lookup menu:#*))

### Community Highlights

- a new planter has appeared 🌲
  ((ref:[[dendron.community.showcase]]#luke's second brain))

## [0.12.3](https://github.com/dendronhq/dendron/compare/v0.12.3-alpha.16...v0.12.3) (2020-09-26)

### Features

#### Bad Link Reports

When building your site by running `Dendron: Build Pod`, Dendron will generate a bad links report of all wiki-links that did not resolve. It will also update the links to point to a 404 page instead.

<a href="https://www.loom.com/share/91c4d7b023754b76b4d02519946603e0"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/91c4d7b023754b76b4d02519946603e0-with-play.gif"> </a>

### Enhancements

- **lookup:** lookup command accept args ([3e1fe8a](https://github.com/dendronhq/dendron/commit/3e1fe8a33344c3e79c1fb5bd758eaeab23b7fb9f))
- **publishing:** better 404 page ([e74c4a2](https://github.com/dendronhq/dendron/commit/e74c4a2c97197f5d43132be6ac9436ac91d9db8a))
- **plugin:** dramatically reduce extension bundle size ([22cfff8](https://github.com/dendronhq/dendron/commit/22cfff8398611f54f7a88d7e110aa9f9f602ad4e))

## [0.12.2](https://github.com/dendronhq/dendron/compare/v0.12.2-alpha.0...v0.12.2) (2020-09-24)

### Enhancements

- **refs:** support partial header selection ([6e35393](https://github.com/dendronhq/dendron/commit/6e35393fe2d321b8d708fe1efd40c1eb4ad304e3))

### Bug Fixes

- **publishing:** incremental builds not setting correct links ([e3dedf5](https://github.com/dendronhq/dendron/commit/e3dedf52d79dede98041edc77a41966cc5d6e8b5))

## [0.12.1](https://github.com/dendronhq/dendron/compare/v0.12.1-alpha.2...v0.12.1) (2020-09-22)

### Features

#### Create scratch or journal notes via lookup

A journal note is a self contained note that is meant to track something over time. Examples of journals include recording **workout sessions**, making **meeting notes**, and keeping a **mood journal**.

To create a journal note, trigger a lookup and then click on the calendar icon.

<a href="https://www.loom.com/share/3c3ddc1dc63547cea8bf186bec31f71b"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/3c3ddc1dc63547cea8bf186bec31f71b-with-play.gif"> </a>

A scratch note is a self contained note that is meant to be used as scratchpad. Use it for thoughts or when you want to expand on a bullet point. Scratch notes are created in the `scratch` domain and have the following format: `{domain}.journal.{Y-MM-DD-HHHHmmss}`.

<a href="https://www.loom.com/share/2fd3042119124df8bb4592d8ffe6d708"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/2fd3042119124df8bb4592d8ffe6d708-with-play.gif"> </a>

- **lookup:** support selection modifiers when creating special notes ([591c55f](https://github.com/dendronhq/dendron/commit/591c55f792ad8121d27af3a1c645ff9a2458f19c))

### Enhancements

- **lookup:** support selection and note toggles ([70cf9eb](https://github.com/dendronhq/dendron/commit/70cf9ebc7a02cc5f256c2a1ffeec62f1bf1642b8))
- **refs:** better header selection ([ba9a4d9](https://github.com/dendronhq/dendron/commit/ba9a4d975b115e4cf8bc211f5e00f0557f26693b))
- **refs:** emit error when header not found ([5deb2d1](https://github.com/dendronhq/dendron/commit/5deb2d18160974bd035b3703715acc16d0dcb012))
- **publish:** configure repoDir via config ([fa838e4](https://github.com/dendronhq/dendron/commit/fa838e48bc5e33b8aa00d5aa954283c55af4d917))

