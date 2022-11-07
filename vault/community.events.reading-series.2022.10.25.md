---
id: dvtktjb7bw0t472hmszosdt
title: |
  Writing system software: code comments
desc: ''
updated: 1666668712533
created: 1666662383768
---

- [Writing system software: code comments](http://antirez.com/news/124)

> Comments are rubber duck debugging on steroids, except you are not talking with a rubber duck, but with the future reader of the code, which is more intimidating than a rubber duck, and can use Twitter.

The author talks about the benefits of code comments and breaks down comments into the following 9 categories (with the last three being undesirable)

* Function comments: describing the function
* Design comments: describing the overall design
* Why comments: explain why something was done
* Teacher comments: explaining a related concept that is not related to the code 
* Checklist comments: a reminder to do a set of actions when modifying certain pieces of code
* Guide comments: a summary of code logic
* Trivial comments: a comment that takes as much effort to read as the code itself
* Debt comments: TODOS/FIXME kind of comments
* Backup comments: comments made to have a checkpoint to revert to if new code does not work

Comments are like an actor breaking the fourth wall and talking directly to the audience. They help summarize the visible logic and communicate the invisible components. 

It's interesting that comments are prevalent in code but not in other texts. Presumably, this was not a feasible option when the text was printed on paper but with e-books and digital text, there is no technical reason why this couldn't be done. 

Imagine inline comments in Shakespeare or poetry. What might that look like? 