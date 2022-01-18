---
id: 3UMZl74UsgY9by8BgbDDW
title: '0.78'
desc: ''
updated: 1642518650025
created: 1642485037509
---

Dendron 0.78 has sprouted  🌱

Initializing a new workspace has just become easier: `Dendron: Initialize Workspace` now provides a file explorer to navigate to a destination on your filesystem.

The Markdown Import Pod now imports markdown in a cleaner fashion without reformatting the contents of the body. Only internal links to local files are now updated!

Lookup search results are leveling up when it comes to the displayed order of notes you may be looking for. For more information on these improvements, visit the docs on Lookup [[Sort Ordering|dendron://dendron.dendron-site/dendron.topic.lookup.find#sort-ordering]].

### Highlights
- enhance(pod): Markdown import pod avoids reformatting files ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import]])
- enhance(workspace): `Dendron: Initialize Workspace` can use file picker to select destination, instead of typing it out ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#initialize-workspace]])
- fix(lookup): add sort by levenshtein distance prior to sorting by update date to lookup results of the same match score ([[docs|dendron://dendron.dendron-site/dendron.topic.lookup.find#sort-ordering]])

### Everything Else
- enhance(markdown): allow notes to override the pretty refs setting ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#configuration]])
- enhance(workspace): detect config / client compatibility mismatch in cli
- fix(commands): paste-link-title-trim
- fix(workspace): insert note index enablement
- fix(views): hover preview containing local images on Windows
- fix(views): enable copy plaintext from preview

### Community

#### General Updates

- Discord: Starting this week, we'll be using an [[events|dendron://dendron.dendron-site/community.discord.channels#events]] stage channel for Dendron (such as _Office Hours_ and _New User Tuesdays_).
- `awesome-dendron`: Do you know of VS Code extensions, note taking workflow links, and other resources you want to share with the Dendron community? [Contribute to the discussion about an awesome list](https://github.com/dendronhq/dendron/discussions/2118)!

#### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

⭐ `evanAndiez#9559` [shared some git-fu](https://discordapp.com/channels/717965437182410783/742532267058004098/931750095471394856) on how [`--separate-git-dir`](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---separate-git-dirltgitdirgt) can be used with `git clone` to have `.git` exist in a different directory:

> _"...I can simply put the Dendron vault folder directly inside an Obsidian vault in iCloud Drive to enjoy the mobile experience of Dendron, without worrying that the heavy-weight `.next` folder or the sheer amount of files from the `.git` folder might break the iCloud sync."_

```bash
# Command
git clone --separate-git-dir=<path-to-git-dir/.git> url-to-git-repo

# Example
git clone --separate-git-dir=C:/Users/username/my_workspace/dendron-site-git/.git url-to-git-repo
```

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[16 - How to be spontaneous and grab some unexpected fun|dendron://dendron.dendron-site/community.events.reading-series.2022.01.18]]

#### Office Hours and New User Tuesdays

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Jan 19, 9:00 AM - 9:30 AM PST](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jan 25, 8:30 AM - 9:00 AM PST](https://link.dendron.so/luma)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Kamil](https://github.com/KamQb) `@qKi#0849`
  - #role.horticulturalist
  - [fix/paste-link-title-trim](https://github.com/dendronhq/dendron/pull/1961)

- [Sahil](https://github.com/sahil48)
  - #role.bugcatcher
  - [Long Titles in Search Results Overflow in Full Text Search](https://github.com/dendronhq/dendron/issues/2127)
  - [Search Bar Results to not stay anchored to the search bar when scrolling up](https://github.com/dendronhq/dendron/issues/2128)

- [Jeff Hopper](https://github.com/HopperTech)
  - [Search result link jumps to top of page](https://github.com/dendronhq/dendron/issues/2144)

- [Adam Gluck](https://github.com/aglucky) `@glucinater21#0869`
  - [Mobile Logo Issue](https://github.com/dendronhq/dendron/issues/2159)

- [Tsvetomir Bonev](https://github.com/invakid404)
  - #role.bugcatcher
  - [logo url doesn't take assetsPrefix into account](https://github.com/dendronhq/dendron/issues/2161)

- [Andrey Jef](https://github.com/andrey-jef) `@evanAndiez#9559`
  - #role.bugcatcher
  - [Inconsistent layout of mobile view of published pages](https://github.com/dendronhq/dendron/issues/2175)

- [Jack](https://github.com/imalightbulb) `@I'm a lightbulb#6986`
  - #role.bugcatcher
  - [numbering with no text are squashed together in the preview](https://github.com/dendronhq/dendron/issues/2178)

- [James Henry](https://github.com/henry-js) `@henry-js#6283`
  - #role.bugcatcher
  - [dendron-site: Troubleshooting `#lookup-shortcut-is-not-working`?](https://github.com/dendronhq/dendron-site/issues/357)

- [Michael Harrison](https://github.com/micharris42) `@micharris42#6073`
  - #role.taxonomist
  - [dendron-site: Updates to the Extensions page on the Dendron Wiki](https://github.com/dendronhq/dendron-site/issues/359)

- [Callum Mcdonald](https://github.com/chmac) `@chmac#2931`
  - #role.horticulturalist
  - [dendron-site: Minor typo fix](https://github.com/dendronhq/dendron-site/pull/365)

### Changelog
![[changelog#0780,1:#0770]]