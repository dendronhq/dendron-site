---
id: 877f4347-f013-43ba-aec4-87412b2e1bec
title: Github
desc: ''
updated: 1632178769581
created: 1608770937168
---

This guide describes publishing to github using github actions

## Pre-requisite

-   you already have your [[workspace under version control|dendron.topic.git]] and a repository on github
-   you have [[configured|dendron.topic.publish-legacy.quickstart.publishing-your-site#configure-your-notes-for-publication]] your `dendron.yml` for publication

## Checklist

-   [ ] create `pages` branch
-   [ ] enable github pages on pages branch
-   [ ] have `package.json`
-   [ ] create github action
-   [ ] enable actions on your repo
-   [ ] add `.nojekyll` to the root of your repo
-   [ ] configure your `dendron.yml`
-   [ ] link cname with github pages
-   [ ] enforce https on your page

## Setup

1. Checkout the pages branch and push it to github

```bash
git checkout -b pages
git push origin pages
```

2. Switch back to your original branch

-   NOTE: if you are using old versions of github, this command will be `git checkout master`

```bash
git checkout main
```

3. Create a `package.json` at the root of your workspace

-   NOTE: by default, we adopt the [Creative Commons License](https://creativecommons.org/licenses/by/4.0/legalcode) but you might want to change this depending on your use case

```json
{
    "scripts": {
        "dendron-cli": "dendron-cli"
    },
    "license": "CC BY 4.0",
    "devDependencies": {
        "@dendronhq/dendron-cli": "*",
        "@dendronhq/dendron-11ty-legacy": "*"
    }
}
```

4. Create the workflow `.github/workflows/dendron-action.yml`:

-   create the workflow

```sh
mkdir -p .github/workflows
touch .github/workflows/dendron-action.yml
```

-   file contents

```yml
name: Dendron

on:
    push:
        branches:
            - main

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout source
              uses: actions/checkout@v2

            - name: Install npm dependencies
              run: npm install

            - name: Build pod
              run: npm run dendron-cli --buildSiteV2 --wsRoot .  --stage prod

            - name: Deploy site
              uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_branch: pages
                  publish_dir: docs/
                  force_orphan: true
                  cname: "dendron.so" # UPDATE WITH DOMAIN NAME
```

Make sure to update the `cname: "dendron.so"` value above with your own domain name.

5. Add the `.nojekyll` file at the base of your repo

```sh
touch .nojekyll
```

5. Commit these changes and then push your main branch

```bash
git add .
git commit -m "add publishing via gh-action"
git push
```

6. Update your github pages setting to build github pages from the `pages` branch and using the root folder.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.pages.jpg)

7. Github actions will update your page every time you push. You might have to add a change and push before your changes will show up. You can verify that your action is running by clicking on the actions tab in github.

-   NOTE: depending on your account settings, you might need to enable github first

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.actions.jpg)

## [Lookup](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)

-   this guide is heavily inspired by [[the github action guide|dendron.guides.tips#publish-to-github-pages-with-actions]] originally published by [Luke Carrier](https://github.com/LukeCarrier)
