---
id: 3e7baac6-f120-4378-a667-92e7a0869dca
title: Cache
desc: ''
updated: 1599842689882
created: 1599842689882
stub: false
---

# Caching

One use of a knowledge base is that of a [cache](https://en.wikipedia.org/wiki/Cache_(computing)) - quickly referencing information you have seen or worked with before. 

The most important properties of an effective cache:
- fast referencing (of an existing note)
- fast writing (of a new note)
- fast updating (of existing notes)

Dendron is ideally suited for this knowledge-as-a-cache use case. 
- [[Dendron lookups|dendron.topic.lookup]] provide fast reading/writing of both new and existing notes
- [[Dendron schemas|dendron.topic.schema]] help structure your knowledge even as you accumulate more notes

## Example

You can see a public example of what this might look like on [Kevin's project reference hierarchy](https://www.kevinslin.com/notes/f46d3d6c-9704-4ddc-ad7d-69612d214905.html). He keeps public reference notes on projects he's used. 

Some things to note: 
- when using your notes as a cache, you might have duplicate content from other sites. be aware of copyright laws and check that you can re-publish said content
- when re-publishing content, google will penalize your site if you have duplicate content from other sites. you can tell google to not index specific pages or hierarchies
    
## Exclude page from index
((ref: [[dendron.topic.publishing]]#exclude from indexing,1:#*))

## Exclude hierarchy from index
- set [[noindexByDefault|dendron.topic.publishing]] to true in your site hierarchy specific config
