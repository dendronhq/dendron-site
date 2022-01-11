---
id: SknlI45uuo5XNaM5qROJo
title: '0.77'
desc: ''
updated: 1641926102162
created: 1641924011077
---

Dendron 0.77 has sprouted  🌱

Introducing **Lookup View**, the new UI for lookup modifiers. This view becomes active in the explorer when a note lookup is active, helping you toggle modifiers for filtering and other superpowers.

- [[Lookup View Docs|dendron://dendron.dendron-site/dendron.topic.workbench#lookup-view]]
- [[Lookup Modifiers Docs|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers]]

Changing your workspace has just become easier: `Dendron: Change Workspace` now provides a file explorer to navigate to a destination on your filesystem.

### Highlights
- enhance(workspace): `Dendron: Change Workspace` can use file picker to select destination, instead of typing it out ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#change-workspace]])
- feat(lookup): new Lookup View for modifiers when a note lookup is active

### Everything Else
- fix(workspace): warn for frontmatter issues even if the frontmatter is not visible
- fix(publish): Publishing dev server keeps running after exiting on Windows
- fix(views): tree view refresh and circular dependency removal
- fix(views): `Show Preview` errors on Windows
- fix(cli): using `--noBuild` with export from CLI will cause command to hang
- fix(refactor): `Move Header` issues
- fix(schema): ensure month/day/time has two digits when doing data variable substitution

### Community

#### General Updates

- Blog post: [The Five Minute Journal with Dendron and Visual Studio Code](https://blog.dendron.so/notes/P1DL2uXHpKUCa7hLiFbFA/)
- Discord: New releases channel, in order to separate release announcements from other Dendron announcements.
- `awesome-dendron`: Do you know of VS Code extensions, note taking workflow links, and other resources you want to share with the Dendron community? [Contribute to the discussion about an awesome list](https://github.com/dendronhq/dendron/discussions/2118)!

### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `aleksey#5276` shared a link to [Today I Learned, A Hashrocket Project](https://til.hashrocket.com/): _"TIL there is a website named TIL"_
- 💡 `Dakota#2394` was using [GitHub Copilot](https://copilot.github.com/), which reminded them about [[code block syntax highlighting in Markdown|dendron://dendron.dendron-site/dendron.tutorial.rich-formatting#code-blocks]].

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[15 - Information Overload and the FOOD IS THOUGHT Metaphor|dendron://dendron.dendron-site/community.events.reading-series.2022.01.11]]

#### Office Hours and New User Tuesdays

- **Office Hours:** You can find notes from our sessions [[here|dendron://dendron.dendron-site/community.events.office-hours]].
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Jan 19, 9:00 AM - 9:30 AM PST](https://lu.ma/p8w1h28c)
- **New User Tuesdays:** You can find notes from our sessions [[here|dendron://dendron.dendron-site/community.events.new-user-tuesdays]]
    - Next: [Tue, Jan 25, 8:30 AM - 9:00 AM PST](https://lu.ma/fgb2vihp)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

#todo

- [Dan Gilleland](https://github.com/dagilleland) `@dagilleland#6290`
    - #role.taxonomist
    - [Pin longstanding issue for Typo Fixes and Grammar Corrections](https://github.com/dendronhq/dendron-blog/issues/17)
    - [General Typos and Grammar Corrections](https://github.com/dendronhq/dendron-blog/issues/15)
- [Harman](https://github.com/hrmnjt) `hrmnjt#1959`
    - #role.taxonomist
    - [Site reorg: Merged `[[dendron._ref.terms]]` with `[[dendron.concepts]]`](https://github.com/dendronhq/dendron-site/pull/348)

### Changelog
![[changelog#0770,1:#0760]]