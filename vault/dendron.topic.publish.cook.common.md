---
id: 2340KhiZJWUy31Nrn37Fd
title: Common
desc: ''
updated: 1661744422797
created: 1631132278348
---

## Setup Dendron CLI

- [[Dendron CLI Prerequisites|dendron://dendron.dendron-site/dendron.topic.cli#prerequisites]]
- [[Dendron CLI Installation|dendron://dendron.dendron-site/dendron.topic.cli#installation]]

## Upgrading

For upgrading CLI, and dendron workspace configurations, make sure to do the following to have the latest and greatest updates in your published site.

- [[Dendron Publishing: Upgrading and Migrating|dendron://dendron.dendron-site/dendron.topic.publish.migration]]

## Setup Notes

Run the following command to setup publishing for your vault. This will pull in the [nextjs-template](https://github.com/dendronhq/nextjs-template) which will be used to generated a static website from your notes.

> NOTE: if you are having trouble doing this using powershell, we recommend following these steps using [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) instead

```sh
npx dendron publish init

# you should see the following output
🌱 checking if .next directory exists.
🌱 .next directory does not exist
🌱 Initializing NextJS template.
🌱 Successfully cloned.
🌱 All dependencies installed.
```

## Build Notes

Run the following command to prepare your notes for publishing.

```sh
npx dendron publish build
```

## Preview Notes
Run the following to see a local preview of what your site will look like. By default, Dendron will publish all the notes in your given vault. 
- This command launches a development server which previews how your published website will look like.  Visit `http://localhost:3000` to access your site.
- Enter `CTRL-C` on the terminal to exit the preview
```sh
npx dendron publish dev
```

> NOTE: if you only want to publish a particular vault, see the guide [[here|dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action-with-private-vaults]]. If you want to publish specific hierarchies, you can do so by modifying [[dendron://dendron.dendron-site/dendron.topic.publish.config.siteHierarchies]].

## Export Notes

Run this command inside the root of your [[workspace|dendron.topic.workspace]]. This command builds the static HTML which you'll upload to actually publish your site, and adds the static website to the `.next/out/` directory.

```sh
npx dendron publish export

# generated html files are inside of `.next/out`
```

## Manual Install

You can see the manual steps for running Next.js [here](https://github.com/dendronhq/dendron/blob/5f6ba8c75b3a2921de70ac784237441b03374dea/packages/dendron-cli/src/commands/publishCLICommand.ts#L287)

## Upgrade Dendron Next.js Template

```sh
rm .next && npx dendron publish init
```

## Reinstall Dendron Next.js Template

```sh
rm -rf .next && npx dendron publish init
```

##
