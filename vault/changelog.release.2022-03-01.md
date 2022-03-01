---
id: e56k4ih40ajj5wptx1ppae1
title: '0.84'
desc: ''
updated: 1646113905856
created: 1646109207637
---

Dendron 0.84 has sprouted  🌱

Speed improvements: `Dendron: Show Preview` should be much faster now because of note sync/image optimization!

Pod V2 Preview features continue growing: `dendron exportPodV2` is now available with `dendron-cli`. Previously, you could only run Pod V2 commands if you were within VS Code / VSCodium, but you can now run exports from the CLI ad-hoc or in scripts.

- More information: [[Pod V2 CLI|dendron://dendron.dendron-site/dendron.topic.pod-v2.cli]]

### Highlights
- feat(pods): support pods v2 in CLI
- enhance(views): faster image preview by using native vscode webview urls
- enhance(views): faster webviews by reducing engine sync operations

### Everything Else
- enhance(views): separate tag configuration for preview and publish ([[docs|dendron://dendron.dendron-site/dendron.ref.config.preview]]) 
- fix(schema): Apply schema template for goto-note-command if template is in different vault
- fix(publish): Table of Contents is missing user tags, inline code, dashes and underlines
- fix(workspace): dendron can hang when trying to provide hover for large non-dendron file
- fix(views): clicking preview links for non-note files
- fix(views): Code blocks and spans in preview are html encoded
- fix(workspace): don't call reload index if action is findIncompatibleExtension
- fix(views): don't refresh tree view if note visible

## Community

### General Updates
<!-- TODO: Delete this section if not appliacble -->

- **Share articles with the Dendron Community:** Have you stumbled upon articles you'd like to share with the community? The [[Dendron Reading Series is accepting submissions|community.events.reading-series#submissions]], and it can be how you earn a shiny [[Scout|community.discord.roles#scout]] badge in the Discord!
- **Dendron on Mastodon:** Dendron can now be followed on [Fosstodon](https://fosstodon.org/@dendronhq), a federated [Mastodon](https://joinmastodon.org/) server, where we will be sending toots. You read that right, I said toots! Join this alternative to Twitter, where open source is front and center at Fosstodon.
- **Contribute to Open Source:** Are you interested in contributing to the Dendron code base, but don't know where to start? Dendron is now using the `good first issue` label on beginner-friendly issues!
  - [Dendron issues labeled as good first issues](https://github.com/dendronhq/dendron/contribute)
  - [Dendron Contributor Docs: Quickstart](https://docs.dendron.so/notes/sPDJcZPRfXhKwnmnh9Pea/)
  - GitHub article: [Browse good first issues to start contributing to open source](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)
- **Latest Greenhouse Talk:** Resources, including a recording, have been uploaded for the first [[Greenhouse Talk|dendron://dendron.dendron-site/community.events.greenhouse]] of 2022!
  - [[Getting Things Done (GTD), Bullet Journaling, and Other Task Management Workflow Demos with Dendron|dendron://dendron.dendron-site/community.events.greenhouse.2022-02-25-gtd-bullet-journals-task-management-workflow-demos]]
- **Hangout with the Dendron team:** Our event calendar keeps on growing! Join us during [Community Teatime](https://link.dendron.so/luma) where we drink tea, eat food, and hangout. These will now appear in the [[Event Reminders|changelog.release.2022-03-01#event-reminders]] section each week.

### Starboard and TIL Highlights
<!-- TODO: update links. Delete section is no new items-->
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `seadude#7058` shared a link on [How to reduce image on Stack Overflow](https://meta.stackoverflow.com/questions/253403/how-to-reduce-image-size-on-stack-overflow): _"TIL that you can add a single 'size designator' character to control image size for images uploaded to StackOverflow."_
- 💡 `seadude#7058` shared an HTML snippet: _"TIL how to embed an SVG, and have full interactivity, into a RevealJS slide."_
  ```html
  <object data=".\assets\svg\2022-02-27_diagram.svg" type="image/svg+xml"></object>
  ```
- 💡 `aleksey#5276` shared a link to the [Windows Terminal Preview 1.13 Release](https://devblogs.microsoft.com/commandline/windows-terminal-preview-1-13-release/): _"TIAL that there is a decent native terminal for windows."_
- 💡 `evanAndiez#9559` shared a link to [Microsoft's Docs Contributor Guide](https://docs.microsoft.com/en-us/contribute/markdown-reference): _"TIL that Microsoft has their own markdown syntax for its Microsoft Docs site, with support of admonition, 2-span column layout."_
  - _"Further, they also have [their own way to include lines of code](https://docs.microsoft.com/en-us/contribute/code-in-docs) in the Markdown document."_
  - Related: [Dendron feature request for supporting admonitions](https://github.com/dendronhq/dendron/issues/1287)
  - Also related: [XKCD - How Standards Proliferate](https://xkcd.com/927/)

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.03.01]]

### Event Reminders

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Mar 02, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Mar 03, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Mar 08, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: _TBD_
    - Description: _TBD_
    - Next: [Fri, Mar 25](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

#todo

## Changelog
![[changelog#0840,1:#0830]]
