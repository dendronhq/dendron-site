---
id: mZhQvxLdMJKaqpgyjOTVG
title: '0.54'
desc: ''
updated: 1636510310732
created: 1628588136181
---

Dendron 0.54 has sprouted  🌱

### Highlights

- new lookup commands: lookup has split into "Lookup Note" and "Lookup Schema". these commands are significantly faster 🚀 than the current lookup on large workspaces ([[docs|dendron.ref.commands#lookup-note]])
- frontmatter tags: create `tags: [awesome, sprouts]` directly in the frontmatter  ([[docs|dendron.topic.tags#frontmatter-tags]])
- custom tag colors: create the perfect color palette for each of your tags ([[docs|changelog#custom-colors-for-tags]])
- rename headers: like **Rename Note** but for headers ([[docs|changelog#rename-header-command]])
- integrated seeds: seed commands are now available from within the plugin ([[docs|changelog#seed-commands]])
- github publish pod: update the status of github issues from inside of Dendron ([[docs|changelog#github-publish-pod]])
- quality of life improvements
    - auto-resolve conflicting keybinding from Vim 
- lots of fixes
  - issue with non-highlighting wikilinks
  - broken links in the extension README
  - adding a vault via the CLI will also add the vault in the code workspace


### Ongoing 

We're hiring at Dendron!
- [[Senior Full Stack Engineer|careers.senior-full-stack-engineer]]
- [[Head of Growth|careers.head-of-growth]]
- [[Head of Content|careers.head-of-content]]

Work is going on for last weeks CROP ([Create Index Note](https://github.com/dendronhq/dendron/issues/603)).
Because this is a more involved feature, we've created an [[RFC|rfc.18-add-note-indexes]] to discuss the implementation details. Please leave any feedback in [this github discussion](https://github.com/dendronhq/dendron/discussions/1076)

### Community

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

Docs:
- [Mandar Vaze](https://github.com/mandarvaze) @mandarvaze#4457
  - fixed docs
Issues:
- [imalightbulb](https://github.com/imalightbulb)
    - #dendron.taxonomist
    - [RFC - Integrated Space Repetition](https://github.com/dendronhq/dendron/issues/1109)
- [ConnorSMaynes](https://github.com/ConnorSMaynes)
    - [Dendron: Paste File from clipboard, just like for image](https://github.com/dendronhq/dendron/issues/1090)
- [manunamz](https://github.com/manunamz)
    - [Allow User To Set alphabet and size For Nanoid ID in Config](https://github.com/dendronhq/dendron/issues/1091)
- [Micharris42](https://github.com/micharris42) @micharris42#6073
    - #dendron.bugcatcher
    - [Wikilinks Changing Colors](https://github.com/dendronhq/dendron/issues/1093)
- [craSH](https://github.com/craSH) craSH#0159
    - #dendron.bugcatcher
    - [Dendron Paste Image command is not aware of wayland CLI tools for interacting with clipboard](https://github.com/dendronhq/dendron/issues/1095)
- [bj0](https://github.com/bj0)
    - [Feature Request Adding date with schema autocomplete](https://github.com/dendronhq/dendron/issues/1107)


### Changelog
![[changelog#054:#053]]
