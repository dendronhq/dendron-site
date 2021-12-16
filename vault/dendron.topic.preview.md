---
id: Lnp1URddmWEWweyf
title: Preview
desc: ''
updated: 1639683234781
created: 1626382220182
---

## Summary

The Dendron Preview gives you a rich HTML preview for your notes. 

- NOTE: Preview V2 is missing the following features compared to the current [[Preview Legacy|dendron.topic.preview-legacy]]:
  - scroll sync
  - export to PDF

If you discover any issues that are not listed above, please submit a bug repo [here](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title=) so we can add it to our roadmap!

## Config (dendron.yml)

### dev.enablePreviewV2
- type: boolean
- default: false

When turned on, `Show Preview` will display the v2 preview 

### preview.automaticallyShowPreview
- type: boolean
- default: false
- If enabled, preview panel will be shown upon startup and when switching between notes (if not already shown)

## Cook

### Uninstall Dendron Markdown Preview Enhanced
1. Enable Preview V2 in your dendron.yml 
2. Uninstall Dendron Markdown Preview Enhanced
