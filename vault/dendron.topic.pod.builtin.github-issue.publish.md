---
id: 8JECQzntY2P5ha3U
title: Publish
desc: ''
updated: 1640713294033
created: 1627560101451
---

## Summary

The Github Issue Publish Pod lets you update the status, milestone, assignees and labels of issues in your github repository that have previously been imported into Dendron. It also supports creating a new issue and a discussion in github from a note authored in dendron. 


## Actions

## Creating an Issue

A new github issue can be created by publishing any note with publish pod that does not have issueID and status in note's frontmatter.

### Updating an issue

Upon publishing the note below, for this issue #86, the status will be updated to `CLOSED`, milestone will be updated as v57, the tags will be updated to `wontfix` and `documentation` as issue labels and will be assigned to username `john-doe`(github username). The issue URL is copied to the clipboard.

To add multiple assignee, add assignees in frontmatter as yaml array. 


```markdown
...

title: 86-Extra quotes in links tutorial
url: 'https://github.com/dendronhq/dendron-site/issues/86'
status: CLOSED
issueID: gkdskrereidnYu
milestone: v57
assignees: john-doe
tags: 
  - wontfix
  - documentation
---
Line 12 of the links page ( https://github.com/dendronhq/dendron-site/edit/master/vault/dendron.tutorial.links.md ) has two consecutive back-quotes before the [[  that do not appear to be necessary. I am not sufficiently confident of this to submit a PR, however.
```
### Creating a discussion

Upon publishing the note below, a discussion titled `28 Notifications` will be created and the discussion url is copied to the clipboard.

```markdown
...

title: 28 Notifications 
category: RFCs/Ideas
---

This is the discussion for [RFC 28 - Notifications](https://wiki.dendron.so/notes/o5AQmw9bsPQspYuTjdmnK.html).
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

### includeNoteBodyInDiscussion
- description : if set to false, starts a discussion without the contents of note body
- type: boolean
- required: false
- default : true

If set to false, the default body for Discussion would be : Discussion for `<title of the note>`

### aliasMapping
- description : aliases to the frontmatter fields to support task note mappings.
- type: object
- required: false

Github issues make it possible to provide aliases to the frontmatter fields so that it can support task note mappings. It allows us to directly use a GitHub issue as a task note and then publish the results back to GitHub when we update the task status.

```ts
type AliasMapping = {
  assignees: AliasMappingFields;
  status: AliasMappingFields;
};
type AliasMappingFields = {
  value?: { [key: string]: string };
  alias?: string;
};
```


### Example Configuration:
```yml
owner: dendronhq
repository: dendron-site
token: ***
includeNoteBodyInDiscussion: true
aliasMapping: {
        #this says that another name for `assignees` is `owner`
        assignees: {
            alias: 'owner', 
        },
        # this says that 'x' in status should be interpretesd as `CLOSED`
        status: { value: {x: 'CLOSED'} }
    }
```

### Authentication (Populating the token field in the configuration)

To communicate with the Github server, you'll need an OAuth token with the right scopes.
Follow the steps in [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a token.

## Example Workflow

When importing issues through [Github Issue Import](https://wiki.dendron.so/notes/2H9FBzagX9wf4b0V0ADGG.html), a note is created for each issue. The note frontmatter is populated with the title, url, status, existing tags, author and an issueID. You can add the field milestone with the milestone title, update the status of the issue (OPEN/CLOSED) and modify the tags within Dendron; after publishing with the publish pod, the changes in status, milestone and tags will be reflected in Github.


