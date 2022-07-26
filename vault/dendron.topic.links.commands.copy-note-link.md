---
id: 00pqmil4m2u0xasoyd26wta
title: Copy Note Link
desc: ''
updated: 1658831354037
created: 1658831124334
---

### Copy Note Link

-   shortcuts:
    -   key: `ctrl+shift+c`
    -   mac: `cmd+shift+c`
    -   when: `editorFocus`

Copy wiki link to note. The title of the note will be applied as the note alias. If you highlight a header, Dendron will create a relative link to the header with the alias set to the header value.

You can also highlight any line of text, and Dendron will create a link to it by inserting a block anchor, or copy an existing anchor.

<a href="https://www.loom.com/share/06d0689d548941219db9708f5b1b70d2"> <img src="https://cdn.loom.com/sessions/thumbnails/06d0689d548941219db9708f5b1b70d2-with-play.gif"> </a>

If you use this command in a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will create a [[cross vault link|dendron.topic.links#cross-vault-links]] to the note in question.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/command.copy-link.gif)

You can also copy note link by Right Click on editor and select `Dendron: Copy Note Link` from the context menu.

#### Files that are not notes, or files outside your vaults

You can use this command in any file inside your workspace, including files that aren't notes or files that are not in
any vault to get [[links to those files|dendron://dendron.dendron-site/dendron.topic.links#file-links]].

Similar to regular notes, you can also highlight a line of text to create a link
to that line. Dendron will automatically insert a [[Block Anchor|dendron://dendron.dendron-site/dendron.topic.note-reference#block-anchor]] like it does in notes, but you can change
what kind of anchor to use with the [[anchorType|dendron://dendron.dendron-site/dendron.ref.config.commands#anchortype]] configuration.
