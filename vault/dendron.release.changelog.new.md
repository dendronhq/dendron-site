---
id: 65b03213-d3d1-46c0-9881-a6280ed9bdeb
title: New
desc: ''
updated: 1603847473303
created: 1602096212957 
published: false
nav_exclude: true
---

##

### Features

#### Migrate Existing Workspaces to Server Mode 
- commit ([d19b6ec](https://github.com/dendronhq/dendron/commit/d19b6ecb97fb60d8706e14f0181795113b5e108b))

This is the last phase in Dendron's server mode migration. All new workspaces are already running in server mode as well as well as users that have opted into it. This update transparently migrates remaining workspaces to server mode. 

As a reminder, [[server mode|dendron.roadmap.project.n.2020.server-migration]] is a re-architecture of Dendron that enables both better performance and a vast array of new features. 

Finally, we do have an escape valve in things something goes terribly wrong. You can set the following option to revert server mode behavior. If you end up using this, please also cut as [a ticket]( https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title=) or a message in [discord](https://discord.gg/QbKsNx). 

((ref: [[dendron.topic.config]]#dendron.noservermode:#*))

### Enhancements
- **notes:** selection2link will auto generate a title based on the selection ([9964339](https://github.com/dendronhq/dendron/commit/9964339138bde18dc022fdd62ce9ba9d529cfa2b))

((ref: [[dendron.topic.lookup]]#selectiontype:#*))


- **workbench:** graceful failure on bad schema ([4db5064](https://github.com/dendronhq/dendron/commit/4db5064e4eef61d9c95b9abe34f2dec41550bd9d))
    - instead of refusing to initialize, Dendron will skip bad schemas and generate an error report post-startup
- **workbench:** nicer error messages  ([9e371e1](https://github.com/dendronhq/dendron/commit/9e371e132b565ae2abebaa2bf1307a5a03a91b9b))
    - certain errors now have human friendly messages instead of JSON goop

### Bug Fixes
- **workbench:** read json config with comments ([1741553](https://github.com/dendronhq/dendron/commit/1741553695b1c7cced54bf04b26700076a38a19c))
    - Dendron gets sad if your workspace has comments
### Community

#### Horticulturalist
Dendron now has a new role -> the **Horticulturalist**. These are folks who have contributed to the Dendron code base: 👨‍🌾👩‍🌾

Kudos to **@britt#3020** and **@lukecarrier#2081** for being the first to earn this distinction!

#### Dendrologist

Excited to welcome a new dendrologist --> @I'm a lightbulb#6986 

@I'm a lightbulb#6986 was one of our earliest users and one of the first to [publish](https://dendron.so/notes/3a82c5ff-7945-46ae-8bf9-3b2275fc6642.html#jacks-page) using dendron. 

As a reminder, dendrologist are active members of the community who are recognized with said title and a few additional discord super powers. 