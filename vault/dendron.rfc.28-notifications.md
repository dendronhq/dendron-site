---
id: o5AQmw9bsPQspYuTjdmnK
title: 28 Notifications
desc: ''
updated: 1631509847396
created: 1631508255078
---

## Goals

Allow users of shared vaults to send notifications to each other through Dendron.

## Context

In vaults shared by many users, it can be useful to get the attention of a user.
For example, one user may want to let another user know that a note they are
writing is ready for them to look at. Or in a shared journal, a user who needs
help can notify another user to ask for help.

While these communications could be done over other channels, such as messaging
apps or texts, these channels usually send notifications that alert users and
demand immediate attention. In some cases, it may be preferable to simply leave
a notification for the other user to look at without alerting them immediately.

Additionally, in some settings, keeping a trail of these notifications within
the notes may be preferable. Keeping these notifications public within a
knowledge base allows others to review them, and the resulting communication is
stored within the knowledge base as future reference.

## Proposal

Adding a special user notification syntax to Dendron would allow users to send
notifications through Dendron.

A user can type `[ ]@username` to send a notification to that user. The user,
once notified, can type `x` between the brackets to confirm receipt of the
notification.

Transferring these notifications are simply done through regular sync channels.
Syncing a workspace sends out any notifications that were added, and receives
notifications added by other users.

## Details

### User names

To find the username of the current user, Dendron can read the OS username of
the user. Dendron will also allow the user to set the username globally with a
global file (for example, `~/.dendron-user`) or a per-workspace file (for
example, `Dendron/.dendron-user`).

### Notifications overview

If the user has many notifications, Dendron can show a UI that lists all the
notifications they received. The same page can also be brought up using a
command, or integrated into the side bar.

### Implementation

Notifications are propagated through the existing sync mechanism, no additional
work is needed. Finding the notifications is relatively cheap: it can be done
when searching for new links in updated notes during a sync. Notifications can
be displayed using VSCode notifications.

The overview UI can be implemented with a web-based UI.

## Example

- `Edsger` writes in their notes: `... I'm stuck on this issue, can [ ]@Frances take a look at this?`
- `Edsger` syncs their workspace.
- `Frances` syncs their workspace.
- `Frances` automatically receives a notification: `Someone mentioned you: "... I'm stuck on this issue, can [ ]@Frances take a look at this?"`
- `Frances` clicks on the notification, which navigates the editor to the note where they were mentioned.
- `Frances` finishes their work regarding this mention, then adds an `x` into the brackets: `... can [x]@Frances take a ...`
- `Frances` syncs their workspace.

## Tradeoffs

## Discussion
<!-- Click the link and create new discussion -->
Please use the [Discussion](https://github.com/dendronhq/dendron/discussions/1330) page for any suggestions, concerns, or thoughts.
