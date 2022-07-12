---
id: vikda112zw2sss8lbit4qey
title: Go to
desc: ''
updated: 1657295450362
created: 1651331147246
shortcuts: none
---

- shortcuts: {{fm.custom.shortcuts}}

Go to the current link under cursor. This command will exhibit different behavior depending on the type of the link:

- for links to external files or web, this command will open the link using the system default. Relative files paths will be opened relative to the vault that the note is in.
- for wikilinks to regular notes, this command will open the link (similar to [[Go to Note|dendron://dendron.dendron-site/dendron.topic.navigation#go-to-note]])
- for wikilinks to [[proxy notes|dendron://dendron.dendron-site/dendron.topic.special-notes#proxy-notes]], this command will open the link designated by the `uri` property of the frontmatter
