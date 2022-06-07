---
id: x4n8mvhvc0nmi9agxtnqp3t
title: Template Variables
desc: 'Pre-defined template variables that are automatically included in your templates at run time'
updated: 1654561896762
created: 1653438949072
---

## Summary

{{fm.desc}}

You can apply template variables by using the following syntax: `{{ VARAIBLE }}`

### Globally Available

* `CURRENT_YEAR`: The current year
* `CURRENT_MONTH`: The month as two digits (example '02')
* `CURRENT_WEEK`: The week of the year as two digits (example '17')
* `CURRENT_DAY`: The day of the month as two digits (example '08')
* `CURRENT_HOUR`: The current hour in 24-hour clock format
* `CURRENT_MINUTE`: The current minute as two digits
* `CURRENT_SECOND`: The current second as two digits ^w9f1tyetgq6z

### Handlebar Only

> NOTE: only available when [[Handlebar Templates|dendron.topic.templates.handlebars]] are enabled

* CURRENT_DAY_OF_WEEK: equivalent of [javascript getDay](https://www.w3schools.com/jsref/jsref_getday.asp) method
* FNAME: name of current file
* DESC: description of current file (equivalent to the `desc` field in the Dendron frontmatter)

## Cook
