---
id: a0240c63-2000-4542-a0ba-d570f42323b9
title: Arch
desc: ''
updated: 1633385323644
created: 1622130772977
---

## Summary

The next server contains the UI components for the Dendron Plugin, the Dendron Preview, and the Dendron published site.

## Details

Webviews in Dendron Plugin are statically exported HTML files generated from running `yarn export` in `@dendronhq/dendron-next-server`.  ^0LPK39T0MgNf

When a user opens up a webview (eg. by running `Show Preview`), the command opens up an iframe that points to `localhost:{port-of-engine-server}/vscode/note-preview.html` ^aKJ72kztSNYY

This route is served by the [[Dendron API Server|dendron://dendron.dendron-site/pkg.dendron-api-server#summary]] which serves up the statically generated HTML. 

- NOTE: the reason we use an `iframe` instead of directly linking to the static HTML is because of VSCode's restriction on running [local content](https://code.visualstudio.com/api/extension-guides/webview#loading-local-content). In a nutshell, all URL's need to be loaded as webview urls by running `panel.webview.asWebviewUri(onDiskPath)` over the url. NextJS generates HTML and chunks the javascript so that the HTML has lots of `<script src="/.../foo.js">` like paths which will not be loaded by an VSCode WebView. 

### View Types
There are two kind of views in the plugin that get handled by NextJs:
- webviews
- treeviews
Treeviews are components in the sidepanel, webviews are views that are revealed using a command (eg. `Dendron: Configure`). The mechanism of rendering both views are similar.


## Components

## LifeCycle

### Startup
1. User initiates the view by opening the tree view or issuing the UI command
1. This brings up a webview with the following [code](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/views/utils.ts)
    ```html
    <html> 
    ...
    <iframe id="iframeView" src="${src}"></iframe>
    </html>
    ```
1. The `src` is set to be a corresponding page in `/vscode`. We also pass along [[Dendron Engine|pkg.dendron-engine]] parameters as querystrings.
1. Express will load up the nextjs view as a static asset and it will be rendered inside VSCode using the iframe.
1. During initialization, the view will connect to the `engine` and hydrate its `redux` store with current notes and IDE related properties (eg. current notes)
    - the aforementioned properties are passed down to all child component as [props](https://github.com/dendronhq/dendron/blob/master/packages/dendron-next-server/pages/_app.tsx)

When the view needs to interact with VSCode, it does so by passing messages. We wrote a helper utility that takes care of this, you can see an example of it [here](https://github.com/dendronhq/dendron/blob/master/packages/dendron-next-server/pages/vscode/tree-view.tsx)

You can see an example of an UI event propagating back to VSCode [[here|pkg.dendron-next-server.internal#onclick]]


# Etc

## Dendron Preview 
- codename: Unified Preview
- status: [[Planning 🗺️|dendron._ref.status#planning-️]]

The Dendron Preview should be just one particular view in of `nextjs` that is served when using the Dendron Plugin. There are a few special requirements for the preview that aren't there for other views which is why this gets its own section. Specifically, the preview view should support the following features:

- scroll sync: a user scrolling through the raw markdown of the current preview should have the preview scroll in sync with the text and vice versa

### Details
Initial note render, render note using passed in `noteId` via `queryParam.

As long as the current webview is not closed, changing the active window will cause a message to the webview to update the display. 

### Images
To display an image, the [dendronPreview](https://github.com/dendronhq/dendron/blob/dev/packages/engine-server/src/markdown/remark/dendronPreview.ts) plugin will convert image links to links that call `assetGet` API from the [[pkg.dendron-api-server]]

This is necessary because static images are contained within the vault whereas image links by default are relative to where the static file is being served (eg. `~/.code/extensions/...`). In addition, whereas both nextjs and expressjs have capabilities to render static assets, there isn't a straightforward way to add static routes dynamically. 

So instead of using static assets, we are dynamically fetching the assets instead.  The preview displays images by rewriting `/assets/img1.jpg` to `localhost:{port}/api/assetGet?fpath=...ws=...` We pass in the current workspace to make sure that the static file you are retrieving comes from inside a valid active workspace. 

## Dendron Published Site
- codename: NEXT Publishing 
- status: [[Planning 🗺️|dendron._ref.status#planning-️]]

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

By default, modifier controls like copy and paste are disabled because we are operating an iframe operating inside a webview. The workaround is described [here](https://github.com/jevakallio/vscode-live-frame#command-key-combinations-copy-paste-select-all-are-disabled). We've implemented it [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/views/utils.ts) so that any webview that uses `WebViewUtils` to generate the HTML will come with the workaround. Make sure that keyboard events are allowed to propagate for this workaround to work. 
