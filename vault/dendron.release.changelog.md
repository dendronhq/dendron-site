---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1615242074818
created: 1601508213606
date: '2022-01-01'
---

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
- add remark-containers plugin [[docs|dendron.topic.config#usecontainers]]

### Bug Fixes
- refs don't include children or backlinks 
- clean `dendron.yml` after removing a vault

## 0.31.1

### Bug Fixes

- issue with mixed case file names

## 0.31.0
***
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

As an example of what you can do with a custom pod, we created the [[Dev.to Pod|dendron.pro.devto-pod]] which lets you publish your notes to dev.to

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

- support turning off pretty refs for dendron preview ([[docs|dendron.topic.config#useprettyrefs]])

## 0.29.1

### Enhancements

- private vaults ([[docs|dendron.topic.config#visibility]])
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
- add option to configure human readable ts formatting  ([[docs|dendron.topic.config#dendrondefaulttimestampdecorationformat]])
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
- display note title as link ([[docs|dendron.topic.config#usenotetitleforlink]])

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
- [[useFMTitle|dendron.topic.config#usefmtitle]] set to true by default
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
- [[dendron.copyNoteUrlRoot|dendron.topic.config#dendroncopynoteurlroot]] deprecated for `siteUrl`

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
  - better note titles ([[docs|dendron.ref.titles]])
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
- use frontmatter as title when publishing and in the preview ([[docs|dendron.topic.config#usefmtitle]])

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

