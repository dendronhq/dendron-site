---
id: 692fa114-f798-467f-a0b9-3cccc327aa6f
title: Tips
desc: ''
updated: 1595614204291
created: 1595614204291
stub: false
nav_order: 7
---

### Peeking

It is possible to [peek](https://code.visualstudio.com/docs/editor/editingevolved#_peek) at wiki-links in Dendron. This lets you see content without actually navigating to the page.

<a href="https://www.loom.com/share/2289613674ac4a4183ed5db8630120dc">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/2289613674ac4a4183ed5db8630120dc-with-play.gif"> 
</a>


### Moving Lines

When working with lines, you can move entire lines at a time using `option-up|down` shortcut on mac. This is really helpful for prioritizing todos among other things ✅

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips-move-lines.gif)

### Search Editor

- [docs](https://code.visualstudio.com/updates/v1_43#_search-editors)

Also known as the coolest feature in vscode that most people have never heard of. This lets you view and save your search results in a full blown text editor. You can combine it with Dendron's hierarchies to do some amazing things, like aggregating all your todos. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.search-editor.gif)

You can open search editor via keyboard shortcut. I use it to start a search with the current filename. works really well with Dendron hierarchies.

```json
  {
    "key": "ctrl+s f",
    "command": "search.action.openNewEditor",
    "args": {
      "query": "",
      "triggerSearch": false,
      "focusResults": false,
      "includes": "${fileBasenameNoExtension}",
    }
  }
```

### Stylized Tags Using Custom CSS

To customize the look and feel of your tags, you can do so by using the following convention and [CSS edits](https://www.dendron.so/notes/683740e3-70ce-4a47-a1f4-1f140e80b558.html#can-i-customize-the-markdown-preview-css).

Let's say you have a `books` hierarchy and you have a `books.high-growth-handbook` note. You have all the tags you use for books under a `books.tags.` namespace.

If you use links for tags: `[[#business|books.tags.business]]`, you can use this CSS to customize their look:

```css
/* General tag styling */
a[href*=".tags."] {
    color: #000;
    background: #fff;
    display: inline-block;
    padding: 0 10px;
    border-radius: 4px;
}
/* Customizing the look of specific tags */
a[href*=".tags.business"] {
    color: #fff;
    background: rgb(36, 89, 233);
}
```

The result looks like this:
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tags.png)

### Collapsing Headers and Bullets

You can collapse headers at different levels and bullets at different indentation levels inside VSCode. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.toggle-bullets.gif)


### Create a new note in a deeply nested hierarchy 
- [discord thread](https://discordapp.com/channels/717965437182410783/735365126227493004/758235198403117087)

- Problem: 
   - You are currently in `foo` and you want to create the note `foo.child1.child2.my-note`. You don't want to type out the full path. Is there an easier way to create `my-note` than typing out the full path?
- Solution: 
  - VSCode doesn't support autocomplete inside the quick input widget which Dendron uses for lookups. We are experimenting with different ways of getting around this. 
  - Today, the workaround is to create a wiki-link inside another note and navigate via link to create it. 
  - Another method, if you know you will be creating multiple children under a single deeply nested parent, is to pin the parent and create the child from the parent 

<a href="https://www.loom.com/share/f0bbfc9cae0a474a99f8a1169b7b96c7">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/f0bbfc9cae0a474a99f8a1169b7b96c7-with-play.gif"> </a>


### Remove Markdown Buttons in Menu Bar
- [discord thread](https://discordapp.com/channels/717965437182410783/739186036495876126/758408534848831558)

```json
"markdownShortcuts.icons.bold": false,
"markdownShortcuts.icons.italic": false,
"markdownShortcuts.icons.strikethrough": false,
"markdownShortcuts.icons.bullets": false,
```

### Automate git tasks
- [discord thread](https://discordapp.com/channels/717965437182410783/742532267058004098/759130627781558403)
- Problem:
  - You want an easier way to `git add && git commit && git push`
- Solution
  - Use [git automator](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-git-add-and-commit).

<!-- 
### Custom Outlines

TODO: need to add more details

Outlines are super helpful but there are not always feasible depending on the file format

![](/assets/images/2020-09-21-19-33-21.png)

In those situations, I like to leave markers inside a note and use the search editor to surface those markers 

<a href="https://www.loom.com/share/eabf90dbc74e4a1facd5e82bd76a6134"> 
<p>Tips - Breadcrumbs - Watch Video</p> 
<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/eabf90dbc74e4a1facd5e82bd76a6134-with-play.gif"> </a>

https://www.loom.com/share/eabf90dbc74e4a1facd5e82bd76a6134

You can use the same technique 
-->
