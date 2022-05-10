---
id: g1ez7c803vqoq4maa7kufsn
title: 0.94
desc: ''
updated: 1652201550302
created: 1652154281573
---

Dendron 0.94 has sprouted  🌱

**Go To:** We're bringing goto back! Use `Dendron: Go to` to navigate to regular notes and newly introduced [[proxy notes|dendron://dendron.dendron-site/dendron.topic.special-notes#proxy-notes]]. See the [external notes](https://github.com/dendronhq/handbook/blob/main/handbook/ext.md#L8:L8) section of the Dendron handbook for an example of how we use this feature to manage bookmarks!

- More information: [[Go To Command|dendron://dendron.dendron-site/dendron.ref.commands.goto]]

**Graph Themes:** It's time your graph got a facelift! You can now choose between 3 graph themes: Block, Classic and Monokai, or create your own custom theme styled to your liking. 

![examples of different graph themes](https://org-dendron-public-assets.s3.amazonaws.com/images/graph-theme-gif.gif)

- More information: [[Graph Themes Documentation|dendron://dendron.dendron-site/dendron.topic.graph-view.md#graph-theme]]

**Help and Feedback Panel:** We're rolling out a new Panel in VSCode to give you convenient access to our starting guide and documentation, as well as a direct way to give us feedback. Check it out in the Side Bar!

**Detect Duplicate IDs**: Dendron will now detect and warn you when you have notes with duplicate IDs. This can be a problem when copying and pasting notes.

## Highlights
- feat(navigation): add goto command
- enhance(view): graph themes
- enhance(workspace): detect and warn for duplicate note IDs

## Everything Else
- feat(workspace): Add doctor command to remove deprecated config and prompt on upgrade
- enhance(view): help and feedback panel
- enhance(workspace): use better defaults for `Create Task Note`
- enhance(commands): prefix paste-image command with "Dendron" for uniformity
- enhance(cli): cli will report invalid commands
- enhance(view): make dendron side bar visible when dendron not active
- fix: bad wikilink is created with selection2link if selection is multi-line 
- fix: insert note index `#undefined` in case missing tags
- fix: highlighting misidentified capitalized header anchors on links as missing
- fix: CLI writes "cli" as the version into the meta file which breaks initialization
- fix: self contained vaults get cloned into the wrong directory

## Community

### General Updates
**Self Contained Vaults:**  Self contained vaults are here! To find out why they matter and how to start using them, read our [[blog post on self contained vaults|dendron://dendron.blog/blog.2022.2022-05-10-self-contained-vaults-release]], or explore the [[migration guide|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained.migrate]].

**File Nesting** File Nesting is now stable in v1.67 of VSCode. With this change, VSCode now has (partial) support for Dendron's dot hierarchy!

Add the following to your workspace settings to see it in action:
```json
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.patterns": {
    "*": "${basename}.*.md",
}
```

- More information in the [VSCode Release Notes](https://code.visualstudio.com/updates/v1_67)

**VSCode Markdown Features:** We published a [[blog post|dendron://dendron.blog/blog.2022.05-05-vscode-markdown-edition]] looking at the latest markdown features in VSCode. Learn about the new ways you drag and drop files, rename links and more. 

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `@dagriefaa#2892` shared a tip for minimzing visual clutter in your workspace: _"you can use `<details>` and `<summary>` tags to set up collapsible regions"_

```html
<details>
  <summary> click to show </summary>
  hidden stuff
</details>
```

- 💡 `foureyedsoul#0796` shared a link to [an article on Math Accessibility](https://www.ryanpatrickrandall.com/notes/Accessibility/math-a11y): _"This isn't exactly what I learned today,  but today I did write this  note summing up what I've recently learned about combining MathML & MathJax to make math formatting more accessible online"_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.05.10.md]]

### Event Reminders

- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, May 10, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: TBD
    - Description: TBD
    - Next: [Fri, May 27, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Jun 01, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)


### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Steven Hilton](https://github.com/mshiltonj) `@pengurrito#8324`
  - wrote blog post: https://dev.to/mshiltonj/my-personal-weekly-reviews-in-dendron-3929

- [Ben Ang](https://github.com/benhsm) `@Jack of some quantity of trades#3247`
  - [fix: Make CLI report invalid commands](https://github.com/dendronhq/dendron/pull/2876)

- [huland](https://github.com/huland) `@huland#6948`
  - #role.horticulturalist
  - [fix: insert note index `#undefined` in case missing tags](https://github.com/dendronhq/dendron/pull/2789)
  
- [Vaden Masrani](https://github.com/vmasrani) `@vaden#2954`
  - #role.bugcatcher
  - [Dendron Doctor -> removeStubs resulting in 'no data' prompt](https://github.com/dendronhq/dendron/issues/2880)
  
- [Shane Perry](https://github.com/ShanePerry)
  - #role.taxonomist
  - [Update dendron.ref.config.workspace.md](https://github.com/dendronhq/dendron-site/pull/490)

- [aodhagan](https://github.com/aodhagan)
  - #role.bugcatcher
  - [Dendron snippets not working](https://github.com/dendronhq/dendron/issues/2891)

- [harrijer](https://github.com/harrijer) `@harrijer#3513`
  - #role.bugcatcher
  - [Journal notes front matter title breaks if you change value of journal:dateFormat](https://github.com/dendronhq/dendron/issues/2895)

## Changelog
![[changelog#0940,1:#0930]]
