---
id: 8JECQzntY2P5ha3U
title: Publish
desc: ''
updated: 1628229901608
created: 1627560101451
---


## Summary

The Github Publish Pod let you update the status and labels of your selected github repository.
The publish config has additional options to select the owner and repository. After importing issues through [Github Import](https://wiki.dendron.so/notes/2H9FBzagX9wf4b0V0ADGG.html), the issues are imported as a note in your vault with issue id, status and labels(as tags) of the github issue in the frontmatter. You can update the status of the issue: (OPEN/CLOSED) and the labels of the issue and run Github Publish pod to update the issue in your github.

Also, if your imported issues do not already have the issue ID, you will want to run github import again to fetch it. It will add the issue id in the frontmatter

## Authentication

To communicate with the Github server, you'll need an OAuth token with the right scopes.
Follow the steps in [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a token. The scopes you require depends on the type of data you're trying to request, you can even select all and you are good to go.




## Example

- config
```yml
owner: dendronhq
repository: dendron-site
token: ***

```

- The status and label of the following issue will be updated to CLOSED and wontfix, documentation respectively.

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

### Configuration


## owner
* description: owner of the repository
* type: string
* required: true

## repository
- description: github repository of the issue
- type: string
- required: true

## token
- description: github personal access token
- type: string
- required: true
