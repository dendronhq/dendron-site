---
id: 4ah3xgz20oylzu3v5segyge
title: Child Link
desc: ''
updated: 1659080332215
created: 1658828670537
---

## Summary

![Children](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Quickstart_-_Dendron.jpg)

A child link is a link to a child note created at the end of the note when you view your notes using [[note preview|dendron://dendron.dendron-site/dendron.topic.preview]], or in a [[published|dendron.topic.publish]] site.

### Getting started

Dendron will automatically generate a section called `Children` at the end of the note by default.

#### Disabling child link creation in [[note preview|dendron://dendron.dendron-site/dendron.topic.preview]]

> This only works on a per-note basis. In the future we plan to add the ability to disable this globally.

This behavior can be disabled in [[note preview|dendron://dendron.dendron-site/dendron.topic.preview]] by adding the following frontmatter of each note you want this to be disabled:

```
config:
  global:
    enableChildLinks: false
```

#### Disabling child link creation in [[published notes|dendron.topic.publish]].

This behavior can be disabled in published notes by adding the following frontmatter of each note you want this to be disabled:

```
nav_exclude_children: true
```

See [[nav_exclude_children|dendron://dendron.dendron-site/dendron.topic.publish.config.nav_exclude_children]] for more information.