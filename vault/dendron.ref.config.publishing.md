---
id: q960Z622o0RLO32w0B8SP
title: Publishing
desc: ''
updated: 1644997346611
created: 1644903086084
---

## Summary

This is the configuration namespace that holds all Dendron Publishing related settings.

Below is an overview of what the publishing namespace looks like:

```yml
publishing:
  enableFMTitle:
  enableHierarchyDisplay:
  hierarchyDisplayTitle:
  enableNoteTitleForLink:
  enableMermaid:
  enablePrettyRefs:
  enableKatex:
  assetsPrefix:
  copyAssets:
  canonicalBaseUrl:
  customHeaderPath:
  ga:
    tracking:
  logoPath:
  siteFaviconPath:
  siteIndex:
  siteHierarchies:
  enableSiteLastModified:
  siteRootDir:
  siteUrl:
  enableFrontmatterTags:
  enableHashesForFMTags:
  enableRandomlyColoredTags:
  hierarchy:
  duplicateNoteBehavior:
  writeStubs:
  seo:
    title:
    description:
    author:
    twitter:
    image:
      url:
      alt:
  github:
    cname:
    enableEditLink:
    editLinkText:
    editBranch:
    editViewMode:
    editRepository:
  enableContainers:
  generateChangelog:
  enablePrettyLinks:
};
```

## enableFMTitle
Enable rendering frontmatter property `title` as title of the note in links.

- default: `true`

## enableHierarchyDisplay
Enable rendering hierarchies (Children) list at the end of the note.

- default: 
  - dendron.yml: `true`
  - frontmatter: `true`

