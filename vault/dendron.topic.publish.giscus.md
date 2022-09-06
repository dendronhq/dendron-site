---
id: aepo60t1efg7w76ik9evokq
title: Giscus
desc: ''
updated: 1662441587888
created: 1662440909642
---

> Currently Giscus is only available for public repositories hosted on GitHub.

## Summary
[Giscus](https://giscus.app) is a commenting system powered by [GitHub Discissions](https://docs.github.com/en/discussions).

## Details

Since Dendron utilizes Git for syncing workspaces, if you use GitHub to host your public notes, you can use the Discussion tab as a backend for comments in your published notes.

This feature can be enabled on a per-note basis, so you can enable comments only on the notes you wish to collect feedback.

### Getting started

1. Use the [Configuration tool](https://giscus.app) to generate the giscus configurations needed for the public repository.
2. Use the generated values to update the [[giscus|dendron.topic.publish.config.giscus]] configuration namespace in `dendron.yml`.
3. For each note that you want the Giscus widget to appear, add the frontmatter key [[dendron.topic.frontmatter.config.publishing.enableGiscus]].
4. Publish your notes and test if they work as intended.