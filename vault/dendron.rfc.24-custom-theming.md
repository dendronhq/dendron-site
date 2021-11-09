---
id: PjXL1NKL7yHV0ExHnROBl
title: 24 Custom Theming
desc: ''
updated: 1631645827073
created: 1630967094916
---

## Goals

Provide custom theming for Dendron Preview[^1] and the Dendron NextJS Template [^2]

## Context

Dendron currently does not allow for custom theming of either the preview or the published site. This is one of our highest request features in regards to preview and publishing. 

## Proposal
1. Introduce new command, `Customize Theme`, which will do the following:
    - this command has two options: `preview` and `publishing`
    - if the user selects `preview`, create a file called `style.less` at `{workspace}/style.less`
    - if the user selects `publishing`, create a file called `style.less` at `{workspace}/.next/style.less`
1. Introduce new command, `Apply Theme`, which will do the following:
    - this command has two options: `preview` and `publishing`
    - on `preview`, when Dendron runs in a workspace with a `style.less` file, it will style Dendron using the given stylesheet
    - on `publishing`, when Dendron publishes notes in a next project with a `style.less` file, it will publish using the given stylesheet

## Out of Scope
- customizing mermaid theme
- customizing prismjs theme
- having light and dark versions of themes

## Implementation

### Less to CSS Conversion
We need to transform less to css before we can consume it in React. Currently we use the following gulp script [^3] to make this happen with the default theme.

For custom theme, we'll need to run the gulp script when `Apply Theme` has been called.  Instead of generating the css in `public`, the css should be generated in `{workspace}/build/style.css` if generating for `preview` and in `{workspace}/.next/public/style.css` for `publishing`

- NOTE: we can't directly generate the stylesheet in the Dendron extension directory because VSCode checks the checksum of the extension dir after installation

### Fetching CSS 

#### Preview
Preview theme logic is described here [^preview-theme]. A new theme needs to be added to the themeMap called `custom`.  

The theme path needs will be a request to the  `getTheme` [^api-theme] method which will need to be adjusted to accomadate the preview theme.

#### Publishing
Preview theme logic is described here [^publish-theme].  A new theme needs to be added to the themeMap called `custom`. 

The theme path can be set to `/style.css` since the css can be directly put into the `public/` folder.

### Setting the new theme

#### Preview
When loading the nextjs template, add a new query parameter that will indicate to Dendron that we are using a custom theme. See the dendron-next architecture [^next-server-arch] to see how this is done today. Modify the `_app.tsx` to recognize this parameter and apply the custom theme. 

#### Publishing
Add an environmental variable in [`.env`](https://nextjs.org/docs/basic-features/environment-variables) to indicate we are using a custom theme. Modify the `_app.tsx` to recognize this parameter and apply the custom theme. 


#### Preview
TBD

## Example

### Adding a new theme to the preview
1. User run command: `Dendron: Customize Theme`
1. User Select:  `preview`
1. Dendron Creates `{workspace}/style.less` and open the editor to given page
1. User makes edits
1. User run command: `Dendron: Apply Theme` 
1. User Select:  `preview`
1. Dendron compiles `{workspace}/style.less` to `{workspace}/build/style.css`
1. User run command: `Dendron: Show Preview`
1. Dendron shows preview with new theme

### Deleting a theme
1. User deletes `{workspace}/style.less`
1. User run command: `Dendron: Apply Theme` 

## Tradeoffs
- Pros
    - Keeps compatibility with existing [AntD](https://ant.design/) design framework
- Cons
    - Adding `gulp` to the plugin along with less -> css processing files will increase the extension size
    - `less` is no longer mainstream `scss` is much more popular

## Related
- Working on Dendron Next Server [^next-server-dev]
- Working on Dendron Next Template [^next-template-dev]

## FAQ

### What is the behavior for mermaid and prism when using a custom theme?

By default, we will switch to the default light theme of these respective components. In the future, these will also be customizable. 


## Discussion

All discussions for this RFC can be directed to this [github discussion](https://github.com/dendronhq/dendron/discussions/1298)

## Lookup
[^1]: [[Preview|dendron.topic.preview]]
[^2]: [[NextJS Template|pkg.nextjs-template]]
[^3]: [[Add Ability to Generate Themes|scratch.2021.05.18.145329.add-ability-to-generate-themes]]
[^preview-theme]: [[Theming|pkg.dendron-next-server.t.theme#theming]]
[^publish-theme]: [[Theme|pkg.nextjs-template.t.theme]]
[^api-theme]: [[Themes|pkg.dendron-api-server.arch#themes]]
[^next-server-dev]: [[Dev|pkg.dendron-next-server.dev]]
[^next-template-dev]: [[Quickstart|pkg.nextjs-template.quickstart]]
[^next-server-arch]: [[Startup|pkg.dendron-next-server.arch#startup]]
