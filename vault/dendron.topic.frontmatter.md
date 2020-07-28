---
id: ffec2853-c0e0-4165-a368-339db12c8e4b
title: Frontmatter
desc: ''
updated: 1595352354163
created: 1595352354163
---
# Frontmatter

Frontmatter is [YAML](https://yaml.org/) that you can add to the front of your markdown file. It was first introduced by [jekyll](https://jekyllrb.com/docs/front-matter/) and is a convenient way of adding metadata to your plaintext documents. 

Dendron supports frontmatter. By default, we add the following keys to a new note created with Dendron:
- id: a globally unique identifier for the note
- title: your note title. used to label nodes in [[graph view | dendron.topic.graph-view]]
- desc: optional description about your note. will show up in lookup results
- updated: unix timestamp of when note was updated
- created: unix timestamp of when note was created

Frontmatter isn't required in Dendron and Dendron will happily index markdown files without frontmatter. Feel free to add your attributes. As long as it doesn't conflict with a Dendron builtin keyword, Dendron will leave it alone. In the future, we plan on adding a lot more functionality to the frontmatter you see in Dendron so stay tuned. 

# Reserved Keys

Note that not all the keys are written out to the markdown file. Dendron merges the attributes from the markdown frontmatter to its own internal set of attributes. 

### id


A globally unique identifier for the note.

### title

Your note title. used to label nodes in [[graph view | dendron.topic.graph-view]]

### desc

Optional description about your note. will show up in lookup results

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

### data

this is reserved for internal use

### custom 

this is reserved for internal use
