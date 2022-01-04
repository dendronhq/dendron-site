---
id: qKIIdd1SnJsxV0pHXHoQB
title: '2021-12-21 New User Tuesday'
desc: ''
updated: 1641253064967
created: 1640185950492
documentId: 1FEEo_0aNiNfnW_tzo58m_HAM8wI_YMujHmKUaNBSzBk
revisionId: >-
  ALm37BWzXvMtiYQNYqmI9etmUhoP2Y8ThjNuoanLPwymhW9J3YwmvVHrHQyQld_tkhocAKjQTW-ZNYPaRZPV2g
commentsUpdated: true
---
## New User Tuesdays

Repo to follow along

- https://github.com/dendronhq/seed.dendron.onboarding

Questions

What was a highlight of 2021 for Dendron?  Just one, and you can include a ‘lowlight’, if you like

- 

- Are the publish tutorials up to date ?There is a GitHub one and the publish one but they are no coherentThe publish one:[https://wiki.dendron.so/notes/230d0ccf-5758-4a8f-b39b-3b68e1482e2b/](https://wiki.dendron.so/notes/230d0ccf-5758-4a8f-b39b-3b68e1482e2b/)The Github one:[https://wiki.dendron.so/notes/yg3EL1x9fEe4NMqxUC3jP/](https://wiki.dendron.so/notes/yg3EL1x9fEe4NMqxUC3jP/)I ask the question because I struggle to build a proper Git Repo and get errors when running >Dendron: Publish Export OK Thank you

What percentage of the original expectations for Dendron has been accomplished?

	-mission statement

	-10k note users

How do tags fit in with the hierarchies idea, I am trying to understand how they all work together?

	-hierarchies first approach

	-tags -> categorical 

	- tags enrich - filter

- We now have Next.js based publishing. Why would Dendron still generate a package.json for 11ty in “Dendron: Publish *” commands? [https://github.com/dendronhq/dendron/blob/1f0b25a112e3da630d38cfcf7966003cd8520984/packages/plugin-core/src/utils/site.ts#L67](https://github.com/dendronhq/dendron/blob/1f0b25a112e3da630d38cfcf7966003cd8520984/packages/plugin-core/src/utils/site.ts#L67)
  - Might need to submit an issue [https://github.com/dendronhq/dendron/issues/1946](https://github.com/dendronhq/dendron/issues/1946)

- 
- Is it possible to have semantic links in Dendron?(notes might be linked with different ways)
  - [[...]]()
  - [https://wiki.dendron.so/notes/587e6d62-3c5b-49b0-aedc-02f62f0448e6.html](https://wiki.dendron.so/notes/587e6d62-3c5b-49b0-aedc-02f62f0448e6.html)
  - Tag colors: https://wiki.dendron.so/notes/8bc9b3f1-8508-4d3a-a2de-be9f12ef1821.html
  - Coming from a Obsidian background:-)
  - What about ordering the leaves? `nav_order` property

- Where can we find documentation on what is and how to modify the config.export.yml ?
  - Pod docs: https://wiki.dendron.so/notes/66727a39-d0a7-449b-a10d-f6c438185d7f.htmlOk cool thanks# description: Where to export to
- # type: string
- # required: true
- dest: TODO

- 
- # description: should body be included
- # type: boolean
- # includeBody: true

- 
- # description: should stubs be included
- # type: boolean
- # includeStubs: TODO

- 
- # description: undefined
- # type: array
- # ignore: TODO

- 
- # description: include or exclude certain vaults
- # type: object
- # vaults: TODO

- 
- # description: options from site config you want to override
- # type: object
- # overrides: TODO

- 

- Please explain more about publishing notes with private and public and explain about publish to site as mentioned in the wiki.Awesome, thank you so much :)
  - Example yml: [https://github.com/dendronhq/dendron-site/blob/dev/dendron.yml](https://github.com/dendronhq/dendron-site/blob/dev/dendron.yml)
  - Publishing specifics: https://wiki.dendron.so/notes/f2ed8639-a604-4a9d-b76c-41e205fb8713.html

- Can I choose several vaults to publish in a multi-vault set up?

  - 
- Dendron is Amazing. Thanks. Do you have donation links?
  - Financial contributions: [https://wiki.dendron.so/notes/abda4d2a-d8a2-4dd6-8ea0-4a5661fa13c1.html](https://wiki.dendron.so/notes/abda4d2a-d8a2-4dd6-8ea0-4a5661fa13c1.html)
  - 

- Workspace created by Dendron has “folders” that limits workspace to paths of vaults, so I can’t edit the dendron.yml file while I’m in the workspace.

## Feedback


### Comments

 - Hyun Ik Choi:  I just checked this. This is part of the sanity checking logic in the publish commands that didn't get cleaned up. Thanks for bringing this up. This should be removed.
