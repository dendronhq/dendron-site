---
id: 2H9FBzagX9wf4b0V0ADGG
title: Import
desc: ''
updated: 1627633776543
created: 1625747404839
---

## Summary

The Github Import Pod imports all the issues of a github repository into your selected vault as notes.
The import config has additional options to select the owner, repository, and status of the github issues. 

## Authentication

To communicate with the Github server, you'll need an OAuth token with the right scopes.
Follow the steps in [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a token. The scopes you require depends on the type of data you're trying to request, you can even select all and you are good to go.




## Example

- config
```yml
vaultName: vault
owner: dendronhq
repository: dendron-site
status: open
endDate: 2021-06-29
token: ***
fname: github.issues.dendron-site
```

- Original
```
└── vault
    └── projects
          ├─one.md
          ├─two.md
  
```
- After

```
  └── vault
        ├── projects.one.md
        ├── projects.two.md
        └── github.issues.dendron-site.86-Extra quotes in links tutorial.md

```
- Imported Issue

```md
...

title: 86-Extra quotes in links tutorial
url: 'https://github.com/dendronhq/dendron-site/issues/86'
status: OPEN
issueID: gkdskrereidnYu
tags: 
  - area.misc
  - question
---
Line 12 of the links page ( https://github.com/dendronhq/dendron-site/edit/master/vault/dendron.tutorial.links.md ) has two consecutive back-quotes before the [[  that do not appear to be necessary. I am not sufficiently confident of this to submit a PR, however.
```

### Configuration

![[dendron.topic.pod.import#configuration,1]]

## owner
* description: owner of the repository
* type: string
* required: true

## repository
- description: github repository to import from
- type: string
- required: true

## status
- description: status of issue : open/closed
- type: string
- required: true

## endDate
- description: import issues created before this date
- type: string
- default: Today's date
- format: YYYY-MM-DD

## startDate
- description: import issues created after this date: YYYY-MM-DD
- type: string
- format: YYYY-MM-DD

## token
- description: github personal access token
- type: string
- required: true

## fname
- description: name of hierarchy to import into
- type: string
- required: true