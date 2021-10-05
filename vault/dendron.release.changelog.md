---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1633394354942
created: 1601508213606
date: '2022-01-01'
---

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

# 0.60

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
