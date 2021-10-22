---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1634933973090
created: 1601508213606
date: '2022-01-01'
---

## 0.64.1

### Breaking changes

As part of the [[config consolidation|dendron.rfc.23-config-consolidation]], workspace options like `vault` are now under the `workspace` namespace in `dendron.yml`.

Before:
```yaml
vaults:
    - fsPath: vault1
```

After:
```yaml
workspace:
    vaults:
        - fsPath: vault1
```

Initializing your workspace to `0.64.1` will do this upgrade automatically.  If you are using the latest version of the CLI (`0.64.1`) , make sure to initialize your workspace beforehand which will upgrade your config to the latest version.

Migration can also be done via the latest CLI release:

```bash
dendron dev run_migration --migrationVersion 0.64.1
```

### Enhancements
- enhance(cli): support output option when using `dendron note lookup` ([[docs|dendron.topic.cli#note-commands]]) (#1526) @kevin
- enhance(commands): update default aliases when note is updated (#1557) @kaan
- enhance(cli): add run migration command in cli ([[docs|dendron.dev.cli#run_migration]]) (#1560) @hikchoi

### Fix
- fix(workspace): update yml validation to latest config version (#1554) @hikchoi
- fix(publish):make assetPrefix apply to all link elements (#1555) @kevin
- fix(publish): make 11ty publishing compatible with config version 3 (#1556) @kevin

## 0.64.0

## 0.63.2

### Enhancements
- enhance(lookup): lookup wikilinks @nickolay
- fix(lookup): better hierarchy look up when inside parts of the hierarchy are omitted (#1522) @nickolay
- enhance(lookup): allow configuration of workspace to make 'Create New' not bubble up in note lookup. (#1528) @nickolay
- enhance(pods): asignees in github issue publish pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish#updating-an-issue]])@joshi 

### Bug Fixes
- fix(markdown): better footnote rendering in note references (#1520) @kaan
- fix(markdown): user tags & hashtags inside links should be parsed as regular text #1524 @kaan #pending
- fix(publish): wikilinks inside note references don't have right link @kevin
- fix(workspace): making changes to fontmatter title also update the preview (#1513) @nickolay

## 0.63.1

### Features
- feat(publish): add `dendron publish dev` command  ([[docs|dendron://dendron.dendron-site/dendron.topic.publishing-next.cli#dev]]) @kevin
- feat(publish): add `dendron publish export` command ([[docs|dendron://dendron.dendron-site/dendron.topic.publishing-next.cli#export]]) @kevin

### Enhancements
- enhance(publish): support publishing to github as a export template @kevin
- enhance(publish): support `--yes` flag when exporting to skip prompts @kevin
- enhance(publish): initialize template will also install dependencies @kevin
- enhance(publish): warn when `assetsPrefix` isn't set @kevin

### Fix
- fix(workspace): possible error if open note is changed quickly after edit (#1486) @kaan
- fix(publish): optimize nextjs publishing search (#1519) @kaan

[[pkg.nextjs-template]] 

### Internal
- chore: add test for apostrophe in alias (#1501)  @kaan
- chore: skip failing WS init test on Windows (#1517) @kaan

## 0.63

## 0.62.4

### Features
- feat(workspace): native workspace support @kaan
- feat(workspace): contextual UI @joshi

### Bug Fixes
- fix(preview): some links not resolving on preview @nickolay

### Other
- chore(workspace): config migration(#1497) @hikchoi

## 0.62.3

### Bug Fixes
- fix(schemas): schema templates copy over frontmatter tags  @kaan

## 0.62.2

### Bug Fixes
- fix(views): tree view order (#1459) @kaan

## 0.62.1

### Bug Fixes
- fix(lookup): bad journal note name  #1465  @nickolay

## 0.62

## 0.61.2

### Feature
- feat(pods): airtable publish pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.publish#summary]]) @kevin

### Enhancements
 - fix(lookup): vault selection use wrong label #1463  @kevin
 - fix(markdown): highlighting for wildcard note refs with header offsets #1460  @kaan
 - enhance(pods): airtable export pod is now [idempotent](https://en.wikipedia.org/wiki/Idempotence) ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#idempotency]] @kevin 
 - enahnce(pods): airtable export pod has better support for mapping [[Tags|dendron://dendron.dendron-site/dendron.topic.tags]] and dates ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#object-value]]) @kevin
 - enhance(pods): export pods support `ignore` and `vault` filters ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.export#configuration]]) @kevin

## 0.61.1

### Enhancements
- enhance(commands): OpenLink can open more links and works on partial selection (#1317) `@Stephen#8544`
- enhance(commands): Improve user messaging on node delete by specifying the vault of the deleted node (#1439) @nickolay
- enhance(lookup): Allow creation of duplicate file name if there is a vault without such file name (#1441) @nickolay

### Bug Fixes
- fix(publish): nextjs search not working (#1433) @kaan
- fix(views): preview caching invalidation when notes with `![[ref]]` links change (#1385) @nickolay
- fix(view): enable anchor links to work in preview (#1375) @nickolay

## 0.61.0

## 0.60.3

### Features
- feat(workspace): Add Contextual UI options for Add/Remove Vaults, Rename/Delete/Move Note, and Rename Header @joshi ([[docs|dendron.topic.commands]])
- feat(workspace): add survey for new users(#1409)

### Enhancements
- enhance(markdown): option to add `#` symbols for FM tags (#1421) @kaan ([[docs|dendron://dendron.dendron-site/dendron.topic.publishing.configuration#usehashesforfmtags]])
- enhance(publish): add published, modified, and tags to NextJS SEO (#1412) @nwehner
- enhance(workspace): mini optimization in looking up notes by filename (#1427) @nickolay
- enhance(workspace): Leave trace on source note while using selectionExtract @joshi

### Bug Fixes
- fix(lookup): picked schema matching name was not creating the expected note (#1425) @nickolay
- fix(workspace): support activation for older vscode version (#1426) @jonathan

## 0.60.2

### Features
- feat(cli): initialize workspace from CLI @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.cli#init]])
- feat(pods): Notion Export Pod (#1332) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.notion]])
- feat(publish): add popover for long title in menu (#1408) @viztor
- feat(publish): better mobile navigation (#1407) @viztor
- feat(workspace): button for toggle local/global graph (#1386) @viztor

### Enhancements
- enhance(publish): support [g4a tags](https://support.google.com/analytics/answer/10089681?hl=en) @kevin
- enhance(publish): support twitter card @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.publishing.configuration#twitter]])
- enhance(publish): add border color to table (#1387) @viztor
- enhance(publish): filter body out of generated notes.json for next (#1380) @viztor
- enhance(pods): resolve relative links on markdown import @joshi
- enhance(markdown): Don't throw a fatal exception when missing note is parsed as noteRef @kevin
- enhance(workspace): option to disable randomly colored tags in editor (#1372) @kaan ([[docs|dendron.topic.tags#disabling-automatic-colors]])

### Fix
- fix(commands): selection2link doesn't update note with link #1383  @kaan
- fix(commands): fix single letter not showing results @nickolay
- fix(commands): cleanup error popup when schema lookup is closed @nickolay
- fix(publish): mistakes in nextjs start instructions from CLI @viztor
- fix(publish): hashtags not at the start of line don't autocomplete (#1370) @kaan
- fix(publish): links in note reference point to wrong url  @kevin
- fix(publish): footer did not show on first load (#1413) @viztor
- fix(workspace): notes added outside Dendron are missed (#1406) @kaan
- fix(workspace): next gen views in remote workspaces (#1401) @kaan
- fix(workspace): no-op on hover provider if dendron non active (#1398)
- fix(workspace): fixes in providers when not in dendron workspace (#1405) @jonathan
- fix(workspace): no completion when dendron isn't active @jonathan

## 0.60.1

### Bug Fixes
- fix(workspace): prevent malformed keybinding.json (#1403) @hikchoi

## 0.60

## 0.59.4

### Features
- @viztor feat(publish): much faster dev mode (#1359)

### Enhancements
- @sai enhance(publish): Added optional image and imageAlt to SEO open graph options (#1347)
- @viztor enhance(publish): notice for running in dev mode (#1354) 

### Bug Fixes
- @kevin fix(publish): 11ty publishing adds wrong assetPrefix
- @kevin fix(publish): fix `siteUrl` resolution with `assetPrefix`
- @kevin fix(publish): fix `seoProps` not being set on static page
- @kevin fix(publish): do not publish extra page for siteIndex under /notes
- @kevin fix(publish): don't add .html suffix to canonical url 
- @kevin fix(publish): fix various compiler issue for nextjs-template
- @kevin fix(publish): set correct canonical url with asset prefix

### Internal
- @kevin chore(publish): add bundle analyzer

## 0.59.3

### Features
- @kaan feat(publish): nextjs publishing supports fulltext search (#1334)

### Enhancements
- @joshi enhance(publish): Add Google Analytics to Published Site (#1300)
- @joshi enhance(pods): various github pod improvements ([[docs|dendron.topic.pod.builtin.github-issue]]) (#1345)
  - imported issues now have `author` field for user who submitted issue
  - you can now update the `milestone` using pods
  - you can now create a new github discussion using pods
  - renamed to github issue pod #breaking

### Bug Fixes
- @kevin fix(commands): rename note leaves incorrect metadata if parent is a stub (#1348)
- @kaan fix(workspace): disable certain decorations for long notes to avoid performance hit (#1337)

### Internal
- @kevin chore(workspace): consolidate http status code in common-all (#1344)

## 0.59.2

### Bug Fixes
- fix(workspace): issue with building new vsix with updated 11ty version

## 0.59.1

### Bug Fixes
- fix(workspace): Dendron now sets minimum vscode version to 1.58
- fix(publish): update 11ty version
