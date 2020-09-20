---
id: f9c646b1-34ab-4b18-8ec1-cabb8b2c7066
title: Frontmatter
desc: ''
updated: 1600573427628
created: 1600573427628
stub: false
---

# Frontmatter

Dendron notes have [[frontmatter|dendron.topic.frontmatter]]. Dendron Jekyll uses this frontmatter to configure various aspects about the appearance and publication status of a particular page. 


## Appearance
### title: string

Title of the content. Control's how the title shows up in the nav bar

### sources: source[]

Automatically create attributions for a page

- eg: [AWS Page](https://aws.dendron.so/notes/dynamodb.html#)
```yml
...
sources:
  - name: og-aws
    url: 'https://github.com/open-guides/og-aws'
    license: Creative Commons Attribution-ShareAlike 4.0 International License
  - name: Jerry Hargrove
    url: 'https://www.awsgeek.com/'
    license: Creative Commons Attribution-ShareAlike 4.0 International License
```

![](/assets/images/2020-09-19-20-53-12.png)

## Publication

### published: boolean

Specifies if the page should be published or not. 

By default, everything under `siteHierarchies` is published unless `publishByDefault` is turned `off`. In that case, you must set `published: true` in order to publish a page under the given hierarchy. 

You can also set this to `false` to selectively withhold specific pages from publication. 

((ref: [[dendron.topic.publishing.configuration]]#config:#*))