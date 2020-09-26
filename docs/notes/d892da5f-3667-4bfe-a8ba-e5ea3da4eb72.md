---
start: 2020.10.07
end: 2020.11.29
status: Next
id: d892da5f-3667-4bfe-a8ba-e5ea3da4eb72
title: Long term sustainability
desc: ''
updated: 1599501881180
created: 1599501881180
data: {}
fname: dendron.roadmap.project.n.2020.long-term-sustainability
stub: false
parent: 58247dfb-55b4-4269-9b37-42a90a0045ef
children: []
hpath: dendron.roadmap.project.n.2020.long-term-sustainability
---
# Long term sustainability

## Goals

Figure out and experiment with a long term business model for Dendron.

## Details



<div class="portal-container">
<div class="portal-head">
<div class="portal-backlink" >
<div class="portal-title">From <span class="portal-text-title">dendron.faq</span></div>
<a href="683740e3-70ce-4a47-a1f4-1f140e80b558.html" class="portal-arrow">Go to text <span class="right-arrow">→</span></a>
</div>
</div>
<div id="portal-parent-anchor" class="portal-parent" markdown="1">
<div class="portal-parent-fader-top"></div>
<div class="portal-parent-fader-bottom"></div>        
  

Dendron, the client, is free and will always remain free. It is also open source so anyone is free to make their own fork of Dendron.

That being said, I'm all in on Dendron and this is my full time gig. I want to make sure that developing Dendron remains sustainable. To that end, I plan on introducing value add server side functionality that folks may pay for. Examples of paid for features include: 

- private hosting (for folks who want to publish but not use github pages or want to add authentication)
- enterprisy things 
  - eg. on premise installations of Dendron with single sign on, active directory, and fine grained permissions
- offering private subscription based vaults (eg. think [substack](https://substack.com) but having people subscribe to vaults instead of newsletters )
- server side IFTTT like functionality (eg. everytime I add an entry to airtable, add a note to Dendron)

Paid for features will be 100% optional and will not be necessary for any client side functionality in Dendron.

### Why is Dendron built on top of VSCode?

As with all things, its a matter of tradeoffs. Dendron started its life as a standalone app (eg. think Obsidian) but I quickly realized I was spending most of my time building undifferentiated editor scaffolding instead of focusing on the hierarchies and schemas that made Dendron unique.

I wanted to spend more time building out features that supported Dendron's [hiearchy first approach](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html) to note taking which is what led me to re-write it for VSCode. 

That being said, the core dendron engine is not vscode specific and there are folks that are experimenting with porting it over to other editors (eg. sublime, vim). We also have plans for a standalone editor in the future (most likely, this will be a fork of VSCode optimized for note taking)


</div>    
</div>


## Plans

- pro status
  - support dendron development using one time or recurring fee
- workshops
  - eg. how to best organize
- server features
  - use **code-server** or something equivalent to run dendron inside a browser
  - dedicated end2end sync
  - hosted pods 
    - do daily import/export of notes from/to diff places
- dendron private catalogues
  - give people the option to build a paying subscription base for their published notes (eg. substack)
- enterprise features
  - active directory and support
  - support remote mount point
- mobile app 
- standalone client
  - standalone dendron app  
    - maybe modified vscode (without coding)
    - theia 
    - vscodium
  - charge a pay what you can model?
- wyswg @jojanaho
- get bigger community

## Tasks

## Release Notes
