---
id: mtx2kb16qzr37zanpoai41y
title:  Quickstart
desc: 'Getting started changing the theme in your published site.'
updated: 1653681418243
created: 1652803417376
---

## Summary

{{fm.desc}}

## Prerequisites
- Make sure `dendron-cli` is version `0.95.0` or above. If not, upgrade by following instructions [[here|dendron://dendron.dendron-site/dendron.topic.cli.upgrade]]
- Have publishing setup. If not, follow the instructions in the [[publishing quickstart|dendron://dendron.dendron-site/dendron.topic.publish.quickstart]]

## Using the built-in dark theme

There's a built-in dark theme for publishing which you can switch to.

1. To use a custom style, first set `publishing.theme` in `dendron.yml` to `dark`.  It will look like this:
    ```yaml
    publishing:
        theme: dark
    ```
    - > TIP: If you decide to go back to the default theme, you can remove `theme: custom`.
1. You can now preview when viewing your site locally 
    ```
    npx dendron publish dev
    ```
1. Congrats, you've now switched to the dark theme!

## Using a custom theme

### Steps

1. To use a custom style, first set `publishing.theme` in `dendron.yml` to `custom`.  It will look like this:
    ```yaml
    publishing:
        theme: custom
    ```
    - > TIP: If you decide to go back to the default theme, you can remove `theme: custom`.
1. Next, create a `custom.css` file in the same folder as your `dendron.yml` file.
    - > TIP: If you can't see `dendron.yml` in the VSCode explorer, VSCode may be hiding it so use your operating system's file explorer to find it. The folder should look like this when everything is set up:
    ```
    .
    ├── custom.css
    ├── dendron.code-workspace
    ├── dendron.yml
    └── notes
    └── ...
    ```
1. We have an example custom theme you can use below which will change the background color of your page. Copy and paste this into the `custom.css` you created. 
    > ⚠️ When using the local preview, the custom theme will not automatically
    > update when you make changes. You'll need to run the command again and refresh
    > the page.

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

    a.private {
    /* Color for links to private (not published) or missing notes. */
    color: #cc5d1a;
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
1. You can now preview when viewing your site locally 
    ```
    npx dendron publish dev
    ```
1. Congrats, you've now applied a custom theme!