---
id: 4e14f66f-4df2-4414-8e99-f37159de0f61
title: Bots
desc: ''
updated: 1619022670407
created: 1618994983367
---

In order for us to maintain triage hygiene, we've enabled bots in the Dendron repos.

## No Response Bot

Sometimes an issue gets filed that needs more information just to be actionable by our repo maintainers. In this case, please tag the issue with `status.info-needed`. This will notify the no response bot that if we don't hear back from the original filer for a week, it can close the issue with a comment.

Please see the [config file](https://github.com/dendronhq/dendron/blob/master/.github/no-response.yml) for the latest parameters we're using.

<!-- ## Stale issue bot

Every repo starts to accumulate cruft which eventually slows down planning and execution since we're not sure if issues still need work. The stale issue bot is intended to identify issues that haven't had any activity for `x` days and will allow the triage team to decide whether they're still valid. Note: there's a cooldown period between an issue marked "won't fix" and when it's actually closed. This gives us about a week to go through and decide if the issue continues to be actionable.

Please see the [config file](https://github.com/dendronhq/dendron/blob/master/.github/stale.yml) for the latest parameters we're using.
 -->
