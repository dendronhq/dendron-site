---
id: E1Zgn2za7n3QVfm3MtIBe
title: '0.81'
desc: ''
updated: 1644291498548
created: 1644289547625
---

Dendron 0.81 has sprouted  🌱

[[Pod V2|dendron://dendron.dendron-site/dendron.topic.pod-v2]], the new and improved Dendron pod system, is now in preview! Improvements include flexibility that helps you export a single note, a hierarchy, a vault, or your entire workspace. Pod V2 also includes customizable export mappings where you can select frontmatter fields that you want to export.

In addition, Dendron includes a built-in [[Airtable Export Pod|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export]]! Have you wanted to visualize your task notes in a Kanban? With Airtable, now you can.

More on PodV2:
- [[PodV2 Quickstart (w/ Markdown Export)|dendron://dendron.dendron-site/dendron.topic.pod-v2.quickstart]]
- [[Visualize Task Notes with Airtable|dendron://dendron.dendron-site/dendron.topic.pod-v2.tutorial.airtable-task-notes]]

[[Workspace: Sync|dendron://dendron.dendron-site/dendron.topic.workspace#workspace-sync]] has evolved:

> _Dendron can automatically detect merge conflicts and rebases, stash and restore your local changes when pulling if needed, and warn you about misconfigured remotes. Make sure to look at the message Dendron shows you after the sync is completed to see if there were any errors._

Schemas have leveled up: you can now use [[cross-vault references to templates|dendron://dendron.dendron-site/dendron.topic.schema#cross-vault-template-syntax]] applied by schemas. This helps in multi-vault workspaces where templates with the same names can exist in multiple vaults.

## Highlights
- enhance(schemas) support cross vault links in schema templates
- enhance(schemas) support template prompt when multiple templates match a schema
- enhance(sync): Workspace Sync now can detect merge conflicts and ongoing rebases to avoid committing bad notes
- enhance(sync): Workspace Sync now can detect bad or misconfigured remotes and warn about them
- enhance(sync): Workspace Sync now can detect that a push is not needed, and skip pushing
- enhance(sync): Workspace Sync commit messages now include the version of Dendron, the names of vaults in that repository, and the hostname of the committing machine

## Everything Else
- enhance(sync): Workspace Sync now can detect that a push would fail, and avoid pushing to remote
- enhance(sync): Workspace Sync now stashes and unstashes local changes to pull even when there are uncommitted changes
- enhance(sync): Workspace Sync now has better error messages if something went wrong
- enhance(views) improve hover preview performance
- fix: preview opens wrong path on Windows
- fix(views): show preview doesn't display targeted files when using file explorer
- fix(views): windows hover preview now shows images
- fix(schemas): Do not include stubs as part of template suggestions when applying a template

## Community

### General Updates

- [Dendron is now officially publisher verified](https://marketplace.visualstudio.com/publishers/dendron) on the VS Code Marketplace. This means all official plugins, published by Dendron, will include a shiny blue checkmark of authenticity.
- [WriteTheDocs (WTD) Portland 2022 Conference](https://www.writethedocs.org/conf/portland/2022/): The conference will be focused on documentation systems, tech writing theory, and information delivery. It's a good opportunity to share insights and experience with the wider documentation-writing community. If you are interested in attending or presenting, the deadline for submitting proposals is **11:59PM PT on February 25, 2022,** and event tickets are now on sale.
  - [WriteTheDocs Conference Proposal Workshop](https://www.meetup.com/virtual-write-the-docs-east-coast-quorum/events/283502054/): Haven't submitted a proposal or spoken at a conference before? On **Thurs. February 10th,** there is a conference proposal workshop that can help you out if you are looking to present at WTD 2022.

### 2021 Dendron New User Survey Results

The new user survey was open for several months in 2021, where we were prompting new Dendron users within VS Code itself. We had a few thousand respondents take that opportunity to give us feedback. [These are the results!](https://blog.dendron.so/notes/AitIUzlK955P5EFojPjxz/)

### Dendron Greenhouse Talks Rebooting

In these talks, Dendron community members share the fruits of their learning. This may include showcasing workflows, tooling setups, systems, and other topics in personal knowledge management, but also anything that the speaker has in-depth knowledge of that may be of interest to the wider community.

Recordings of Greenhouse talks from the past year can be viewed on the [Dendron's The Greenhouse YouTube Playlist](https://www.youtube.com/playlist?list=PLrXlRqY7c8J-lPtS82muQd4VD8pR7Vn4E).

- If you are interested in giving a Greenhouse talk, please fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal).
- If there is a Greenhouse talk you would like to see, please fill out the [Greenhouse Request Form](https://airtable.com/shrig560yLNVSb79y?prefill_SurveyName=GreenhouseRequest).

In upcoming weeks, you will also have the chance to vote on which talk topic should be next.

However you may choose to be involved, thanks for being a vital part of this whole Dendron endeavor, and happy gardening!

### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `Kamholtz#6006` shared a link to [Obsidian's Breadcrumbs Plugin](https://github.com/SkepticMystic/breadcrumbs/issues/297): _"It is now possible to navigate Dendron vaults (with Obsidian) even when notes within the hierarchy do not exist yet. Said stubs appear in the various views as parents, children and siblings and can be easily created by tapping on them. I highly recommend everyone try it out if you're looking for a good mobile option."_
- 💡 `seadude#7058` shared:
  - How to disable the [`workbench.editor.enablePreview` feature in VS Code](https://code.visualstudio.com/docs/getstarted/settings#_default-settings) so that opening a file will open a new tab instead of a preview/transient tab:
  ```json
  // Controls whether opened editors show as preview editors. Preview editors do not stay open, are reused until explicitly set to be kept open (e.g. via double click or editing), and show file names in italics.
  "workbench.editor.enablePreview": false,
  ```
  - An alternative way to list images in tables, using HTML in Dendron notes:
  ```html
  <table>
    <tr>
      <td style="border: 5px solid black; border-collapse: collapse; padding:0px; border-color: #FAFAFA;"> 
        <img src=".\assets\images\test.png"/> 
      </td>
    </tr>
  </table>
  ```

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.02.08]]

### Office Hours and New User Tuesdays

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Feb 16, 9:00 AM - 9:30 AM PST](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Feb 22, 8:30 AM - 9:00 AM PST](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

#todo

## Changelog
![[changelog#0810,1:#0800]]