---
id: i91p28yvj8LVTGVzrfPsK
title: Kevin Pr Comments
desc: ''
updated: 1635373250946
created: 1635371477249
---

## Summary
- [feat: task notes (create modifier & editor highlighting) by SeriousBug · Pull Request #1583 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1583)

## 2021.10.27

1. Can we have links to docs for this? 
1. If I type a character and then paste the link to a task note, it looks like that character is merged with the generated doc? https://www.loom.com/share/75751a0b7efd4d09ba59c7888b63fa2c
1. Can we also create an explicit command to make this easier to discover? (`eg. Dendron: Task Create`)? When the user chooses this option, it should bring up lookup with `selection2link` and `task note` modifiers activated
1. For status, can we default to show the one letter abbreviation with a `[ ]` around it? its visually easier to parse. see examples below:
    - short abbreviation
    ```md
    - [x] [[task1]]
    - [a] [[task2]]
    - [b] [[task3]]
    - [.] [[task4]]
    - [y] [[task5]]
    ```
    - current
    ```md
    - work in progress [[task1]]
    - done [[task2]]
    - blocked [[task3]]
    - done [[task4]]
    - blocked [[task5]]
    ```
4. In a separate PR - since we are making lots of use of the frontmatter folding, can we switch this so that the default is to not fold?


### response
> I changed the default configuration so that the task notes are creates as the child of the current note. One thing I left different was leaving the default name `task`. There are a few options here, and I'm not sure which one to go with:
> 
>     1. Leave the default name `task`, and leave the timestamp off. This is the current setup, and leads to the default quickpick name of `current.task`.
> 
>     2. Leave default name empty, and leave the timestamp off. This would lead to the default name being exactly the same as the note name.
> 
>     3. Leave the default name empty, but set a timestamp. This would lead to the default name being `current.2021.10.27.123123`.
> 
> 
> My concern is that the second option is very confusing, if the user selects "create task" then the quickpick value is identical with the current note name. If the user hits enter without typing anything, then nothing will happen since it opens the same note.
> 
> The reason why I went with the first option for now is that it at least allows the user to create a task note for the first time even if they immediately hit enter. This still can be confusing though, because we don't actually want the user to create a `current.task` note and we want them to type `current.something`.
> 
> I am personally in favor of having the third as the option, because it will always create a task note without having to type anything. Perhaps an alternative could be to have an adaptive approach where it defaults to a timestamp if nothing is selected, and does selection2link if something is selected.
> 
> Note: I see the tests are failing because I missed updating a snapshot, I'll update it after some discussion on this PR as to what option to go with.

Can we have the 1st option but do `{current}.task.`? This implies that the user should add a task. I just realized that we don't stop the user from creating `{current}.task.` as a note, we should also do a separate PR to prevent this from happening.

