---
id: 8JECQzntY2P5ha3U
title: Publish
desc: ''
updated: 1628251300159
created: 1627560101451
---

## Summary

The Github Publish Pod lets you update the status and labels of issues in your github repository that have previously been imported into Dendron.

## Example Workflow

When importing issues through [Github Import](https://wiki.dendron.so/notes/2H9FBzagX9wf4b0V0ADGG.html), a note is created for each issue. The note frontmatter is populated with the title, url, status, existing tags, and an issueID. You can update the status of the issue (OPEN/CLOSED) and modify the tags within Dendron; after publishing with the publish pod, the changes in status and tags will be reflected in Github.

Upon publishing the note below, for this issue #86, the status will be updated to `CLOSED` and the tags will be updated to `wontfix` and `documentation`

```md
...

title: 86-Extra quotes in links tutorial
url: 'https://github.com/dendronhq/dendron-site/issues/86'
status: CLOSED
issueID: gkdskrereidnYu
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