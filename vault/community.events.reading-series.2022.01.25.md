---
id: 3ytZU2RkAcEkLRPcHPNAQ
title: '17 - The SQLite Amalgamation'
desc: ''
updated: 1643130384130
created: 1643127038816
---

- [The SQLite Amalgamation](https://www.sqlite.org/amalgamation.html)

SQLite is one of the most widely used and versatile databases of all time. Perhaps its greatest strength is how easy it is to embed it in any sort of programming environment. 

> Over 100 separate source files are concatenated into a single large file of C-code named "sqlite3.c" and referred to as "the amalgamation". The amalgamation contains everything an application needs to embed SQLite. 

Takeaway: having everything in one blob is useful in many situations. 

> Developers sometimes experience trouble debugging the quarter-million line amalgamation source file... To circumvent this limitation, the amalgamation is also available in a split form, consisting of files "sqlite3-1.c", "sqlite3-2.c", and so forth, where each file is less than 32,768 lines in length

Takeaway: sometimes having everything in a multitude of blobs is more useful in other situations

This reminds me of two parallel concepts in Dendron
- the [[Amoeba|dendron.guides.workflows.amoeba]]: splitting information into smaller and smaller notes as needed
- the Katamari (credit to `@Jack of some quantity of trades#3247` for helping seed the concept): combining information back into a single blob

There isn't a **best way** of organizing, depending on the context, you might prefer information in one structure or another. The best way to structure information is context-dependent which is why it is so important for a PKM to give you the flexibility to restructure knowledge for your given context. 

