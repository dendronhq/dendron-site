---
id: a0240c63-2000-4542-a0ba-d570f42323b9
title: Arch
desc: ''
updated: 1628151345970
created: 1622130772977
---

## Summary

The next server contains the UI components for the Dendron Plugin, the Dendron Preview, and the Dendron published site.

## Dendron Plugin
- status: [[Work In Progress 🚧|dendron.ref.status#work-in-progress-]]

All plugin related code gets routed to the `/vscode` path which is set in `_app.tsx`. 

When building the plugin, all `/vscode` pages will be exported as static files and bundled with the plugin extension. They will be served at runtime using `expressjs`.

There are two kind of views in the plugin that get handled by NextJs:
- webviews
- treeviews

Treeviews are components in the sidepanel, webviews are views that are revealed using a command (eg. `Dendron: Configure`). The mechanism of rendering both views are similar and described below.

1. User initiates the view by opening the tree view or issuing the UI command
1. This brings up a webview with the following [code](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/plugin-core/src/views/utils.ts#L45:L45)
    ```html
    <html> 
    ...
    <iframe id="iframeView" src="${src}"></iframe>
    </html>
    ```
1. The `src` is set to be a corresponding page in `/vscode`. We also pass along [[Dendron Engine|pkg.dendron-engine]] parameters as querystrings.
1. Express will load up the nextjs view as a static asset and it will be rendered inside VSCode using the iframe.
1. During initialization, the view will connect to the `engine` and hydrate its `redux` store with current notes and IDE related properties (eg. current notes)
    - the aforementioned properties are passed down to all child component as [props](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/dendron-next-server/pages/_app.tsx#L92:L92)


When the view needs to interact with VSCode, it does so by passing messages. We wrote a helper utility that takes care of this, you can see an example of it [here](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/dendron-next-server/pages/vscode/tree-view.tsx#L184:L184)

You can see an example of an UI event propagating back to VSCode [[here|pkg.dendron-next-server.internal#onclick]]

## Dendron Preview 
- codename: Unified Preview
- status: [[Planning 🗺️|dendron.ref.status#planning-️]]

The Dendron Preview should be just one particular view in of `nextjs` that is served when using the Dendron Plugin. There are a few special requirements for the preview that aren't there for other views which is why this gets its own section. Specifically, the preview view should support the following features:

- scroll sync: a user scrolling through the raw markdown of the current preview should have the preview scroll in sync with the text and vice versa

### Details
Initial note render, render note using passed in `noteId` via `queryParam.

As long as the current webview is not closed, changing the active window will cause a message to the webview to update the display. 

### Images
To display an image, the [dendronPreview](https://github.com/dendronhq/dendron/blob/dev/packages/engine-server/src/markdown/remark/dendronPreview.ts#L27:L27) plugin will convert image links to links that call `assetGet` API from the [[pkg.dendron-api-server]]

This is necessary because static images are contained within the vault whereas image links by default are relative to where the static file is being served (eg. `~/.code/extensions/...`). In addition, whereas both nextjs and expressjs have capabilities to render static assets, there isn't a straightforward way to add static routes dynamically. 

So instead of using static assets, we are dynamically fetching the assets instead.  The preview displays images by rewriting `/assets/img1.jpg` to `localhost:{port}/api/assetGet?fpath=...ws=...` We pass in the current workspace to make sure that the static file you are retrieving comes from inside a valid active workspace. 

## Dendron Published Site
- codename: NEXT Publishing 
- status: [[Planning 🗺️|dendron.ref.status#planning-️]]

The Dendron Published Site will be the default path published using nextjs. It has the following requirements:

- support building and publishing using both SSR and simple static deployments
    - main consideration is the table of contents on the left hand side
        - it becomes prohibitively big past a few thousand notes to generate this statically for every page
        - our current process
            - generate it once during compile time
            - load it asynchronously using javascript when rending a page
            - use javascript to open it to the correct location
        - process for nextjs
            - we could do the same thing, only issue is that there's a slight pop as we fetch the nav asynchronously
            - don't want to block on it - for SEO, we want a fully formed HTML document with all content 
            - we can do SSR for folks that opt it to managed hosting to avoid the pop in
- rendering a note should share code with [[Dendron Preview|pro.dendron-next-server.arch#dendron-preview]] for as much as possible
    - currently there are some considerations that only apply to published istes
        - links and references to unpublished pages (we currently generate a custom splash page when a published note links to an unpublished note)
    - table of contents 
        - the preview relies on vscode tree view components for this, the site needs to generate its own
    - etc

## Copy and Paste

By default, modifier controls like copy and paste are disabled because we are operating an iframe operating inside a webview. The workaround is described [here](https://github.com/jevakallio/vscode-live-frame#command-key-combinations-copy-paste-select-all-are-disabled). We've implemented it [here](https://github.com/dendronhq/dendron/blob/feature-graph-regex-filter/packages/plugin-core/src/views/utils.ts#L10:L10) so that any webview that uses `WebViewUtils` to generate the HTML will come with the workaround. Make sure that keyboard events are allowed to propagate for this workaround to work. 

## Theming

Dendron listens to the [ThemeChange](https://github.com/dendronhq/dendron/blob/feat/preview-mermaid/packages/dendron-next-server/pages/_app.tsx#L107:L107) event from the plugin.

This is currently broadcasted when we load the webview initially [here](https://github.com/dendronhq/dendron/blob/feat/preview-mermaid/packages/plugin-core/src/views/utils.ts#L77:L77). 

- NOTE: currently, in order to broadcast theme changes, a user needs to run `ReloadWindow`. We have an action item to change this dynamcally. 

On the webview side, Dendron uses the [ThemeSwitcherProvider](https://github.com/dendronhq/dendron/blob/feat/preview-mermaid/packages/dendron-next-server/pages/_app.tsx#L131:L131) to pass the current theme to downstream components