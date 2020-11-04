---
id: 692fa114-f798-467f-a0b9-3cccc327aa6f
title: Tips
desc: ''
updated: 1604416151561
created: 1595614204291
---

## Bucket

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


### Automate Git Tasks
- [discord thread](https://discordapp.com/channels/717965437182410783/742532267058004098/759130627781558403)
- Problem:
  - You want an easier way to `git add && git commit && git push`
- Solution
  - Use [git automator](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-git-add-and-commit).

### Publish to GitHub Pages with Actions

- [discord thread](https://discordapp.com/channels/717965437182410783/749641193322971238/759190468671438848)

It's possible to publish your Dendron site to GitHub Pages without the shadow copy of your notes in the `docs` directory.

You can create a GitHub Actions workflow to perform the export process using the Dendron CLI and push the result to your `pages` branch, triggering a Pages build.

Note that this configuration won't retain any history on the `paths` branch. Paths below are relative to your workspace root.

Ignore the shadow directories in `.gitignore`:

```gitignore
# Dendron
/docs/assets/
/docs/notes/
/docs/_site/

# npm
/node_modules/
```

Create a `package.json` to install the package:

```json
{
  "scripts": {
    "dendron-cli": "dendron-cli"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/LukeCarrier/brain.git"
  },
  "license": "UNLICENSED",
  "devDependencies": {
    "@dendronhq/dendron-cli": "^0.12.3-alpha.16"
  }
}
```

Create the workflow `.github/workflows/dendron.yml`:

```yaml
name: Dendron

on:
  push:
    branches:
    - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout source
      uses: actions/checkout@v2

    - name: Install npm dependencies
      run: npm install

    - name: Build pod
      run: npm run dendron-cli -- buildSite --wsRoot ./ --vault notes/

    - name: Deploy site
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_branch: pages
        publish_dir: docs/
        force_orphan: true
        enable_jekyll: true
```

Configure your repository's Pages settings as follows:

* _Branch_: `pages`
* _Folder_: _/ (root)_

Finally, commit these three files and push them to your `master` branch. Within a few seconds you should see the workflow run, your `pages` branch get updated and your Pages build start.

### Go back to previous Note

Use "> Quick Open Previous Recently Used...` to navigate through recently opened notes
  - default shortcut: `CTRL-TAB`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tabs.most-recent.gif)


### Keep Track of Tabs

It's really easy to lose sight of your tabs, especially with menu items occluding the little horizontal space you have for tabs. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tabs.nav.jpg)

Instead of relying on the menu, you can use `Show All Editors` to see all tabs via a dropdown. You can also narrow down tabs after selection.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.tabs.editors.gif)

You can streamline this process by assigning a keyboard shortcut to the command. Below is an example.
  ```json
  {
    "key": "ctrl+t",
    "command": "workbench.action.showAllEditors"
  }
  ```


### Copy and Paste Web Content into Dendron

First copy it into Notion or use the notion web clipper to clip it. This will format it nicely in markdown. You can then paste it into Dendron with markdown and everything :)

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

# Generating all journal notes ahead of time

https://stackoverflow.com/questions/25701265/how-to-generate-a-list-of-all-dates-in-a-range-using-the-tools-available-in-bash
-->

## Workbench

### Remove Markdown Buttons in Menu Bar
- [discord thread](https://discordapp.com/channels/717965437182410783/739186036495876126/758408534848831558)

```json
"markdownShortcuts.icons.bold": false,
"markdownShortcuts.icons.italic": false,
"markdownShortcuts.icons.strikethrough": false,
"markdownShortcuts.icons.bullets": false,
```

### Moving Panes

You can move vscode tabs using the following builtin commands:
- `View: Move Editor Into Next Group`
- `View: Move Editor Into Previous Group`

They are mapped on to the following keyboard shortcuts:
- mac: `cmd+ctrl+left|right`

This is helpful for looking at your notes side by side. 

<a href="https://www.loom.com/share/d99ec9cce8ff4d869cf8c36955152808"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/d99ec9cce8ff4d869cf8c36955152808-with-play.gif"> </a>

### Pinning Tabs

You can pin tabs in VSCode by right clicking on a tab and selecting `Pin Tab`. 

The latest VSCode lets you control pin behavior for tabs. It's not currently documented as of 2020.09.28 but as of the latest insider build, it has a few different options to control the pinned behavior. 

- options:
  - normal (default), normal tab size with a pin icon
  - shrink: reduced tab size with some text visible
  - compact: only icon visible

```json
"workbench.editor.pinnedTabSizing": "shrink"
```


### Zen Mode

VSCode can be visually noisy. You can hide most of the UI by toggling `Zen Mode` with a three panel layout. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/tips.zen.jpg)

The following setting overrides are useful: 

```json
// by default, zen mode will open a new "workspace" which I don't like
"zenMode.fullScreen": false,
// I'm a vim user so I like my line numbers
"zenMode.hideLineNumbers": false,
```

To navigate tabs and look at the breadcrumb outline, You can use the following commands

```json
workbench.action.showAllEditors -> (no shortcut by default, consider mapping to ctrl + t)
breadcrumbs.focusAndSelect -> cmd + t
```

You can see a video of this workflow in the video below.

<a href="https://www.loom.com/share/dd27df6d556d4ba6b28b2028ca7d1455"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/dd27df6d556d4ba6b28b2028ca7d1455-with-play.gif"> </a>

### Always show preview of md being edited

Set the following option in your workspace settings

```json
"markdown-preview-enhanced.automaticallyShowPreviewOfMarkdownBeingEdited": true,
```


## Snippets

### Have links auto-complete without additional key presses

- Update your settings to the following
```json
// The following settings will only apply to markdown files:
  "[markdown]": {
    // quickSuggestions true will provide suggestions as you type.
    // If you turn this on and DO NOT want suggestions
    // for non-wiki-link, non-tag words,
    "editor.quickSuggestions": true,
    // This is poorly documented, but seems to offer suggestions
    // from any word in open document when turned on, which
    // can be a little distracting in markdown docs:
    "editor.wordBasedSuggestions": false,
    "editor.tabSize": 2,
    // Set this to false if you turn on quickSuggestions
    // but don't want suggestions for markdown related snippets
    // as you type:
    "editor.suggest.showSnippets": false,
  },
```

## Markdown

### Always have the preview open


You can add the following setting to your workspace to always have a markdown editor show up with your content. 

```json
"markdown-preview-enhanced.automaticallyShowPreviewOfMarkdownBeingEdited": true,
```

### Symbol search

When using the standard file-search in vscode (`ctrl-P`), you can search for all titles in your workspace if you use the starting keyword `#`

Example: if i know i had a header with the title "cheatsheet", i can type in `# cheatsheet`
