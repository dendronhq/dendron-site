---
id: 72d4dbde-59f6-463b-bcd8-2de3457af96f
title: UI Options
desc: ''
updated: 1621158026102
created: 1620582511589
---

## Goal

Improving schema cababilitys to influence the UI Elements of Dendron.

## Proposal

1.  One Part of this would be the ability to specify an Icon that is associated with the schema and gets shown in the Dendron Treeview instead of the current Book Icon. 
    Additionaly these icons can be shown when publisched in the navigation and links to notes that match a schema.  
2. The ability to specify Colors that should be used as background in the treeview or as color for the note in the Graphview, but with the ability to specify colors for each VSCodetheme.


## Example

```yml
schemas:
    dendron:
        id: dendron
        icon: 'dendron://assets/foo.svg'
        color:
            light: lightgreen
            dark: darkgreen            
```

Yes I was to lazy to adjust each Item under Dendron to the background color.
Since it is not as straight forward as I have thought. 

![](/assets/images/2021-05-16-11-38-06.png) 
