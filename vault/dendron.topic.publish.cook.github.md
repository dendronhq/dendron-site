---
id: yg3EL1x9fEe4NMqxUC3jP
title: GitHub
desc: ''
updated: 1634740385875
created: 1631132196609
---

## Summary

You can publish your notes using Dendron Next Publishing and Github pages

### Pre-requisites 
- This assumes you have a github repository. 
    - If not, you can create one [here](https://github.com/new) from your existing workspace
- You have [[Dendron CLI|dendron.topic.cli]] installed (version 0.62.3 or greater)
- You have [[yarn|dendron.dev.cook.basics#install-yarn]] installed

### Example Deployments
You can see deployed examples of these instructions in the following repositories

- [Publish a regular github page](https://github.com/dendronhq/template.publish.github)
- [Publish with custom CNAME](https://github.com/dendronhq/dendron-blog)

## Process - Setup Github

### Create a github repo
- Follow the instructions [here](https://pages.github.com/) to create a repository named `{username}.github.io` where `{username}` is your username on Github

### Add your notes 
Navigate to your existing [[Dendron workspace|dendron.topic.workspace]].  Follow instructions provided by github to push your workspace to github. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github.jpg)

### Turn on github pages

Go to settings

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-settings.jpg)

Go down to github pages and select the main branch

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-pages.jpg)

Select the docs folder and click save.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-docs.jpg)

## Process - Setup Dendron

### Setup Dendron Next Publishing

1. Navigate to the root of your workspace (directory with `dendron.yml`) 
1. Initialize dendron-cli
![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#setup-dendron-cli,1:#*]]
1. Initialize dendron next publishing
![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#setup-notes,1:#*]]


### Configure your notes for publication

In order for to build your notes for publication, open the command prompt and type `>Dendron: Configure (yaml)`

Make the following modification under `site`:

```yml
...
site:
    ...
    siteUrl: {SITE_URL}
```

Your `SITE_URL` for github pages will be in the following format: `https://{GITHUB_USERNAME}.github.io/{REPO_NAME}/`.

- NOTE: Some special considerations for the `SITE_URL`
    - if your `REPO_NAME` is the same as your `GITHUB_USERNAME` 
        - set `SITE_URL` to `https://{GITHUB_USERNAME}.github.io`
    - if your `REPO_NAME` is anything else 
        - set `SITE_URL` to `https://{GITHUB_USERNAME}.github.io`
        - set `assetsPrefix`to `/REPO_NAME`
    <!-- - if you want to set a custom cname
        - set `SITE_URL` to `https://{YOUR_CNAME}` -->

#### Examples
- publishing the repo named `kevinslin.github.io`

```yml
site:
    siteUrl: https://kevinslin.github.io
```

- publishing the repo named `dendron-publish-sample`

```yml
site:
    assetsPrefix: /dendron-publish-sample
    siteUrl: https://kevinslin.github.io
```

### Build and preview your notes


![[dendron.topic.publish.cook.common#preview-notes,1:#*]]


### Publish your notes

- NOTE: we're running export with the github target

```sh
dendron publish export --target github
```

### Deploy your changes
```bash
git add .
git commit -m "dendron page update"
git push
```

The first push will take a bit because nextjs generates a bunch of assets on initial publishing. Subsequent pushes will only commit changes and will be much faster. 

You can see the status of your page by going clicking github pages in your github repo.

- NOTE: since this is your first deployment, it might take a minute before you page shows up

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/kevinslin_dendron-next-test.png)

### Congratulations, you just published your first note 🌱
