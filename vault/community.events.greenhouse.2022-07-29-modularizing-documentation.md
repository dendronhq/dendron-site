---
id: k5zg3zk1ffmsrmojnvn8uxw
title: >-
    Seeding Digital Gardens and Connecting Second Brains
desc: 'Greenhouse Talk on modularizing public documentation, ebooks, and other web content for Dendron consumption.'
updated: 1659368654945
created: 1659284597998
---

## Summary

{{fm.desc}}

## Video

<iframe width="1280" height="720" src="https://www.youtube.com/embed/IQusAQGxTyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Details

> "I know kung fu." - Neo, the hacker formerly known as Mr. Anderson

Dendron is excellent for wrangling your own thoughts, projects, journaling, and personal knowledge. But what about magically leveling up by importing entire knowledge bases already maintained by companies, technical writers, authors, and online communities?

Dendron can be used in a multi-vault configuration that treats multiple vaults as dependencies. Self contained vaults helped make this easier.
A multi-vault pattern is intended to make it as easy as possible to work with multiple vault types:

- Private notes
- Public notes
- Shared notes, with teams or others
- etc.

I'm working to expand what is available in the land of public notes. In addition to referencing the personal digital gardens that others have made for their blogs and websites, I want to be able to import a variety of public technical documentation instead of traversing their public docs portals.

This provides a lot of opportunity around re-usable content (not redefining what is already in the official docs, but instead linking or note referencing), remixing content (building tutorials around note references containing official doc snippets), and more.

Join me as I show a demo of a Dendron vault that is automatically synced with public documentation of a non-Dendron formatted origin, and what methods people could use to Dendronify knowledge across the internet!

## Agenda

- Let's take a look at what Seeds have the potential to be!
  - Official Dendron vaults
  - Community Produced Dendron vaults
  - Technical docs, ebooks, and sites that are being auto-converted into Dendron vaults
- Community: Feel free to play with example vault
- A glance at the land of Creative Commons content
  - POC: Microsoft Virtualization docs (Example of tech docs)
- Being a responsible, digital gardener
- Final thoughts
- Q&A

## Example Vaults from DocsGarden