## hierarchyDisplayTitle
Text to be used for [[children links|dendron.topic.links#children-links]], when enabled by [[enableHierarchyDisplay|dendron://dendron.dendron-site/dendron.ref.config.publishing#enablehierarchydisplay]].

- default: `Children`

## enableNoteTitleForLink
Enable using note titles when displaying naked links in a published note. This also applies to note references. If set to false, the entire hierarchy string will be used for rendering the links.

Note that this is not yet fully supported for multi-vault. Specifically, cross vault links are not supported.

- default: `true`

## enableMermaid
Enable rendering [[Mermaid diagrams|dendron.topic.markdown#diagrams]] in published notes.

- default: `true`

## enablePrettyRefs
Enable rendering note references as [[pretty refs|dendron.concepts#pretty-ref]] in published notes.

- default: `true`

## enableKatex
Enable rendering [Katex](https://katex.org/) typesetting in published notes.

- default: `true`

## assetsPrefix
Set the asset prefix for the published website.

By default, assets are served from the root. If you are publishing to GitHub Pages and followed the instructions [here](https://pages.github.com/) by creating a repo named `{username}.github.io`, then no further action is needed. This is because GitHub will make your site available at `https://{username}.github.io`. If you created a custom repo, you will need to set the prefix to the name of your repo because GitHub will make your site available at `https://{username}.github.io/{your-repo-name/}`

## copyAssets
Copy assets from vault to published website

- default: `true`

## canonicalBaseUrl
Set the base canonical URL for published notes.

## customHeaderPath
Set the path to a custom header file which will be included in all published pages.
This is relative to the workspace root.

## ga
Namespace for Google Analytics related settings

```yml
...
publishing:
  ga:    
...
```

### tracking
Set the [Google Analytics](https://analytics.google.com/) tracking number if you wish to track analytics for your published site using Google Analytics.

GA tracking is not enabled when previewing your site with `Dendron: Publish Dev`

> ❗ Please note that , and we (__Dendron__ as an organization) __do not__ track analytics on user's personal published sites. This configuration option is for providing your own tracking number if you wish to do so for your own purposes.

## logoPath
Set the path to a logo image.

The logo will appear in the site header, and will be used as a default image if no `image` frontmatter property is set for a published note.

The value can be:

1. a path, which will be relative to the workspace root. or,
1. a web URL starting with `http` or `https`, in which case Dendron will use the provided URL as-is. 

## siteFaviconPath
Set the path to favicon.

The value is relative to the workspace root.
You can also place `favicon.ico` directly in the `/public` dir and omit this configuration.

## siteIndex
Set the note that will be the home of your published site.

- default: first element of [[siteHierarchies|dendron://dendron.dendron-site/dendron.ref.config.publishing#sitehierarchies]]

## siteHierarchies
Set the of list of hierarchies to publish. `root` is a special value that you can use to publish everything.

- default: `[root]`

## enableSiteLastModified
Enable displaying the last modified date at the bottom of your published notes.

- default: `true`

## siteRootDir
Set the directory where your website will be built. This path is relative to your workspace root.

- default: `docs`

## siteUrl
Set the URL that the site will be published to. All links will be prefixed with this URL.

If you are publishing with GitHub Pages, the format is `https://{username}.github.io/{repo}/`.

- required

## enableFrontmatterTags
Enable rendering [[frontmatter tags|dendron.topic.tags#frontmatter-tags]] in published notes.

- default: `true`

## enableHashesForFMTags
Enable rendering the [[frontmatter tags|dendron.topic.tags#frontmatter-tags]] with the `#` symbol prepended in published notes.

- default: `false`

## enableRandomlyColoredTags
Enable automatically generated colors for tags when the tag color isn't specified.

If disabled, only the tags that have colors explicitly set will have the color rendered, and the rest will be rendered identical to regular links.

- default: `true`

## hierarchy
Set per-hierarchy publishing configuration.

### publishByDefault
Set this hierarchy to be published by default.

If set to false, only the notes within the hierarchy that have the frontmatter property `published` set to `true` will be published.

If set as a hash, you can further specify this setting on a per-vault basis. The key is the name of the vault and the value is a boolean value.

e.g.) Make all notes under the hierarchy `finance.*` be published by default, if note is in a vault named `public`, but not in a vault named `private`. 

```yml
...
publishing:
  hierarchy:
    finance: # for the hierarchy `finance.*`
      publishByDefault:
        public: true # publish by default in `public` vault
        private: false # don't publish by default in `private` vault
...
```

- default: `true`
- values: `true | false | { vaultName: boolean }`

### customFrontmatter
Set custom frontmatter to be added to each published note in the hierarchy.

Note that this will override existing properties if they are already set in the note frontmatter with the same key.

e.g.) Add `toc: true` to all notes published under the `iam.*` hierarchy.

```yml
...
publishing:
  hierarchy:
    iam: # for all notes under the hierarchy `iam.*`
      customFrontmatter:
        - 
          key: toc # add custom frontmatter property `toc`
          value: true # and set it to `true`
...
```

- default: `[]` (empty list)

## duplicateNoteBehavior
Set the strategy to handle duplicate notes in a multi-vault workspace.

Currently, only the `useVault` option is allowed.

It takes a list of vault names. When a duplicate is found, Dendron will go through the provided list sequentially and resolve to the first vault that matches.

Note that this is done automatically when you run the [[Vault Add|dendron.ref.commands#vault-add]] command.

e.g.) If a duplicate note is found, try resolving them in `vault1` first, then followed by `vault2` and then finally `vault3`.

```yml
...
publishing: 
  duplicateNoteBehavior: # if a duplcate note is found,
    action: useVault
    payload: # try resolving them in this order of vault match
      - vault1
      - vault2
      - vault3
...
```

## writeStubs
Set how [stub|dendron.concepts#stubs]] notes are handled when publishing.

If set to `true`, all stub notes that are getting published will be written to the file system as an empty note in your vault.

This is done to guarantee a permanent URL for the published stub note.

If set to `false`, stub notes will not be written to the file system.
Note that any link to the stub notes will not be pernament, and will be randomized every time it is published. This is because a stub note that isn't written to the filesystem will always have randomly generated temporary note id.

## seo
Namespace for SEO related settings.

```yml
...
publishing:
  seo:
    title:
    description:
    author:
    twitter:
    image:
      url:
      alt:
...
```

### title
Set the title of the page

- default: `Dendron`

### description
Set the description of the page

- default: `Personal Knowledge Space`

### author
Set the author

### twitter
Set the twitter handle

### image
Set the image for the published site. 
Image shows up in image preview on social media sites

e.g.)
```
...
publishing:
  seo:
    image:
      url: https://org-dendron-public-assets.s3.amazonaws.com/images/blog-mobile-editor-header.png
      alt: A tree with many branches in full bloom
...
```

#### url
Set the image URL

#### alt
Set the alternative text for image

## github
Namespace for GitHub related settings.

```yml
...
publishing:
  github:
    cname:
    enableEditLink:
    editLinkText:
    editBranch:
    editViewMode:
    editRepository:
...
```

### cname
Set the CNAME used for GitHub Pages publishing.

### enableEditLink
Enable adding a link at the bottom of a published page that lets users edit the page.

- default: `true`

### editLinkText
Set the text to be used with the edit link when enabled by [[enableEditLink|dendron://dendron.dendron-site/dendron.ref.config.publishing#enableeditlink]]

- default: `Edit this page on GitHub`

### editBranch
Set the branch that the published site is being served from.

- default: `main`

### editViewMode
Set how the users should be redirected when clicking on the edit link.

- `tree` mode will open the note's location in the repository.
- `edit` mode will open an editor that could be used to commit / create pull request with changes.

- default: `tree`

### editRepository
Set the URL of the project's GitHub repository

Note that if you are using [[remote vaults|dendron.topic.vaults#remote]], this value will be ignored and the remote url of the vault will be used instead.

## enableContainers
Enable rendering of [remark-container](https://github.com/Nevenall/remark-containers)

- default: `false`

## generateChangelog
Enable generating the changelog for you published site.

Note that this feature is currently experimental and will only generate the changelog for your latest commit. It also requires that you use `git` to store your notes.

When enabled, this will add `Changelog` to your navbar which will have your most recent commit.

The current version of changelogs is deliberately limited as we are iterating on the feature. Currently it will only generate a diff based off the latest local git commit. It also assumes that your entire workspace is versioned using one git repo. 

Also note that this currently **won't** work with when publishing using Github Actions.

- default: `false`
- status: experimental 🚧

## enablePrettyLinks
Enable pretty links.

Setting this to `true` will remove `.html` from all of the links in a published site.

- default: `true`