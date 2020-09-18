---
id: b81810f7-4d47-4870-ad2c-d4e48a49aa22
title: 2020-seed-bank
desc: ''
updated: 1599498995178
created: 1599498995178
stub: false
---

# The Seed Bank

## Goal

Make it easy for people to publish and find high quality public vaults for any topic they care about

## Details

Dendron lets anyone publish an online version of the notes inside their Dendron vault. The [Dendron Website](https://dendron.so/) is an example of a published vault. 

The seed bank is a project to 1) make it simpler for people to publish their notes and 2) to curate notes from existing open source material. 

1. For publishing their own notes, this means that anyone, even without a developer background, should be able to go from first creating a workspace to having a published vault in under 5 minutes. The ideal workflow.

```
- user runs `Build Pod for github pages`
    - if it is their first time, download jekyll and dependencies
    - otherwise, run jekyll and open browser to local page
- user runs 'Publish Pod for jekyll pages`
    - if it is their first time, prompt for github repo and account token
    - otherwise, commit to git, push, and get a notification when site is published
```

2. For curating notes from existing open source material, this means re-mixing existing open source content into public references. For example, [og-aws](https://github.com/open-guides/og-aws) is a fantastic resource for AWS. [TLDR](https://github.com/tldr-pages/tldr) is a great reference for CLI. The former is only available as a README, the latter via the console. It should be easy to take the content from these sites and publish them as public Dendron vaults. The information in these vaults can also be enriched from other sources. In this way, Dendron can help build the highest quality, most up to date, information for any respective domain that people care about.


# Open Questions

1. alternative name to seed bank. bank implies something private and underground whereas what we're trying to accomplish is an open repository of notes
    - candidates
        - seed garden
        - pea patch
1. Remixing/curating content, should it use the same `pod` mechanism or something different? Are we overloading pods? 
    - alternatives
        - call pods that format and import existing content