Feel free to take a look at [dg-msft-virtualization](https://gitlab.com/docsgarden/dg-msft-virtualization) by itself, or feel free to add the vault to your current workspace.

Add to current workspace:

- `Dendron: Vault Add` -> `remote` -> `https://gitlab.com/docsgarden/dg-msft-virtualization.git`
- Make sure to edit your `dendron.yml` and add `sync: noPush` to the vault(s)

### Microsoft Virtualization Docs

- [Dendron Vault](https://gitlab.com/docsgarden/dg-msft-virtualization)
  - [Published Dendron Vault](https://docsgarden.gitlab.io/dg-msft-virtualization)
- [Upstream Source Docs being Converted](https://github.com/MicrosoftDocs/Virtualization-Documentation/)
  - [Published Upstream Docs](https://docs.microsoft.com/en-us/virtualization/)

#### Issues

Ran into problems of files formatted as UTF-8 w/ BOM (when they should just be UTF-8), and also weird Markdown formatting of links and other things (sometimes broken links, too).

- Upstream PR: [Update broken external link, fix broken internal header link, and reformatting UTF-8 w/ BOM files to just be UTF-8 ](https://github.com/MicrosoftDocs/Virtualization-Documentation/pull/1769)
- Upstream PR in other Microsoft docs (`MicrosoftDocs/windowsserverdocs`): [Fix relative links and general formatting](https://github.com/MicrosoftDocs/windowsserverdocs/pull/6587)

## Best Practices: Converting Material to Dendron Vaults

Opinions on how to be a responsible digital gardener when it comes to converting creative commons content into Dendron vaults:

- `canonicalUrl`: Use this in note frontmatter! Keep the internet clean, and point to the original published content.
- Original source frontmatter values: If source material is already in frontmatter Markdown, do your best to maintain the source values somewhere.
- `LICENSE` adherence: Depending on the Creative Commons, or other copyright licenses, make sure to adhere to them and make them easily discoverable.
- Standardize the content within `README.md`, `notes/root.md`, and other hierarchy note locations: These are great locations to provide details about where the content came from, what `LICENSE` is being used, what Dendron is, and more. I'm thinking `notes/root.md` and/or `README.md` can also be good locations to include values like when the last update to the vault happened, what version of automation tooling generated the docs, etc.
- Find errors in the source content? Contribute upstream! When using Dendron vaults converted from public content, you can improve the original docs with updated content and the Dendron vault will later automatically update from changes merged into the original source.
  - Of course, this doesn't work when the upstream content is an ebook. So, depending on the licensing of the ebook, you can choose to update the Dendron vault content instead! There may be other options, such as notifying the owner of the ebook/content so that they can extend their errata, or otherwise improve their content.

### Example Frontmatter

This is a copy/paste of the frontmatter added to the top of one of the automatically converted Microsoft docs pages, converted from [source file: custom-gallery.md](https://github.com/MicrosoftDocs/Virtualization-Documentation/blob/main/virtualization/hyper-v-on-windows/user-guide/custom-gallery.md).

```yaml
id: 63Tj2RBerVHEHTjT5czKpvQ
title: >-
    Create a custom virtual machine gallery
desc: >-
    Build your own entries into the virtual machine gallery in Windows 10 Creators Update and later.
canonicalUrl: https://docs.microsoft.com/virtualization/hyper-v-on-windows/user-guide/custom-gallery
license: Creative Commons Attribution 4.0 International
source:
    sourceFileHash: 4ac1181de4042274b6fbcf419331de88a4c38833e91b33034fc9a47d2847ddb9
    sourceFileUrl: https://github.com/MicrosoftDocs/Virtualization-Documentation/blob/main/virtualization/hyper-v-on-windows/user-guide/custom-gallery.md
    keywords: "windows 10, hyper-v, quick create, virtual machine, gallery"
    author: "scooley"
    ms.author: "scooley"
    ms.date: "05/04/2018"
    ms.topic: "article"
    ms.prod: "windows-10-hyperv"
    ms.assetid: "d9238389-7028-4015-8140-27253b156f37"
updated: 1658966269000
created: 1658966269000
```

Initial version of frontmatter includes mostly familiar attributes, but with the addition of:

- `license`: The license in which the content of the open note has been released under.
- `canonicalUrl`: A link to the **published version** of the source content.
- `source.sourceFileHash`: The hash value of the source file that has been converted. This is necessary in order to understand when/if a source file has actually been updated, and whether it should then be overwritten with new content.
- `source.sourceFileUrl`: A link to the **raw source file version** of the source content.
- `source.*`: The remainder of the original frontmatter from the source file content that doesn't end up mapping to known Dendron frontmatter like `desc`, `title`, etc.

### Example License Notification

This is a copy/paste of the text box added to the top of one of the automatically converted Microsoft docs pages, converted from [source file: custom-gallery.md](https://github.com/MicrosoftDocs/Virtualization-Documentation/blob/main/virtualization/hyper-v-on-windows/user-guide/custom-gallery.md).

> The [original source of this page](https://github.com/MicrosoftDocs/Virtualization-Documentation/blob/main/virtualization/hyper-v-on-windows/user-guide/custom-gallery.md) was released by [Microsoft](https://github.com/MicrosoftDocs/Virtualization-Documentation) under the [Creative Commons Attribution 4.0 International](https://github.com/MicrosoftDocs/Virtualization-Documentation/blob/main/LICENSE) license. If wanting to contribute/update/fix the content, contribute to the source! This page uses the `canonicalUrl` HTML attribute to ensure SEO is uninterrupted for the original [published page](https://docs.microsoft.com/virtualization/hyper-v-on-windows/user-guide/custom-gallery).

As seen, this includes:

- Original source file that was converted
- Who or what entity has released the content
- What license the content was released under
- A notice about `canonicalUrl`, and a link to the published version of the original source material

Listing these will likely help in adhering to most Creative Commons licensing (`CC-BY-4.0`, `CC-BY-SA-4.0`, etc.).

### More on canonicalUrl

I use this value a lot in the frontmatter of my vaults that are made from creative commons content.

`canonicalUrl` is used in HTML metadata by pages that have duplicate content elsewhere online, and helps SEO understand that the original content to be indexed and pointed to exists elsewhere. This is good if you are re-posting content (let's say blog posts to Medium, `dev.to`, Hashnode, etc. which all support entering a `canonicalUrl` value), and wanting SEO to only care about your original blog as the source-of-truth.

I'm currently converting existing docs, like Microsoft docs, to Dendron vaults and want the original published doc page location to be referenced with `canonicalUrl`. This means an easy share of the original published doc, but also means if I publish the vault as a Dendron site that SEO (Google, other search engines) don't get messy when they discover the duplicate online content.

If `canonicalUrl` is not set, then the Dendron-published content could compete with the original content in search engines (not good stewardship), and I believe it would also lower both sites in search results as a form of penalty for the search engine having found duplicate content on multiple sites (also not good stewardship).

## Thoughts on The Seed Bank

The Seed Bank could use some revisiting when it comes to using those vaults inside of self-contained dependency trees. They should be reviewed and converted into self-contained vaults so that they can either be added with a `Dendron: Vault Add` (with a subsequent `sync: noPush`), or with `Dendron: Add Seed to Workspace` functionality to be upgraded in a way that adds the vault like a normal remote vault config but with `sync: noPush`.

## Thoughts on Markdown Import Pod

The [[Import Pod|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import]] is a helpful starting place for importing a collection of markdown files.

Though, because of the nature of custom Markdown quirks, depending on the repository, I wanted to use a language I was more familiar with (Python) in order to make my modifications.

The other problem was wanting to only update imported files if the source files have been updated since the previous import. This is why I am using hash values in frontmatter, so that the imported Markdown can be checked for whether the content has changed at all. If content _has_ updated, I want to then overwrite the target markdown Dendron note `updated` value with a new timestamp (and update any other modified frontmatter from the source, if things like `title`, etc. have changed) and rewrite the contents of the markdown file.

What I liked from the import pod, and adopted:

- [[indexName|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import#indexname]]
- [[importFrontmatter|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import#importfrontmatter]]
- [[frontmatterMapping|dendron://dendron.dendron-site/dendron.topic.pod.builtin.markdown.import#frontmattermapping]]

## Roadmap

- Release a Python library of helpful functions that others can use for working with converting docs with Python (this is currently a jenky script!)
  - This will reference a configuration file (ex. `source.yml`)
- Bootstrap all repos to use GitLab CI
- Iteratively advance GitLab CI powers with reusable CI templates
  - Automatically update repo content if source content updates
  - Automatically update `dendron.yml` with latest Dendron version releases, along with latest `dendron-cli` for publishing
  - Automatically publish content online to GitLab Pages
  - Automatically generate an MR whenever new Dendron version releases

## Open issues that would make seed creation easier

- [Add a new Copy command for copying the value of a frontmatter attribute to the clipboard](https://github.com/dendronhq/dendron/issues/3310)
- [Allow for Markdown links to use frontmatter variable substitution for hyperlinks](https://github.com/dendronhq/dendron/issues/3149)
- [Embed/include code within notes in a similar fashion to how note refs embed content from other notes in a vault](https://github.com/dendronhq/dendron/issues/1565)
- [Support Admonitions](https://github.com/dendronhq/dendron/issues/1287)

## Lookup

- [[sync|dendron://dendron.dendron-site/dendron.topic.vaults.config#sync]]: `dendron.yml` config value
  - Use with `noPush` for workspaces you want to only pull from via [[Workspace Sync|dendron://dendron.dendron-site/dendron.topic.teams#workspace-sync]]
  - This helps set the target vault as read-only, in a way, where your workspace only cares to _pull_ the latest content from the target vault (that you may, or may not have, write access to)
- [[Seed Bank|dendron://dendron.dendron-site/dendron.topic.seed-bank]]
- [[canonicalUrl|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#canonicalurl]]
  - [[Legacy Note Configuration|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#note-configuration]] needs to be reviewed and migrated to a new location since values like `canonicalUrl` still work in note frontmatter with newer publishing.


