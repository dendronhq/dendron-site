---
id: b58801fc-43a9-4d42-a58b-eabc3e8538cb
title: Documentation
desc: ''
updated: 1641926778938
created: 1604235766390
---

## Summary

If you would like to contribute to the docs, you can do so by either making changes on github directly or by cloning our website repo and sending us a pull request.

## Making Changes on GitHub

Click `Edit this page on GitHub` at the bottom left corner of every page. This is recommended way of making a change. The only pre-requisite is that you have a [GitHub](https://github.com/) account.
    <a href="https://www.loom.com/share/4a1b67f3fd1a40dab16949e9ea5e53dc"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/4a1b67f3fd1a40dab16949e9ea5e53dc-with-play.gif"> </a>

Images
- if you're adding an image along with the documentation, you can [imgur](https://imgur.com/upload) to upload
- note that you'll want to copy the **image link** and not the link to the imgur website 

<a href="https://www.loom.com/share/1b351d229eba4536a6361e5123cf8f24">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/1b351d229eba4536a6361e5123cf8f24-with-play.gif"> </a>

Gifs
- uploading gifs is the same process as uploading images
- to create gifs, we recommend using the [Kap](https://getkap.co/) app or making a [Loom video](http://loom.com/)
- if you are making a gif from within VS Code, please turn on [screencast mode](https://code.visualstudio.com/updates/v1_31#_screencast-mode) so we can see what awesome keyboard shortcuts you're using :)

## Making Changes via Pull Request

For more involved changes, you can fork our GitHub repositories and clone them locally.

For example, the [wiki.dendron.so](https://www.dendron.so) website is built from the contents of [`dendronhq/dendron-site`](https://github.com/dendronhq/dendron-site). Make changes in the corresponding file and send us a pull request to update the documentation. You can preview your changes using [[Show Preview|dendron://dendron.dendron-site/dendron.ref.commands#show-preview]].

### Prerequisites

![[dendron://dendron.dendron-site/dendron.topic.git#prerequisites,1:#*]]

Follow the [GitHub docs on contributing to projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## Docs Pull Request Checklist

- [ ] Check rendered output to ensure formatting is correct for renderings of wikilinks, note refs, tables, and images. `Dendron: Show Preview` can be used in your workspace to confirm the page renders as expected. Sometimes, `Dendron: Reload Index` needs to be ran if certain wikilinks aren't working as expected.
  - Other helpful docs: [[Troubleshooting Dendron|dendron://dendron.dendron-site/dendron.guides.troubleshooting]]

> Verify GitHub Actions tests are passing, if they exist within the repository you are contributing to. These can be seen in the `Checks` tab of the PR. If you are a new contributor, a maintainer will need to provide approval for GitHub Actions to run on your PRs.

- [ ] `URL validator` GitHub Action is passing. If it is failing, review whether any URLs are in need of fixing in your PR. If the broken link exists elsewhere in the documentation, or you are uncertain on how to fix, note within the PR discussion and a reviewer will take a look.
  - If the link works, but is behind a login wall or can't properly be validated easily from the CLI, adding the URL to `.brokignore`.
    - Example [`.brokignore` file in `dendron-site`](https://github.com/dendronhq/dendron-site/blob/master/.brokignore)
- [ ] `Dendron site build` GitHub Action is passing. If it is failing, verify that the site can build locally on your machine. View [[how to publish the documentation|dendron://dendron.dendron-site/dendron.topic.publish.cook.common]], and follow the setup steps until you can complete the [[Preview Notes|dendron://dendron.dendron-site/dendron.topic.publish.cook.common#preview-notes]] section without errors.
  - Other helpful docs: [[Troubleshooting Dendron|dendron://dendron.dendron-site/dendron.guides.troubleshooting]]
  - Other helpful docs: [[Troubleshooting Dendron Publishing|dendron://dendron.dendron-site/dendron.topic.publish.trouble]]
