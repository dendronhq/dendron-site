---
id: rYbs1qLh9VJBXCJlSzMt4
title: Migration
desc: ''
updated: 1645155025898
created: 1632351743935
---

## Upgrade dendron CLI
Please note that if you have an automated pipeline set up for publishing that uses `dendron-cli`, you need to manually upgrade `dendron-cli` that is compatible to the current configuration version to avoid errors due to configuration mismatch.

If there is a compatibility mismatch, running the CLI will display message that the version does not meet the minimum version compatible. If you see this message, please upgrade `dendron-cli` to the latest version.

## Upgrade Instructions

If you are coming from Dendron's legacy publishing (based on 11ty), you can look at the following guides for publishing. 

If you were publishing using github pages without using github actions, follow the [[GitHub Pages|dendron://dendron.dendron-site/dendron.topic.publish.cook.github]] guide

If you were publishing using github pages with github actions, follow the [[GitHub Pages with GitHub Actions|dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action]] guide.

If you are publishing using an alternate platform, consult the [[GitHub Pages|dendron://dendron.dendron-site/dendron.topic.publish.cook.github]] guide and adapt it for your specfic platform. 

If you run into any issues or have general questions, post in the [[publishing|dendron://dendron.dendron-site/community.discord.channels#publishing]] channel in discord for help. 

## Breaking Changes

### Pretty Links
Dendron Next.js publishing uses pretty urls which means pages will no longer have a `.html` suffix.  If you are migrating an existing 11ty based Dendron site to Next.js, make sure to redirect `.html` pages to preserve existing links
