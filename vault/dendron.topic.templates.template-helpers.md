---
id: hkirhn3t0z3x2wfsuujwd87
title: Template Helpers
desc: Built-in helper functions that can be used with handlebar templates
updated: 1654657182628
created: 1654041750829
---

## Summary

{{fm.desc}}

## Helpers

### eq
- return: true|false

Compares two arguments for equality.

```hbs
---
arg1: 1
arg2: 1
---
{{eq fm.arg1 fm.arg2}}
```

### fnameToDate
- return: javascript Date object

```hbs
{{! given file: daily.journal.2022.05.31 }}
{{! results in new Date(2022, 4, 31) (javascript Date uses 0-based month) }}
{{ fnameToDate }}
```

Extract the date portion of the current filename. By default, it will match the first section of the filename that matches `(?<year>[\d]{4}).(?<month>[\d]{2}).(?<day>[\d]{2})` and create a date object
You can override by passing in a custom format as long as you used [named captures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups) for `year`, `month`, and `day`

### getDayOfWeek
- return: number, day of week

```hbs
{{! returns 2 since 2022-05-31 was a tuesday}}
{{ getDayOfWeek (fnameToDate) }}
```

Given a day, return the day of the week. This is the same as [javascript getDay](https://www.w3schools.com/jsref/jsref_getday.asp) method (0 = sunday, 6 = saturday)

- NOTE: be sure to add parenthesis `()` when using with `fnameToDate` due to how handlebars handles [subexpressions](https://handlebarsjs.com/guide/expressions.html#subexpressions)

## Examples

### Conditionally add a block depending on day of week

- NOTE: since we are getting the day of the week based on the file name instead of the current day, this will work even when you create the note in advance
```hbs
{{#if (eq (getDayOfWeek (fnameToDate)) 0) }}
- [ ] do laundry
{{/if}}
```
