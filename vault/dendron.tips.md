---
id: 692fa114-f798-467f-a0b9-3cccc327aa6f
title: Tips
desc: ''
updated: 1595614204291
created: 1595614204291
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
![](https://i.imgur.com/NPJgzwV.png)
