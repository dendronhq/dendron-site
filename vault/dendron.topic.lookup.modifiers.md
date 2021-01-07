---
id: ad270a7d-2aed-4273-8319-eb6536e38b29
title: Modifiers
desc: ''
updated: 1608495043297
created: 1604883459208
---
Modifiers allow you to update the behavior of lookup. You can trigger a modifier by clicking on the modifier icon or passing custom arguments to `dendron.lookup` when defining a custom keyboard shortcut. 

Modifiers are divided into 6 categories:

- filter
- selection
- note
- split
- effect
- other

## filterType

Filter notes that show up during lookup

### directChildOnly

By default, unless you are at the root of your workspace, dendron does a fuzzy search of all notes that match your current hierarchy prefix. This is useful to see your entire sub-tree in one glance but can be overwhelming if you have a lot of notes. 

Dendron's **directChildFilter** is a toggle that limits lookup to just the next level in the tree. This is useful for exploring your hierarchy one level at a time. 

- filter all notes that are not the direct children of the current note
       ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.dchild.jpg)

<a href="https://www.loom.com/share/45b49b53bf324aeebe387d2ba9515d94"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/45b49b53bf324aeebe387d2ba9515d94-with-play.gif"> </a>

## selectionType

Determines behavior of selected text when creating a new note via lookup

### selectionExtract

selection is extracted to newly created note (default)

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.selection.jpg)

### selection2link

selection is turned into a link to newly created note. note path is set to `{current-path}.{slug-of-selection}` 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.link.jpg)

- a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug) is the human readable portion of an url
  <a href="https://www.loom.com/share/abaa8083d93f4192aa480f1acef1a8b7"> 
  <img style="" src="https://cdn.loom.com/sessions/thumbnails/abaa8083d93f4192aa480f1acef1a8b7-with-play.gif"> </a>

- you can control this behavior using `dendron.linkSelectAutoTitleBehavior`

((ref:[[dendron.topic.config]]#dendron.linkselectautotitlebehavior,1:#*))

## noteType

Modifies note path

### journal

Create a journal note

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.journal.jpg)

### scratch

create a scratch note

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.scratch.jpg)

## splitType

If set, open note in a new split

### horizontal

When opening a note via lookup, you can decide to have the note open in a horizontal split.This works when you're creating new notes or opening an existing note

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.splitType.jpg)

<a href="https://www.loom.com/share/814bccbdec384cf094e040f1cc6eebe9"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/814bccbdec384cf094e040f1cc6eebe9-with-play.gif"> </a>

## effectType

Effects modify lookup in additional ways that are not covered by the other modification categories

### multiSelect

You can toggle multi-select within lookup. This lets you work with multiple notes at once. You can combine this with other modifiers like **splitType** and the **copyWikiLink** modifier. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/913ff5490ba9445787ff1063be749658" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### copyWikiLink

Copy the results of a lookup as a wikilink.

## Other Modifiers

Dendron has a few additional modifiers that can only be set programatically

### noConfirm

If set, select first option from lookup without confirmation

- type: boolean

### value

If set, have a custom value for lookup

- type: string

