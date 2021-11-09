---
id: 1399b5d2-28fb-4077-aa5f-c8edbe52bc5d
title: Preview Your Site
desc: ''
updated: 1631833327494
created: 1610844309611
nav_order: 1
---


## CLI

The following describes how to prepare your notes for publication using [[Dendron CLI|dendron.ref.cli]].

### Pre-requisites

- node version 12 or higher, see installation guide [[here|dendron._ref.install-node]]

### Requirements

- pre-requisite: 
  - node version 12 or higher, see installation guide [[here Node|dendron._ref.install-node]]

### Setup

In order to publish, run the following commands inside your workspace.

```bash
npm init -y
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty-legacy@latest
```

### Local Preview

After you have your dependencies installed, build your site using the following command inside your workspace root.

```bash
dendron buildSite  --stage dev --serve
```

This will both compile your site locally and make it available at `localhost:8080` for instant preview. When building your site locally, the pages will be build to `{wsRoot}/build/site`. 

- NOTE: dendron currently doesn't support live reload so you'll need to `CTRL-C` and re-run `buildSite` in order to see the latest changes

<!--
### Adding metadata

Currently, your site is rather spare. You can add metadata to your site. Open the config by going to `Dendron: Configure (yaml)`. This should take you to the following configuration file

```yaml
version: 1
vaults:
    -
        fsPath: vault
site:
    copyAssets: true
    siteHierarchies:
        - root
    siteRootDir: docs
    usePrettyRefs: true
```

Try adding some of the following properties underneath site
    - replace `{YOUR NAME}` with your actual name

```yml
...
site:
    ...
    title: {YOUR NAME} Digital Garden
    description: This is {YOUR NAME} piece of the internet
    author:  `{YOUR NAME}`
```

When your done, run the pre

-->

### Build for deployment

When you are ready to publish to github, make sure to change the stage to `prod`.

```bash
dendron buildSite --stage prod 
```

This will build your site to the path specified by [[siteRootDir|dendron.topic.publish-legacy.configuration#siterootdir-required]] in `dendron.yml`.  By default, this is located at `{wsRoot}/docs`.

### Get ready to publish

When you are ready, you can go to [[publishing your site|dendron.topic.publish-legacy.quickstart.publishing-your-site]] for instructions on announcing your site to the world. 

