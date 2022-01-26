---
id: N2XTqKPFEkKCFJ6kRnzl0
title: Deploy to Github Pages using Actions with both Private and Public Vaults
desc: ''
updated: 1642374827385
created: 1642374695178
---

What if you have multiple vaults, but only want to generate a Dendron site for some of them?

This approach involves having 2 repos: 
1. one for all of your notes. We'll call this `main`.
2. and one for all of your *public* notes. We'll call it `publishable`.

Both of these repos will have a `dendron.code-workspace` file at the root.

The idea is that we have the source of truth for all notes in all vaults in `main`, and we use the `publishable` directory as a means to publish *only* the vaults that we specify.

To accomplish this, we will use Github Actions and deploy with Github Pages.

## Setting up the main repo
First, if we haven't done so already, we'll need to make a Git repository out of our `main` Dendron directory. This holds all your Dendron vaults (in our example, both `private` and `public`). That should be reflected in this directory's `dendron.code-workspace`:
```json
{
    "folders": [
        {
            "path": "public-vault",
            "name": "public-vault"
        },
        {
            "path": "private-vault",
            "name": "private-vault"
        },
    ],
    "settings": {
    // ...
```

Next, we will initialize our `publishable` repo. In a new directory, run `git init`, and then copy over the `dendron.yml` file from your `main` repo.

Add the following key to the `publishable` version of the `dendron.yml` file:
```yml
...
site:
    ...
    siteUrl: {SITE_URL}
```

Your `SITE_URL` for GitHub Pages will be in the following format: `https://{GITHUB_USERNAME}.github.io/{REPO_NAME}/`.
- NOTE: Some special considerations for the SITE_URL
    - if your REPO_NAME is the same as your GITHUB_USERNAME
        - set SITE_URL to https://{GITHUB_USERNAME}.github.io
    - if your REPO_NAME is anything else
        - set `SITE_URL` to `https://{GITHUB_USERNAME}.github.io`
        - set `assetsPrefix`to `/REPO_NAME`

## Set up the publishable dendron.code-workspace file to link to the main repo
In your `publishable` repo, create a `dendron.code-workspace` file and add the following content:
```yml
{
    "folders": [
        {
            "path": "../main/public-vault",
            "name": "public-vault"
        }
    ]
}
```

Notice that here, we simply link to the `public-vault` from the `main` repo. Now when we build this directory, it will use the source of truth markdown notes in your `main` repo, but will build the HTML files in the `publishable` repo.

## Setting up the Github Action
From the `publishable` repo, add a file `.github/workflows/deploy-dendron-nextjs.yml` with the following content:
```yml
name: Dendron

on:
  schedule:
  - cron: "0 0 * * *" # every 24hr at midnight

jobs:
  build-nextjs-site:
    runs-on: ubuntu-latest
    steps:
    - name: Clone Dendron (main) repo
      uses: actions/checkout@v2
      with:
        repository: <YOUR_USERNAME>/<YOUR_MAIN_REPO>
        token: ${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}
        path: 'main'

    - name: Clone Dendron (publishable) repo
      uses: actions/checkout@v2
      with:
        path: 'publishable'
        ref: master
        fetch-depth: 0

    - name: Delete publishable cached files if present
      run: "rm -rf .next && rm -rf docs && rm -rf node_modules"
      working-directory: ./publishable

    - name: Install node dependencies of publishable
      run: npm install @dendronhq/dendron-cli@latest
      working-directory: ./publishable

    - name: Clone the Dendron Next.js repository and install dependencies
      run: npx dendron publish init
      working-directory: ./publishable

    - name: Build static HTML and create the Nextjs static website
      run: npx dendron publish export --target github --yes
      working-directory: ./publishable

    - name: 🚀 Deploy site to GH Pages
      uses: peaceiris/actions-gh-pages@v3.8.0
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_branch: pages
        publish_dir: publishable # deploy publishable directory in the runner to pages branch
        force_orphan: true
        enable_jekyll: false
        cname: "<YOUR_USERNAME>.github.io"
```

And that should be it. Note that this Github Action will run every 24 hours at midnight, but this could be changed to use any trigger that is supported by Github Actions. Play around with it to get a setup that works for you!
