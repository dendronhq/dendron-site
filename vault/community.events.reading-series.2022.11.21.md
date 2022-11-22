---
id: ckr6j06tjf9e4txq7oblar1
title: 'Less is exponentially more'
desc: 'Why go does is more appealing for python developers than c++ developers'
updated: 1669089182659
created: 1669089182659
image: 
  url: https://ik.imagekit.io/fpjzhqpv1/DALL_E_2022-11-21_20.04.48_-_an_open_empty_hand_in_space__digital_art_6IBWkPQ4i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669089930926
  alt: Less is more
---

![Less is more](https://ik.imagekit.io/fpjzhqpv1/DALL_E_2022-11-21_20.04.48_-_an_open_empty_hand_in_space__digital_art_6IBWkPQ4i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669089930926)

[Less is exponentially more](https://commandcenter.blogspot.com/2012/06/less-is-exponentially-more.html)

One of the authors of the `go` language talks about its origins and why a language that was designed by C++ programmers to replace C++ programmers does not actually attract C++ programmers. 

> The answer can be summarized like this: Do you think less is more, or less is less?

For the go authors, **less is more**. By removing various power features of C++ that were also overly complicated, it made the go language both easier to use and ultimately more capable as a consequence. 

An irony is that the author explicitly talks about composition over inheritance as the tradeoff that `go` made to simplify the language. This is the exact opposite tradeoff that we made at Dendron, favoring inheritance (aka hierarchies) over composition (aka tags). 

Even if the technical details took opposite turns, we made the decision to focus on hierarchies precisely because it would simplify the retrieval process. Tags made it possible for any note to be categorized as anything. Having a canonical hierarchy limited people to having one canonical place for a note but its precisely this limitation that makes Dendron scale for large knowledge bases. ac