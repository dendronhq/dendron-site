---
id: X2Zn2H89eBZrsj7Of8LLm
title: 20 - Integrated Space Repetition
desc: ''
updated: 1628866021555
created: 1628735366207
---

## Goals
- create an **integrated space repetition** with basic features (basic/cloze cards) in dendron

## Context
- **Space Reptition (SR)** is a learning method that encourages one to separate knowledge into different types of cards and memorize effectively through daily practise.
## Why? 
- Among the large mass of notes, there must be some you want to memorize over the long term. 
- It is not ideal to rely on external extensions for SR. 
- attract more users from the academia
  - [incremental reading](https://en.wikipedia.org/wiki/Incremental_reading)
  - [HQ&A System](https://words.jamoe.org/highlight-question-and-answer/)
## Proposal
### Phase I  
- From my observation (see the section below for additional info), the most ideal choice to implement space reptition features in dendron in my opnion is through an overall structure similar to [Recall](https://marketplace.visualstudio.com/items?itemName=frenya.vscode-recall):
  - cards by `::` 
  - cloze by `{{}}` 
  - open a new window for review 

### Phase II 
- Furthermore, the addition of **reviewing cards in published websites** using dendron opens more possibilities because **one can share his cards easily through the site**. 
- and despite basic front-back and cloze cards, features like [image occlusion](https://ankiweb.net/shared/info/1374772155) can be considered once the basic features are mature. 


## Details
### SR Implementation in other apps
#### RemNote 
- seperate front and back side with `::`
- cloze by `{{}}`

#### Logseq 
- workflowy-like bullets, parent and children block to separate front and back 
- cloze by `{{cloze }}` 

#### VSC Extensions 
##### [Recall](https://marketplace.visualstudio.com/items?itemName=frenya.vscode-recall)
- cards by `::`
- cannot do cloze 
- card review in vsc 

##### [Anki for VSC](https://marketplace.visualstudio.com/items?itemName=jasew.anki)
- cards by `##` as front, word under the header as back 
- cloze by `{{c1::cloze}}` followed by the header 
- sync with anki 

#### Other Solutions 
- [Andy Matuschak - My implementation of a personal mnemonic system](https://notes.andymatuschak.org/z4mAF1uBV96r72e4NjLcDaujEyTPGiUQJEj8C?stackedNotes=z5ARNXtS5VxteskEW91S1yYTgAcLABNXsZuJE)
- [Obsidian to Anki](https://github.com/Pseudonium/Obsidian_to_Anki)
- [Anki markdown notes](https://github.com/Pradhyo/anki-markdown-notes)

## Example
- create basic cards through `front::back` and cloze cards through `This is an {{apple}}` syntax 
- review cards in another tab (similar to Recall VSC)
- 

## Tradeoffs
- this feature is not completely related with the improvements regarding dendron's hierarchy system
- relatively new feature sets for developers, more research needed

## Discussion
- discussions are held on [RFC 20 Discussion Board](https://github.com/dendronhq/dendron/discussions/1133)


