---
id: eX8OclhlYdGzO_WjzfCtZ
title: '27'
desc: ''
updated: 1624886995531
created: 1624886952891
---

## Company updates

-   Stuff that’s coming out tomorrow:
    -   Week of enhancements:
        -   Timestamp no longer updates if you don’t update the note. Way less merge conflicts in a shared workspace!
        -   Bad frontmatter no longer crashes Dendron. We now differentiate between major and minor errors that don’t affect the whole system.
    -   Markdown export will be significant:
        -   We can now interface with Github teams/Gitlab teams where they export a folder structure of Markdown files.
    -   When you create a note, you can just start typing. Frontmatter _should_ now fold by default and then cursor moves till the end.
-   Trends
    -   Focusing on polishing existing features and improving user experience
        -   Lookup enhancements to make it easier to embed in other note-based navigation command
-   Future work:
    -   Challenge is currently adoption
        -   New users to get started
        -   Existing users to use the feature set.
    -   The work is less adding new features and more about helping users get value immediately and consistently while using Dendron.
    -   Dendron is currently multiple (huge) extensions.
        -   Pull more functionality into single extension.
        -   DeprecateMarkdown Preview Enhanced (MPE)
    -   Get value 10 minutes into using Dendron.
-   New folks!
    -   Jonathan
        -   Developer at Dendron, grew up in the US.
        -   Been working on the product for 3 weeks
        -   Excited by working on a product that he uses every day.
        -   Already shipped:
            -   Markdown export pod
            -   Workspace trust issues
            -   Random note
                -   Could use for project reviews and operations (to pick out stuff randomly)
        -   Working on:
            -   Brand new getting started experience.
-   Right-alignment
    -   [Improve refactor preview · Issue #740 · dendronhq/dendron (github.com)](https://github.com/dendronhq/dendron/issues/740)

## Questions

-   Is the Lookup used in insert note different than the main lookup code?
    -   In the main code base there are lookup v2/lookup v3.
    -   Lookup v3 is more performant and sane for adding more hooks.
        -   Used for refactor and insert note.
    -   Lookup v2 is being used in regular lookup.
        -   Blocked on feature parity.
    -   Trying to move everything over by end of July.
    -   Seeing different results for insert note is not expected. Normal lookup (trying to match a string that’s not starting from a parent) works but doesn’t work in insert note.
        -   Fuzzy search model isn’t really working for lookup v3
-   What’s the latest on the Seed Bank?
    -   Blog post coming tomorrow
    -   Initial implementation is ready - CLI only.
    -   Background - seed bank will index github repos with properly formatted vaults that anyone with Dendron can download.
        -   Currently have ~ 6 vaults. 1st party vaults for now but we plan to get community partners to help get more knowledge.
        -   Seed bank should be able to reference every piece of documentation we see or use in a readme.
-   Are we making any tactical changes given the goal of performance/smoothening of experience?
    -   Get a sense from the community of what existing features need to be better/easier to use.
    -   Clarity that we’re focusing on polishing our feature set so it’s easier to use rather than adding more features.
