---
id: x4n8mvhvc0nmi9agxtnqp3t
title: Template Variables
desc: "Pre-defined template variables that are automatically included in your templates at run time"
updated: 1664344350021
created: 1653438949072
---

## Summary

{{fm.desc}}

You can apply template variables by using the following syntax: `{{ VARIABLE }}`

### Globally Available

- `CURRENT_YEAR`: The current year
- `CURRENT_MONTH`: The month as two digits (example: `02` for February)
- `CURRENT_WEEK`: The week of the year as two digits (example: `17`)
- `CURRENT_DAY`: The day of the month as two digits (example: `08`)
- `CURRENT_HOUR`: The current hour in 24-hour clock format (example: `23`)
- `CURRENT_MINUTE`: The current minute as two digits (example: `05`)
- `CURRENT_SECOND`: The current second as two digits (exmplae: `32`)
- `CURRENT_QUARTER`: The current quarter as one-indexed single digit number (example: `1` for first quarter)
- `CURRENT_MONTH_NAME`: The month as string name (example: `January`)
- `CURRENT_MONTH_NAME_SHORT`: The month as abbreviated string name (example: `Jan` for January)
- `CURRENT_DAY_OF_WEEK`: equivalent of [javascript getDay](https://www.w3schools.com/jsref/jsref_getday.asp) method (example: `3` for Monday)
- `CURRENT_DAY_OF_WEEK_ABBR`: The day of week, as an abbreviated localized string (example: `Wed` for Wednesday)
- `CURRENT_DAY_OF_WEEK_FULL` The day of week, as an unabbreviated localized string (example: `Wednesday`),
- `CURRENT_DAY_OF_WEEK_SINGLE` (example: `W` for Wednesday),
- `TITLE`: The title of the note as appeared on frontmatter
- `FNAME`: name of current file
- `DESC`: description of current file (equivalent to the `desc` field in the Dendron frontmatter)
