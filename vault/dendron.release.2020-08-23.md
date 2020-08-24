---
id: 075e9806-0367-40a2-8154-2e84d5a1110
title: '2020-08-23 Release Notes'
desc: ''
updated: 1596374871110
created: 1596374871110
---

# 2020-08-23 Release Notes (version 0.8)

Schemas and pods were the focus of this week's efforts. 

Schemas are now both more powerful and re-usable with a custom `pattern` attribute as well as the ability to `import` existing schemas. As a bonus, you can also visualize your schemas using the `Show Schema Graph` command!

On the Pod site, we've made the process of publishing a pod more flexible with per hierarchical configuration options, a unified config syntax and automatic reloading of your config on every publish. 


These release notes are summary of the more notable changes, for the full list, please look at our [CHANGELOG](https://github.com/dendronhq/dendron/blob/master/CHANGELOG.md)


## Bundled extensions
### Add ShowSchema Command ([docs](http://dendron.so/notes/587e6d62-3c5b-49b0-aedc-02f62f0448e6.html#dendron-show-schema-graph))

You can now view your schemas using the same graph visualization as you do your notes!

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/graphs.show-schema.gif)


### Enhancements
- Dendron: reload graphs will reload both schema and note graphs 
- Dendron: reload graphs will reload both schema and note graphs 
- Dendron schema graph will show schemas by their title. if not set, revert to id. 

## Markdown
### Enhancements
- Markdown parsing can now be up to 300% faster publishing a site 

## Notes
### Create Daily Journal Note Command ([docs](http://dendron.so/notes/5c213aa6-e4ba-49e8-85c5-1bdcb33ce202.html#daily-journal))

The daily journal helps you keep a journal for each day of the year. By default, it will create the journal under `daily.{date}` though this is configurable by setting the `dendron.dailyJournalDomain`.

You can create a daily journal using `> Dendron: Create Daily Journal Note` or `CMD+SHIFT+I` shortcut.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/notes.daily.gif)


## Pods
### Support different defaults on a per hierarchy basis when publishing ([docs](http://dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#config))

You can now set different publishing defaults for each hierarchy (as well as general defaults for your entire vault.)

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


### Implement new website config syntax ([docs](http://dendron.so/notes/73d395c9-5041-4d0d-9db7-080d9586136e.html#properties))

New config syntax unifies a bunch of different configuration options and renames others to more sensible names.


### Enhancements
- Auto migrate old-style site config to new style site config 
- Always read config before publishing. no more reloading the workspace after updating dendron.yml! 
- Update site config on dendron starter template 
- Use rsync to copy assets when building pods 

### Fixes
- Use regular copy command if rsync not installed 
- Links not being converted to ids when publishing 

## Schemas
### Support schema import ([docs](http://dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#imports-optional-str))

It's now possible to import schemas! This means you can now create composable schemas from re-usable pieces.

Example:

- foo.schema. yml
```yml
version: 1
imports:
- bar
schemas:
- id: foo
parent: root
children:
    - bar.bar # notice that we prefix the id bar with the filename
```

- bar.schema.yml
```yml
version: 1
schemas:
- id: bar
parent: root
children: 
    - one
- id: one
```

The above would match the following files

```
foo.bar # match
foo.bar.one #match
```


### Support match by pattern ([docs](http://dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#pattern))

You can now explicitly specify a glob pattern for any level of your schema. If not set, defaults to the schema `id`.

The following is an example of a schema for `journal` hierarchy. 
```yml
schemas:
- id: journal
title: journal
desc: ""
parent: root
children:
    - year
- id: year
title: year
pattern: "[0-2][0-9][0-9][0-9]"
children: 
    - month
- id: month
title: month
pattern: "[0-9][0-9]"
children: 
    - day
- id: day
title: day
pattern: "[0-9][0-9]"
namespace: true
```

This will match the following queries
```
# journal
# journal.2020
# journal.2020.09
# journal.2020.09.12
# journal.2020.09.12.foo.md
```


### Enhancements
- Set schema title to id if not set 
- Better error message on bad schema 

### Fixes
- Autocomplete correctly on imported schema 

## Workspace
### Fixes
- A misconfigured POSIX path causes dendron to not load on windows 


## Thank You

Last and most of all, a big **thanks** to the following gardeners that brought up issues and contributed fixes to this release.

- [Devashish](https://github.com/ric03uec)
- [Howard](https://github.com/runlevelrobot)
- [komoda102](https://github.com/komoda102)
