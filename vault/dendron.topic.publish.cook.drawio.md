---
id: dqN52V9aJE5o3ttJykChH
title: Diagrams.net (Draw.io)
desc: ''
updated: 1641760102973
created: 1641756186309
---

## Summary

You can include SVG exports of your Diagrams.net (formerly known as Draw.io) diagrams in your Dendron Next.js published site.

## Prerequisites

- You have some kind of pipeline doing publishing (e.g. [[dendron.topic.publish.cook.github]] or [[dendron.topic.publish.cook.netlify]]).
- You embed your diagram pages in your notes as you would any other image, e.g. `![](assets/diagrams/nerve.svg)`.
  - To export a specific page, include the page number in the path, e.g. `![](assets/diagrams/nerve.svg#2)`. Page numbers are indexed from 0.

## Process

### Install the package

From the top of your Dendron workspace, run the following command:

```console
npm install --save-dev dendron-publish-drawio@latest
```

This will install the package in your local working copy, and make sure it's installed alongside the [[dendron.ref.cli]] during publishing.

### Add the build step

The package includes a single command, `dendron-publish-drawio`, which needs to run after Dendron prepares the data for the Next.js site. It will only modify the data files under the `.next/` directory used for publishing.

How you do this depends on how you publish your notes -- see the sections below for applied examples. Broadly, instead of:

```console
dendron publish init
dendron publish export
```

We want:

```console
dendron publish init
dendron publish build
dendron-publish-drawio
dendron publish export --noBuild
```

#### GitHub Pages (local build)

Assuming you've followed [[dendron.topic.publish.cook.github]], instead of running `dendron publish export --target github`, run `dendron publish build && dendron-publish-drawio && dendron publish export --noBuild --target github`

#### GitHub Pages (GitHub Actions)

Assuming you've followed [[dendron.topic.publish.cook.github-action]] edit `.github/workflows/publish.yml`, replacing:

```yaml
- name: Export notes
  run: npx dendron publish export --target github --yes
```

With:

```yaml
- name: Export notes
  run: |
    npx --yes -- dendron publish build --target github
    npx --yes -- dendron-publish-drawio
    npx dendron publish export --noBuild --target github
```

#### Netlify

Assuming you've followed [[dendron.topic.publish.cook.netlify]] edit `dendron-publish-site.sh`, replacing:

```shell
# Generate static site with nextjs
npx dendron publish init
npx dendron publish export
```

With:

```shell
# Generate static site with nextjs
npx dendron publish init
npx dendron publish build
dendron-publish-drawio
npx dendron export --noBuild
```
