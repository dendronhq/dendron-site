---
id: 727b1087-191a-4bef-a6d0-8c9ae190426d
title: Markdown
desc: ''
updated: 1602959006344
created: 1602959006344
stub: false
---

# Markdown 

- interface:
    - Publish

## Publish

The markdown pod lets you convert Dendron's custom markdown into regular markdown. 

Custom Dendron directives like note references will be converted and embedded as regular Markdown.


### Configuration

- wikiLinkBehavior:
    - desc: how to convert wiki links
    - required: no
    - choices:
        - convert2Text
        - convert2Md
    - default: convert2Md
- wikiLinkHierarchyBehavior:
    - desc: if we should change hierarchy 
    - required: no
    - choices:
        - copy
        - useBasename
    - default: copy
- addAutogenWarning:
    - desc: leave markdown comments about auto-generated content
    - required: no
    - default: false
- dest:
    - desc: where does the note go to
    - choices:
        - clipboard: system clipboard
        - buffer: go into a new untitled window
    - default: buffer

### Example

- note in Dendron
```markdown
---
id: meet.journal.2020.10.17.publish

---

# People
- [[people.joe-snail]]
- [[people.kevin-lin]]

# Notes
- decide date to announce publish feature
- ...

# Resources
((ref: [[pro.dendron.feat.publish]]))

# Next
- [ ] post announcement

```

- note after publishing 

```markdown

# People
- [people.joe-snail](people.joe-snail)
- [people.kevin-lin](people.kevin-lin)

# Notes
- decide date to announce publish feature
- ...

# Resources

## Publish 
...

# Next
- [ ] post announcement

```
- note after publishing with following options

```yml
wikiLinkBehavior: convert2Text
addAutogenWarning: true
wikiLinkHierarchyBehavior: useBasename
```

```markdown

# People
- joe-snail
- kevin-lin

# Notes
- decide date to announce publish feature
- ...

# Resources
<!-- THIS_IS_MACHINE_GENERATED, START -->
## Publish 
...
<!-- THIS_IS_MACHINE_GENERATED, STOP -->

# Next
- [ ] post announcement

```

## Open Questions

1. Better way of dealing with links. When publishing a single note, any wiki-links will presumably not work after publication. Do we want a `recursive` publish option to also resolve any wiki links and publish a whole bunch of files at once?

2. Nicer ways of rendering a note reference. Currently, Dendron's note references come with the **title** and **link** of the original text. We use custom css to style the outline. When publishing, we can't assume the presence of that css. How would a **renderOutline** option look like?

((ref: [[dendron.topic.refs]]#references,1:#*))
