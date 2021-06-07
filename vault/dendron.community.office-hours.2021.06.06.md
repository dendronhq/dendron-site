---
id: 25a3a1cc-d8bf-4bee-8d89-cd0c2b5dc25b
title: "06"
desc: ""
updated: 1623063068436
created: 1623006800621
---

#### Company updates

-   New Note graph
    -   Significantly faster
        -   15000 notes loaded in 5s (compared to 10 minutes today)
-   Block references are feature complete
    -   Can reference Arbitrary lines with an anchor
-   Doctor command update
-   Crop issue for the week
    -   Refactor without formatting your note.
        -   Turned out to be a bigger task.
            -   Implemented wiki links but not note references.
            -   Will release next week.
    -   This week’s issue (backlinks tab) is also pretty big.
        -   Might turn out to be a multi-week issue.
-   Greenhouse Series
    -   Talks about a mix of topics
    -   30min
    -   &lt;link to playlist/channel>
    -   Explores knowledge base + the things you’re interested in
    -
-   Dendron Swag
    -   Limited print run, we’re looking at opening up a swag store later this summer.
    -   Let us know if you have suggestions
-   PKM
    -   [https://pkm.dendron.so](https://pkm.dendron.so)
    -   [Implementation - PKM (dendron.so)](https://pkm.dendron.so/notes/7c64cee9-69a8-48c3-9c0b-5dd031243204.html)
        -   Like TodoMVC for note taking: https://todomvc.com/
-   Seed Registry Updates
    -   RFC later today.
        -   Will start with CLI commands
        -   Vault add currently adds a remote vault
        -   Expand to make this more reusable/extensible.
            -   Seeds are similar to node-modules.
        -   Possibilities are massive:
            -   Composite workspaces
            -   Have workspaces accessing multiple npm vaults with meta-information.
            -   Modularizing like knowledge.
    -   Registry to find and add public vaults quickly.
    -   Npm for vaults.
    -   Use cases are programming related. The plan is to make this a registry for people sharing any number of vaults.
    -   This is a long-term investment area for Dendron.
        -   We will have a sensible approach initially and then revise based on how we see people use the seed registry.

#### Questions

-   Editing experience for seeds?
    -   (subject to change) When you edit a seed, you can edit it directly, or you can fork it.
        -   Seeds are just normal workspaces that are installed in a pre-configured way.
        -   It’s just like a regular git repo.
        -   Trying to take what’s worked for other package managers and using it for knowledge.
    -   Consider webpack bundling.
    -   Lots of ways of dependency management.
-

#### Minutes

-   Does anyone know someone who’s worked on dependency managers? Ping us on Discord (kpats@ or kevins8@)
-   Newsletter - subscribe **[here](https://buttondown.email/dendron)**!
