---
id: f2ed8639-a604-4a9d-b76c-41e205fb8713
title: Configuration
desc: ''
updated: 1639542456600
created: 1608528797892
nav_order: 3
---

## Summary

Dendron lets you control publication behavior at multiple levels:

- **globally** using `dendronConfig.site` 
- **per hiearchy** through `dendronConfig.site.config` 
- **per note** through the publication related frontmatter
- **per line** through custom Dendron directives inside the note

## Global Configuration

The `dendron.yml` configuration file controls what notes get published. It is located at the root of your workspace. 

```
.
└── {workspace}
    └── dendron.yml
```

Below is the config that is used to publish `dendron.so` from the contents of this [repo](https://github.com/dendronhq/dendron-template)

```yml
site:
  siteHierarchies:
      - dendron
  siteRootDir: docs
```

### assetsPrefix
 
- default: none

Prefix for assets. 

By default, assets are served from the root. If you are publishing to GitHub pages and followed the instructions [here](https://pages.github.com/) by creating a repo named `{username}.github.io`, then no further action is needed. This is because GitHub will make your site available at `https://{username}.github.io`. If you created a custom repo, you will need to set the prefix to the name of your repo because GitHub will make your site available at `https://{username}.github.io/{your-repo-name/}`

### copyAssets

- default: true

Copy assets from vault to site.

### customHeaderPath 

If set, set path to a custom header file (relative to your workspace root) which will be included in all your published pages

```yml
site:
  ...
  customHeaderPath: header.html
```

- header.html

```
<script> console.log("hello world"); </script>
```

### duplicateNoteBehavior 

When publishing in multi-vault scenario, how to handle duplicate notes

Currently, only the `useVault` option is allowed. It takes a list of [[vault names|dendron.ref.config#name]]. When a duplicate is found, Dendron will go through the vaults in your list from left to right and resolve to the first one that matches.

- NOTE: this is done automatically when you run the [[Vault Add|dendron.ref.commands#vault-add]] command 

```yml
duplicateNoteBehavior: 
  action: "useVault"
  payload: [{vault1}, {vault2}, {vault3}]
```

### ga_tracking 
Your ga tracking number if you want to add google analytics. 

- NOTE: 
  - won't be included in `dev` preview.
  - we (as Dendron organization) are not using this to track analytics on individual user's personal sites.

### githubCname
- default: none

CNAME used for GitHub pages

### logo 

- default: none
- eg: `vault/assets/images/logo.png`

Used to add a logo image to site. Logo will appear in:
- site header
- as the default image if no `image` property is set for a note

### previewPort

- default: 8080

Set a different port when using the [[buildSite|dendron.ref.cli#buildsite]] command.

### siteFaviconPath 

- default: "favicon.ico"

Path to favicon. Relative to workspace.

- NOTE: this is deprecated in Next.js publishing (favicon can be placed directly in the `/public` dir)

### siteHierarchies 

- default: [root]

List of hierarchies to publish. `root` is a special value that means `publish all`.

### siteLastModified 

- default: false

If set to true, show a last modified at the bottom of your site. This value is set form the `updated` timestamp in your note frontmatter.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.last-modified.jpg)

### siteIndex 

- default: first element of `siteHiearchies`

Path of your index (home page)

### siteRootDir 

- default: "docs"

Location of the directory where site will be build. Relative to your workspace

<!-- ### siteRepoDir 

- default: none
- status: NOT currently supported 

Location of the GitHub repo where your site notes are located. By default, this is assumed to be your `workspaceRoot` if not set. This is used with the `Publish Notes` command -->

### siteUrl 
- required

Set to the URL that you plan on publishing to. All links will be prefixed with this. 
If you are publishing with GitHub pages, the format is `https://{username}.github.io/{repo}/`

### usePrettyRefs 
- status: optional
- default: True

Whether to use pretty note refs or plain refs. 

### noRandomlyColoredTags
- status: optional
- default: false

Do not display the automatically generated colors for tags. Only tag colors set
by the user are used, other tags won't have colors and will look like regular
links.

### showFrontMatterTags
- status: optional
- default: true

Whether [[frontmatter tags|dendron.topic.tags#frontmatter-tags]] should be rendered in published websites, and in [[Preview|dendron.topic.preview]].

### useHashesForFMTags
- status: optional
- default: false

If set to `true`, [[frontmatter tags|dendron.topic.tags#frontmatter-tags]] will be rendered with a `#` symbol before them in published websites, and in [[Preview|dendron.topic.preview]].

### writeStubs 
- status: optional
- default: true

Whether to write [[stubs|dendron.concepts#stubs]] when publishing. 

Writing a stub will create an empty note in your vault with the name of the stub. 

Writing stubs is important to guarantee permanent urls as Dendron will randomize stub ids whenever Dendron restarts. 

### GitHub Options

#### gh_edit_link

- default: true
  Show a edit on GitHub link at the bottom of the page

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publish.edit-on-github.jpg)

#### gh_edit_repository

the URL of the project's GitHub repository

- NOTE: if you are using [[remote vaults|dendron.topic.vaults#remote]], this value will be ignored and the [[remote url|dendron.ref.config#remote]] will be used instead

#### gh_edit_branch

- default: main

the branch that the docs site is served from

#### gh_edit_view_mode

- default: tree (brings user to GitHub page)

switch to "edit" to bring the user directly into editing mode

### SEO Options

#### title

- title of page
- eg: `Dendron`

#### description

- eg: `Dendron is a local-first, Markdown-based, hierarchical note taking tool. It is meant to help you create, organize, and collaborate on knowledge bases of any size.`

#### author

Name of person or organization doing the publishing

- eg: `Kevin`

#### twitter

Twitter Handle

- eg: `dendronhq`

## Hierarchy Configuration

You can update configuration on a per hierarchy level by modifying `site.config` like in the example below

```yml
site:
  config: 
    dendron:
      publishByDefault: true
      ...
```

To set options for **all** hierarchies, set `{hiearchy name}` to **root**.

### publishByDefault

- default: true 
- values: true|false|hashByVault

If set to false, Dendron will only publish notes within the hierarchy that have `published: true` set in the frontmatter

If set as a hash, you can further specify `publishByDefault` settings on a per vault basis. The key is the name of the vault and the value is a boolean. 

For example, the following config says that the `finance` hierarchy in the `public` vault should all be published but that the `finance` hierarchy in the `private` vault should not

```yml
site: 
  config:
    finance:
      publishByDefault:
        public: true
        private: false
```

### noindexByDefault

- default: false
- status: NOT currently supported

If set to true, Dendron will add the following meta tag `<meta name="robots" content="noindex, nofollow”>` which will tell google to not index your page

When google indexes a page, it will penalize sites that have duplicate content from other sites. this is useful if you are using your hiearchy as a [[cache|dendron.guides.workflows.cache]]

### customFrontmatter

- default: \[]

If set, Dendron will add the specified frontmatter to each published note in the hierarchy. note that this will override existing keys with the same name when publishing

- eg. add `toc: true` to all notes published under the `iam.*` hierarchy

```yml
  config:
    iam: 
        customFrontmatter: [
          {
            key: "toc",
            value: true,
          }
        ]
```

## Examples

### Example publishing entire vault

- vault

```
.
├── root.md
├── dendron.md
├── dendron.quickstart.md
├── dendron.zen.md
├── flowers.md
└── flowers.bud.md
```

- dendron.yml

```yml
publish:
  siteHierarchies: [root]
```

- what gets published

```
.
└── root.md
    ├── dendron
    │   ├── dendron.quickstart
    │   └── dendron.zen
    └── flowers
        └── flowers.bud
```

### Example publishing just one domain

- vault

```
.
├── root.md
├── dendron.md
├── dendron.quickstart.md
└── dendron.zen.md
```

- dendron.yml

```yml
publish:
  siteHierarchies: [dendron]
```

- published:

```
.
└── dendron
    ├── dendron.quickstart
    └── dendron.zen
```

### Examples of CNAME, GitHub and SEO Options

```yml
site:
    siteHierarchies:
        - dendron
    siteRootDir: docs
    gh_edit_repository: "https://github.com/dendronhq/dendron-site"
    logo: "vault/assets/images/logo.png"
    siteUrl: "https://dendron.so"
    githubCname: "dendron.so"
    title: Dendron
    author: "dendronhq"
    twitter: "dendronhq"
    description: "Dendron is a local-first, Markdown-based, hierarchical note taking tool. It is meant to help you create, organize, and collaborate on knowledge bases of any size."
vaults:
    - fsPath: vault
```

## Note Configuration

You can specify how notes are published via the frontmatter of each note. 

### canonicalUrl
- default: undefined

If set, adds CANONICAL_URL when publishing

```html
<link rel="canonical" href="CANONICAL_URL" />
```

### published

- default: true

To exclude a page from publication, you can add the following to the frontmatter. If you set `publishByDefault: false` for a hierarchy, this needs to be set to `true` to publish

```yml
...
published: false
```

### nav_exclude

If set, do not include the current note in the navigation bar. 

### nav_order

- type: number

If set, denote order that item appears in the published nav bar
> NOTE: `root` has `nav_order: 1` so the `nav_order` of your denoted items must be superior to 1

By default, all notes at a given level are organized alphabetically

```
- Dendron
  - Alpha
  - Bravo
  - Charlie
```

Same example where `Bravo` has `nav_order: 2` and `Charlie` has `nav_order: 1`

```
- Dendron
  - Charlie <-- appears first because it has the smallest nav order
  - Bravo 
  - Alpha <-- appears last because notes with `nav_order` are sorted ahead of notes without `nav_order` 
```


### noindex

- default: false

To tell google to not index a page, you can add the following tag to the frontmatter. You can also have this as a default for a given hierarchy by setting `noIndexByDefault: true` in the site config.

```yml
...
noindex: true
```

### gitNoLink

Disable git linking for this page

### gitNotePath

When set, override how we generate the URL for the [[edit on GitHub|dendron.topic.publish-legacy.features#edit-on-github]] link.

There are a few special variables you can set:

- `${noteHierarchy}`: this specifies the full hiearchy to the note in posix format
  - eg. `foo.bar` will translate to `foo/bar`

### collection options

#### has_collection

- default: false

Whether a given page is a collection. A collection doesn't have a table of contents and allows you to set collection specific options. 
> NOTE: Setting this property `has_collection` in the frontmatter of parent note is sufficient.

#### date

If set, used to designate a custom publication date. By default, use timestamp of `created` field. 

#### skipLevels

If set, determines how many levels of children to skip when making the collection. For example, you might have the following hierarchy. 

```
- blog.md
- blog.reading.md
- blog.reading.journal.md
- blog.reading.journal.2020.md
- blog.reading.journal.2020.12.md
- blog.reading.journal.2020.12.20.one.md
- blog.reading.journal.2020.12.31.two.md
```

When you publish, you might only want to show the leaf nodes and skip the intermediary levels. In the above example, setting `skipLevels: 3` on `blog.reading.md` will result in the following hierarchy being published.

```
- blog.md
- blog.reading.md
- blog.reading.journal.2020.12.20.one.md
- blog.reading.journal.2020.12.31.two.md
```

- NOTE: when you set `skipLevels`, this also affects [[children links|dendron.topic.links#children-links]]

#### sort_order

- default: `ascending`
- values: `ascending|reverse`

Sort items in a collection page. Ascending by default. Specify `reverse` to sort in descending order.

### seo options

#### image

Sets image url for the page. Shows up in twitter card preview

#### excerpt

Sets a custom `og:description` tag for the particular page

## Line Configuration

You can control publication on a per line basis.

### LOCAL_ONLY_LINE

Sometimes, you just want to keep a few lines private while publishing the rest of your vault. You can do that with `Local only`. In order to mark a line as `Local Only`, add the following Markdown comment at the end of the line: 

```markdown
Hello World!  <!-- Will be published -->

This is a secret <!--LOCAL_ONLY_LINE--> <!-- won't be published -->
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pod-local.gif)

