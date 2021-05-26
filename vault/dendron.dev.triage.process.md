---
id: 06751374-7982-4df2-b30b-92b10aba733a
title: Process
desc: ""
updated: 1622032037564
created: 1619524509981
---

Triaging an issue is collaboratively performed by the issue bot, the Dendron maintainers and the larger Dendron community. Triaging an issue usually takes around one business day but may take longer, for example, when there's a large incoming rate or the area owners are not available. Goal of triaging is to provide you with a clear understanding of what will happen to your issue. For example, after your feature request was triaged you know whether we plan to tackle the issue or whether we'll wait to hear what the broader community thinks about this request.

From your perspective it's straightforward to understand whether or not your issue is triaged:

1. If the issue is labeled `status.triage-needed` ([query](https://github.com/dendronhq/dendron/labels/status.triage-needed)) it still needs to be triaged.
2. If not, the issue is considered triaged.

## Our Triaging Flow

An issue has three major states. They are easily identifiable:

| State             | What your GitHub issue looks like                     |
| ----------------- | ----------------------------------------------------- |
| Closed            | matches the query `is:closed`                         |
| Pending Community | matches the query `is: open label: status.help-wanted |
| Accepted          | has any milestone except `Backlog`                    |

## Closing Issues

We close issues for the following reasons:

| Reason                                               | Label                |
| ---------------------------------------------------- | -------------------- |
| The issue is obsolete or already fixed.              |                      |
| We didn't get the information we need within 7 days. | `status.info-needed` |
| It's a duplicate of another issue.                   | `status.duplicate`   |
| What is described is the designed behavior.          | `status.by-design`   |
| The issue is tracked in a repository we rely on.     | `status.upstream`    |

We close issues by assigning a label, adding a comment and closing the issue.

## Requesting Information

If an issue misses information that we need to understand the issue, we assign the `status.info-needed` label.

[This bot](https://github.com/dendronhq/dendron/blob/master/.github/no-response.yml) is monitoring all issues labeled `status.info-needed`. If we don't receive the needed information within 7 days the bot closes the issue.

## Categorizing Issues

Each issue must have a **type** label.

| Type                                                                         | Description                                                            |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`bug`](https://github.com/dendronhq/dendron/labels/type.bug)                | the implementation of a feature is not correct                         |
| [`enhancement](https://github.com/dendronhq/dendron/labels/type.enhancement) | Extension to a previously shipped feature. Minor functionality update. |
| [`feature`](https://github.com/dendronhq/dendron/labels/type.feature)        | New functionality                                                      |
| [`epic`](https://github.com/dendronhq/dendron/labels/type.epic)              | issues related to our engineering system or our processes              |

We also use the following **type** labels, although they don't directly play a role in the triaging process as they are usually assigned to issues created by our team or by tooling.

| Type                                                                                      | Description                                     |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`iteration-plan`](https://github.com/microsoft/vscode/labels/iteration-plan)             | a plan tracking the work for an iteration       |
| [`iteration-plan-draft`](https://github.com/microsoft/vscode/labels/iteration-plan-draft) | a draft of an iteration plan                    |
| [`plan-item`](https://github.com/microsoft/vscode/labels/plan-item)                       | an issue to organize and structure planned work |
| [`testplan-item`](https://github.com/microsoft/vscode/labels/testplan-item)               | an issue describing how to test a feature       |
| [`endgame-plan`](https://github.com/microsoft/vscode/labels/endgame-plan)                 | a plan tracking the endgame of an iteration     |
| [`perf-profile`](https://github.com/microsoft/vscode/labels/perf-profile)                 | a issue representing a performance profile      |

## Assigning Feature Areas

Each issue must have a **feature area** label. Feature area labels are dark blue. See the list of feature area labels [here](https://github.com/Microsoft/vscode/wiki/Feature-Areas).

## Assigning a Milestone

In addition to milestones representing our iterations and releases such as **`November 2019`**, we have three milestones with special meaning:

-   Issues assigned to **`Backlog`**: Our team is in favor of implementing the feature request/fix the issue. The issue is not yet assigned to a concrete iteration. If and when a Backlog item is scheduled for a concrete iteration depends on how well the issue aligns with our **[Roadmap](https://github.com/microsoft/vscode/wiki/Roadmap)**. We review and update our roadmap at least once every 12 months. The Backlog helps us shaping our Roadmap but it is not the only source of input. Therefore, some Backlog items will be closed as **out-of-scope** once it becomes clear that they do not align with our Roadmap.
-   Issues assigned to **`On Deck`**: Our team wants to implement the feature/fix the issue. The issue is on the short list to be assigned to a concrete iteration. Note: **`On Deck`** is used sparsely. More commonly, issues go from **`Backlog`** directly to concrete iterations.
-   Issues assigned to **`Backlog Candidates`**: Our team does not intend to implement the feature request/fix the issue but wants the community to weigh in before we make our final decision. See also [Managing Feature Requests](#managing-feature-requests).

## Important Issues

-   We assign the `important` label to issues that
    -   result in data loss
    -   a breakage of extension
    -   critical security, performance issues
    -   UI issue that makes a feature unusable

## Asking for Help

We label **`Backlog`**issues, particularly feature requests, that we encourage the community to take up with `help-wanted`. If issues are suitable for beginners we may add the `good-first-issue` label and we add code pointers that help beginners to get started with a PR.

Sometime, we get issues that we can't or don't have the time to reproduce due to the complexity or time requirements of the setup but that we indeed suspect to be issues. We label those issues with `investigation-wanted`. What we are looking for is help in reproducing and analyzing the issue. In the best of all worlds we receive a PR from you. :smiley:

Please note, we only accept PRs for issues that are accepted, i.e. have a milestone assigned that is not **`Backlog Candidates`**.

## Type-specific Characteristics / Triaging

### Managing Feature Requests

Feature requests like all issues are a means of communication between us and our community as well as among the members of the community. Thus, in principle, we could keep all feature requests open no matter what will happen to the feature they describe. Unfortunately, this makes it hard for you to understand what has realistic chances to ever make it into the repository. We therefore close feature requests we cannot address with `out-of-scope` while we assign feature requests we don't plan to address but want to give you time to weigh in to the **`Backlog Candidates`** milestone.

If you are the author of a feature request you might not like that we close or don't plan to address your request. It might even feel like a slap in your face. We understand that. All of us have been there - in this project or others we have contributed to. So, be assured, we love all of your input. Don't take personal offense when we close or assign the **`Backlog Candidates`** milestone to your issue :peace_symbol:. If you feel your feature request deserves to stay open, improve your use case and ping us or gather more up-votes.

This is our decision making tree. More details below.

<!-- ```graphviz
digraph finite_state_machine {

    rankdir=TD;
    size="12,8"

    Inline [ shape = box, label = "Does it match our general philosophy?" ]
    Affordable [ shape = box, label = "Can we afford to implement and maintain it?" ]
    OnRoadMap [ shape = box, label = "Does it align with our roadmap?" ]
    ForwardLooking [ shape = box, label = "We love it nevertheless!" ]
    CommunityInterest[ shape = box, label = "Already more than 20 upvotes?" ]
    ReviewThreashold[ shape = box, label = "More than 20 upvotes in 60 days?" ]
    Received [ shape = circle ]
    Closed [ shape = doublecircle, color = red ]
    Accepted [ shape = doublecircle, color = green ]
    CommunityReview [ shape = circle , color = blue ]

    Received -> Inline
    Inline -> Closed [ label = "no" ]
    Inline -> Affordable [ label = "yes" ]
    Affordable -> Closed [ label = "no" ]
    Affordable -> OnRoadMap [ label = "yes" ]
    OnRoadMap -> Accepted [ label = "yes" ]
    OnRoadMap -> ForwardLooking [ label = "no" ]
    ForwardLooking -> Accepted [ label = "yes" ]
    ForwardLooking -> CommunityInterest [ label = "no" ]
    CommunityInterest -> Accepted [ label = "yes" ]
    CommunityInterest -> CommunityReview [ label = "no" ]
    CommunityReview -> ReviewThreashold [ ]
    ReviewThreashold -> Accepted [ label = "yes" ]
    ReviewThreashold -> Closed [ label = "no" ]
    { rank = same; CommunityReview Accepted}
}
``` -->

![gh-decision-tree](https://user-images.githubusercontent.com/4674940/67361393-5e82d500-f51d-11e9-955a-6a14c00ba390.png)

To put the diagram in words:

1. Does the proposal match with our general product direction? For example, VS Code is a light-weight extensible text editor and as such we are not interested in turning it into a platform to implement a web browser.

If the answer is `no` we close the issue as `out-of-scope`.

2. Can our team afford to implement the feature? I.e. are the direct and the opportunity costs to implement the functionality and maintain it going forward reasonable compared to the size of our team?

If the answer is `no` we close the issue as `out-of-scope`.

3. Does the functionality described in the feature request have any reasonable chance to be implemented in the next 24 months? 24 months is longer than our [roadmap](https://github.com/Microsoft/vscode/wiki/Roadmap) which outlines the next 6-12 months. Thus, there is some crystal ball reading on our part, and we'll most likely keep more feature requests open than what we can accomplish in 24 months.

If the answer is `yes` we assign the issue to the **`Backlog`** milestone.

4. Do we think the feature request is bold and forward looking and would we like to see it be tackled at some point even if it's further out than 24 months? (Clearly, this is quite subjective.)

If the answer is `yes` we assign the issue to the **`Backlog`** milestone.

5. Has the community at large expressed interest in this functionality? I.e. has it gathered more than 20 up-votes.

If the answer is `yes` we assign the issue to the **`Backlog`** otherwise the **`Backlog Candidates`** milestone.

A bot monitors the issues assigned to **`Backlog Candidates`**. If a feature request surpasses the 20 up-votes, the bot removes the **`Backlog Candidates`** milestone and adds the **`Backlog`** milestone. If an issue is assigned to the **`Backlog Candidates`** milestone for more than 60 days, the bot will close the issue.

### Up-voting a Feature Request

When we refer to "up-voting" a feature request, we specifically mean adding a GitHub `+1`/"👍" reaction to the issue description. In the GitHub UI this looks like so:
<img width="867" alt="GitHub UI for a issue with a +1 reaction" src="https://user-images.githubusercontent.com/8586769/87996982-b0568c80-caa8-11ea-87b8-a01371e6e338.png">

### Won't fix Bugs

We close bugs as `wont-fix` if there is a negative cost-benefit balance. It's not that we don't care about users who are affected by an issue but, for example, if the fix is so complex that despite all of our tests we risk regressions for many users, fixing is not a reasonable choice. When we close a bug as `wont-fix` we'll make our case why we do so.

### Upstream Issue

We label some issues as `upstream`. Upstream means that the issue is in a package or library that we consume and that we cannot fix independently. We close an `upstream` issue if we can establish a clear traceability link between the issue in our repository and an issue in the issue tracker of the package or library. In some cases this is not possible, for example, we might have identified an issue as a Chromium issue but Chromium does not accept the issue yet because the repro case is too complex.
