---
id: ffa6a4ba-5eda-48c7-add5-8e2333ba27b4
title: Configuration
desc: ''
updated: 1603673851957
created: 1600564020051
toc: true
nav_order: 3
---

# Configuration

Dendron lets you control publication behavior at three levels:
- **globally** through `dendron.yml` configuration
- **per note** through the publication related frontmatter
- **per line** through custom dendron directives inside the note

## Table of Contents

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
  siteHierarchies: [dendron]
  siteRootDir: docs
```

### Properties

#### assetsPrefix?: str
Prefix for assets. 

- NOTE: By default, assets are served from the root. If you are publishing to github pages and followed the instructions [here](https://pages.github.com/) by creating a repo named `{username}.github.io`, then no further action is needed. This is because github will make your site available at `https://{username}.github.io`. If you created a custom repo, you will need to set the prefix to the name of your repo because github will make your site available at `https://username.github.io/{your-repo-name/}`

#### copyAssets
- required: no
- type: boolean
- default: true

Copy assets from vault to site.

#### siteHierarchies: str[]

List of hierarchies to publish

#### siteIndex?: str
- optional, path of your index (home page)
- defaults to the first element of `siteHierarchies`

#### siteRootDir

Location of the directory where site will be build. Relative to your workspace

#### siteRepoDir
- required: no
- type: string

Location of the github repo where your site notes are located. By default, this is assumed to be your `workspaceRoot` if not set. This is used with the `Publish Notes` command

#### usePrettyRefs?: boolean
- default: True

Whether to use pretty note refs or plain refs. 

#### config

Per hierarchy specific config. To set options for **all** hierarchies, set `{hiearchy name}` to **root**.

```yml
config:
  {hierarchy name}: {hierarchy options}
```

The list of possible options:
- **publishByDefault**: boolean, default: true
  - if set to false, dendron will only publish notes within the hierarchy that have `published: true` set in the frontmatter
- **noindexByDefault**: boolean, default: false
  - if set to true, dendron will add the following meta tag `<meta name="robots" content="noindex, nofollow”>` which will tell google to not index your page
  - when google indexes a page, it will penalize sites that have duplicate content from other sites. this is useful if you are using your hiearchy as a [[cache|dendron.workflows.cache]]
- **customFrontmatter**: list, default: []
  - if set, dendron will add the specified frontmatter to each published note in the hierarchy. note that this will override existing keys with the same name when publishing
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


### Examples

#### Blog

Below is the config for [kevinslin.com](https://kevinslin.com). It publishes everything under the `home` and `blog` hierarchies but will only publish notes under `books` if `published: true` is set on the frontmatter. 

- dendron.yml
```yml
site:
  siteHierarchies: [home, blog, books]
  siteRootDir: docs
  config:
    books:
      publishByDefault: false
```

#### Example publishing entire vault
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

#### Example publishing just one domain
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

## Note Configuration

You can specify how notes are published via the frontmatter of each note. 

### Properties

#### published
- type: boolean
- default: true

To exclude a page from publication, you can add the following to the frontmatter. If you set `publishByDefault: false` for a hierarchy, this needs to be set to `true` to publish

```yml
...
published: false
```

#### noindex
- type: boolean
- default: true

To tell google to not index a page, you can add the following tag to the frontmatter. You can also have this as a default for a given hierarchy by setting `noIndexByDefault: true` in the site config.

```yml
...
noindex: true
```

#### toc
- type: boolean
- default: false

To generate a table of contents in a given note, enable this directive in the note frontmatter.

```yml
toc: true
```

You will also need to include the following line somewhere in the note body. Dendron will generate a table of contents when it finds that particular header

```md
## Table of Contents
```

The output will look like the below.
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/change.toc.jpg)

- NOTE: in order to generate a table of contents, the heading levels after ToC need to be at an equal level or greater than the heading level of `Table of Contents`
  - this is okay
  ```markdown
  ## Table of Contents
  ## Header1
  ## Header2
  ```
  - this is not
  ```markdown
  ## Table of Contents
  ### Header1
  ### Header2
  ```

## Line Configuration

You can control publication on a per line basis.

## Properties

### LOCAL_ONLY_LINE

Sometimes, you just want to keep a few lines private while publishing the rest of your vault. You can do that with `Local only`. In order to mark a line as `Local Only`, add the following markdown comment at the end of the line: `<!--LOCAL_ONLY_LINE-->`

```markdown
Hello World!  <!-- Will be published -->

This is a secret <!--LOCAL_ONLY_LINE--> <!-- won't be published -->
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pod-local.gif)
