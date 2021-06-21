---
id: CaBdm9dIdQrVNXW25ICmK
title: office-hours-2021-06-20
desc: ""
updated: 1624288173484
created: 1624288131312
---

### Company updates

-   Stuff that’s coming out tomorrow:
    -   Calendar view
    -   Set default vault for daily journal (last week’s CROP)
    -   Previews are limited to a specific reference.
    -   Graph update
        -   Filter by vault or by regex
    -   Seed Bank in preview
        -   It’s npm for docs. Do an npm add.
        -   Currently shipped the CLI.
        -   Also want to publish a “startup” seed.
        -   Help us seed the seed vault! [https://wiki.dendron.so/notes/6ff8cbb6-e4b8-449b-a967-277b76e4ecef.html#requesting-new-seeds](https://wiki.dendron.so/notes/6ff8cbb6-e4b8-449b-a967-277b76e4ecef.html#requesting-new-seeds)
    -   Airtable pod!
        -   Excited to use this since we have good data/viz in Airtable.
        -   E.g. Customer issue tracking
            -   anything that happens more than once, we want a playbook and then fix the issue or change the UX so we don’t have an issue.
        -   Pods: Dendron is where your knowledge is, and helps you put your knowledge where it needs to be.
-   Future work:
    -   Calendar view hardcoded for a few settings (needs to actually be called daily.journal for it to kick in). This will be remedied in the future.
    -   Accessibility - making it easier for people to get started with Dendron.
        -   Installation takes a while.
            -   Markdown preview is an unnecessary dependency (and HUGE) so will reduce our install by ~100MB.
        -   Unifying UI layer - the web UI to make it easier to reduce bundle size and make sure you get the same preview + publish experience.
        -   Templates. Initialize with a seed of project management and todos.
        -   PKM seed - definite reference of how people are managing their journals.
            -   Inspired by TodoMVC.
        -   Starting Blog.dendron.so
            -   We’d like to dedicate part of the blog to a community section. Posts + highlights on the community.
            -   Interviews and highlights of use cases.

### Questions

-   What are we going to work on next?
-   How are people note-taking today?
    -   Trying to find ways to integrate knowledge and having the system reflect and provide feedback to yourself.
    -   Pen and paper -> eventually started writing in gdoc files. Now, published in Dendron
        -   [https://harshita-mindfire.github.io/german-for-beginners/](https://harshita-mindfire.github.io/german-for-beginners/)
