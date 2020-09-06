---
id: f1af56bb-db27-47ae-8406-61a98de6c78c
title: References
desc: ''
updated: 1597356582509
created: 1597356582509
---

# References 🚧

Dendron allows you to reference content from other notes and embed them in your current note.

Currently, Dendron supports 3 types of references:

- note references
- block references
- block range references

References have the following syntax

```
((
    ref: [[ NAME_OF_NOTE ]]                     # name of note, required
    #STARTING_HEADER                            # optional
    :#ENDING_HEADER                             # optional
))
```


- NOTE: Dendron has a `Copy Note Ref` command that will copy the reference of the current note.


## Note Reference

A note reference will include the entire contents of a note within another note. Below is an example of a note reference.

```
((ref:[[demo.embed.block]]))
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)

## Block Reference
A block reference will include the entire contents of a note starting from a specified heading. 

```
((ref:[[demo.embed.block]]#head1))
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-block.gif)

## Block Range Reference
A block range reference will include the contents of a note starting from a `start` header and ending at a `end` header. 

```
((ref:[[demo.embed.block]]#head1:#head3))
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-block-range.gif)

## Note Reference Offset

A note reference offset is a way to skip a number of lines when using a note reference. The syntax is `,{number}`. Below is an example of using a note reference offset to offset an initial heading, skipping the actual header when doing the embeding.
- NOTE: currently, note reference offsets are limited to the first anchor inside a block reference. They must also be a positive value

```
((ref:[[demo.embed.block]]#head1,1))
```

<a href="https://www.loom.com/share/31cb62916586453f8475f94ba68b74a1">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/31cb62916586453f8475f94ba68b74a1-with-play.gif"> </a>
