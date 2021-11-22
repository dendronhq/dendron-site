---
id: f143ca38-dcc6-4cd3-b84b-997aec1160ef
title: Rfc
desc: ''
updated: 1636961583297
created: 1605539111635
nav_exclude: true
---

#repot

This is the place to propose and track major upcoming changes to Dendron and
other related projects. It also is a great place to learn about the current and
future state of the system and to discover projects for contribution.

[dendron]: https://github.com/dendronhq/dendron

**Jump to**: [What is an RFC?](#what-is-an-rfc) |
[When to submit?](#when-to-submit-an-rfc) | [RFC States](#rfc-states) |

<!--BEGIN_TABLE-->

| Status                | Title                                                                                                    | Owner                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ✅ done               | [7 - Graph Rework](https://wiki.dendron.so/notes/c998c642-a748-4f77-9285-cfec35330251.html)              | [@HFellerhoff](https://github.com/hfellerhoff)   |
| ✅ done               | [10 - Block References](https://wiki.dendron.so/notes/95f7193b-9940-42ba-841f-3e2a4d937ba3.html)         | [@SeriousBug](https://github.com/SeriousBug)     |
| ✅ done               | [1 - Native Preview Experience](https://wiki.dendron.so/notes/17c61d62-f92e-4002-b8fe-9c05686e4bf9.html) | [@kevin](https://github.com/kevinslin)           |
| ✅ done               | [16 - Better Tags](https://wiki.dendron.so/notes/NT1cFX6DRkTnzcWwduj2I.html)                             | [@SeriousBug](https://github.com/SeriousBug)     |
| 1️⃣ phase one done     | [11 - Better Tree View](https://wiki.dendron.so/notes/ba8cf4c5-6254-4eca-8072-8001ca5afda7.html)         | [@kevin](https://github.com/kevinslin)           |
| 1️⃣ phase one done     | [14 - Seed Registry](https://wiki.dendron.so/notes/4039fc46-06b2-4f83-b817-fc490bafbcb3.html)            | [@kevin](https://github.com/kevinslin)           |
| 1️⃣ phase one done     | [18 - Add Note Index](https://wiki.dendron.so/notes/6TOh3VApIUfap7c3.html)                               | [@hikchoi](https://github.com/cerebrarium)       |
| 1️⃣ phase one done     | [9 - Note Lifecycle Plugins](https://wiki.dendron.so/notes/d2f8fe67-36c7-4600-b745-c22bdcb5b2cf.html)    | [@kevin](https://github.com/kevinslin)           |
| 1️⃣ phase one done     | [2 - Managed Publishing](https://wiki.dendron.so/notes/ae4a0c98-e2ea-47e0-8a20-016eba3424be.html)        | [@kevin](https://github.com/kevinslin)           |
| 👷 implementing       | [22 - Queries](https://wiki.dendron.so/notes/O4f9yfDoO7E7gRRDeBeCh.html)                                 | [@SeriousBug](https://github.com/SeriousBug)     |
| 👷 implementing       | [13 - Todo Notes](https://wiki.dendron.so/notes/716e2699-42e1-44bd-9b97-124f03173ddc.html)               | [@kevin](https://github.com/kevinslin)           |
| 👩‍🌾 community issue    | [20 - Integrated Space Repetition](https://wiki.dendron.so/notes/X2Zn2H89eBZrsj7Of8LLm.html)             | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [12 - Schema Improvements](https://wiki.dendron.so/notes/8bc80164-6436-4c77-8077-7842f53a4a23.html)      | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [3 - Standalone Vaults](https://wiki.dendron.so/notes/ceca23ee-6181-4fa6-9724-9943433c6e96.html)         | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [4 - Richer Templating](https://wiki.dendron.so/notes/7117a023-f090-47f5-a104-5968fc256c23.html)         | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [5 - Publishing Registry](https://wiki.dendron.so/notes/21b2e152-95f7-4904-8a8e-8d4d0b8c950c.html)       | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [6 - Design System](https://wiki.dendron.so/notes/d7597569-e3dd-4e56-b719-0f97f8e93030.html)             | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [8 - Multi-publish](https://wiki.dendron.so/notes/8b3bfb16-8330-4a78-85cc-45581c319450.html)             | [@kevin](https://github.com/kevinslin)           |
| 💡 proposed           | [20 - Integrated Space Repetition](https://wiki.dendron.so/notes/X2Zn2H89eBZrsj7Of8LLm.html#why)         | [@imalightbulb](https://github.com/imalightbulb) |
| 💡 proposed           | [28 - Notifications](https://wiki.dendron.so/notes/o5AQmw9bsPQspYuTjdmnK.html)                           | [@SeriousBug](https://github.com/SeriousBug)     |
| draft                 | [Browser Based Dendron]()                                                                                | [@kpats](https://github.com/kpathakota)          |

## What is an RFC?

An RFC is a document that proposes and details a change or addition to Dendron
and other related tooling. It is also a process for reviewing and discussing the
proposal and tracking its implementation. "Request for Comments" means a request
for discussion and oversight about the future of Dendron from contributors and
users. It is an open forum for suggestions, questions, and feedback.

The process is intended to be as lightweight and reasonable as possible for the
present circumstances. As usual, we are trying to let the process be driven by
consensus and community norms, not impose more structure than necessary.

The RFC process itself is subject to changes as dictated by the core team and
the community. Proposals can include proposed changes to the RFC process itself
to better serve contributors.

## When to submit an RFC?

You should consider using this process if you intend to make "substantial"
changes to [Dendron](https://github.com/dendronhq/dendron) or related tools.
Some examples that would benefit from an RFC are:

-   Major new features where the desired exprience is ambiguous.
-   Any change to existing APIs that could break existing code.
-   The removal of existing features or public APIs.
-   Changes to the documented contribution workflow.
-   Features that cross multiple construct libraries.
-   Additions or changes to framework capabilities.

The RFC process is a great opportunity to get more eyeballs on your proposal
before it becomes a part of a released version of Dendron. Quite often, even
proposals that seem "obvious" can be significantly improved once a wider group
of interested people have a chance to weigh in.

The RFC process can also be helpful to encourage discussions about a proposed
feature as it is being designed, and incorporate important constraints into the
design while it's easier to change, before the design has been fully
implemented.

If you submit a pull request to implement a new major feature without going
through the RFC process, it may be closed with a polite request to submit an RFC
first.

Some changes do not require an RFC:

-   Bugfixes for known issues.
-   Additions only likely to be _noticed by_ other developers of Dendron, invisible
    to end product users.

If you're not sure whether your change requires an RFC, feel free to create an
issue and ask.

## RFC Process

In short, to get a major feature added to Dendron, one usually writes an RFC as
a markdown file and gets it approved and mergd into the Dendron-site. At that
point the RFC is 'in review' and may be implemented.

1. [Create a **tracking issue**](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=work-item.md&title=)
   for the proposed feature if one doesn't already exist. If a tracking issue
   already exists, make sure to update it and assign it to let others know
   you're working on a proposal. tracking issue number and `<my-feature>` is the
   rfc title.
2. Fill in an RFC under the rfc.\* hierarchy on dendron-site.  Use the [[Rfc template|templates.rfc]] when creating a RFC. We recommend that you add this repository to your workspace by following the instructions [[here|dendron.topic.seed-bank.quickstart#adding-a-seed-to-an-existing-workspace]].
3. Submit a **pull request** with the title `RFC: ### <title>` where ### is the
   tracking issue number and title is the name of the proposal. As a pull
   request the RFC will receive design feedback from the core team and the
   larger community, and the author should be prepared to make revisions in
   response.
4. Update the tracking issue with a link to the RFC PR.
5. **Promote** your RFC amongst stakeholders via Discord. Build consensus and integrate feedback. RFCs that have broad support are much more likely to make progress than those that don't receive any comments. ^Y6KpVpRVS0S9
6. Eventually, the team will decide whether the RFC is a candidate for inclusion
   in a future release of Dendron.
7. RFCs that are candidates for inclusion will enter a "**final comment
   period**" lasting 3 calendar days. The beginning of this period will be
   signaled by a team member adding a comment and label on the RFCs pull
   request.
8. An RFC can be modified based upon feedback from the team and community.
   Significant modifications may trigger a new final comment period. An RFC can
   also be modified after it has been merged and approved, in which case a new
   PR will be submitted with the modification, like any other code.
9. An RFC may be **rejected** by the team after public discussion has settled
   and comments have been made summarizing the rationale for rejection. A member
   of the team will then close the PR and issue.
10. An RFC may be **accepted** at the close of its final comment period. A team
    member will merge the RFCs associated pull request, at which point the RFC
    will become 'approved'.
11. At some point, someone will pick up the RFC for implementation. For major
    features this usually requires devising a detailed implementation plan. To
    that end, submit an **additional PR** on the RFC doc that either fills in
    the "Implementation Plan" section or references a separate document or
    GitHub Project Board which includes the plan.
12. Once this PR is approved, the RFC will move to the 'implementing' state.
    Usually we track implementation using GitHub projects.
13. Once implementation is complete, the RFC moves to 'done', and it's issue is
    closed.

> If the submitter is someone from our community (i.e., not core team member), a
> core team member will be assigned to 'shepherd' each proposal. They will
> generally be the ones updating the RFCs state in the tracking issue as it
> moves through the process. They can decide when a final comment period is
> triggered.

## RFC States

1. **💡 proposed** - A tracking issue has been created with a basic outline of the proposal.
1. **✍️ review** - An RFC document has been written with a detailed design and a PR is under review. At this point the PR will be assigned a **shepherd** from the core team.
<!-- 3. **⏰ final comments** - The shepherd has approved the RFC PR, and announces
   that the RFC enters a period for final comments before it will be approved
   (~1wk). At this stage, if major issues are raised, the RFC may return to
   **Review**. -->
4. **👍 approved** - The RFC PR is approved and merged to `master`, and the RFC
   is now ready to be implemented.
5. **🗺️ planning** - A PR is created with the **Implementation Plan** section of
   the RFC.
6. **👷 implementing** - Implemetation plan is approved and merged and the RFC
   is actively being implemented.
7. **1️⃣ phase one done** - Implementation for phase 1/2/3 is complete. These phases will be determined in the RFC and a single RFC can have at maximum 3 phases.
8. **✅ done** - Implementation is complete and merged across appropriate
   repositories.
9. **👎 rejected** - During the review period, the RFC may be rejected and then
   it will be marked as such.
1. **👩‍🌾 community issue** - This RFC is accepted but is not currently part of our roadmap. We will leave this as a community project for gardeners that are interested in taking this on. 

---

Dendron's RFC process
[looks up](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)
to [AWS CDK RFC process], [Yarn RFC process], [Rust RFC process], [React RFC
process], and [Ember RFC process]

[aws cdk rfc process]: https://github.com/aws/aws-cdk-rfcs
[yarn rfc process]: https://github.com/yarnpkg/rfcs
[rust rfc process]: https://github.com/rust-lang/rfcs
[react rfc process]: https://github.com/reactjs/rfcs
[ember rfc process]: https://github.com/emberjs/rfcs
