---
id: FnK2ws6w1uaS1YzBUY3BR
title: GitHub Action
desc: ''
updated: 1637026165234
created: 1631306630307
---

## Summary

Publishing Dendron using a github action

### Code
You can see deployed examples of these instructions in the following repositories

[dendronhq/template.publish.github-action](https://github.com/dendronhq/template.publish.github-action)

## Process
1. Create package.json with Dendron CLI
![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#setup-dendron-cli,1:#*]]
1. Create a pages branch
  ```sh
  git checkout -b pages
  git push -u origin HEAD
  ```
1. Turn on github actions for the pages branch
  - your settings should look like [this](https://www.loom.com/i/5f0cbb6eb23a48e89942d76406413303)
1. Switch back to your main branch
  ```sh
  git checkout main
  ```
1. Create a workflow
  - mac and linux
    ```sh
    mkdir -p .github/workflows
    touch .github/workflows/publish.yml
    ```
  - windows
  ```powershell
  mkdir -p .github/workflows
  ni .github/workflows/publish.yml
  ```

1. Setup workflow
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
        with:
          fetch-depth: 0

      # Retain Node modules across builds
      - name: Restore Node modules cache
        uses: actions/cache@v2
        id: node-modules-cache
        with:
          path: |
            node_modules
            .next
          key: node-modules-${{ hashFiles('yarn.lock')}}

      - name: Install npm dependencies
        run: yarn

      - name: Initialize or pull Next.js template
        run: "(test -d .next) && (echo 'updating Dendron next...' && cd .next && git reset --hard && git clean -f && git pull) || (echo 'init Dendron next' && npx dendron publish init)"

      - name: Install dependencies
        run: cd .next && yarn && cd ..

      - name: Export notes
        run: npx dendron publish build

      - name: Prep notes for publish
        run: cd .next && yarn export && cd ..

      - name: Remove docs if exist
        run: '(test -d docs && rm -rf docs) || echo skipping'

      - name: Update Notes
        run: |
          cd .next && mv out ../docs && touch ../docs/.nojekyll && cd ..

      - name: Deploy site
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: pages
          publish_dir: docs/
          force_orphan: true
  ```
1. Commit your changes
  ```sh
  git add .
  git commit -m "add workflow"
  git push
  ```
