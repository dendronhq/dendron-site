---
id: BgsDOw0SLLBAmMS0vpyah
title: Team Task Management
desc: ''
updated: 1636673182863
created: 1635907417724
published: false
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4AN--0
url: 'https://github.com/dendronhq/dendron/discussions/1655'
author: 'https://github.com/dendron-bot'
---

## Goals

Better automation of tasks for the Dendron Team

## Context

Creating tasks inside Dendron is powerful and flexible. Its easy to link to existing issues and reference inside other tasks. 
We've reached a point now where this is becoming hard to scale, with over a dozen full time people and close to a thousand tasks. 
This RFC looks into improvements in pods as well as task notes to evolve Dendron into a 

## Proposal

1. All items we're tracking should be available as a github issue
2. We should use task notes for all tasks internally 
3. We should use the github pod to update and sync tasks to github
4. We should use github projects [^github-project] to provide higher level organization to our tasks
    - [sample board](https://github.com/orgs/dendronhq/projects/5/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Milestone%22%5D)

## Details

1. All tasks should belong in one of the following areas:
- sprint: tasks we are doing this week
- epic: tasks we are doing this month
- backlog: tasks we are doing this calendar year (we'll count all backlog items this year as both 2021 and 2022)
- icebox: tasks we have no immediate plans to do

## Tasks
- [ ] [[36 Pods V2|dendron://dendron.dendron-site/dendron.rfc.36-pods-v2]]
- [ ] task notes method for marking task as done
- [ ] task note expose hook to run custom action when the status changes ^MSZbKVmb0c6S
    - run pod: run a pod that has access to metadata from task note
    - append to: add link to task note to another note
- [ ] task note support archiving a task ^MFOcdUFJnt1Y
- [ ] task note support to make methods work with a selection (eg. highlighting 5 tasks while running **task archive** should archive all 5 tasks) ^XEk2lz8CrMK7
- [ ] task note support convert to task method ^d3jvrN81ig7t
    - adds task note metadata to existing task
- [ ] github pod support ability to create comments ^IhpPQX5pKLON

## Example

### Sprint Planning

#### Planning
1. When planning tasks, create tasks for individual team members and add it to the [[Weekly Journal|dendron://dendron.handbook/handbook.sop.weekly-journal]] ^FjqjKTGhP02x
1. Tasks should be created with the following metadata
    ```yml
    # optional, only fill in if high priority
    prio:
    # github milestone
    milestone: 
    # team member that is responsible
    owner:
    ```
1. During sprint planning, the team lead will copy all tasks and run `Pod Export: Github`  [^export-clipboard] to create github issues for the weekly tasks ^TrXlwNFyZn1w

#### Execution
1. As tasks get completed, individual team members can update the status of the issue
    - eg.
    ```yml
    status: DONE
    ```
1. To update the project, the can be in the task note and run `Pod Export: Github` [^export-one] to update the task

#### Wrap Up - Phase I
1. After we have released the weekly build, all task notes should be marked done
1. When task notes are marked done, [[task note automation|#^MSZbKVmb0c6S]] should do the following ^MLcPWZerfWHO
    - add the following comment using the [[github pod|#^IhpPQX5pKLON]]:
        - NOTE: the milestone is available in the task note metadata
        ```md
        this should be fixed in v{{fm.milestone}} of Dendron. please post here if not, otherwise this issue will auto close in 4 days
        ```
    - add the `status.needs-info` tag to the issue

#### Wrap Up - Phase II
1. At the end of the auto close period, tasks should either be closed or have additional comments
1. The team lead goes back to the [[weekly journal|#^FjqjKTGhP02x]] created at the onset of the sprint, [[highlights|#^XEk2lz8CrMK7]] all tasks, and [[archives|#^MFOcdUFJnt1Y]] them
1. Tasks that have additional comments and need to be addressed go through the triage process 

### Executing Queries

The nice thing about having tasks syncwith github projects [^github-project] is that it supports filters and queries on tasks.
It can answer questions like:

- all tasks that are assigned to me that are due this week/month/year
- see all tasks grouped by status
- see all tasks grouped by milestone
- sort all tasks by status

### Backlog Grooming

1. Go through tasks using github project
1. Update milestone, status, assignment, etc
1. Run `Pod Import: Github` to sync changes back into workspace


### Handling User Submitted Issues

1. As part of weekly planning, oncall imports all new issues using the github pod. They can work with the team lead to assign status labels to all tasks

### Backfill - migrating existing tasks to this system

1. Start by only adding tasks for current sprint into the project
1. As we gain more confidence in the system, start [[converting|#^^d3jvrN81ig7t]] tasks from backlog

## FAQ

### Isn't this overly dependent on github projects? Its beta software and could change

The source of truth for all tasks is still Dendron. Github projects is just the presentation layer as well as a convenient way of bulk editing and traiging tasks. If it ever goes away or we decide on something different, we just have to change the github projects specific bits into something else

### What about private tasks or projects?

We can either publish tasks into a private repo with a private project or publish to a different tool like airtable. 

### What about tracking bigger projects?
 
Create a project label and create a custom github project that filters on the project label

## Related
- [[Task Sources|dendron://private/dendron.ref.tasks#task-sources]]

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/1655

[^export-clipboard]: [[36 Pods V2|dendron://dendron.dendron-site/dendron.rfc.36-pods-v2#^k2tGQOBXQrOK]]
[^export-one]: [[36 Pods V2|dendron://dendron.dendron-site/dendron.rfc.36-pods-v2#^NWDbwthvJ0xm]]
[^github-project]: [About projects (beta) - GitHub Docs](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects)
