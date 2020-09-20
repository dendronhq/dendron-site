---
nav_order: 3
id: ffa6a4ba-5eda-48c7-add5-8e2333ba27b4
title: Configuration
desc: ''
updated: 1600564020051
created: 1600564020051
data: {}
fname: dendron.topic.publishing.configuration
stub: false
parent: 73d395c9-5041-4d0d-9db7-080d9586136e
children: []
hpath: dendron.topic.publishing.configuration
---
## Configuration

This config file controls what gets published. It is located at the root of your workspace. 

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

## Properties

### assetsPrefix?: str

Prefix for assets. 

- NOTE: By default, assets are served from the root. If you are publishing to github pages and followed the instructions [here](https://pages.github.com/) by creating a repo named `{username}.github.io`, then no further action is needed. This is because github will make your site available at `https://{username}.github.io`. If you created a custom repo, you will need to set the prefix to the name of your repo because github will make your site available at `https://username.github.io/{your-repo-name/}`

### siteHierarchies: str\[]

List of hierarchies to publish

### siteIndex?: str

- optional, path of your index (home page)
- defaults to the first element of `siteHierarchies`

### siteRootDir: str

Location of the directory where site will be build. Relative to your workspace

### usePrettyRefs?: boolean

- default: True

Whether to use pretty note refs or plain refs. 

### config

Per hierarchy specific config. 

```yml
config:
  {hierarchy name}: {hierarchy options}
```

The list of possible options:

- publishByDefault: boolean, default: true
  - if set to false, dendron will only publish notes within the hierarchy that have `published: true` set in the frontmatter
- noindexByDefault: boolean, default: false
  - if set to true, dendron will add the following meta tag `<meta name="robots" content="noindex, nofollow”>` which will tell google to not index your page
  - when google indexes a page, it will penalize sites that have duplicate content from other sites. this is useful if you are using your hiearchy as a [cache](3e7baac6-f120-4378-a667-92e7a0869dca)

As an example, below is the config for [my website](https://kevinslin.com). It publishes everything under the `home` and `blog` hierarchies but will only publish notes under `books` if `published: true` is set on the frontmatter. 

- dendron.yml

```yml
site:
  siteHierarchies: [home, blog, books]
  siteRootDir: docs
  config:
    books:
      publishByDefault: false
```

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
