---
id: jknrdi492m8nhq7mw4faydu
title: Publish
desc: ""
updated: 1652220370374
created: 1651827497940
---

## Summary

status: #stage.seed

You can customize the style of sites published with Dendron!

![](https://org-dendron-public-assets.s3.amazonaws.com/images/publishing-custom-theme-example.png)

## Details

To use a custom style, first set `publishing.theme` in `dendron.yml` to `custom`.
It will look like this:

```yaml
publishing:
  theme: custom
```

> If you decide to go back to the default theme, you can remove `theme: custom`.

Next, create a `custom.css` file in the same folder as your `dendron.yml` file.
If you can't see `dendron.yml` in the VSCode explorer, VSCode may be hiding it
so use your operating system's file explorer to find it. The folder should look like this when everything is set up:

```
.
├── custom.css
├── dendron.code-workspace
├── dendron.yml
└── notes
   └── ...
```

We have an [[example custom theme|#examples]] you can use below. Copy and paste this into the
`custom.css` you created, and you're ready! The theme will
now be applied when you preview your dendron site locally or when your export as
static html. See
[[Quickstart|dendron://dendron.dendron-site/dendron.topic.publish.quickstart]]
for instructions on how to publish.

> ⚠️ When using the local preview, the custom theme will not automatically
> update when you make changes. You'll need to run the command again and refresh
> the page.

## Examples

Below is a basic example that makes the published site blue. You can start with
this example and then tweak the values or add new CSS rules later. Feel free to
ask for help at our [[Discord|community.discord]] if you need help customizing
the theme!

```css
/* Customizing the theme for the published Dendron site. This is a theme that darkens the background slightly, and uses blue for links and highlights.

The custom styles are at a
[seed stage](https://wiki.dendron.so/notes/gE61aypBFWOeV0SP1qFz3/),
meaning that these CSS selectors are not stable yet. You may need to make
changes to your custom styles in the future to keep them working.
We'll be trying to stabilize these as soon as possible to minimize breakages!
*/

/* ============> background colors <============ */
section.side-layout-main {
  /* Background color of the main section, with the page contents and table of contents. */
  background: #ffffff;
}

footer.ant-layout-footer {
  /* Background color of the footer */
  background: #fafafa;
}

header.ant-layout-header {
  /* Background color of the header, with logo and search bar. */
  background: #e0e0e0;
}

.dendron-tree-menu.ant-menu
  .ant-menu-submenu.dendron-ant-menu-submenu-selected
  > .ant-menu-submenu-title {
  /* Background color for the currently selected item on the sidebar. */
  background: #c5dcff;
}

.site-layout-sidebar.ant-layout,
.ant-layout-sider,
.ant-menu-submenu,
.site-layout-sidebar.ant-layout .ant-menu.ant-menu-inline,
.ant-menu-vertical .ant-menu-submenu,
.ant-menu-vertical-left .ant-menu-submenu,
.ant-menu-vertical-right .ant-menu-submenu,
.ant-menu-inline .ant-menu-submenu {
  /* Background color for the sidebar. */
  background: #e0e0e0;
}

/* ============> Text and link colors <============ */
body,
h1,
h2,
h3,
h4 {
  /* Text color for the text, not including links. */
  color: #0c0c0c;
}

a,
a:hover,
a:active {
  /** Color for links, except ones that have been already visited. */
  color: #00629b;
}

a:visited {
  /* Color for links that have been already visited. */
  color: #002b5c;
}

.dendron-toc .ant-anchor-link-title {
  /* Color for items in the table of contents. */
  color: #0c0c0c;
}

.dendron-tree-menu.ant-menu .ant-menu-title-content a {
  /* Color for links in the sidebar. */
  color: #00629b;
}

footer .ant-typography {
  /* Color for text in the footer, except the "Page last modified" text. */
  color: #1b1b1b;
}

footer .ant-typography.ant-typography-secondary {
  /* Color for the "Page last modified" text in the footer. */
  color: #4e4e4e;
}

.ant-menu-item a:hover,
.ant-menu-item > .ant-badge a:hover,
.ant-menu-submenu-selected {
  /* Color for the selected item in the sidebar. */
  color: #002b5c;
}

.ant-menu-submenu .ant-menu-submenu-title:hover {
  /* The color for the currently highlighted sidebar item. */
  color: #002b5c;
}

.dendron-tree-menu.ant-menu .ant-menu-inline .ant-menu-item-selected::after {
  /* The color for the bar on the right side of the currently selected sidebar item. */
  border-color: #002b5c;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  /* The color for the background of the currently selected sidebar item. */
  background-color: #c3cbdb;
}

.dendron-toc .ant-anchor-ink-ball {
  /* The color for the dot in the table of contents showing the current position. */
  border-color: #002b5c;
}
```
