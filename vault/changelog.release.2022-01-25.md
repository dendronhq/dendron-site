---
id: 2O1bIbvJ7w1NkO7OyvSys
title: '0.79'
desc: ''
updated: 1643130403170
created: 1643076020482
---

Dendron 0.79 has sprouted  🌱

Publishing got a lot faster for existing deployments. Builds are now 10x [faster](https://discord.com/channels/717965437182410783/928801649265352764/931303712641658900) when publishing with cached dependencies. 

We also made multi-vault easier to work with by default.  When creating new notes, in multi-vault workspaces, [[confirmVaultOnCreate|dendron.ref.config.commands#confirmvaultoncreate]] now defaults to `true`. 

Breaking change: A fix in this release will disable [date variable substitution](https://wiki.dendron.so/notes/861cbdf8-102e-4633-9933-1f3d74df53d2.html#template-variables), so current users will not be able to use it for the time being. We're aiming to re-introduce next week - apologies for the churn!

### Highlights
- enhance(publish): logo can reference a full URL path to external image ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.faq#how-do-i-add-a-logo-to-my-website]]) 
- enhance(lookup): add configuration for vault selection behavior with new `vaultSelectionModeOnCreate` config option, and change `confirmVaultOnCreate` default to `true` ([[docs|dendron://dendron.dendron-site/dendron.ref.config.commands#vaultselectionmodeoncreate]])
- enhance(publish): attempt to update Next.js template in-place
- enhance(publish): add lockfile to Next.js

### Everything Else
- fix(server): highlighting breaks when there's too much text
- fix(workspace): stop link candidate logic when disabled
- fix(commands): renamed command from `Goto Note` to `Go to Note`
- fix(markdown): Exclude parenthesis from tags
- fix(publish): logo doesn't respect assetsPrefix
- fix(workspace): cursor moves to top when opening file through the search
- fix(schema): Use string replace instead of lodash for date variable substitution (breaking change)
- fix(publish): some published pages will show error

### Community

#### Announcing our Dendrologists

We'd love to introduce the Dendron community to our new [[Dendrologists|dendron://dendron.dendron-site/community.dendrologists]]! They'll be focusing on growing and fostering the Dendron community by covering key [[focus areas|dendron://dendron.dendron-site/community.dendrologists]] such as contributor experience, coordinating community events, improving the docs, and maintaining community gardens.

![[community.dendrologists#meet-the-dendrologists,1:#*]]

#### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `viddo#9229` shared a link to [a Tweet about new VS Code insider features](https://twitter.com/mattbierner/status/1483590058066149376): _The latest VS Code insiders adds completions for Markdown links, including: path/file links, header links, and reference links_
- ⭐ `hrmck#7968` learned how you can [[Add Dendron to application launchers on Linux desktops|dendron://dendron.dendron-site/dendron.guides.cook#add-dendron-to-application-launchers-on-linux-desktops]]
- ⭐ `lukecarrier#2081` showed [how he used Gource](https://gist.github.com/LukeCarrier/debd81f1a83e4442ade71434ee36dd04) to create a video of his [Dendron Second Brain growing over time](https://www.youtube.com/watch?v=CD9xCoknhyU): _"I figured it'd be interesting running [Gource](https://gource.io/) over my Dendron workspace to show its growth since I went all in with it around a year ago"_
- 💡 `krisfremen#6757` wondered if Dendron was hiring: [[the answer is yes!|dendron://dendron.dendron-site/careers]]
- 💡 `moksha#0720` learned about [[schemas and templates|dendron://dendron.dendron-site/dendron.topic.schema.tutorial.first-schema]], and now uses them for [interstitial journaling](https://nesslabs.com/interstitial-journaling) within Dendron
- 💡 `Jack of some quantity of trades#3247` said: _"TIL about the existence of [cooklang](https://cooklang.org/), a markup language + cli tool + webserver setup for recipe/grocery management"_
- 💡 `Jack of some quantity of trades#3247` said: _"TIL about the [Final Version Perfected algorithm](https://www.lesswrong.com/posts/xfcKYznQ6B9yuxB28/final-version-perfected-an-underused-execution-algorithm) for exhaustively and efficiently prioritizing tasks on any itemized to-do list under most conditions"_

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.01.25]]

#### Office Hours and New User Tuesdays

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Feb 02, 9:00 AM - 9:30 AM PST](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Feb 08, 8:30 AM - 9:00 AM PST](https://link.dendron.so/luma)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Vik](https://github.com/skfile) `@constantpresent#2695`
  - #role.horticulturalist
  - [fix: renamed command from goto note to go to note](https://github.com/dendronhq/dendron/pull/2187)

- [Luke Carrier](https://github.com/LukeCarrier) `@lukecarrier#2081`
  - [enhance(publish): attempt to update template in-place](https://github.com/dendronhq/dendron/pull/2162)

- [Nicklas Gummesson](https://github.com/viddo) `@viddo#9229`
  - #role.horticulturalist
  - [fix(tags): Exclude parenthesis from tags](https://github.com/dendronhq/dendron/pull/2182)

- [Tsvetomir Bonev](https://github.com/invakid404)
  - #role.horticulturalist
  - [chore: fix typo in github-actions username](https://github.com/dendronhq/dendron/pull/2218)

- [Adam Gluck](https://github.com/aglucky) `@glucinater21#0869`
  - #role.taxonomist
  - [Fixed error in Markdown References](https://github.com/dendronhq/dendron-site/pull/371)
  - [File links with spaces](https://github.com/dendronhq/dendron/issues/2228)

- [Callum Mcdonald](https://github.com/chmac) `@chmac#2931`
  - #role.bugcatcher
  - [Graph view resets options on every load](https://github.com/dendronhq/dendron/issues/2205)
  - [Dendron Tree View changes sort after note rename](https://github.com/dendronhq/dendron/issues/2209)
  - [Journal trait is not activated from lookup](https://github.com/dendronhq/dendron/issues/2211)
  
- [David Gomes](https://github.com/LegendL3n)
  - #role.bugcatcher
  - [Imported Markdown's relative links don't work](https://github.com/dendronhq/dendron/issues/2251)

- [Binly42](https://github.com/Binly42)
  - #role.bugcatcher
  - [Command `dendron.copyNoteLink` fake success for anchor in readonly editor](https://github.com/dendronhq/dendron/issues/2262)
  - [Preview would fail on last item of a nested list if it is trailed by a normal text paragraph](https://github.com/dendronhq/dendron/issues/2264)


### Changelog
![[changelog#0790,1:#0780]]
