---
id: 16qtgkcY-tgiYZWafX9Sp
title: Release Notes (version 0.50)
desc: ''
updated: 1626114830492
created: 1626100738632
---



Dendron 0.50 has sprouted  🌱

### Highlights

- **Local Note Graphs**. Don't be a tourist. Navigate like a local with local note graphs!
- **Header autocomplete**. Header autocomplete works for all your notes. Type `[[#` to find all headers in your current note and `[[note.name#` to find a header in a particular note. 
- **Block reference autocomplete**. Any block in the current not can be referenced (and the reference is automatically added). Just type `[[^` to find all arbitrary blocks you can reference in your current note. More details [[here|dendron.ref.intellisense]]. 
- **Better ux for block anchors**. They are now faded in the text editor and hidden on published sites
- **Show/hide labels in graph view** and date to be a minimalist.
- **Github import pod.** Now, you can import issues directly from Github and have them show up as notes! Learn more [[here|dendron.topic.pod.builtin.github]]
- **Direct child filter ignores stubs.** There's now an easy way to filter notes in the current hierarchy without the clutter of stub notes. Last week's CROP shipped! 
- **Fix windows preview issue** where links fail top open
### Docs

Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.

- The revamped [[dendron.tutorial]] is on the Dendron site. Go check it out if you're starting out (or would just like a refresher on all things Dendron).  
- Added [[dendron.guides.best-practices]] around using Dendron across machines and repo synchronization. 
- Docs for [[dendron.ref.intellisense]]. 
- Documented the [[Github Pod|dendron.topic.pod.builtin.github.import]]


### [[Pruning ✂️|dendron.ref.status#pruning-️]]
- [[hide block anchors config|dendron.topic.publishing.configuration]] was removed. Hiding published anchors is the expected behavior (no config needed). 
- Dendron Markdown Links is now removed. 

### Ongoing 
<!-- Discuss ongoing efforts here -->

- We're working on a fairly large CROP from a few cycles ago to add unlinked references ([#219](https://github.com/dendronhq/dendron/issues/219)) and expect to complete this by next week. 
- We've come up with a new approach to default note creation in a multi-vault context. See the discussion [here](https://github.com/dendronhq/dendron/issues/649)

### Community

#### Office Hours

You can find notes from our latest office hours [[here|dendron.community.office-hours.2021.07.11]] 

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
- [andrey-jef](https://github.com/andrey-jef) @evanAndiez#9559
  - `+taxonomist`
  - [Notes with ids starting with _ breaks publishing](https://github.com/dendronhq/dendron/issues/945)
  - [update config docs](https://github.com/dendronhq/dendron-site/pull/137)
- [Felipe Whitaker](https://github.com/felipewhitaker) Leite#5753
  - `+taxonomist`
  - [correct spelling](https://github.com/dendronhq/dendron-site/pull/139)

You can see an overview of all roles [[here|dendron.community.roles]]

### Changelog
![[dendron.release.changelog#050,1:#049]]
