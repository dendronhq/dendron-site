---
id: yg3EL1x9fEe4NMqxUC3jP
title: GitHub
desc: ''
updated: 1631917062472
created: 1631132196609
---

## Summary

You can publish your notes using Dendron Next Publishing and Github pages

### Pre-requisites 
- This assumes you have a github repository. 
    - If not, you can create one [here](https://github.com/new) from your existing workspace
- You have [[Dendron CLI|dendron.topic.cli]] installed
- You have [[yarn|dendron.dev.cook.basics#install-yarn]] installed

### Examples
- [Publish with custom CNAME](https://github.com/dendronhq/dendron-blog)
- [Publish under github subdomain](https://github.com/kevinslin/dendron-next-test)

## Process - Setup Github

### Create a github repo
- Follow the instructions [here](https://pages.github.com/) to create a repository named `{username}.github.io` where `{username}` is your username on Github

### Add your notes 
Follow the instructions to push to an existing [[workspace|dendron.ref.workspace]]

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github.jpg)

### Turn on github pages

Go to settings

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-settings.jpg)

Go down to github pages and select the main branch

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-pages.jpg)

Select the docs folder and click save.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-docs.jpg)

## Process - Setup Dendron

### Setup Dendron Next Publishin
![[dendron.topic.publishing-next.quickstart#setup,1:#*]]

### Configure your notes for publication

In order for to build your notes for publication, open the command prompt and type `>Dendron: Configure (yaml)`

Make the following modification under `site`:

```yml
...
site:
    ...
    siteUrl: {SITE_URL}
```

- NOTE: you can get your SITE_URL from the settings page in github. (As in the example screen cap below, the url shown is `https://kevinslin.github.io/dendron-publish-sample/`, then the SITE_URL would be ` https://kevinslin.github.io`)
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-url.jpg)
- NOTE: 
    - if you setup your github repository name as `{username}.github.io`, your SITE_URL will be `{username}.github.io`
    - if you use an arbitrary name for your github repository (as in the example above, the repo name is `dendron-publish-sample`)
      - your SITE_URL will be `{username}.github.io`
      - And you will need to add the suffix using the `assetsPrefix` property (eg. `assetsPrefix: dendron-publish-sample`)

#### Examples
- publishing the repo named `kevinslin.github.io`

```yml
site:
    siteUrl: https://kevinslin.github.io
```

- publishing the repo named `dendron-publish-sample`

```yml
site:
    assetsPrefix: dendron-publish-sample
    siteUrl: https://kevinslin.github.io
```

### Build your notes for publication
![[dendron.topic.publishing-next.cook.common#build-notes,1]]

### Preview your notes
![[dendron.topic.publishing-next.cook.common#preview-notes,1]]

### Publish your notes

![[dendron.topic.publishing-next.cook.common#export-notes,1]]


Publish your notes to the `/docs` folder
```
[[ -d ../docs ]] && rm -r ../docs 
mv out ../docs && touch ../docs/.nojekyll
```

### Deploy your changes
```bash
git add .
git commit -m "dendron page update"
git push
```

The first push will take a bit because nextjs generates a bunch of assets on initial publishing. Subsequent pushes will only commit changes and will be much faster. 

You can see the status of your page by going clicking github pages in your github repo.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/kevinslin_dendron-next-test.png)

### Congratulations, you just published your first note 🌱
