---
id: ASuC5qzfZBnTLyu09cGqS
title: Orbit
desc: ''
updated: 1635855788896
created: 1635854588391
---

## Summary
- id: `dendron.orbit`

The [Orbit](https://orbit.love/) Import Pod can import all the members of an orbit workspace as an individual note of template [[People|dendron://dendron.templates/templates.people]].  

## Authorization

Orbit uses API tokens to authorize access to the API. You can find your API tokens on the [Account Settings page](https://app.orbit.love/user/edit).

The workspace slug can be fetched from the url. In the url provided below, `dendron-hq` is the workspace slug.
`https://app.orbit.love/dendron-hq`

## Example
- config

```yml
vaultName: vault
token: ***
workspaceSlug: dendron-org
```

orbit member details

```json
name: John Doe
twitter: johndoetwit
github: johndoegit
discord: johndoediscord
```

after import, a note with fname people.john-doe is created

```yml
id: test123
title: John Doe
desc: ''
social:
  linkedin: null
  twitter: johndoetwit
  discord: johndoediscord
  github: johndoegit
  hn: null
  website: null
```

### Configuration

![[dendron.topic.pod.import#configuration,1]]

## token
- description: github personal access token
- type: string
- required: true

## workspaceSlug
- description:  slug of workspace to import from
- type: string
- required: true

