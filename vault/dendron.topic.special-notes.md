---
id: 5c213aa6-e4ba-49e8-85c5-1bdcb33ce202
title: Special Notes
desc: ''
updated: 1595004457029
created: 1595004457029
---

# Special Notes

Dendron has builtin support for a variety of special note formats. These notes can be created using regular lookup - these commands provide convenient shortcuts for frequently used notes. 

## Journal Note

A journal note is a self contained note that is meant to track something over time. Examples of journals include recording **workout sessions**, making **meeting notes**, and keeping a **mood journal**.

To create a journal note, use the command bar to select the `>Dendron: New Journal Note` command. 

By default, Dendron will create the journal note with the following hierarchy `{domain}.journal.{Y-MM-DD}`. `{domain}` is the **domain** of the current active note when you execute `New Journal Note`. 

<a href="https://www.loom.com/share/da562a166af9427e908a76be8bc38355">
<img src="https://cdn.loom.com/sessions/thumbnails/da562a166af9427e908a76be8bc38355-with-play.gif"> 
</a>

## Scratch Note

A scratch note is a self contained note that is meant to be used as scratchpad. Use it for thoughts or when you want to expand on a bullet point. Scratch notes are created in the `scratch` domain and have the following format: `{domain}.journal.{Y-MM-DD-HHHHmmss}`. 

If you highlight text while creating a scratch note, the highlighted text will automatically be turned into a link to the new scratch note. 

<a href="https://www.loom.com/share/104a3e0bb10f4012a831194d02483e4a">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/104a3e0bb10f4012a831194d02483e4a-with-play.gif">
</a>


## Configuration

All special notes support the following configuration options 
- NodeType has the value of `Journal` or `Scratch`

### dendron.default{NodeType}Name

Determines the node name.

Defaults: 
- Journal: `journal`
- Scratch: `scratch`

### default{NodeType}DateFormat

Determines the date format.

Defaults: 
- Journal: `Y-MM-DD`
- Scratch: `Y-MM-DD-HHmmss`

### default{NodeType}AddBehavior

Determines how note is added in relation to current hierarchy:

Possible values:
- childOfDomain: note is added as child of the domain of the current hierarchy
    - eg: `dendron.demo.md -> create new journal note -> dendron.journal.2020-08-03.md`
- childOfDomainNamespace: note is added as child of the namespace of the current domain if it has a namespace. otherwise behaves the same as `childOfDomain`
    - eg: `pro.foo.md -> create new journal note -> pro.foo.journal.2020-08-03.md`
- childOfCurrent: note is added as a child of the current open note
    - eg: `dendron.demo.md -> create new journal note -> dendron.demo.journal.2020-08-03.md`
- asOwnDomain: note is created under the domain `dendron.default{NodeType}Name`
    - eg: `dendron.demo.md -> create new journal note -> journal.2020-08-03.md`


Defaults:
- Journal: `childOfDomain`
- Scratch: `asOwnDomain`