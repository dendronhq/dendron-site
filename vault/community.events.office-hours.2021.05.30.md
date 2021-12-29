---
id: 3da0e9c2-c6cb-468c-a0bf-be2a267a1a41
title: '30'
desc: ''
updated: 1622468997290
created: 1622398067339
---

## Company updates

-   Roadmap now has a timeline - [https://github.com/orgs/dendronhq/projects/1](https://github.com/orgs/dendronhq/projects/1)
    -   Rationale: [Dendron Public Roadmap - Dendron](https://wiki.dendron.so/notes/6e4c4f61-80a3-46fa-9ad3-04b99d9e9695.html)
-   Product update
    -   Block references
    -   Graph Viz.
    -   Lookup is fuzzier and more accurate
-   PKM docs
    -   Call for help/support here if you’ve got insight into a particular tool/method or both.
    -   Build out more of these (AWS, NPM etc.)
-   Design system
    -   Moving native view -> web view.
    -   Using the same components for native view in VS Code preview and for publishing.
-   Update on Windows integration tests
    -   Mac/Linux is working
    -   Windows is high on tech-debt list.
-   Theming (from Brandon)
    -   Styling so that people can configure preview and site.
    -   Theming will be supported but what extent we’re not sure:
        -   Preview should be an extension of the editor.

## Questions

-   For the schema.yml, json-schemas I'm currently working on I have the Option to generate Types from the schema files or from types, which variant would you prefer?
-

## Minutes

-   Obligatory Covid talk
-   Windows + integration support.
    -   Luke actually fixed a lot of UNIX/Windows file path difference issues a while ago.
-   JSON schemas
    -   End goal is to have JSON schemas to validate a schema.
        -   JSON &lt;-> TS. Which direction to go?
        -   Looking at the current codebase - non-obvious which types are for schemas.
        -   Going from JSON Schema to interfaces should be the preferred way to go.
        -   Fudo already has [repo](https://github.com/flammehawk/dendron-schemas) for review.
