---
id: 2pRvTG91s3JFlLFhJz3H4
title: '0.80'
desc: ''
updated: 1643733773670
created: 1643732119168
---

Dendron 0.80 has sprouted  🌱

The Markdown import pod will now include existing frontmatter metadata! For more information on how this is handled, and how it can be configured when there are conflicting attributes, reference the documentation on [[importFrontmatter configuration|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import#importfrontmatter]].

### Highlights
- enhance(pods): import note metadata on markdown import
- enhance(workspace): conflicting extension warning

### Everything Else
- enhance(publish): show lookup without waiting for notes to fetch
- enhance(publish): faster search results
- enhance(workspace): separate journal scratch commands
- fix(lookup): bad title text when creating new schema
- fix(publish): numbered lists without content stack on top of each other
- fix(publish): bad logo text position on mobile
- fix(publish): Search Bar Results to not stay anchored to the search bar when scrolling up
- fix(schema): fix schema template match when there is same grandchild from two different schema parents
- fix(navigation): decode urlencoded spaces in asset path before opening
- fix(pods): improve error feedback to user
- fix(publish): CSS sidebar is off on smaller screens like iPad

### Community

#### General Updates

- [`awesome-dendron`](https://github.com/dendronhq/awesome-dendron/) list was released this week: A big list of Dendron docs, talks, tools, examples, articles, extensions, vaults, showcases, and more that the internet has to offer. 
- For all documentarians: You may be interested to know that the [Write The Docs (WTD) Portland 2022](https://www.writethedocs.org/conf/portland/2022/) conference will be held virtually, and is scheduled for May 22nd to 24th.

#### Starboard and TIL Highlights
<!-- TODO: update links. Delete section is no new items-->
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `moksha#0720` shared a link to [Mdnotes Zotera Plugin](https://github.com/argenos/zotero-mdnotes): _"Found a neat way to get your journal articles or web annotations onto your notes...I have found this works extremely well as it create proper tags, backlinks and bibliography for all media (web annotations, journal articles, articles, books)."_

1. Download Zotero
1. Get the MDnotes addon
1. Activate the MDnotes plugin on Zotero by going to `Tools > Add-ons >` and drag and drop the plugin on the window
1. Right click the media on Zotero and click `MDnotes > Export to markdown`.
1. Move your markdown note to the respective folder on Dendron.

- ⭐ `lukecarrier#2081` shared a link to [Publish to Netlify via GitHub Actions](https://luke.carrier.im/notes/soaskhwfxi1em8dzidvbn/): _"Something I learned the other day is that `@actions/setup-node` will preserve the per-user `npm` cache for you if you set `with:cache: npm`, and similar for `yarn`. This has been enough to get my Actions->Netlify pipeline down to around ~90s."_
- ⭐ `cameron#9185` shared a link to [Draw.io Integration for VS Code](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio): _"Check out the 'code link' feature in the draw io extension - it could be nifty if it supported opening links to dendron pages instead of code symbols."_
- 💡 `seadude#7058` shared a link to [StackOverflow on targeted git cloning](https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository/52269934#52269934): _"TIL, you can sync a specific subdirectory only from an entire Git repo! Instead of cloning an entire Git repo in, say, `Users/me/Documents` (and the disconnect between my Dendron workspace and the repo contents), I can instead clone one subdirectory from the repo (like `blog-posts/`!!) to my `Dendron/vault/blog-posts` directory!_"
- 💡 `bsqrd#9701` shared a link to [Google's Ngram Viewer](https://books.google.com/ngrams/): _"TIL, Google Books has a tool called Ngram Viewer. Could be a very interesting tool for doing research...and [here are the docs](https://books.google.com/ngrams/info)"_

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[18 - The Antidote to Melancholy: Robert Burton’s Centuries-Old Salve for Depression, Epochs Ahead of Science|dendron://dendron.dendron-site/community.events.reading-series.2022.02.01]]

#### Office Hours and New User Tuesdays

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Feb 2nd, 9:00 AM - 9:30 AM PST](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Feb 8th, 8:30 AM - 9:00 AM PST](https://link.dendron.so/luma)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

#todo

### Changelog
![[changelog#0800,1:#0790]]
