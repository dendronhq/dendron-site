---
id: a7c3a810-28c8-4b47-96a6-8156b1524af3
title: Lookup
desc: ''
updated: 1603847080129
created: 1595952505038
stub: false
---
# Lookup

To work with notes, Dendron uses  **lookups**. Lookups help you create, find, and organize your notes. You can watch the following video to see some of the things you can do with lookups.

<a href="https://www.loom.com/share/a409a621763548d395e48c9d4380cbe7"><img style="" src="https://cdn.loom.com/sessions/thumbnails/a409a621763548d395e48c9d4380cbe7-1600813345789-with-play.gif"> </a>



## Notes

### Finding Notes

Below is an example of a simple two level hierarchy with notes on various [command line interface](https://en.wikipedia.org/wiki/Command-line_interface) commands. Use `Cmd+L` (we are going to use mac keybindings for this tutorial) to bring up the lookup and try some of the following queries.

```
- cli.tar
- cli.curl
- cli.dig
```
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-cli.gif)

### Creating Notes

While we call it the `Lookup Bar`, you can also use it to create notes that don't exist. When you lookup for a note that hasn't been created, Dendron will create it for you. 

To try it yourself, bring up the lookup bar. Type `dendron.lookup.hello` and hit `Enter`.


#### Creating Special Notes

Dendron has builtin notion for certain types of notes with [[pre-defined hierarchies|dendron.topic.special-notes]]. These notes can be created by toggling the corresponding **note button**  on the lookup menu or by using the respective builtin shortcuts.
- values:
    - none (default): create a regular note
    - journal: create a journal note (cmd/ctrl + shift + s)
    - scratch: create a scratch note (cmd/ctrl + shift + j)

### Creating Notes with a Selection

If you have text highlighted while creating a new note with a lookup, the new note will be created using the text selected. How the text will be used depends on  the `dendron.defaultLookupCreateBehavior` setting.
- values: 
    - selectionExtract (default): create new note with text from the old note. remove text from the old note
    - selection2link: create new empty note and turn selection into a link referencing the old note

<a href="https://www.loom.com/share/61d754c1dca84b99b2786b2f89473566">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/61d754c1dca84b99b2786b2f89473566-with-play.gif"> </a>

### Passing Arguments to Lookup

#### filterType
- controls notes shown for lookup
- options:
    - `directChildOnly`: filter all notes that are not the direct children of the current note

#### selectionType
- controls selection modifier
- options
    - `selectionExtract`: selection is extracted to newly created note (default)
    - `selection2link`: selection is turned into a link to newly created note. note path is set to `{current-path}.{slug-of-selection}` 
        - a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug) is the human readable portion of an url
        <a href="https://www.loom.com/share/abaa8083d93f4192aa480f1acef1a8b7"> 
        <img style="" src="https://cdn.loom.com/sessions/thumbnails/abaa8083d93f4192aa480f1acef1a8b7-with-play.gif"> </a>
    - you can control this behavior using `dendron.linkSelectAutoTitleBehavior`

((ref: [[dendron.topic.config]]#dendron.linkselectautotitlebehavior,1:#*))

#### noteType
- controls what sort of note is created
- options
    - {none}: create a normal note  (default)
    - `journal`: create a journal note
    - `scratch`: create a scratch ntoe:

#### splitType
- if set, open note in a new split
- options: 
    - `horizontal`: open in horizontal split

#### noConfirm
- if set, select first option from lookup without confirmation
- type: boolean

#### value
- if set, have a custom value for lookup
- type: string

### Passing Arguments Using Keybindings

You can trigger specific lookups using custom key bindings. For example, The following keybinding will trigger lookup set to creating a journal note and turning a selection into a link. 

((ref: [[dendron.topic.keybindings]]#keybindings,1))

```json
{
"command": "dendron.lookup",
"key": "cmd+k j",
    "args": {
        "noteType": "journal",
        "selectionType": "selection2link"
    }
}
```


<a href="https://www.loom.com/share/1e6b39a93b7245e4b13310f7c06d972f"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/1e6b39a93b7245e4b13310f7c06d972f-with-play.gif"> </a>


### Deleting Notes

To delete `dendron.lookup.hello`, use the `Cmd+Shift+D` shortcut on the note that you want to delete. Alternatively, you can also launch the `Command Bar` and type `Dendron: Delete Node` 

## Schemas

Dendron also provides lookup for [[schemas | dendron.topic.schema]]. To lookup a schema, use `> Dendron: Lookup Schema` or the `Cmd+Shift+L` (`Ctrl+Shift+L` on windows and linux) shortcut to bring up the schema lookup.

### Finding Schemas

The process for finding schemas using Dendron is the same as that for finding notes. One lookup to rule them all. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

### Creating Schemas

Just like with notes, if you enter the name of a schema that does not exist, Dendron will create it for you.

Specifically, Dendron will create `{value}.schema.yml` in your vault. At this point, you are free to edit the schema. After you're satisfied with the result, you'll need to run [[> Dendron: Reload Index| dendron.topic.commands]] for it to take affect. 

- NOTE: if you get an error after running `Reload Index`, it is most likely because your YAML is malformed. You can paste it in [yaml lint](http://www.yamllint.com/) to check that you are using the correct yaml syntax. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-create.gif)

### Deleting Schemas

The process for deleting schemas using Dendron is identical to deleting notes. 

## Lookup Menu

When working with lookup, users can toggle one of the different menu items on the upper right corner.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup.menu.jpg)

These menus are divided into 4 categories:
- filter toggle
- selection toggle
- note toggle
- split toggle

### Filter Toggle

By default, unless you are at the root of your workspace, dendron does a fuzzy search of all notes that match your current hierarchy prefix. This is useful to see your entire sub-tree in one glance but can be overwhelming if you have a lot of notes. 

Dendron's **directChildFilter** is a toggle that limits lookup to just the next level in the tree. This is useful for exploring your hierarchy one level at a time. 

<a href="https://www.loom.com/share/45b49b53bf324aeebe387d2ba9515d94"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/45b49b53bf324aeebe387d2ba9515d94-with-play.gif"> </a>

### Selection Toggle
((ref: [[dendron.topic.lookup]]#creating notes with a selection,1:#*))

### Note toggle
((ref: [[dendron.topic.lookup]]#creating special notes,1:#*))

### Split toggle

When opening a note via lookup, you can decide to have the note open in a horizontal split.This works when you're creating new notes or opening an existing note

<a href="https://www.loom.com/share/814bccbdec384cf094e040f1cc6eebe9"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/814bccbdec384cf094e040f1cc6eebe9-with-play.gif"> </a>

