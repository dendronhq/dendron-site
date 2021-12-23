---
id: 230d0ccf-5758-4a8f-b39b-3b68e1482e2b
title: Publishing Your Site
desc: ''
updated: 1626553341209
created: 1610844337503
---

## VS Code

### Pre-requisites 
- This assumes you have a GitHub repository. 
    - If not, you can create one [here](https://github.com/new) from your existing workspace

### Create a GitHub repo
- Follow the instructions [here](https://pages.github.com/) to create a repository named `{username}.github.io` where `{username}` is your username on GitHub

### Add your notes 
Follow the instructions to push to an existing repository

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github.jpg)

### Turn on GitHub Pages

Go to settings

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-settings.jpg)

Go down to GitHub Pages and select the main branch

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

Make the following modification under `site`:

```yml
...
site:
    ...
    siteUrl: {SITE_URL}
```

- NOTE: you can get your SITE_URL from the settings page in GitHub. (As in the example screen cap below, the url shown is `https://kevinslin.github.io/dendron-publish-sample/`, then the SITE_URL would be ` https://kevinslin.github.io`)
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.github-url.jpg)
- NOTE: 
    - if you setup your GitHub repository name as `{username}.github.io`, your SITE_URL will be `{username}.github.io`
    - if you use an arbitrary name for your GitHub repository (as in the example above, the repo name is `dendron-publish-sample`)
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

In order to have Dendron generate your website, you open the Command Palette (`Cmd+Shift+P`) and use the `Dendron: Site Build` command.

### Publish your notes

You open the Command Palette (`Cmd+Shift+P`) and use the [[Workspace: Sync|dendron.ref.commands#workspace-sync]] command.

Or you can calmly type in your terminal to commit all your changes (`git add .` then `git commit`) and perform a `git push`.

GitHub will synchronize all changes and publish your notes everytime you push.

```bash
opit add .
git commit -m "first Dendron page"
git push
```

When you are done, you should see a page like the one [here](https://kevinslin.github.io/dendron-publish-sample/)
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.den-wel.jpg)


### Congratulations, you just published your first note 🌱
