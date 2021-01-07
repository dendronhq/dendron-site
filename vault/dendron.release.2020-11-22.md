---
id: f09162ec-6b20-4b53-bd5c-68aaa4698ed8
title: Release Notes(version 0.17)
desc: ''
updated: 1609990585314
created: 1606074212157
---
Dendron 0.17 has sprouted 🌱

### Highlights

- better autocomplete for wiki links
  - autocomplete will now prompt without a trigger, complete on links with aliases and complete faster than ever
- relative wiki links
  - you can now link to a specific section of a note using the `[[foo#header]]` syntax
- faster language features  🚀 🚀 🚀
  - going to a link definition, finding link references and other link specific functionality is much faster
- lots of bug fixes and enhancements
  - bunch of things are better with this release

### Community

- Dendron Office Hours
  - We had our first live office hours this week. Thanks to everyone that participated! You can find the recording [here](https://discord.com/channels/717965437182410783/737323300967022732/778798279658962944). A reminder that you can submit questions ahead of time in the #office-hours channel in [discord](https://discord.gg/AE3NRw9). We'll send another survey this week for scheduling the next office hours at the end of the month. 

### House Cleaning

- Deprecation of `Dendron Markdown Notes`
  - prior to 0.17, Dendron used the aforementioned extension for language features like auto completion and following links
  - with 0.17, all language features is now being handled with Dendron
  - Dendron Markdown Notes is no longer required and can interfere with new definitions
  - You can uninstall Dendron Markdown Notes through the extensions panel inside VSCode
      ![uninstall ](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/etc.install.jpg)
- Version Number in DendronConfig
  - `dendron.yml` now has an added `version` field. It's automatically set to `0` for all current configurations. we'll be coming out with a new version in the near future to support additional multi-vault features

### In the Works

Most of the same items from last week still apply 😅

- a better **up to date** public roadmap
- bringing multi-vault to feature parity with all existing Dendron functionality
- a better publishing experience

### Thanks

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release 👨‍🌾 👩‍🌾

- [Konrad Jamrozik](https://github.com/konrad-jamrozik)
  - [fix typo](https://github.com/dendronhq/dendron-site/pull/38)
  - [show note graph doesn't prune stubs](https://github.com/dendronhq/dendron/issues/359)
- [Daniel Zhang](https://github.com/DanielHZhang)
  - [rename note issues](https://github.com/dendronhq/dendron/issues/338)
- [Tyler Nieman](https://github.com/tsnieman)
  - [Dendron graph title](https://github.com/dendronhq/dendron/issues/358)
- [LucasD3](https://github.com/LucasD3)
  - [missing welcome note](https://github.com/dendronhq/dendron/issues/361)
- [Gabriel Horner](https://github.com/cldwalker)
  - [update multi-vault docs](https://github.com/dendronhq/dendron-site/pull/39)
- [Oli Crask](https://github.com/OxygenLithium)     
  - [Stale notes in tree view](https://github.com/dendronhq/dendron/issues/367)
- [John Young](https://github.com/iterating)
  - [Don't override minimap preferences](https://github.com/dendronhq/dendron/issues/366)
- [Tim Condit](https://github.com/tcondit)
  - [Fix typos](https://github.com/dendronhq/dendron-site/pull/40)

### Changelog

((ref:[[dendron.release.changelog]]#0.16.3:#0.16.1))

