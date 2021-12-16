---
id: ffec2853-c0e0-4165-a368-339db12c8e4b
title: Frontmatter
desc: ''
updated: 1639526552068
created: 1595352354163
stub: false
---

## Summary

The `---` section at the top of each note is **frontmatter**. Frontmatter contains custom attributes at the top of each markdown file, autogenerating some at creation time. Dendron uses it to store metadata about each note for features like publishing.

## Example

```yaml
---
id: 4RFQMNA91cRW12VJl_PFd
title: Taking Notes
desc: Creating notes, understanding hierarchy, and using Lookup to quickly find your notes
updated: 1639425310320
created: 1625563944736
nav_order: 1
---
```

## Details

Frontmatter is [YAML](https://yaml.org/) that you can add to the front of your markdown file. It was first introduced by [jekyll](https://jekyllrb.com/docs/front-matter/) and is a convenient way of adding metadata to your plaintext documents.

Dendron supports frontmatter. By default, we add the following keys to a new note created with Dendron:

-   `id`: a globally unique identifier for the note
-   `title`: your note title. Used to label nodes in [[graph view|dendron.topic.graph-view]]
-   `desc`: optional description about your note. Will show up in lookup results
-   `updated`: unix timestamp of when note was updated
-   `created`: unix timestamp of when note was created

Frontmatter is required in Dendron, and it will warn you in the editor if you
have any notes that don't have a frontmatter, or have a frontmatter that's
broken. You can fix these by clicking on the lightbulb symbol that appears next to them, or using the [[fixFrontmatter Doctor action|dendron.ref.commands#fixfrontmatter]].

Feel free to add your attributes. As long as it doesn't conflict with a Dendron builtin keyword, Dendron will leave it alone. In the future, we plan on adding a lot more functionality to the frontmatter you see in Dendron so stay tuned.

# Reserved Keys

Note that not all the keys are written out to the markdown file. Dendron merges the attributes from the markdown frontmatter to its own internal set of attributes.

### id

A globally unique identifier for the note. This identifier is used for two things: (1) generating unique URLs when notes are published and (2) ensuring each note in the index is unique.

### title

Your note title. Used to label nodes in [[graph view|dendron.topic.graph-view]]

### desc

Optional description about your note. Will show up in lookup results.

### updated

Unix timestamp of when note was updated

### created

Unix timestamp of when note was created

### parent

Node parent

### children

Node children

### uri

Absolute filepath to the note

### tags

These are used for [[frontmatter tags|dendron.topic.tags#frontmatter-tags]].

### data

This is reserved for internal use

### custom

This is reserved for internal use

# Other keys

![[dendron.topic.publish-legacy.configuration#note-configuration]]
