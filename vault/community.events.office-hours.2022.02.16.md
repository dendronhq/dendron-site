---
id: yAprWIFzArL1itqgnkkGO
title: '2022-02-16 Office Hours'
desc: ''
updated: 1645111451740
created: 1645111451741
documentId: 1FEEo_0aNiNfnW_tzo58m_HAM8wI_YMujHmKUaNBSzBk
revisionId: >-
  ALm37BWmPsEmnlfg4DxDKr3RsiV8SEFqVPmvvbJjVQLocBpZTAOQe1DJSEMllGnX4GoAxyrMZvrLX-P_5Sw3oA
commentsUpdated: true
---
## Office Hours

February 16th, 2022

Release notes:

- 0.81: [https://wiki.dendron.so/notes/E1Zgn2za7n3QVfm3MtIBe/](https://wiki.dendron.so/notes/E1Zgn2za7n3QVfm3MtIBe/) 
- 0.82: [https://wiki.dendron.so/notes/egxM8X43CqrQLuhYQ6Wu8/](https://wiki.dendron.so/notes/egxM8X43CqrQLuhYQ6Wu8/) 

### Highlights

- CURRENT_WEEK now an option in [Schema Template Variables](https://wiki.dendron.so/notes/GelEQPZrSgr3CK9y10Nrg.html#template-variables)
- [Cross vault link syntax](https://wiki.dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#cross-vault-template-syntax) for template values in schemas
- [Pods v2](https://wiki.dendron.so/notes/H9HVUUG1Z9ws2ngofKyWt.html): In preview! Can enable, test out the [Markdown Export Pod](https://wiki.dendron.so/notes/j5wgTcRHQZomzSHsg41O8.html), and try out the new [Airtable Export Pod](https://wiki.dendron.so/notes/y84kARyQhdUcyRG33pT2i.html)
- [Workspace Sync](https://wiki.dendron.so/notes/c4cf5519-f7c2-4a23-b93b-1c9a02880f6b.html#workspace-sync) improvements

### Notes

- Seed onboarding repo is a good playground to try features out: [https://github.com/dendronhq/seed.dendron.onboarding](https://github.com/dendronhq/seed.dendron.onboarding) 
- [Cross vault link syntax](https://wiki.dendron.so/notes/c5e5adde-5459-409b-b34d-a0d75cbb1052.html#cross-vault-template-syntax) 
  - Ensure that you're always using the right template even if you add new vaults over time
- Airtable Docs:
  - https://wiki.dendron.so/notes/oTW7BFzKIlOd6iQnnNulg.html#boolean

### Q&A

- For questions, please add your `@{discord-handle}: question`
- @kevins8: how do I ask questions on the google doc? (example)

_Notes around questions asked during office hours_

1. @ThatSisyphean#7459: Can you use checkboxes for inserting booleans into Airtable?
  1. Example of how I’ve been formatting things:
  1. ![image](assets/image-rwvbdVhktEWl.png)
  1. The tags.v hierarchy is a set of variables that I’m keeping track of
    1. I’d like for some of these variables to be sort of Dendron environment variables that I can update the value of from anywhere in the note hierarchy
      1. Use case: keeping track of how much money my DnD character has
      1. In the DnD session notes I could just type #v.money: +2 and it would add 2 monies to the v.money variable.
      1. My use case is niche, but I could see other people coming up with much cooler stuff.
      1. Not sure if this is worth the effort of implementation cause you’d have to serialize the variable changes somehow. Not sure if non-commutative operations would be possible unless you had an order in which the variable was changed. And then you run into issues where the variable isn’t the correct value you know it should be and you have to scour notes to find why it’s wrong.
    1. Other variables just represent a cell in a row in a DB.
      1. The note itself is the row ID and the variable is the column ID
  1. When rendered in Obsidian’s mobile app, this becomes just a real simple form to fill out.
  1. I’m thinking the benefits here might be limited though since airtable already has a decent form interface and you’d be replicating data in multiple places (the dendron note and the airtable entry)
  1. It would be cool to build the form in dendron like this rather than going through and manually making airtable tables and bases. You’d lose some advanced Airtable functionality I assume in exchange for convenience.
  1. Regardless thanks for all the work
  1. Final note is that syncing these “dendron forms” between devices is a pain especially because you can’t create a note on mobile.


### Comments

 - Hyun Ik Choi:  I just checked this. This is part of the sanity checking logic in the publish commands that didn't get cleaned up. Thanks for bringing this up. This should be removed.
