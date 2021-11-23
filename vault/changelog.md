---
id: 9bc92432-a24c-492b-b831-4d5378c1692b
title: Changelog
desc: ''
updated: 1637695153687
created: 1601508213606
nav_order: 2
---

## 0.70.0

### Enhancements
- enhance(publish): Better formatting of tables on published site (#1737) @kevin

### Fix
- fix(publish): syntax highlighting for code blocks (#1732) @kevin
- fix(publish): make mermaid work consistently on published sites (#1759) @kevin
- fix(publish): enable katex on published site
- fix(cli): workspace info prints message to CLI

## 0.69.2

### Features
- feat(workspace): Initialize Workspace command can create native workspaces ([[docs|dendron.topic.workspace.native]]) (#1701) @kaan

### Enhancements
- enhance(markdown): expose `desc` frontmatter property for variable substitution (([[docs|dendron.topic.markdown#frontmatter-variable-substitution]]) ([diff](https://github.com/dendronhq/dendron-site/pull/284/files)) (#1721) @hikchoi
- enhance(publish): better position sidebar, main content and footer (#1696) @felipe
- enhance(commands): copy a tag note link results in hashtags (#1687) @joshi
- enhance(lookup) Add description field to lookup buttons (#1735) @tuling

### Fix
- fix(lookup): have schema exact match suggestion in lookup show up at the top of the list (#1720) @nickolay
- fix(lookup): disappearing vaults in vault selection quickpick (#1717) @hikchoi
- fix(publish): remove duplicate CSS (#1707) [`@l2dy`](https://github.com/l2dy)
- fix(workspace): remove trailing whitespace in note (#1736) [`@l2dy`](https://github.com/l2dy)
- fix(cli): [ajv](https://github.com/ajv-validator/ajv) (a JSON schema validator) no longer prints warning messages to console (#1722) @nickolay

## 0.69.1

### Fix
- fix(pods): invalid configuration error @kevin

## 0.69.0

### Enhancements
- enhance(pods): add `configPath` and `query` parameters to pods ([[docs|dendron.topic.pod.cli]]) @kevin
- enhance(pods): include name of note with error when airtable pod encounters error @kevin

### Fix
- fix(markdown): footnote definitions including links are rendered incorrectly (#1704) @kaan
- fix(workspace): apply enableUser/HashTags to broken wikilinks code action (#1712) @kaan

## 0.68.2

### Features
- feat(workspace): native workspace enhancements ([[docs|dendron.topic.workspace.native]]) (#1670) @kaan
  - Dendron will now search for `dendron.yml` in native workspaces even if `dendron.yml` is not in the root of the workspace.

### Enhancements
- enhance(lookup): lookups with a dot at the end now look up hierarchies without having exact postfix ([[docs|dendron.topic.lookup.find#dot-at-the-end--descendent-query]]) (#1692) @nickolay
  - Having a dot at the end of a lookup will now look up child and descendant notes (bubbling up the child notes to the top) that match the query, but without requiring the full match of the prefix note.
- enhance(views): support setting `sort_order` in tree view ([[docs|dendron.topic.publish-legacy.configuration#sort_order]]) (#1685) @kevin
- enhance(schema): Add `Go to File` navigation prompt when schema malformation errors appear (#1679) @nickolay

### Fix
- fix(views): `nav_order` property not respected in tree view (#1684) @kevin
- fix(workspace): `Dendron: Vault add` avoids adding duplicate line (#1689) @kaan

## 0.68.1

### Breaking changes

Note graph commands lose their `V2` suffix and are now simply `Dendron: Show Note Graph` and `Dendron: Show Schema Graph`. This only impacts functionality with the command palette.

## 0.68.0

### Features
- feat(schemas): adding new command - create schema from hierarchy ([[docs|dendron.topic.schema.create-from-hierarchy]]) (#1673) @nickolay
- feat(views): better webviews - faster loading and more stable performance @kevin
  - `Dendron: Show Preview` used to add some extra latency when rendering the preview and also made features like copy/paste unstable. This change migrates the old iframe-based preview to be a native webview. It brings the following changes:
    * Faster webview performance
    * Clipboard support (copy and paste works)!
    * Live color theme updates (vs reloading your window for changes to take effect)
    * Bundle native preview with webpack
    * Build native preview on `yarn setup`
    * Cleanup of assets

### Enhancements
* enhance(schemas): adding error messaging and additional validation for when schemas are malformed (#1631) @nickolay
* enhance(schemas): cmd create-schema-from-hierarchy allow schema to end with '*' (#1680) @nickolay

### Fix
- fix(pods): github import pod handle deleted authors (#1621) @kevin
- fix(workspace): warning to remove stub property if the note has content (#1662) @joshi

## 0.67.2

### Breaking changes

An enhancement in this release delivers breaking changes announced last week: [[Changelog|changelog^kSChN1jT6OMc]]

### Features
* feat(publish): add local table of contents, of current note, in right-hand nav ([[docs|dendron.topic.publish.features#table-of-contents]]) (#1428)  @viztor
* feat(publish): merge lookup and search fields ([[docs|dendron.topic.publish.features#lookup-and-search]]) (#1603) @felipe

### Enhancements
* enhance(schema): update schemas on save instead of having to reload workspace. (#1597) @nickolay
* enhance(publish): migrate publish related commands to nextjs @hikchoi
  * _**Note:** This is the breaking change mentioned above._
* enhance(commands): move header supports multi vault (#1646) @hikchoi
* enhance(commands): allow creation of new notes when move header destination doesn't exist yet (#1646) @hikchoi

### Fix
* fix(publish): table of contents layout (#1649) @felipe
* fix(server): improving error response on api server (#1645) @jonathan
* fix(workspace): Change Workspace command recognizes native workspaces (#1621) @kaan

## 0.67.1

> This was a quickfix release fixing the broken `0.66.1` build of the Visual Studio Code extension.

## 0.66.1

> This was an accidental, breaking release. This only impacted the the Visual Studio Code extension. Users need to upgrade to at least `0.67.1`.

## 0.66.0

### Breaking changes

1. Deprecation notice for `Site Preview` and `Site Build`. These currently build using our legacy 11ty publishing method. Starting next week, these will be upgraded to publish using NextJS. In addition, the notes will be renamed: ^kSChN1jT6OMc
    * `Site Preview` will be renamed to `Publish Dev`
    * `Site Build` will be renamed to `Publish Export`
2. We have updated the enablement of our preview features to reduce clutter in the command palette and prevent confusion.
    * `Dendron: Show Preview` is now called `Dendron: Show Preview (legacy)`
    * `Dendron: Show Preview V2` is now called `Dendron: Show Preview`
    * Both preview commands and their keybindings are now disabled if you are in a non-Dendron workspace or if your active open document is not a markdown file. This means they will not be accessible in the command palette or triggered with a keybinding.

### Enhancements
- enhance(workspace): add seeds directory to gitignore on workspace creation (#1629) @hikchoi
- enhance(workspace): preview command enablement (#1619) @hikchoi
- enhance(workspace): add custom icons to dendron tree view (#1635)  @kevin
- enhance(workspace): Copy Header Reference code action (#1598) @joshi

### Fix
- fix(publishing): markdown publish to hide block reference anchors (#1577)  @joshi
- fix(workspace): file watcher updates backlinks (#1618) @kaan
- fix(workspace): hover & goto note should respect enableUser/HashTags (#1620) @kaan
- fix(pods): resolve same level dir wikilinks in markdown import (#1615) @joshi
- fix(schemas): replace auto generated ids with readable descriptions (#1632) @nickolay

## 0.65.1

### Features
- feat(workspace): users can convert a local vault to a remote vault, or a remote vault to a local
vault with new convert vault command ([[docs|dendron.topic.vaults#vault-convert]]) (#1542) @kaan
- feat(notes): task notes (create modifier & editor highlighting) ([[docs|dendron.topic.tasks]]) (#1583) @kaan

### Enhancements
- enhance(schema): allow untyped templates in schemas ([[docs|dendron.topic.schema#shortened-template-syntax]]) (#1575) @nickolay

## 0.65.0

## 0.64.2

### Features
- feat(command): move header command ([[docs|dendron.ref.commands#move-header]]) (#1349)  @hikchoi 

### Enhancements
- enhance(schemas): expand schema format to allow for inlined children ([[docs|dendron://dendron.dendron-site/dendron.topic.schema#inline-schema-anatomy]]) (#1552) @nickolay
- enhance(pods): enhance gdoc import formatting (#1538) ([[docs|dendron.topic.pod.builtin.google-docs.import#summary,1:#*]]
) @joshi

### Bug Fixes
- fix(workspace): notes getting whitespace changes after workspace sync (#1559) @joshi
- fix(workspace): frontmatter variable substitution not rendering in preview V2 (#1567) @hikchoi
- fix(markdown): email parsed as user tag & option to disable user tags and hashtags (#1562) @kaan
- fix(markdown): footnote links move view in publishing & preview (#1568) @kaan
- fix(publish): remove .next dir if it exists in publish init (#1548) @jonathan
- fix(publish): title parts duplicated in Next publishing search (#1573)
- fix(commands): move header command modifying unrelated note content (#1574) @hikchoi

## 0.64.1

### Breaking changes

As part of the [[config consolidation|rfc.23-config-consolidation]], workspace options like `vault` are now under the `workspace` namespace in `dendron.yml`.

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
- enhance(cli): support output option when using `dendron note lookup` ([[docs|dendron://dendron.dendron-site/dendron.ref.cli.notes#lookup]]) (#1526) @kevin
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
- feat(publish): add `dendron publish dev` command  ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#dev]]) @kevin
- feat(publish): add `dendron publish export` command ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#export]]) @kevin

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
- feat(workspace): Add Contextual UI options for Add/Remove Vaults, Rename/Delete/Move Note, and Rename Header @joshi ([[docs|dendron.ref.commands]])
- feat(workspace): add survey for new users(#1409)

### Enhancements
- enhance(markdown): option to add `#` symbols for FM tags (#1421) @kaan ([[docs|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#usehashesforfmtags]])
- enhance(publish): add published, modified, and tags to NextJS SEO (#1412) @nwehner
- enhance(workspace): mini optimization in looking up notes by filename (#1427) @nickolay
- enhance(workspace): Leave trace on source note while using selectionExtract @joshi

### Bug Fixes
- fix(lookup): picked schema matching name was not creating the expected note (#1425) @nickolay
- fix(workspace): support activation for older vscode version (#1426) @jonathan

## 0.60.2

### Features
- feat(cli): initialize workspace from CLI @kevin ([[docs|dendron://dendron.dendron-site/dendron.ref.cli#init]])
- feat(pods): Notion Export Pod (#1332) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.notion]])
- feat(publish): add popover for long title in menu (#1408) @viztor
- feat(publish): better mobile navigation (#1407) @viztor
- feat(workspace): button for toggle local/global graph (#1386) @viztor

### Enhancements
- enhance(publish): support [g4a tags](https://support.google.com/analytics/answer/10089681?hl=en) @kevin
- enhance(publish): support twitter card @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#twitter]])
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
