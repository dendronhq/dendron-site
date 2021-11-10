---
id: sRnuoGUdVgwyFyJBWPRo7
title: "0.61"
desc: ''
updated: 1633130846838
created: 1632844602730
---

Dendron 0.61 has sprouted  🌱

### Highlights
- feat(cli): initialize workspace from CLI ([[docs|dendron://dendron.dendron-site/dendron.ref.cli#init]])
- feat(pods): Notion Export Pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.notion]])
- feat(workspace): Add Contextual UI options for Add/Remove Vaults, Rename/Delete/Move Note, and Rename Header ([[docs|dendron://dendron.dendron-site/dendron.topic.workbench#contextual-ui]])
- feat(publish): better mobile navigation for nextjs template 


### Everything Else
- feat(publish): add popover for long title in menu 
- feat(publish): better mobile navigation
- feat(workspace): button for toggle local/global graph 
- enhance(publish): support [g4a tags](https://support.google.com/analytics/answer/10089681?hl=en)
- enhance(publish): support twitter card
- enhance(publish): add border color to table 
- enhance(publish): filter body out of generated notes.json for next 
- enhance(publish): add published, modified, and tags to NextJS SEO (#1412) 
- enhance(pods): resolve relative links on markdown import 
- enhance(markdown): Don't throw a fatal exception when missing note is parsed as noteRef 
- enhance(markdown): option to add `#` symbols for FM tags (#1421) ([[docs|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#usehashesforfmtags]])
- enhance(workspace): option to disable randomly colored tags in editor ([[docs|dendron.topic.tags#disabling-automatic-colors]])
- enhance(workspace): mini optimization in looking up notes by filename (#1427) 
- enhance(workspace): Leave trace on source note while using selectionExtract 
- fix(commands): selection2link doesn't update note with link 
- fix(commands): fix single letter not showing results 
- fix(commands): cleanup error popup when schema lookup is closed 
- fix(commands): picked schema matching name was not creating the expected note (#1425)
- fix(publish): mistakes in nextjs start instructions from CLI 
- fix(publish): hashtags not at the start of line don't autocomplete 
- fix(publish): links in note reference point to wrong url 
- fix(publish): footer did not show on first load 
- fix(workspace): notes added outside Dendron are missed 
- fix(workspace): next gen views in remote workspaces 
- fix(workspace): no-op on hover provider if dendron non active 
- fix(workspace): fixes in providers when not in dendron workspace 
- fix(workspace): no completion when dendron isn't active 
- fix(workspace): support activation for older vscode version (#1426)


### Ongoing 
- [Preview v2 does not properly follow anchor links · Issue #1203 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1203)

### Community

#### Dendron Reading Series

![[dendron://dendron.dendron-site/community.what-are-you-reading#dendron-reading-series,1]]

#### Tea Time
We are officially launching `#teatime` for all Dendron contributors.

![[dendron://dendron.dendron-site/community.teatime#summary,1]]

#### Office Hours

Office hours are now every other week. No regular office hours from this week but we had a speical session of getting started with [[NextJS Publishing|dendron://dendron.dendron-site/dendron.topic.publish]] which you can find [[here|dendron://dendron.dendron-site/community.office-hours.2021.09.24.nextjs-publishing]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- `@Jminding#0001`
    - #dendron.taxonomist
    - document cloudflare vpn issue
- [Lukas Orsvarn](https://github.com/lukors)
    - #dendron.bugcatcher
    - [Dendron Tree widget not updating on new note creation (regression) · Issue #1430 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1430)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
    - [Probable vault name collision breaks V2 preview · Issue #1411 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1411)
    - [Automatic title extraction doesn't work in cross-vault links without `dendron//` prefix · Issue #1429 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1429)
- [NZ John](https://github.com/nz-john) `@NZ-John#0569`
    - #dendron.bugcatcher
    - [.html remains at end of reference note card links (in NextJS) and breaks links · Issue #1400 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1400)

### Changelog
![[changelog#0610,1:#060]]


