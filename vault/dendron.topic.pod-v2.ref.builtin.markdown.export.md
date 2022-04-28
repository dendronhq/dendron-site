---
id: Un0n1ql7LfvMtmA9JEi4n
title: Markdown Export Pod
desc: ''
updated: 1644005381204
created: 1642170379669
---

## Summary

The Markdown export pod will take Dendron Markdown and convert it to a regular Markdown. Dendron specific markup like wikilinks will be converted to their Markdown equivalent.
For single note export(`Note` as export scope), you can choose either clipboard or local file system as destination. You can view the example video [here](https://www.loom.com/share/fefb0fac51bc43a1bb3b508a08a8bf6d).

Make sure to enable PodV2 as explained in [[PodV2 Quickstart|dendron://dendron.dendron-site/dendron.topic.pod-v2.quickstart#enable-podv2]] before.

### Supported Features

 - Converting Dendron hierarchy into regular folder hierarchy
 - Converting Dendron wikilinks into regular links `(foo.bar -> foo/bar.md)`
 - Migrating assets

### Limitations
There are some features we currently can't convert to regular Markdown because they have no Markdown equivalent:
- mermaid diagrams
- Latex formulas
- footnotes

If you have additional features that are not listed, please add them in this [GitHub issue](https://github.com/dendronhq/dendron/issues/541#issue-831219413)

## Configuration

In addition to the [[Common Properties|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#common-properties]], the Markdown Pod has the following properties:

### podType

This is actually a common property, but for the Markdown Export pod this **must** be set to `MarkdownExportV2`.

### destination

For single note export(`Note` as export scope), you can choose either clipboard or local file system as destination. Multi Note export prompts for a folder picker to select the export destination.

### wikiLinkToURL

This config option when set to true, converts a wiki link to a url instead of a markdown link. By default, this option is configured to false.

If a markdown file has the following 
content: 
```markdown
Read blogs at: [[Dendron Blog | dendron.blog]]
```
It will get resolved to :
```
Read blogs at: [Dendron Blog](https://wiki.dendron.so/notes/8cdebdcd-f8b1-497a-a1b4-199443f48297.html)
```

### convertTagNotesToLinks

This config option configures conversion of tags to links. By default it is configured to false and does not resolve a tag.

### convertUserNotesToLinks

This config option configures conversion of user notes to links. By default it is configured to false and does not resolve a user note.

### addFrontmatterTitle

If you would like to add note title from the frontmatter to the start of exported note, set this config option to true.

### Example Configuration

```yml
# description: configuration ID
# type: string
# required: true
podId: markdown-clipboard

# description: export scope of the pod.
# type: string
# NOTE: When a setting is missing from this config, you will get a UI prompt to select a value for that setting while running the export pod. For this particular exportScope setting, if you would rather not be prompted and always have the same exportScope, simply uncomment the line below.
exportScope: Note

# description: type of pod
# type: string
# required: true
podType: MarkdownExportV2

# description: How to convert the wikilinks
# type: boolean
wikiLinkToURL: false

# description: export destination. Specify either a file path or 'clipboard' to export to your clipboard
# type: string
# required: true
destination: clipboard

# description: How to convert the tags
# type: boolean
convertTagNotesToLinks: false

# description: How to convert the user notes
# type: boolean
convertUserNotesToLinks: false

# description: Add note title from the frontmatter to the start of exported note
# type: boolean
addFrontmatterTitle: true
```
