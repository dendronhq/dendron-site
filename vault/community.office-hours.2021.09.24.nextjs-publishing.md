---
id: lawPd77y3U3PQDEuotWb5
title: Nextjs Publishing - Getting Started
desc: ''
updated: 1632845099839
created: 1632630257636
---

## Summary

Video of the talk can be found [here](https://www.youtube.com/watch?v=UfZgSN8w9UM&t=9s) (Apologies, forgot sound on this recording)

## Agenda
- Initializing Next.js Publishing [Quickstart](https://wiki.dendron.so/notes/e5st4LFLtIwwbQmC6JBaF.html)
- Exporting notes to Github Pages [Tutorial](https://wiki.dendron.so/notes/yg3EL1x9fEe4NMqxUC3jP.html)

## Questions
* Can you show what version of yarn you are running pls? **Nvm, I see it's v1.22. Thx.**
* What’s the equiv of the output folders for Next.js (in 11ty, it was /build /docs)?
    - Export is **/.next/out**
    - Dev is **/.next/public /.next/data(?)**
    - Data generated from `dendron publish build`
        * [https://wiki.dendron.so/notes/5fGMHyXmErIV9odz01BBH.html](https://wiki.dendron.so/notes/5fGMHyXmErIV9odz01BBH.html)
* Does the resulting published output from **dendron publish init** result in temp file directory, and not something to check into source control?
    - .next/

## Related
* Publishing using a github action:
    - [https://wiki.dendron.so/notes/FnK2ws6w1uaS1YzBUY3BR.html](https://wiki.dendron.so/notes/FnK2ws6w1uaS1YzBUY3BR.html)
* Today’s Walkthrough Repo
    - [https://github.com/kevinslin/dendron-publish-demo](https://github.com/kevinslin/dendron-publish-demo)

## Feedback
* Good tutorial. The GitHub stuff is new to me, I’ll have to watch the video again slowly to understand it. Thx :) Great!
