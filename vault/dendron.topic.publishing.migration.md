---
id: fd26b3ef-7978-41c9-8f45-4c4f8414951d
title: Migration
desc: ''
updated: 1609529113068
created: 1608528487798
---
All values that used to be written into `_config.yml` will now be moved into `dendron.yml`. You can see the currently supported configuration values here: `https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types.ts#L71:L71`

If you currently have a Jekyll based Dendron page, note that the following settings have changed:

- the `url` property from `_config.yml` is now `siteUrl` in `dendron.yml`
- favicon is now controlled by `siteFaviconPath` in `dendron.yml` and is a path relative to your workspace root
- `CNAME` is now controlled by `githubCname` property in `dendron.yml`
- we are using [prismjs](https://prismjs.com/) to do syntax highlighting which means code block highlighting languages might appear under a different identifier. 11ty will throw an error if compiling a language without the right identifier 
  - you can see the list of all supported languages [here](https://prismjs.com/#supported-languages)
- dendron [[writeStubs|dendron.topic.publishing.configuration#writestubs-optional]] will be set to true by default

### Sample dendron.yml config

- publishing without a cname

```yml
version: 1
vaults:
    - fsPath: vault
site:
    copyAssets: true
    siteHierarchies:
        - dendron
    siteRootDir: docs
    siteUrl: "kevinslin.github.io/dendron-11ty-test"
    usePrettyRefs: true
```

- using custom cname

```yml
version: 1
vaults:
    - fsPath: vault
site:
    copyAssets: true
    siteHierarchies:
        - dendron
    siteRootDir: docs
    usePrettyRefs: true
    siteUrl: "https://11ty.dendron.so"
    githubCname: "11ty.dendron.so"
```

### Sample repo

- [github repo](https://github.com/kevinslin/dendron-11ty-test/deployments/activity_log?environment=github-pages)
- [github page](https://kevinslin.github.io/dendron-11ty-test/)

## Gaps

11ty publishing is currently not at full feature parity with Jekyll publishing. Notably, the following features are missing:

- ~~`edit on github` links~~
- ~~`jekyll-seo` functionality~~
- ~~math~~
- ~~anchor headers~~
- setting a custom color theme
- support for bad links report
- support for automatically generated toc
- integration with dendron plugin

