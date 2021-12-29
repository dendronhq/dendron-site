---
id: l4MoqPhFvcca6Vf5T84e0
title: Preview
desc: ''
updated: 1640103185746
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
  enablePrettyRefs:
  enableMermaid:
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
Render wikilink with linked note's frontmatter title when the wikilink does not have a link alias.

- default: true

## enablePrettyRefs
Render note references as [[pretty refs|dendron._ref.terms#pretty-ref]]

- default: true

## enableMermaid
Render Mermaid diagrams.

- default: true

## enableKatex
Render Katex.

- default: true
