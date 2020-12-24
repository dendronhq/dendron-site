---
id: 877f4347-f013-43ba-aec4-87412b2e1bec
title: Github
desc: ''
updated: 1608776324753
created: 1608770937168
---

# Github

This guide describes publishing to github using github actions

## Pre-requisite
- we assume that you already have your workspace under version control. 

## Setup
1. Checkout the pages branch and push it to github

```bash
git checkout -b pages
git push origin pages
```

2. Switch back to your original branch
- NOTE: if you are using old versions of github, this command will be `git checkout master`

```bash
git checkout main
```

3. Create a `package.json` at the root of your workspace
- NOTE: by default, we adopt the [Creative Commons License](https://creativecommons.org/licenses/by/4.0/legalcode) but you might want to change this depending on your use case
```json
{
  "scripts": {
    "dendron-cli": "dendron-cli"
  },
  "license": "CC BY 4.0",
  "devDependencies": {
    "@dendronhq/dendron-11ty": "^1.3.6",
    "@dendronhq/dendron-cli": "^0.21.1-alpha.2"
  }
}
```

4. Create the workflow `.github/workflows/dendron-action.yml`:

```yml
name: Dendron

on:
  push:
    branches:
    - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout source
      uses: actions/checkout@v2

    - name: Install npm dependencies
      run: npm install

    - name: Build pod
      run: npm run dendron-cli -- buildSiteV2 --wsRoot .  --stage prod

    - name: Deploy site
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_branch: pages
        publish_dir: docs/
        force_orphan: true
        cname: "dendron.so"

```

5. Commit these changes and then push your main branch

```bash
git add .
git commit -m "add publishing via gh-action"
git push 
```

<!-- 
1. Run > Dendron: Doctor
2. Select `Add Publishing Requirements`

This will initialize the following files into your dendron workspace

```
# package.json
# .github
## workflows
### dendron-action.yml
```

3. By default, when you are ready for publishing, Dendron will 
-->
