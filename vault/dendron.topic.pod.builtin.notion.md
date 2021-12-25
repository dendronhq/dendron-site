---
id: eOw3TC9KgdbBvhyU7pyGl
title: Notion
desc: ''
updated: 1640428067459
created: 1631686439555
---

## Summary

The [Notion](https://www.notion.so/) export pod can transfer contents of a Dendron vault to a Notion workspace. The export config has additional options to export a specific vault.

## Workflow

Using Notion Export Pod is a two step process
1. Authentication
1. Choosing the parent page

### Authentication

The Notion API uses tokens/api-key to authorize requests from integrations.

Step 1: Create an integration: 
1. Go to [My-Integrations](https://www.notion.com/my-integrations).
1. Click the "+ New integration" button.
1. Give your integration a name - I chose "Novels".
1. Select the workspace where you want to install this integration.
1. Click "Submit" to create the integration.
1. Copy the "Internal Integration Token" on the next page and save it to the Dendron Notion export pod config file.

Step 2: Share a database with your integration
Integrations don't have access to any pages (or databases) in the workspace at first. A user must share specific pages with an integration in order for those pages to be accessed using the API.
Start from a new or existing page in your workspace. Click on the Share button and use the selector to find your integration by its name, then click Invite.

### Choosing the parent page

The exported notes cannot be attached at a workspace level and require a parent page.
The Pod will automatically query for pages on your Notion workspace and provide you with a drop down list of pages for you to choose as a Parent. The most recently created page will appear at the top of the dropdown.

## Example

- Create a page in Notion Workspace titled- `September Reading`

- config
```yml
dest: notion
vault: vault
apiKey: ***
```

- Layout
```
└── vault
    |── books.md
    ├── books.harrypotter.md
    └── books.alchemist.md
    └── books.ram.md

```

- Output

 Notion Workspace

 └── September Reading
    |── Books
    ├── Harrypotter
    └── Alchemist
    └── Ram



