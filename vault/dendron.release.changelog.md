---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1619550616084
created: 1601508213606
date: '2022-01-01'
---


# 0.39
### Features
#### Faster startup performance 

Dendron startup is now up to 5x faster for large workspaces 🚀🚀🚀
Prior to this release, Dendron re-indexes all files at startup. We're now smarter about this and will read data from our cache instead if the note contents have not changed. You can read about the details [[here|dendron.ref.caching]].

### Enhancements
- [[Managed Publishing (NEW)|dendron.topic.managed-publishing]] is now compatible with version 0.37 of Dendron 
- Add progress bar to Dendron: Show Note Graph
- MoveNoteCommand will not prompt for vaults if not multi-vault

### Bug Fixes
- Create daily journal note fails if there's no note open

### House Cleaning

#### Telemetry

With this release of Dendron, we've added limited telemetry that is opt-out by default.

This is to help us understand how many people are using Dendron as well as measure the impact on performance when we introduce new features. We **do not and will never** read the data inside **your notes**.

You can see the full list of information we collect and why we do it in our [[telemetry documentation|dendron.topic.telemetry]] as well as instructions on how to opt out of telemetry.

* * *
# 0.38.0

## 0.37.2

### Bug Fixes
- correctly index notes added outside of Dendron

### Docs
- [[RFC 8 - Multi Publish|dendron://dendron-site/dendron.rfc.8-multi-publish]]

## 0.37.1

### Features

#### CLI for Workspace Commands
![[dendron.topic.cli#workspace-command,1:#*]]

#### Insert Note Command
![[dendron.topic.commands#insert-note,1:#*]]

### Enhancements
- support custom port for preview ([[docs|dendron.topic.publishing.configuration#previewport]])

## 0.37.0

* * *

## 0.36.4

### Features

#### CLI for Working with Vaults

![[dendron.topic.cli#vault-commands,1:#*]]

### Enhancements

- less verbose logs for CLI

## 0.36.3

### Features

#### CLI for Working with Notes

![[dendron.topic.cli#note-commands,1:#*]]

### Enhancements

- toggle xvault wiki links ([[docs|dendron.topic.config.dendron#noxvaultwikilink]])
- auto detect workspace root if `--wsRoot` not passed to CLI
- add `--quiet` flag to cli 

### House Cleaning

- remove legacy note references, use [[doctor|dendron.topic.commands#actions]] with `oldNoteRefToNew` to convert your old note references

## 0.36.2

### Bug Fixes

- multiple notes created when clicking on a link with an alias

## 0.36.1

### Bug Fixes

- Multiple notes created when opening a note via the treeview

## 0.36.0

* * *

## 0.35.2

### Features

#### Goto Note command

![[dendron.topic.commands#goto-note,1:#*]]

- NOTE: this fixes [issue 564](https://github.com/dendronhq/dendron/issues/564) which causes a new note to be created on hover when combined with `noAutoCreateOnDefinition` set to `true`. We introduced [[noAutoCreateOnDefinition|dendron.topic.config.dendron#noautocreateondefinition]] configuration to help folks transition to the new behavior. Auto creating on definition will be deprecated in a future release

### Enhancements

- better details in diagnostics report
- support xvault [[backlinks|dendron.topic.links#backlinks]]
- faster backlink generation
- include content from unpublished notes ([[docs|dendron.topic.refs#publishing]])
  - this allows you to use note references to hierarchies that aren't explicitly published
- better [Theia](https://theia-ide.org/) compatibility

### Bug Fixes

- disable auto-creation notes on definition ([[docs|dendron.topic.config.dendron#noautocreateondefinition]])

## 0.35.1

### Features

#### Add and Commit

![[dendron.topic.commands#workspace-add-and-commit,1:#*]]

### Enhancements

- [[useNoteTitleForLink|dendron.topic.config.dendron#usenotetitleforlink]] now true by default 
- control hierarchy display using note frontmatter ([[docs|dendron.topic.config.dendron#hierarchydisplay]])
- ability to disable appending uuid's to assets when importing markdown ([[docs|dendron.topic.pod.builtin.markdown.import#noadduuid]])
- ability to set an index file when importing markdown ([[docs|dendron.topic.pod.builtin.markdown.import#indexname]])

### Bug Fixes

- bulk importing notes would fail if payload was greater than 10mb
- punchcard pod referring to wrong commit

### Docs

- update [[example schemas|dendron.topic.schema#example-schemas]] as an importable remote vault
- create dendron for [[teams|dendron.topic.teams]] docs

## 0.35.0

* * *

## 0.34.1

### Features

#### A Better Doctor

Dendron doctor has been updated with a bunch of new options including the ability to migrate old style refs to new style refs

![[dendron.topic.commands#doctor,1:#dump-state]]

### Enhancements

- support hiding hierarchy view on published page ([[docs|dendron.topic.config.dendron#hierarchydisplay]])
- GitPunchcard support multi-vault ([[docs|dendron.topic.pod.builtin#gitpod]])
- support toggling vault initialization behavior at startup ([[docs|dendron.topic.config.dendron#initializeremotevaults]])
- support migrating old note refs to new note refs ([[docs|dendron.topic.commands#actions]])

### Bug Fixes

- correct `hiearchyDisplayTitle` to  `hierarchyDisplay` option (BREAKING)
- fix spurious `getVault` errors 

### House Cleaning

- removed all old style refs from `dendron-site`
- formal deprecation notice for old style refs (`((ref: ))` syntax) - they will be removed in the next release. use `doctor` to upgrade

## 0.34.0

* * *

### 0.33.1

### Features

#### Browse Current File

![[dendron.topic.commands#browse-note,1:#*]]

### Enhancements

- wikilinks to missing vaults will display an error instead of throwing one
- ability to disable legacy refs ([[docs|dendron.topic.config.dendron#nolegacynoteref]])
- add xkcd to vault presets ([[docs|dendron.topic.multi-vault#preset-remote-vaults]])
- 5x faster markdown pod import using plugin 🚀 🚀 🚀
- toggle katex settings from config ([[docs|dendron.topic.config.dendron#usekatex]])

### Bug Fixes

- displaying children hierarchies fails on stub notes
- empty query doesn't display all root nodes when multi-vault

## 0.33.0

* * *

## 0.32.2

### Features

#### Markdown Export

![[dendron.topic.pod.builtin.markdown#export,1:#*]]

#### GitPod

![[dendron.topic.pod.builtin#dendrongitpunchard,1]]

### Enhancements

- disable git linking on a per note basis ([[docs|dendron.topic.publishing.configuration#gitnolink]])
- set a custom path for git url  ([[docs|dendron.topic.publishing.configuration#gitnotepath]])
- `dendron-cli` is now named `dendron` (`dendron-cli` will continue to work)
- `buildSiteV2` has been renamed to `buildSite` (`buildSiteV2` will continue to work but is now considered `deprecated`)
- add [tldr](https://github.com/tldr-pages/tldr) to remote vault presets ([[docs|dendron.topic.multi-vault#preset-remote-vaults]])
- support `useFMTitle` when publishing to markdown
- fix link textwrap issue when publishing for mobile

### House Cleaning

- consolidate `engine-server` and `common-server` tests into `engine-test-utils`

## 0.32.1

### Features

#### Password protected sites

- [docs](https://dendron.so/notes/8b08d91b-3da8-4b8a-90c5-799d3026ad9b.html#add-password-protection-to-your-site)

You can now use managed publishing with a password. Note that you'll need [sprout membership](http://accounts.dendron.so/) to use the feature. 

### Enhancements

- control display for children links ([[docs|dendron.topic.config.dendron#hiearchydisplaytitle]])
- [[skipLevels|dendron.topic.publishing.configuration#skiplevels]] also applies to children lins
- [[useNoteTitleForLink|dendron.topic.config.dendron#usenotetitleforlink]] also applies to note references
- importing from markdown is now 5x faster 🚀🚀🚀
  - NOTE: this is only for the CLI 
- a bunch of new options when importing a pod ([[docs|dendron.topic.pod.import]])
  - NOTE: these options currently only apply for the [[Markdown Import Pod|dendron.topic.pod.builtin.markdown#import]]
- show progress bar when importing pod from plugin

### Bug Fixes

- dendron will check if dependencies are actually installed before trying to preview your site
- remove un-used extensions
- failure when importing large amounts of markdown files using import pod

### House Cleaning

- importing a pod now requires a `vaultName` parameter (previous, we just defaulted to the first vault)

## 0.32.0

* * *

## 0.31.3

### Features

#### Changelogs

![[dendron.topic.publishing.changelogs#summary,1:#*]]

### House Cleaning

- all tests are now `jest style` tests

## 0.31.2

### Features

#### Custom Domain Names

Dendron now supports custom domain names for [[managed publishing|dendron.topic.managed-publishing]]. You can find docs [[here|dendron.topic.managed-publishing.quickstart#adding-a-custom-domain-via-cname]]. Note that this feature is currently limited to [[environmentalist|dendron.community.roles#environmentalist]] .

### Enhancements

- Add paste link command ([[docs|dendron.topic.commands#paste-link]])
- don't throw fatal error on bad wikilink
- don't throw fatal error if `siteUrl` not set while in `dev`
- add remark-containers plugin [[docs|dendron.topic.config.dendron#usecontainers]]

### Bug Fixes

- refs don't include children or backlinks 
- clean `dendron.yml` after removing a vault

## 0.31.1

### Bug Fixes

- issue with mixed case file names

## 0.31.0

* * *

## 0.30.2

### Features

#### Cross Vault Links

![[dendron://dendron-site/dendron.topic.links#cross-vault-links,1]]

### Enhancements

- you can now add a workspace when adding a remote vault ([[docs|dendron://dendron-site/dendron.topic.commands#vault-add]])
- better block quotes ([[docs|dendron.topic.publishing.misc#blockquote]])
- better formatted backlinks on published pages
- backlinks display using note title instead of file names
- copy note commands will create a cross vault link when in multi-vault environment

### Bug Fixes

- selecting non-primary root note in dendron tree 
- bad backlinks created for home page
- issue with hierarchies for mixed case parents

### Documentation

- new docs on using dendron for [[blogging|dendron.topic.publishing.blogging]]

### House Cleaning

- table of contents on published sites is now a remark extension, header changed to `children` 
- jekyll publishing has been renamed to `legacy publishing` 
- lots of internal refactoring of code 

## 0.30.1

### Features

#### Custom Pods

We now have custom pod support
![[dendron.topic.pod.custom#summary,1:#*]]

If you are interested in developing your own publishing pod, you can docs to do so [[here|dendron.topic.pod.dev]]

#### Dev.to Pod

As an example of what you can do with a custom pod, we created the [[Dev.to Pod|pro.devto-pod]] which lets you publish your notes to dev.to

### Enhancements

- backlinks in published sites 

![[dendron.topic.publishing.features#backlinks,1]]

### Bug Fixes

- delete node sometimes fails in multi-vault
- publishing multi-vault will sometimes not work if multiple domain notes
- unable to select `root` of multi-vault notes in tree view

### House Cleaning

- if you're working on the codebase, `dendron.code-workspace` has been renamed to `dendron-main.code-workspace`
  - this helps if you're working on dendron while having dendron installed since Dendron, prior to this change, would also activate when you were editing the code

## 0.29.2

### Features

#### Experimental Nunjuck Templates

Extremely powerful templating capabilities with [[nunjuck templates|dendron.topic.markdown#nunjuck-templates]]

### Enhancements

- better multi-vault defaults
  - instead of keeping [[remote vaults|dendron.concepts#remote-vault]] under a special `repos` folder, you can now initialize them where ever you want
- better git defaults with new vaults

### Bug Fixes

- support turning off pretty refs for dendron preview ([[docs|dendron.topic.config.dendron#useprettyrefs]])

## 0.29.1

### Enhancements

- private vaults ([[docs|dendron.topic.config.dendron#visibility]])
- popover 403 links ([[docs|dendron.topic.publishing.selective-publication#403-page]])
- standardize pod cli interface

### Bug Fixes

- use builtin clipboard manager 
- private wiki links render errors on published page

### House Cleaning

- [issue labeling automation](https://github.com/dendronhq/dendron/pull/453)
- remove legacy publishing commands (BuildPod & Publish)

## 0.28.1

### Features

#### Managed Publishing (Early Preview)

The initial release comes with the ability to publish a dendron workspace under {username}.dendron.wiki. 
Dendron takes care of configuring your domain and building your site. 

After you connect your github repo with Dendron, we'll kick off the initial publication.
Every subsequent time you push to your repo, Dendron will automatically build your site with the latest changes.

At launch, we are supporting publishing from a connected github repo. 
Instructions to get started are [[here|dendron.topic.managed-publishing.quickstart]]

### Enhancements

- show last modified time for published sites ([[docs|dendron.topic.publishing.configuration#sitelastmodified-optional]])
- add option to configure human readable ts formatting  ([[docs|dendron.topic.config.vscode-config#dendrondefaulttimestampdecorationformat]])
- smaller downloads when using publishing commands for the first time
- much faster publishing commands
- frontmatter can now be folded 

### Bug Fixes

- 11ty build issues
- dendron `move note` command can fail when parents are stubs
- preview can get out of sync with Dendron

### House Cleaning

- dendron monorepo is now on yarn
  - this results in 4x faster initial builds and 6x smaller bundle sizes when developing
- dendron-11ty is now merged into the dendron monorepo

If you currently have Dendron checked out, you can use the following instructions to migrate 

```sh
# get latest version
git pull

npm install -g yarn
# remove old node_modules
./bootstrap/scripts/cleanup.sh
yarn bootstrap:bootstrap
yarn bootstrap:build 

```

## 0.27.2

### Features

- diagnostics report ([[docs|dendron.topic.commands#dendrondev-diagnostics-report]])

![[dendron.topic.commands#dendrondev-diagnostics-report,1]]

### Enhancements

- add path customization to build-site ([[docs|dendron.topic.cli#buildsitev2]])
- Add default description option to dendron config  ([[docs|dendron.topic.publishing.configuration#description]])
- add config to publish multi-vault when adding vault ([[docs|dendron.topic.publishing.configuration#duplicatenotebehavior-optional]])

### Bug Fixes

- build-site doesn't overwrite STAGE environment 
- do not delete text when extracting non-vault text
- add new vaults to newline in .gitignore

## 0.27.1

### Bug Fixes

- server close error when building website for production

## 0.26.1

### Features

- move notes between vaults using the move note command ([[docs|dendron.topic.commands#move-note]])

### Enhancements

- nicer 403 page on unpublished pages ([[docs|dendron.topic.publishing.selective-publication#403-page]])

### Bug Fixes

- issue with daily journal notes not getting pretty titles
- ctrl hover over images will create a note
- when removing a note with empty parents, clean up empty parents

## 0.25.3

### Features

- mermaid diagram support when publishing ([[docs|dendron.topic.markdown#diagrams]])
- display note title as link ([[docs|dendron.topic.config.dendron#usenotetitleforlink]])

### Enhancements

- use list of vaults when resolving duplicate notes ([[docs|dendron.topic.publishing.configuration#passing-multiple-vaults]])
- go to definition now works for `![[refs]]` 
- [[Copy Note Link|dendron.topic.commands#copy-note-link]] now updates alias to header value when copying header

### Bug Fix

- grammar issue with unpublished page notification

### House Cleaning

- remove `sync_vault` as a step when building dendron for the first time

## 0.25.2

### Bug Fix

- issue with new vaults not having welcome note

## 0.25.1

### Bug Fix

- issue with md outline not showing

## 0.24.2

### Features

#### Site Build and Preview built-in to extension

You can now publish and build your notes without going to the command line ([[docs|dendron.topic.commands#site-build]])

### Enhancements

- show progress bar when syncing graph
- show progress bar when installing node modules
- [[useFMTitle|dendron.topic.config.dendron#usefmtitle]] set to true by default
- add `.gitignore` to newly created workspace
- [[Copy Note Url|dendron.topic.commands#copy-note-url]] uses `siteUrl` as value for noteRef

### Bug Fixes

- fix issues with nav capitalization
- fix dup items in nav
- windows site preview not cleaning up child processes
- fix note graph errors

### Docs

- revamped publishing docs

### House Cleaning

- jekyll based publishing is now deprecated 
- [[dendron.copyNoteUrlRoot|dendron.topic.config.vscode-config#dendroncopynoteurlroot]] deprecated for `siteUrl`

## 0.24.1

### Features

### Enhancements

- enable pass dict to config ([ccbc017](https://github.com/dendronhq/dendron/commit/ccbc0178cdc0399230a47e4ab1c90d345e447aeb))
- use enhanced filter when creating 403 links ([65afe8c](https://github.com/dendronhq/dendron/commit/65afe8c084d1a657e943edb3ef1b497f3fd97ea6))
- custom header support ([[docs|dendron.topic.publishing.configuration#customheaderpath-optional]])
  - [[add custom headers|scratch.2021.01.12.085012.add-custom-headers]]
- google analytics support ([[docs|dendron.topic.publishing.configuration#ga_tracking-optional]])
- [[Multi Vault Edit on GitHub|dendron.scratch.2021.01.09.multi-vault-edit-on-github]]

### Bug Fixes

- fix multi-vault breadcrump null issue 
- fix windows build for site

## 0.23.2

### Features

### Enhancements

- better 403 page ([[docs|dendron.topic.publishing.selective-publication#403-page]])
- spurious error message if user doesn't create note from not selecting a vault
- better default journal note titles

### Bug Fixes

- issue publishing with subdomain
- some queries not being returned in multi-vault settings
- issue with noteRef mangling when using doctor

### House Cleaning

- update on date format for journal and scratch notes to use [Luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

## 0.23.1

- Dendron Markdown Preview: 0.10.18
- Dendron 11ty: 1.23.6

### Features

#### Updated Note Ref Syntax

You can now do references to notes using `![[note]]` instead of `((ref: [[note]]))` syntax. To reference a header, use `![[note#foo]]`. This changes makes our note ref syntax more consistent with our wiki link syntax. 

Note that the new ref syntax expects a [[sluggified|dendron.ref.terms#slug]] header. This is done automatically when you use the updated [[copy note ref|dendron.topic.commands#copy-note-ref]] command. 

This change makes it possible to create a ref to a header with special characters.

The old syntax ref syntax will still work but should now be considered deprecated. We will release a `doctor` command to help you auto-upgrade from the old syntax to the new syntax in the coming week.

#### Frontmatter Variable Substitution

It is now possible to use variables defined in your note frontmatter inside your note. The syntax is `{{fm.VAR_NAME}}` where `VAR_NAME` is the name of your variable. The `fm` designates that you want to use a frontmatter variable. 

<!-- 
#### Publishing V2 Integration with Plugin

You can now both build your notes for publication and preview it from inside vscode. 

![[dendron.topic.commands#site-build:#dev]]
-->

### Enhancements

- `nav_exclude` property excludes from nav sider and table of contents ([[docs|dendron.topic.publishing.navigation#nav-exclude]])
- [[copy note ref|dendron.topic.commands#copy-note-ref]] command will use the new note ref syntax
- footnote support in preview and when publishing ([[docs|dendron.topic.markdown#footnotes]])

### Bug Fixes

- spaces in wiki link not rendering in preview

## 0.22.2

### Enhancements

- better fuzzy search for lookup
- publishing v2 enhancements
  - abbreviation support for 11ty publishing ([[docs|dendron.topic.markdown#abbreviation]])
  - better note titles ([[docs|dendron.guides.best-practices#naming]])
  - shrink size of published page 10x
  - fix left nav position of current active page
  - ability to override output folder from CLI when building site
  - don't throw error on code blocks that are unsupported by prismjs

### Bug Fixes

- markdown preview delay in showing newly created notes
- `buildSiteV2` not connect to running workspace

## 0.22.1

### Features

- [[Collections|dendron.topic.publishing.collections]] support for 11ty
  - publish blog like archives using Dendron
- CLI Based Doctor ([[docs|dendron.topic.cli#doctor]])
  - run various tests to make your notes are healthy for the new year
- use frontmatter as title when publishing and in the preview ([[docs|dendron.topic.config.dendron#usefmtitle]])

### Enhancements

- additional metadata tags for published pages
- support `noindex` option ([[docs|dendron.topic.publishing.configuration#noindex]])
- add anchor links to headers
- use note title for page title
- support [[nav_exclude|dendron.topic.publishing.configuration#nav_exclude]] option
- support overriding [[output|dendron.topic.cli#buildsitev2]] in `buildSiteV2` command
- don't throw error if no syntax highlighter available for code block

### Bug Fixes

- issue connecting to open workspace using CLI
- nav bar when publishing multiple hierarchies will show wrong expansion options

## 0.21.2

### Enhancements

- build-site command can connect to current running workspace ([[docs|dendron.topic.cli#connect-to-open-workspace]])
- support inline math when publishing
- support block math when publishing 
- support rendering gfm inside note reference when publishing
- support anchor headings when publishing
- support relative links when publishing

### Bug Fixes

- issue with displaying math in preview

### House Cleaning

- the code highlighter has been changed from `prismjs` to `highligher.js`

## 0.21.1

### Enhancements

- add seo tags ([[docs|dendron.topic.publishing.configuration#seo-options]])
- enable edit on github link ([[docs|dendron.topic.publishing.configuration#github-options]])
- migrate all jekyll `_config.yml` settings to `dendron.yml`

### Bug Fixes

- build-site errors when building from vaults without `asset folder`
- build-site error on certain operating systems
- build-site error on node version != 12

### Docs

- [dendron.so](https://dendron.so) is now published using the new 11ty framework
- add [[publishing to github guide|dendron.topic.publishing.github]] using github actions

## 0.20.2

### Features

#### Publishing For Multi Vault

![[dendron.topic.multi-vault#publishing:#*]]

### Enhancements

- creating engine via cli also initializes meta files ([d72f097](https://github.com/dendronhq/dendron/commit/d72f097e63d1fda065ac7ad50f85bebe99d6da66))([[docs|dendron.topic.cli#launchengineserver]])
- remove github light theme from dendron bundle ([33d5708](https://github.com/dendronhq/dendron/commit/33d57086510cdaefbb8af8f72c945d6f5e02be5c))
- support [[note refs for multi-vault|dendron.topic.multi-vault#note-references]] 
- support relative links in dendron preview ([[docs|dendron.topic.links#wiki-links]])
- further speed enhancements to publishing using 11ty resulting in another 5x improvement  
- configure [[writeStubs|dendron.topic.publishing.configuration#writestubs-optional]] from `dendron.yml`

### Bug Fixes

- refactor hierarchy miss self referential links ([00b385d](https://github.com/dendronhq/dendron/commit/00b385dd0d13e5809da012bbc88388886012b837))
- reduce frequency of `engine not connecting` error when launching dendron preview

### House Cleaning

- [[writeStubs|dendron.topic.publishing.configuration#writestubs-optional]] is set to `true` by default (or when not set) when publishing using 11ty

## 0.20.1

### Publishing V2 (preview)

We've re-build publishing for Dendron from the ground up to be faster, better, and easier to use.

Besides for schemas, publishing has consistently been one of the hardest to use features in Dendron. Dendron currently publishes using [jekyll](https://jekyllrb.com/) using our own [template](https://github.com/dendronhq/dendron-jekyll). While this has served as well initially, slow compile times for large sites and difficulty of getting started has made it a growing pain point.

To address this, we've migrated our publishing stack to [11ty](https://www.11ty.dev/), a super fast javascript based static generator. This means much faster, and perhaps more importantly, easier publishing. 

There's still some work left to integrate publishing into the Dendron plugin - meanwhile, you can take the new publishing workflow for a spin using the [[dendron cli|dendron.topic.cli]]

In order to to use the 11ty based publishing, initialize your workspace with the following commands.

```bash
npm init -y
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty@latest
```

After you have your dependencies installed, build your your site using the following command.

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage dev --serve
```

This will both compile your site locally and make it available at `localhost:8080` for instant preview. When building your site locally, the pages will be build to `{wsRoot}/build/site`. 

When you are ready to publish to github, make sure to change the stage to `prod`.

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage prod 
```

This will build your site to the path specified by [[siteRootDir|dendron.topic.publishing-legacy.configuration#siterootdir]] in `dendron.yml`. 

#### Benchmarks

Publishing V2 is ~10x faster than jekyll based publishing for sites with +100 pages. For comparison, below is the compilation difference between building the dendron site using 11ty vs jekyll. 

- 11ty: 24.45s
- jekyll: 220.33s

There are additional optimizations still on the table that will further drive down he compilation time by another order of magnitude for future releases. 

#### Gaps

11ty publishing is currently not at full feature parity with Jekyll publishing. Notably, the following features are missing:

- setting a custom color theme
- `edit on github` links
- `jekyll-seo` functionality
- mathjax

#### Migration

All values that used to be written into `_config.yml` will now be moved into `dendron.yml`. You can see the currently supported configuration values here: `https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types.ts#L71:L71`

If you currently have a Jekyll based Dendron page, note that the following settings have changed:

- the `url` property from `_config.yml` is now `siteUrl` in `dendron.yml`
- favicon is now controlled by `siteFaviconPath` in `dendron.yml` and is a path relative to your workspace root
- `CNAME` is now controlled by `githubCname` property in `dendron.yml`

#### Sample dendron.yml config

- publishing without a cname

```yml
version: 1
vaults:
    - fsPath: vault
site:
    copyAssets: true
    siteHierarchies:
        - dendron
    siteRootDir: docs
    siteUrl: "kevinslin.github.io/dendron-11ty-test"
    usePrettyRefs: true
```

- using custom cname

```yml
version: 1
vaults:
    - fsPath: vault
site:
    copyAssets: true
    siteHierarchies:
        - dendron
    siteRootDir: docs
    usePrettyRefs: true
    siteUrl: "11ty.dendron.so"
    githubCname: "11ty.dendron.so"
```

#### Sample repo

- [github repo](https://github.com/kevinslin/dendron-11ty-test/deployments/activity_log?environment=github-pages)
- [github page](https://kevinslin.github.io/dendron-11ty-test/)

#### CLI Command Reference

```bash
dendron-cli buildSiteV2

build notes for publication using 11ty

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --wsRoot   location of workspace                                    [required]
  --vaults   location of vault                                           [array]
  --serve    serve over local http server             [boolean] [default: false]
  --stage    serve over local http server
```

<!-- https://hacks.mozilla.org/2020/10/to-eleventy-and-beyond/ -->

## Past Releases

- [[0.1.X|dendron.release.changelog.0-1-x]]

