---
id: fabYbPyk3DMCMoG92lIrq
title: Config
desc: 'Configuration namespace that holds all Dendron Publishing related settings.'
updated: 1645182877105
created: 1637772506823
config:
  global:
    enableChildLinks: false
---

## Summary
{{fm.desc}}

Below is an overview of what the publishing namespace looks like:

```yml
publishing:
  siteUrl:
  siteRootDir:
  siteIndex:
  siteHierarchies:
  hierarchy:
  enableFMTitle:
  enablePrettyRefs:
  enableSiteLastModified:
  enableNoteTitleForLink:
  enableHierarchyDisplay:
  enableKatex:
  enableMermaid:
  enableFrontmatterTags:
  enableHashesForFMTags:
  enableRandomlyColoredTags:
  copyAssets:
  assetsPrefix:
  logoPath:
  siteFaviconPath:
  writeStubs:
  customHeaderPath:
  hierarchyDisplayTitle:
  duplicateNoteBehavior:
  ga:
    tracking:
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
```

## Site properties
These are properties related to how and where the site is being published, as well as what part of your workspace is being published.

- [[siteUrl|dendron.topic.publish.config.siteUrl]]
- [[siteRootDir|dendron.topic.publish.config.siteRootDir]]
- [[siteIndex|dendron.topic.publish.config.siteIndex]]
- [[siteHierarchies|dendron.topic.publish.config.siteHierarchies]]
- [[hierarchy|dendron.topic.publish.config.hierarchy]]
  - [[publishByDefault|dendron.topic.publish.config.hierarchy.publishByDefault]]
  - [[customFrontmatter|dendron.topic.publish.config.hierarchy.customFrontmatter]]

## Feature properties
These are properties related to togglable behaviors when the site is being published.

### Related to Dendron features
- [[enableFMTitle|dendron.topic.publish.config.enableFMTitle]]
- [[enablePrettyRefs|dendron.topic.publish.config.enablePrettyRefs]]
- [[enableSiteLastModified|dendron.topic.publish.config.enableSiteLastModified]]
- [[enableNoteTitleForLink|dendron.topic.publish.config.enableNoteTitleForLink]]
- [[enableHierarchyDisplay|dendron.topic.publish.config.enableHierarchyDisplay]]

### Related to third party support
- [[enableKatex|dendron.topic.publish.config.enableKatex]]
- [[enableMermaid|dendron.topic.publish.config.enableMermaid]]

### Related to rendering tags
- [[enableFrontmatterTags|dendron.topic.publish.config.enableFrontmatterTags]]
- [[enableHashesForFMTags|dendron.topic.publish.config.enableHashesForFMTags]]
- [[enableRandomlyColoredTags|dendron.topic.publish.config.enableRandomlyColoredTags]]

## Asset properties
These are properties related to how assets should be handled when the site is being published.

- [[copyAssets|dendron.topic.publish.config.copyAssets]]
- [[assetsPrefix|dendron.topic.publish.config.assetsPrefix]]
- [[logoPath|dendron.topic.publish.config.logoPath]]
- [[siteFaviconPath|dendron.topic.publish.config.siteFaviconPath]]

## Customization properties
These are properties related to customizing how certain elements in the published site are displayed.

- [[writeStubs|dendron.topic.publish.config.writeStubs]]
- [[customHeaderPath|dendron.topic.publish.config.customHeaderPath]]
- [[duplicateNoteBehavior|dendron.topic.publish.config.duplicateNoteBehavior]]
- [[hierarchyDisplayTitle|dendron.topic.publish.config.hierarchyDisplayTitle]]

## Analytics properties
These are properties related to analytics of the published site.

- [[ga|dendron.topic.publish.config.ga]]
  - [[tracking|dendron.topic.publish.config.ga.tracking]]

## SEO
These are properties related to SEO of the published site.

- [[seo|dendron.topic.publish.config.seo]]
  - [[title|dendron.topic.publish.config.seo.title]]
  - [[description|dendron.topic.publish.config.seo.description]]
  - [[author|dendron.topic.publish.config.seo.author]]
  - [[twitter|dendron.topic.publish.config.seo.twitter]]
  - [[image|dendron.topic.publish.config.seo.image]]

## GitHib
These are properties related to GitHub.

- [[github|dendron.topic.publish.config.github]]
  - [[cname|dendron.topic.publish.config.github.cname]]
  - [[enableEditLink|dendron.topic.publish.config.github.enableEditLink]]
  - [[editLinkText|dendron.topic.publish.config.github.editLinkText]]
  - [[editViewMode|dendron.topic.publish.config.github.editViewMode]]
  - [[editBranch|dendron.topic.publish.config.github.editBranch]]
  - [[editRepository|dendron.topic.publish.config.github.editRepository]]