---
id: 1cvn4gny275sizv2gfemqby
title: >-
  Why UML "Really" Died
desc: ''
updated: 1663027907239
created: 1663027792528
canonicalUrl: 'https://kevinslin.com/notes/r5rl5w8yuvo05wrl9lgry54'
---

[Why UML "Really" Died](https://buttondown.email/hillelwayne/archive/why-uml-really-died/)

For people that care about the topic, the death of [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) has long been talked about, either with great fanfare or remorse depending on what side of the debate you were on.

> The Unified Modeling Language (UML) is a general-purpose, developmental, modeling language in the field of software engineering that is intended to provide a standard way to visualize the design of a system.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Unified_Modeling_Language)

UML promised to do for software what blueprints did for architecture - provide a high-level spec to help understand and produce code. But it never delivered on that promise. The author argues that this was due to the complexity of the spec and the need to be interoperable with legacy vendors. This made UML both too complicated but also too loosely defined to work well as a standard. 

![XKCD Standards](https://imgs.xkcd.com/comics/standards.png) 

> Source: [XKCD](https://m.xkcd.com/927/)

For better or worst, standards are a classic example of the [worse is better](https://kevinslin.com/notes/292xk5tzw6tv3d5m0zjag6n) approach to design. Specifically, I find that **simplicity will consistently beat out all other design criteria.**

JSON vs XML, Javascript vs "any other programming language", Markdown vs AscciDoc" - the standard that ends up being adopted is the one that humans can reason about. 

Some parting thoughts:

- as we continue to make advancements in software, will we continue to be able to design "simple" abstractions to work with them? 
- is there some limit to this process where we require complicated abstractions due to the [essential complexity](https://kevinslin.com/notes/8uj8lghm55063630jp6zxta) of the problem? (eg. <https://kubernetes.io/>)
-