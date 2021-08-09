
## Introduction
- **[Space Reptition](https://en.wikipedia.org/wiki/Spaced_repetition)** (SR) is a learning method that encourages one to separate knowledge into different types of cards and **memorize effectively through daily practise**. 

## Why? 
- Among the large mass of notes, there must be some you want to memorize over the long term. 
- It is not ideal to rely on external extensions for SR. 
- attract more users from the academia

## Proposal
### Phase I  
- From my observation (see the section below for additional info), the most ideal choice to implement space reptition features in dendron in my opnion is through an overall structure similar to [Recall](https://marketplace.visualstudio.com/items?itemName=frenya.vscode-recall):
  - cards by `::` 
  - cloze by `{{}}` 
  - open a new window for review 

### Phase II 
- Furthermore, the addition of **reviewing cards in published websites** using dendron opens more possibilities because **one can share his cards easily through the site**. 
- and despite basic front-back and cloze cards, features like [image occlusion](https://ankiweb.net/shared/info/1374772155) can be considered once the basic features are mature. 


## Additional Info: SR Implementation in other apps
### RemNote 
- seperate front and back side with `::`
- cloze by `{{}}`

### Logseq 
- workflowy-like bullets, parent and children block to separate front and back 
- cloze by `{{cloze }}` 

### VSC Extensions 
#### [Recall](https://marketplace.visualstudio.com/items?itemName=frenya.vscode-recall)
- cards by `::`
- cannot do cloze 
- card review in vsc 

#### [Anki for VSC](https://marketplace.visualstudio.com/items?itemName=jasew.anki)
- cards by `##` as front, word under the header as back 
- cloze by `{{c1::cloze}}` followed by the header 
- sync with anki 
