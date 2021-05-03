---
id: f143ca38-dcc6-4cd3-b84b-997aec1160ef
title: Rfc
desc: ""
updated: 1620067833689
created: 1605539111635
---

# Dendron RFCs

This repo is a place to propose and track major upcoming changes to Dendron and
other related projects. It also is a great place to learn about the current and
future state of the system and to discover projects for contribution.

[dendron]: https://github.com/dendronhq/dendron

**Jump to**: [What is an RFC?](#what-is-an-rfc) |
[When to submit?](#when-to-submit-an-rfc) |
[RFC Process](#rfc-states) |

<!--BEGIN_TABLE-->

| \#                                                                            | Title (Linked to Discussion)                                                   | Owner                                          | Status      |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- | ----------- |
| [7](https://wiki.dendron.so/notes/c998c642-a748-4f77-9285-cfec35330251.html)  | [Graph Rework](https://github.com/dendronhq/dendron/discussions/615)           | [@HFellerhoff](https://github.com/hfellerhoff) | ✍️ review   |
| [10](https://wiki.dendron.so/notes/95f7193b-9940-42ba-841f-3e2a4d937ba3.html) | [Block References](https://github.com/dendronhq/dendron/discussions/685)       | [@SeriousBug](https://github.com/SeriousBug)   | ✍️ review   |
| [9](https://wiki.dendron.so/notes/d2f8fe67-36c7-4600-b745-c22bdcb5b2cf.html)  | [Note Lifecycle Plugins](https://github.com/dendronhq/dendron/discussions/680) | [@kevin](https://github.com/kevinslin)         | ✍️ review   |
| [1](https://wiki.dendron.so/notes/17c61d62-f92e-4002-b8fe-9c05686e4bf9.html)  | [Dendron: Next Edition]()                                                      | [@kevin](https://github.com/kevinslin)         | 💡 proposed |
| [3](https://wiki.dendron.so/notes/ceca23ee-6181-4fa6-9724-9943433c6e96.html)  | [Standalone Vaults]()                                                          | [@kevin](https://github.com/kevinslin)         | 💡 proposed |
| [4](https://wiki.dendron.so/notes/7117a023-f090-47f5-a104-5968fc256c23.html)  | [Richer Templating]()                                                          | [@kevin](https://github.com/kevinslin)         | 💡 proposed |
| [5](https://wiki.dendron.so/notes/21b2e152-95f7-4904-8a8e-8d4d0b8c950c.html)  | [Publishing Registry]()                                                        | [@kevin](https://github.com/kevinslin)         | 💡 proposed |
| [6](https://wiki.dendron.so/notes/d7597569-e3dd-4e56-b719-0f97f8e93030.html)  | [Design System]()                                                              | [@kevin](https://github.com/kevinslin)         | 💡 proposed |
| [8](https://wiki.dendron.so/notes/8b3bfb16-8330-4a78-85cc-45581c319450.html)  | [Multi-publish]()                                                              | [@kevin](https://github.com/kevinslin)         | 💡 proposed |
| [2](https://wiki.dendron.so/notes/ae4a0c98-e2ea-47e0-8a20-016eba3424be.html)  | [Managed Publishing]()                                                         | [@kevin](https://github.com/kevinslin)         | ✅ done     |

## What is an RFC?

An RFC is a document that proposes and details a change or addition to the CDK,
jsii, and other related tooling. It also is a process for reviewing and
discussing the proposal and tracking its implementation. "Request for Comments"
means a request for discussion and oversight about the future of the CDK and
jsii from contributors and users. It is an open forum for suggestions,
questions, and feedback.

The process is intended to be as lightweight and reasonable as possible for the
present circumstances. As usual, we are trying to let the process be driven by
consensus and community norms, not impose more structure than necessary.

The RFC process itself is subject to changes as dictated by the core team and
the community. Proposals can include proposed changes to the RFC process itself
to better serve contributors.

## When to submit an RFC?

You should consider using this process if you intend to make "substantial"
changes to [AWS CDK](https://github.com/aws/aws-cdk),
[jsii](https://github.com/aws/jsii), or related tools. Some examples that would
benefit from an RFC are:

-   Any change to existing APIs that could break existing code.
-   The removal of existing features or public APIs.
-   The introduction of new idiomatic usage or conventions, even if they do not
    include code changes to CDK or jsii themselves.
-   Changes to the documented contribution workflow.
-   Features that cross multiple construct libraries.
-   Additions or changes to framework capabilities.
-   Additions or changes to formal specifications like cloud assembly, tree.json,
    jsii, etc.

The RFC process is a great opportunity to get more eyeballs on your proposal
before it becomes a part of a released version of CDK/jsii. Quite often, even
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
-   Additions only likely to be _noticed by_ other developers of CDK/jsii, invisible
    to users of CDK/jsii.
-   Additions of missing L1 or L2 constructs. Unless the service and/or constructs
    are especially complex or intentionally diverge from existing api design best
    practices.

If you're not sure whether your change requires an RFC, feel free to create an
issue and ask.

## RFC Process

In short, to get a major feature added to CDK/jsii, one usually writes an RFC
as a markdown file and gets it approved and merged into the RFC repo. At that point the RFC is
'approved' and may be implemented into CDK/jsii.

1. [Create a **tracking
   issue**](https://github.com/awslabs/aws-cdk-rfcs/issues/new?template=tracking-issue.md)
   for the proposed feature if one doesn't already exist. Use the tracking issue
   template as a guide. If a tracking issue already exists, make sure to update
   it and assign it to let others know you're working on a proposal.
2. Fork the [RFC repo](https://github.com/awslabs/aws-cdk-rfcs).
3. Copy `0000-template.md` to `text/<rfc#>-<my-feature>.md` where <rfc#> is the
   tracking issue number and `<my-feature>` is the rfc title.
4. Fill in the RFC. Put care into the details: **We welcome all honest efforts
   to contribute.**.
5. Submit a **pull request** with the title `RFC: ### <title>` where ### is the
   tracking issue number and title is the name of the proposal. As a pull
   request the RFC will receive design feedback from the core team and the
   larger community, and the author should be prepared to make revisions in
   response.
6. Update the tracking issue with a link to the RFC PR.
7. **Advertise** your RFC amongst stakeholders via social channels (e.g.
   twitter) and your team. Build consensus and integrate feedback. RFCs that
   have broad support are much more likely to make progress than those that
   don't receive any comments.
8. Eventually, the team will decide whether the RFC is a candidate for inclusion
   in CDK/jsii.
9. RFCs that are candidates for inclusion in CDK/jsii will enter a "**final comment
   period**" lasting 3 calendar days. The beginning of this period will be signaled
   by a team member adding a comment and label on the RFCs pull request.
10. An RFC can be modified based upon feedback from the team and community.
    Significant modifications may trigger a new final comment period. An RFC can
    also be modified after it has been merged and approved, in which case a new
    PR will be submitted with the modification, like any other code.
11. An RFC may be **rejected** by the team after public discussion has settled
    and comments have been made summarizing the rationale for rejection. A
    member of the team will then close the PR and issue.
12. An RFC may be **accepted** at the close of its final comment period. A team
    member will merge the RFCs associated pull request, at which point the RFC
    will become 'approved'.
13. At some point, someone will pick up the RFC for implementation. For major
    features this usually requires devising a detailed implementation plan. To
    that end, submit an **additional PR** on the RFC doc that either fills in
    the "Implementation Plan" section or references a separate document or
    GitHub Project Board which includes the plan.
14. Once this PR is approved, the RFC will move to the 'implementing' state.
    Usually we track implementation using GitHub projects.
15. Once implementation is complete, the RFC moves to 'done', and it's issue is
    closed.

> If the submitter is someone from our CDK community (i.e., not core team member),
> a core team member will be assigned to 'shepherd' each proposal. They will
> generally be the ones updating the RFCs state in the tracking issue as it moves
> through the process. They can decide when a final comment period is triggered.
>
> On the other hand, if the submitter is a core team member, they will identify
> another core team member, with consent, as their 'shepherd'. The shepherd would
> be the first contact for brainstorming, process and reviews. The core team
> would defer to the shepherd to do the first few rounds of reviews, after which
> the rest of the team should be engaged.

## RFC States

1. **💡 proposed** - A tracking issue has been created with a basic outline of the
   proposal.
2. **✍️ review** - An RFC document has been written with a detailed design and a PR is
   under review. At this point the PR will be assigned a **shepherd** from the core
   team.
3. **⏰ final comments** - The shepherd has approved the RFC PR, and announces
   that the RFC enters a period for final comments before it will be approved (~1wk).
   At this stage, if major issues are raised, the RFC may return to **Review**.
4. **👍 approved** - The RFC PR is approved and merged to `master`, and the RFC is now
   ready to be implemented.
5. **🗺️ planning** - A PR is created with the **Implementation Plan** section of the RFC.
6. **👷 implementing** - Implemetation plan is approved and merged and the RFC is actively
   being implemented.
7. **✅ done** - Implementation is complete and merged across appropriate
   repositories.
8. **👎 rejected** - During the review period, the RFC may be rejected and then it will
   be marked as such.

---

Dendron's RFC process [looks up](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup) to [AWS CDK RFC process], [Yarn RFC process], [Rust
RFC process], [React RFC process], and [Ember RFC process]

[aws cdk rfc process]: https://github.com/aws/aws-cdk-rfcs
[yarn rfc process]: https://github.com/yarnpkg/rfcs
[rust rfc process]: https://github.com/rust-lang/rfcs
[react rfc process]: https://github.com/reactjs/rfcs
[ember rfc process]: https://github.com/emberjs/rfcs
