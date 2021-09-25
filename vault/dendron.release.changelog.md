---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
desc: ''
updated: 1632543431402
created: 1601508213606
date: '2022-01-01'
---


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