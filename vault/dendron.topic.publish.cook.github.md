---
id: yg3EL1x9fEe4NMqxUC3jP
title: GitHub Pages
desc: ''
updated: 1646864660018
created: 1631132196609
---

## Summary

You can publish your notes using Dendron Next.js Publishing and GitHub Pages.

## Not Recommended

Before continuing: **we do not recommend this path for publishing.** If possible, visit [[GitHub Pages publishing with GitHub Actions|dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action]] for generating and publishing your website, instead!

![[dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action#why,1:#*]]

## Prerequisites 

![[dendron://dendron.dendron-site/dendron.topic.git#prerequisites,1:#*]]

- You have [[Dendron CLI|dendron.ref.cli]] installed (version `0.84.0` or greater)

![[Local directory|dendron://dendron.dendron-site/dendron.topic.cli#installation:#common-options]]

## Example Deployments
You can see deployed examples of these instructions in the following repositories.

- [Publish a regular GitHub page](https://github.com/dendronhq/template.publish.github)

## Steps - Setup GitHub

### Create a GitHub repo

Follow the instructions in the [GitHub Pages documentation](https://pages.github.com/) to create a repository named `{username}.github.io` where `{username}` is your username on GitHub.

### Add your notes 
Navigate to your existing [[Dendron workspace|dendron.topic.workspace]]. Follow instructions provided by GitHub to push your workspace to GitHub.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github.jpg)

### Turn on GitHub Pages

Go to settings

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-settings.jpg)

Go down to GitHub Pages and select the main branch

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-pages.jpg)

Select the docs folder and click save.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-docs.jpg)

## Steps - Setup Dendron

### Setup Dendron Next.js Publishing

1. Navigate to the root of your workspace (directory with `dendron.yml`) 
1. Initialize Dendron CLI
![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#setup-dendron-cli,1:#*]]
1. Initialize Dendron Next.js publishing
![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#setup-notes,1:#*]]


### Configure your notes for publication

In order for to build your notes for publication, open the command prompt and type `>Dendron: Configure (yaml)`

Make the following modification under `publishing`:

```yml
...
publishing:
    ...
    siteUrl: {WEBSITE_URL}
```

#### GitHub Pages URLs

Your `WEBSITE_URL` for GitHub Pages will be in the following format: `https://{GITHUB_USERNAME}.github.io/{REPO_NAME}/`.

- NOTE: Some special considerations for the `WEBSITE_URL`
    - if your `REPO_NAME` is the same as your `GITHUB_USERNAME` 
        - set `siteUrl` to `https://{GITHUB_USERNAME}.github.io` in `dendron.yml`
    - if your `REPO_NAME` is anything else 
        - set `siteUrl` to `https://{GITHUB_USERNAME}.github.io` in `dendron.yml`
        - set `assetsPrefix`to `/REPO_NAME` in `dendron.yml`
    <!-- - if you want to set a custom cname
        - set `SITE_URL` to `https://{YOUR_CNAME}` -->

#### Custom Domain Names

![[dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action#^github-custom-domain-names]]

![[dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action#siteurl-with-custom-domains,1:#*]]

#### Examples
- publishing the repo named `kevinslin.github.io`

```yml
publishing:
    siteUrl: https://kevinslin.github.io
```

- publishing the repo named `dendron-publish-sample`

```yml
publishing:
    assetsPrefix: /dendron-publish-sample
    siteUrl: https://kevinslin.github.io
```

### Build and preview your notes


![[dendron.topic.publish.cook.common#preview-notes,1:#*]]


### Publish your notes

- NOTE: we're running export with the GitHub target

```sh
npx dendron publish export --target github
```

### Deploy your changes
```bash
git add .
git commit -m "Dendron page update"
git push
```

### First Deployments

The first push will take a bit because Next.js generates a bunch of assets on initial publishing. Subsequent pushes will only commit changes and will be much faster. 

You can see the status of your page by going clicking GitHub pages in your GitHub repo.

> Since this is your first deployment, it might take a minute before you page shows up.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/kevinslin_dendron-next-test.png)

## Updating dendron and published content

One major reason that [[GitHub Pages publishing with GitHub Actions|dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action]] is preferred, as opposed to this path, is that the GitHub Actions can automatically manage updates to your website.

If not using GitHub Actions, the following needs to be done whenever you'd like to publish a new version of your website.

```sh
rm -rf docs
rm -rf .next
rm -rf node_modules
rm -rf package*.json
npm install @dendronhq/dendron-cli@latest
npx dendron publish init
npx dendron publish export --target github
git add .
git commit -m "Dendron page update"
git push
```

### Congratulations, you just published your first note 🌱
