---
id: l4MoqPhFvcca6Vf5T84e0
title: Preview
desc: ''
updated: 1663347091427
created: 1637309100103
---

## Summary

This is the configuration namespace that holds all Dendron Preview related settings.

Below is an overview of what the preview namespace looks like.

```yml
preview:
  automaticallyShowPreview:
  enableFMTitle:
  enableNoteTitleForLink:
  enableFrontmatterTags:
  enableHashesForFMTags:
  enablePrettyRefs:
  enableKatex:
```

## automaticallyShowPreview
If enabled, preview panel will be shown upon startup and when switching between notes (if not already shown)

- type: boolean
- default: false

## enableFMTitle
Render frontmatter title property as title of the note.

- default: true

## enableNoteTitleForLink
![[dendron://dendron.dendron-site/dendron.ref.config.preview.enableNoteTitleForLink]]

## enableFrontmatterTags
Render frontmatter tags in note preview if they exist.

- default: true

## enableHashesForFMTags
Render frontmatter tags with hashtags (#) prepended, if they exist.

- default: false

## enablePrettyRefs
Render note references as [[pretty refs|dendron.concepts#pretty-ref]]

- default: true

## enableKatex
Render Katex.

- default: true
