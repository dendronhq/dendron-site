---
id: 230d0ccf-5758-4a8f-b39b-3b68e1482e2b
title: Publishing Your Site
desc: ''
updated: 1614113190758
created: 1610844337503
---

## VSCode

### Pre-requisites 
- This assumes you have a github repository. 
    - If not, you can create one [here](https://github.com/new) from your existing workspace

### Create a github repo
- Follow the instructions [here](https://pages.github.com/) to create a repository named `{username}.github.io` where `{username}` is your username on Github

### Add your notes 
Follow the instructions to push to an existing repository

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github.jpg)

### Turn on github pages

Go to settings

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-settings.jpg)

Go down to github pages and select the main branch

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-pages.jpg)

Select the docs folder and click save.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-docs.jpg)

### Configure your notes for publication

In order for to build your notes for publication, you'll have to tweak a few settings first. Open the command prompt and type `>Dendron: Configure (yaml)`

You should see something like the following

```yml
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
    title: Dendron
```

Make the following modification under `site:

```yml
...
site:
    ...
    siteUrl: {SITE_URL}
```

- NOTE: you can get your SITE_URL from the settings page in github. you want to take everything up to `.com` (eg. if the url shown is `https://kevinslin.github.io/dendron-publish-sample/`, then the site url would be ` https://kevinslin.github.io`)
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-url.jpg)
- NOTE2: if you've setup your github repository using `{username}.github.io` format, your site url will be the same as the url shown
    - otherwise (as in the example abov)e, you will have a suffix at the end of your SITE_URL (eg. `dendron-publish-sample`)
    - in this case, you will need to add the suffix using the `assetsPrefix` property

#### Examples
- publishing the repo `kevinslin.github.io`

```yml
site:
    siteUrl: https://kevinslin.github.io
```

- publishing the repo `dendron-sample`

```yml
site:
    assetsPrefix: dendron-sample
    siteUrl: https://kevinslin.github.io
```

### Build your notes for publication

In order to have Dendron generate your website, you use the `> Site: Build` command.

### Publish your notes

Github will publish your notes everytime you push. Commit all your changes and perform a git push

```bash
git add .
git commit -m "first dendron page"
git push
```

When you are done, you should see a page like the one [here](https://kevinslin.github.io/dendron-publish-sample/)
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.den-wel.jpg)


### Congratulations, you just published your first note 🌱
