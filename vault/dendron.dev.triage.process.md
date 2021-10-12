---
id: 06751374-7982-4df2-b30b-92b10aba733a
title: Process
desc: ''
updated: 1628730744458
created: 1619524509981
---

Triaging an issue is collaboratively performed by the issue bot, the Dendron maintainers and the larger Dendron community. Triaging an issue usually takes around one business day but may take longer, for example, when there's a large incoming rate or the area owners are not available. The goal of triaging is to provide you with a clear understanding of what will happen to your issue. For example, after your feature request was triaged you know whether we plan to tackle the issue or whether we'll wait to hear what the broader community thinks about this request.

From your perspective it's straightforward to understand whether or not your issue is triaged:

1. If the issue is labeled `status.triage-needed` ([query](https://github.com/dendronhq/dendron/labels/status.triage-needed)) it still needs to be triaged.
2. If not, the issue is considered triaged.

If you feel like there's ambiguity on a particular issue in our backlog, please mark it with status.triage-needed and leave a comment with details to help the maintainers out.

## Our Triaging Flow

An issue has three major states. They are easily identifiable:

| State                   | What your GitHub issue looks like                        |
| ----------------------- | -------------------------------------------------------- |
| Closed                  | matches the query `is:closed`                            |
| Pending Community Input | Has a `status.help-wanted` or `status.info-needed` label |
| Accepted                | Has a milestone assigned (that's not `Backlog`)          |

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

| Type                                                                          | Description                                                            |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`bug`](https://github.com/dendronhq/dendron/labels/type.bug)                 | the implementation of a feature is not correct                         |
| [`enhancement`](https://github.com/dendronhq/dendron/labels/type.enhancement) | Extension to a previously shipped feature. Minor functionality update. |
| [`feature`](https://github.com/dendronhq/dendron/labels/type.feature)         | New functionality                                                      |
| [`epic`](https://github.com/dendronhq/dendron/labels/type.epic)               | Umbrella issues representing significant customer impact               |
|                                                                               |

## Assigning Feature Areas

Each issue will also have an **area** label, each representing a stage in the customer journey. This is also loosely how we choose to work on backlog issues.

-   area.onboard
-   area.create
-   area.retrieve
-   area.structure
-   area.publish

## Assigning a Milestone

In addition to [milestones](https://github.com/dendronhq/dendron/milestones) representing our weekly iterations and releases such as **`v42`** (representing the release of Dendron version 0.42.0 ), we have two milestones with special meaning:

-   Issues assigned to **`Backlog`**: Our team is in favor of implementing the feature request/fix the issue. The issue is not yet assigned to a concrete iteration. If and when a Backlog item is scheduled for a concrete iteration depends on how well the issue aligns with our **[[roadmap|dendron.roadmap]]**. We review and update our roadmap at least every quarter. The Backlog helps us shaping our Roadmap but it is not the only source of input. Therefore, some Backlog items will be closed once it becomes clear that they do not align with our Roadmap.
-   Issues assigned to **`Up Next`**: Our team wants to implement the feature/fix the issue. The issue is on the short list to be assigned to a concrete iteration. Note: **`Up Next`** is used sparsely. More commonly, issues go from **`Backlog`** or Triage directly to concrete iterations.

## Asking for Help

We label **`Backlog`**issues, particularly feature requests, that we encourage the community to take up with `status.help-wanted`. If issues are suitable for beginners we may add the `size.small` label and add code pointers that help beginners to get started with a PR.

Please note, we will primarily accept PRs for issues that are accepted, i.e. have a milestone assigned (including `Backlog`).

## Type-specific Characteristics / Triaging

### Managing Feature Requests

Feature requests like all issues are a means of communication between all of us as members of the Dendron community. Thus, in principle, we could keep all feature requests open no matter what will happen to the feature they describe. Unfortunately, this makes it hard to understand what has a realistic chance to ever make it into the repository. We therefore close feature requests we cannot address while we assign feature requests we don't plan to address in the near-future to the **`Backlog`** milestone.

If you are the author of a feature request you might not like that we close or don't plan to address your request asap. But, be assured, we love all of your input. Please don't take personal offense when we close or assign the **`Backlog`/`status.help-wanted`** milestone to your issue :peace_symbol:. If you feel your feature request deserves to stay open, improve your use case and ping us or gather more up-votes (our community [in Discord](https://discord.gg/xrKTUStHNZ) is a good source of our prioritization).

### Up-voting a Feature Request

When we refer to "up-voting" a feature request, we specifically mean adding a GitHub `+1`/"👍" reaction to the issue description. In the GitHub UI this looks like so:
<img width="867" alt="GitHub UI for a issue with a +1 reaction" src="https://user-images.githubusercontent.com/8586769/87996982-b0568c80-caa8-11ea-87b8-a01371e6e338.png">

## Community Request On Planning (CROP for short)
![[community.crop]]

## [Lookup](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)

This section is both inspired by and borrows heavily from the following project:

-   [vscode triage process](https://github.com/microsoft/vscode/wiki/Issues-Triaging)
