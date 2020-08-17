---
id: 075e9806-0367-40a2-8154-2e84d5a020e5
title: '2020-08-16 Release Notes'
desc: ''
updated: 1596374871110
created: 1596374871110
---

# 2020-08-16 Release Notes (version 0.7)

This is one of our biggest releases yet! Support for r**efactoring hierarchies** and **note references** (think Roam's block references) are the highlight of this week's work. Enjoy responsibly 🌱

These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)

## Commands

### Add Show Preview Command ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#showpreview))

Dendron now has a new command and shortcut to preview your notes. 


### Add Copy Ref Command ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#copy-note-ref))

When one introduces note refs, one must also introduce a command to easily copy note refs. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)


### Add Archive Hierarchy Command ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#archive-hierarchy))

Wouldn't it be nice to have a magic wand to make all your problems go away? While we're working on that, you can use the `Archive Hierarchy Command` to hide hierarchies that you no longer use.

<a href="https://www.loom.com/share/9698d5a4451b49d8b107f3ff67d97877">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/9698d5a4451b49d8b107f3ff67d97877-with-play.gif"> </a>


### Add Refactor Hierarchy Command ([docs](https://www.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#refactor-hierarchy))

Do you want to change the past? Us to. And now you can (when it comes to hierarchies). Instead of living with the consequences of bad past decisions (when it comes to hierarchies), you can now change it!

<a href="https://www.loom.com/share/11d90a86fd1348a5a504406b52d79f85">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/11d90a86fd1348a5a504406b52d79f85-with-play.gif"> </a>

### Enhancements
- Rename note will close old note and open the new note 
- Refactor hierarchy will warn you when overwriting files 

### Fixes
- Allow empty replacements when refactoring 
- Issue where refactor would miss some links 
- Issue with rename notes missing some links 

## Lookup

### Fixes
- Issue where new note won't be created if a stub
 
- Lookup will exit early on certain inputs 

## Markdown

### Support for note references ([docs](https://www.dendron.so/notes/f1af56bb-db27-47ae-8406-61a98de6c78c.html))

Were you roam'ing for a note-taking tool that lets you embed notes and sections within notes into other notes? Well, look no further because Dendron note references are here!

Link to an entire note!

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-note.gif)


Or just a section!

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-block.gif)


Or a range!

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-block-range.gif)

### Enhancements
- Update markdown css 

## Notes
### Enhancements
- Add 'childofdomainnamespace' to note add behaviour
 

## Other
## Pods
### Publish Multiple Hierarchies within a Vault ([docs](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#selective-publication))

You can now publish 0, one, or N number of hierarchies within a vault. We're working on negative and complex numbers of hierarchies for future releases.  


### Ability to not Publish Select Lines ([docs](https://www.dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#exclude-line-from-publication))

Unlike what Mark Zuckerberg might want you to believe, people weren't meant to share EVERYTHING with EVERYONE. Use this to keep private lines private!

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pod-local.gif)


### Fixes
- Building sites without assets directory throws error 
- Bad title for naked wiki links 

## Schemas
### Fixes
- Issue with schemas that have same ids 

## Workspace
### Enhancements
- Initialize empty workspace 

### Fixes
- Remove obsolete info messages 


## Thank You

Last and most of all, a big **thanks** to all these people that contributed issues and suggestions during this release.

- [j-steinbach](https://github.com/j-steinbach)
- [A Howard](https://github.com/runlevelrobot)
