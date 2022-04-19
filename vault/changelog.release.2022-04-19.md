---
id: 7ls6rdbaikfogdptx1xsskb
title: 0.91
desc: ''
updated: 1650342965543
created: 1650337147498
---

Dendron 0.91 has sprouted  🌱

**Meeting Notes**: We're introducing a new type of special note: **meeting notes**. Meeting notes help you quickly create meeting-specific notes by applying a customizable template. Try them out with the `Dendron: Create Meeting Note` command!

- More information [[in our documentation on special notes|dendron://dendron.dendron-site/dendron.topic.special-notes#meeting-note]]

**Note Title Configuration**: This release introduces a configuration setting to allow notes to display their full hierarchy in their note title. For example, if this setting is enabled, a new note named `one.two.three` will be titled  `One Two Three`.

- More information [[in our documentation on workspace configuration|dendron://dendron.dendron-site/dendron.ref.config.workspace#enablefullhierarchynotetitle]]

**Opening Assets**: We've expanded functionality for file assets in Dendron. For wikilinks that link to non-note files, `Dendron: Go to Note` and `Go to Definition` will now open them using your OS default app.


## Highlights
- feat(workspace): Meeting Notes ([[docs|dendron://dendron.dendron-site/dendron.topic.special-notes#meeting-note]])(#2727) @jonathan 
- feat(workspace): option to gen title using full hierarchy ([[docs|dendron://dendron.dendron-site/dendron.ref.config.workspace#enablefullhierarchynotetitle]]) (#2593) @jonathan 
- enhance(navigation): `Dendron: Go to Note` and `Go to Definition` support assets in wikilinks (#2688) @kaan

## Everything Else
- feat(cli): Add rename functionality to CLI (#2408) [[people.ben-ang]]
- enhance(workspace): workspace vault support for self contained vaults (#2728) @kaan 
- fix(airtable): Exporting to airtable automatically saves current document (#2696) @tuling
- fix(publish): add luxon as dev dependency (#2713) @kevin
- fix(workspace): Dendron causes errors in non-Dendron workspaces (#2731) @kaan
- fix(vaults): self contained vaults sync (#2758) @kaan
- fix(view): support custom styles for Note Graph (#2760) @joshi
- fix(view): apply current theme when vscode reduce motion setting is on (#2749) @joshi

## Community

### General Updates
- **Task Management Tutorial**: Have you ever wondered how you can keep track of your todos and projects in Dendron? Well, you're in luck because we've published a new tutorial on that *exact* topic! Learn how you can use bullet lists, task notes, configurations and more to manage your tasks.
    - [[Plaintext Task Management with Dendron and VSCode |blog.2022.2022-04-19-plaintext-task-management-vscode]]

- **Share articles with the Dendron Community:** Have you stumbled upon articles you'd like to share with the community? The [[Dendron Reading Series is accepting submissions|community.events.reading-series#submissions]], and it can be how you earn a shiny [[Scout|community.discord.roles#scout]] badge in the Discord!

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `seadude#7058` shared a link to [link](https://github.com/yzane/vscode-markdown-pdf/issues/279): _"TIL: How to stop images from breaking when exporting markdown as PDF!"_

- 💡 `champloo_musashi#7610` shared a tip to help orgnaize starred repos on Github: _"TIL you can organize your starred repos on github into lists now, so now you can star hundreds of repos without fear of drowning in them (kind of)"_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

### Event Reminders

- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Apr 14, 11:00 AM PDT / 18:00 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: Publishing workflows with Dendron.
    - Description: Interested speakers will present their workflows for publishing content, followed by an open discussion. The event will be recorded and later published online.
    
    This is a good opportunity to share tips and tricks about nifty things about your workflow, and ask for advice and input on challenges and pain-points in your current system.
    - Next: [Fri, Apr 29, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, May 04, 09:00 AM PDT / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
    - Notes for this past weeks Office Hours can be found [[here|dendron://dendron.dendron-site/community.events.office-hours.2022.04.06]], and the [recording here](https://www.youtube.com/watch?v=-CK7DmkvNzA).
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, May 10, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
    
### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

## Changelog
![[changelog#0910,1:#0900]]
