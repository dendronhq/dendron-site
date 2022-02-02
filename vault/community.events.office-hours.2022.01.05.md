---
id: vwDAItK0ZodsGTOt0Q2lY
title: '2022-01-05 Office Hours'
desc: ''
updated: 1641827449155
created: 1641827449155
documentId: 1FEEo_0aNiNfnW_tzo58m_HAM8wI_YMujHmKUaNBSzBk
revisionId: >-
  ALm37BWELDCyUQgq_lzTBSxZeCICxxSJqqSfhzPB9yqseHCBQ6PlMtlFPjvhAj77g5jpo-EZlWNKOmSiqzEnJA
commentsUpdated: true
---
## Office Hours

January 5th, 2022

Release notes:

- 0.75: [https://wiki.dendron.so/notes/N1Mn5p6O2tVVkdDM0Ys1w/](https://wiki.dendron.so/notes/N1Mn5p6O2tVVkdDM0Ys1w/) 
- 0.76: [https://wiki.dendron.so/notes/MQpi87qLnzKK5iK3FlxUp/](https://wiki.dendron.so/notes/MQpi87qLnzKK5iK3FlxUp/) 

### Highlights

- [Template Variables](https://wiki.dendron.so/notes/861cbdf8-102e-4633-9933-1f3d74df53d2#template-variables)
  - [Minor bug on single digit vs. double digit](https://github.com/dendronhq/dendron/issues/2045)
_Kevin’s Aside:_
- _At Dendron, we do daily journals instead of standup. Every morning, I have a task to review daily journals from the team. My template used to include `dd` placeholder which I would copy and replace, but now I just use the template variables_
_```_
_Before_
_- review daily journals_
_- [ ] [[user.kaan.journal.2022.01.dd]]_
_- [ ] [[user.jonathan.journal.2022.01.dd]]_
_- [ ] [[user.hikchoi.journal.2022.01.dd]]_
_- …_
_After_
_- review daily journals_
_- [ ] [[user.kaan.journal.2022.01.{{CURRENT_DAY}}]]_
_- [ ] [[user.jonathan.journal.2022.01.{{CURRENT_DAY}}]]_
_- [ ] [[user.hikchoi.journal.2022.01.{{CURRENT_DAY}}]]_
_```_
- [Making Your First Schema](https://blog.dendron.so/notes/P1DL2uXHpKUCa7hLiFbFA/): Blog post
  - Also in [Dendron wiki](https://wiki.dendron.so/notes/5U4eAiqshI67VxIL40KWH/)
  - Inline schemas - allow indented format

  - 
- `Dendron: Show Preview` for regular markdown files
  - We will continue to add features 
- `Dendron: Delete Node` comes with prompting, and will also show breaking links
  - You will see prompt if you want to proceed in deleting the note
  - FYI on broken links
- `Dendron: Convert Link` powers: change link format for special types
  - Use to different tags to reference to have all the backlinks appear on a particular page 
- Backlink View: Toggle sort order in workspace
  - sorted by the most recently updated

### Notes

### Q&A

_Notes around questions asked during office hours_

1. Examples of dendron with code workflow?
1. Is there a reason the command is called "delete node" rather than "delete note" - is there a difference between a node and a note?
- Delete nodes because it works on schemas as well as on notes
- A note is a special type of node that is of the note type
- A schema is a special node that says schema type. 
- You can use Delete node to delete both schemas and notes
1. Is the default root domain for user tags configurable? 

* * *


### Comments

 - Hyun Ik Choi:  I just checked this. This is part of the sanity checking logic in the publish commands that didn't get cleaned up. Thanks for bringing this up. This should be removed.
