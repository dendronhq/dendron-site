---
id: 861e4e48-dcc5-4813-a695-8940ba6e64d3
title: Quickstart
desc: ''
updated: 1608660834558
created: 1608528402469
nav_order: 2
---
## Requirements

- node version 0.12 or higher

## Setup

In order to to use the 11ty based publishing, initialize your workspace with the following commands.

```bash
npm init -y
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty@latest
```

After you have your dependencies installed, build your your site using the following command.

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage dev --serve
```

This will both compile your site locally and make it available at `localhost:8080` for instant preview. When building your site locally, the pages will be build to `{wsRoot}/build/site`. 

When you are ready to publish to github, make sure to change the stage to `prod`.

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage prod 
```

This will build your site to the path specified by [[siteRootDir|dendron.topic.publishing.configuration#siterootdir]] in `dendron.yml`. 

- NOTE: if you have an existing site, please read the [[migration|dendron.topic.publishingv2.migration]] docs to see whats changed.

## Details

- Dendron reads the [[vaults|dendron.topic.config#vaults]] portion of `dendron.yml` to find your notes

