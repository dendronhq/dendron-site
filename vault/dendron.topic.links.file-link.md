---
id: lzviz9odglotrbsgcp678i6
title: File Link
desc: ''
updated: 1658828617828
created: 1658828603919
---

![[dendron://dendron.dendron-site/tags.stage.sprout]]

You can link to files in your workspace that are not notes (or not in a vault) using wikilinks. The
easiest way to link to a file is using the [[Copy Note Link|dendron.ref.commands#copy-note-link]]
command, which will automatically create a link for you. As with note files, copy note link
will create a [[Block Anchor|dendron://dendron.dendron-site/dendron.topic.note-reference#block-anchor]] for you if you have a region of text selected.

Otherwise, you need to write inside a wikilink the relative path to the file
from where your `dendron.yml` file is located. For example, if the root of your
workspace contains `dendron.yml` and a `src` folder, you can write
`[[src/index.js]]`. Alternatively, if you are linking to a file inside the
`assets` folder of a vault, you can simply type `[[assets/example.py]]` to link to it.
