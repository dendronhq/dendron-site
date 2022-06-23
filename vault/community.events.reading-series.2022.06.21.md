---
id: tf6bdhdlvt8ykick7fpnlpp
title: 'Local-First Software: You Own Your Data, in Spite of the Cloud'
desc: ''
updated: 1655808676665
created: 1655740646658
---

- [Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/local-first/)

Back in the day, software ran locally on one's computer. 
This worked great until you needed to collaborate with others working on their own computers. 
And to solve this problem, we started putting software on ~~someone else's computer~~ the cloud. 
Software on the cloud solved collaboration but in exchange for ownership, autonomy, and control of one's own data. To regain control of our own data, we've come full circle with the movement behind **local-first** software. 

This article starts by defining **local-first** software as software where the source of truth is stored on one's own machine (vs the cloud). It then expands the functionality of local-first software to include collaboration. It continues by establishing seven criteria for evaluating "local-first software":

1. Fast 
2. Multi-device 
3. Offline 
4. Collaboration 
5. Longevity 
6. Privacy 
7. User control of Files

The second half of the article goes in length about [CRDTs](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). They propose CRDTs as a solution to the collaboration problem for **local-first** software with a "git meet google doc" approach to synchronizing state. 

While this could work, is it necessary? Cloud software excels at collaboration because it facilitates simultaneous editing and synchronization of state. Local software excels at giving one complete independence of managing one's data. What if we can use the strength of each paradigm for its designated purpose instead of trying to re-invent what the other already does so well? 

A limited but real world example at Dendron - we master everything inside our companies Dendron vault - a git repo that contains all our internal docs, sprint planning, etc. Conflicts are rare as most of us work on our own separate notes most of the time. For times when simultaneous edits are likely, (eg. sprint planning) we export the planning note to google doc a few days ahead of time so that everyone can post their updates and leave comments. A few days after sprint planning, we then synchronize this doc with the note we have locally. We also do this for design reviews and all meeting notes. While there's always room for improvement, this has worked well for all of our needs thus far. 