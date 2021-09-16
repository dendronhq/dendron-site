---
id: 8JECQzntY2P5ha3U
title: Publish
desc: ''
updated: 1631774291272
created: 1627560101451
---

## Summary

The Github Issue Publish Pod lets you update the status, milestone and labels of issues in your github repository that have previously been imported into Dendron. It also supports creating a new issue in github from a note authored in dendron. 

## Example Workflow

When importing issues through [Github Issue Import](https://wiki.dendron.so/notes/2H9FBzagX9wf4b0V0ADGG.html), a note is created for each issue. The note frontmatter is populated with the title, url, status, existing tags, and an issueID. You can add the field milestone with the milestone title, update the status of the issue (OPEN/CLOSED) and modify the tags within Dendron; after publishing with the publish pod, the changes in status, milestone and tags will be reflected in Github.

A new github issue can be created by publishing any note with publish pod that does not have issueID and status in note's frontmatter.


Upon publishing the note below, for this issue #86, the status will be updated to `CLOSED`, milestone will be updated as v57 and the tags will be updated to `wontfix` and `documentation`

```md
...

title: 86-Extra quotes in links tutorial
url: 'https://github.com/dendronhq/dendron-site/issues/86'
status: CLOSED
issueID: gkdskrereidnYu
milestone: v57
tags: 
  - wontfix
  - documentation
---
Line 12 of the links page ( https://github.com/dendronhq/dendron-site/edit/master/vault/dendron.tutorial.links.md ) has two consecutive back-quotes before the [[  that do not appear to be necessary. I am not sufficiently confident of this to submit a PR, however.
```
## Configuration

### owner
* description: owner of the repository
* type: string
* required: true

### repository
- description: github repository of the issue
- type: string
- required: true

### token
- description: github personal access token
- type: string
- required: true

### Example Configuration:
```yml
owner: dendronhq
repository: dendron-site
token: ***
```

### Authentication (Populating the token field in the configuration)

To communicate with the Github server, you'll need an OAuth token with the right scopes.
Follow the steps in [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a token.
