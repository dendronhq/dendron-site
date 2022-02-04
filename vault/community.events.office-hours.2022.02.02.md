---
id: ZHzpPEYcGREgSubFwFbNn
title: '2022-02-02 Office Hours'
desc: ''
updated: 1643900139933
created: 1643900096150
documentId: 1FEEo_0aNiNfnW_tzo58m_HAM8wI_YMujHmKUaNBSzBk
revisionId: >-
  ALm37BWz4j_RGxkSeJWiV99S9kle6mtGMyRaAwbkWIn3xyahAn4sM0m2zCmaXPSSeF-jO620vqzgh_-jv3a-kw
commentsUpdated: true
---
## Office Hours

February 2nd, 2022

Release notes:

- 0.79: [https://wiki.dendron.so/notes/2O1bIbvJ7w1NkO7OyvSys/](https://wiki.dendron.so/notes/2O1bIbvJ7w1NkO7OyvSys/) 
- 0.80: [https://wiki.dendron.so/notes/2pRvTG91s3JFlLFhJz3H4/](https://wiki.dendron.so/notes/2pRvTG91s3JFlLFhJz3H4/) 

### Highlights

- [Markdown Pod Imports](https://wiki.dendron.so/notes/f23a6290-2dec-45dc-b616-c218ee53db6b.html) acknowledge existing frontmatter, and prepend clashing values
- Publishing improvements: Using the cache in existing publishing templates
- [confirmVaultOnCreate](https://wiki.dendron.so/notes/F9LWJEjscrGkxnYi2JNby.html#confirmvaultoncreate)
  - [vaultSelectionModeOnCreate](https://wiki.dendron.so/notes/F9LWJEjscrGkxnYi2JNby.html#vaultselectionmodeoncreate)
- Dendron now warns on conflicting extension: [https://wiki.dendron.so/notes/9Id5LUZFfM1m9djl6KgpP/](https://wiki.dendron.so/notes/9Id5LUZFfM1m9djl6KgpP/)  
- [https://github.com/dendronhq/awesome-dendron/](https://github.com/dendronhq/awesome-dendron/) 
### Notes

- [vaultSelectionModeOnCreate](https://wiki.dendron.so/notes/F9LWJEjscrGkxnYi2JNby.html#vaultselectionmodeoncreate) options
  - smart
  - alwaysPrompt
### Q&A

- For questions, please add your `@{discord-handle}: question`
- @kevins8: how do I ask questions on the google doc? (example)

_Notes around questions asked during office hours_

1. @ThatSisyphean#7459: how much are you guys looking to get into personal data management in addition to personal knowledge management? Managing photos, videos, heartrate data, etc.
  1. Related discussions
    1. [https://github.com/dendronhq/dendron/discussions/1975](https://github.com/dendronhq/dendron/discussions/1975)
    1. [https://github.com/dendronhq/dendron/discussions/1876](https://github.com/dendronhq/dendron/discussions/1876) 

1. @RzLnx88#1569: is there a way to dynamically create a title in note from a template or schema?

	Ans. Yes.see: [https://wiki.dendron.so/notes/bdZhT3nF8Yz3WDzKp7hqh.html](https://wiki.dendron.so/notes/bdZhT3nF8Yz3WDzKp7hqh.html)


### Comments

 - Hyun Ik Choi:  I just checked this. This is part of the sanity checking logic in the publish commands that didn't get cleaned up. Thanks for bringing this up. This should be removed.
