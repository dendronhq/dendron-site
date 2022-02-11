---
id: GelEQPZrSgr3CK9y10Nrg
title: Schema Template
desc: ''
updated: 1643737795410
created: 1643737499035
---

## Summary

Schema templates let you designate a note as a **template**. Newly created notes that match a schema with a template will have both the contents and custom frontmatter of the template note applied at creation.

This is extremely useful whenever you want to re-use the outline of a note. Examples include daily journals, weekly shopping lists, and weekly reviews.  

<a href="https://www.loom.com/share/481b7ab051394c1caa383383bd265755"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/481b7ab051394c1caa383383bd265755-with-play.gif"> 
</a>

## Template Variable Replacement

Template variable replacement lets you replace the text of a schema template prior to application. 
The syntax for variable replacement is `<%= YOUR_VARIABLE =>`.

### Template Variables

Full list of currently supported template variables

- For inserting the current date and time:
    * `CURRENT_YEAR`: The current year
    * `CURRENT_MONTH`: The month as two digits (example '02')
    * `CURRENT_WEEK`: The week of the year as two digits (example '17')
    * `CURRENT_DAY`: The day of the month as two digits (example '08')
    * `CURRENT_HOUR`: The current hour in 24-hour clock format
    * `CURRENT_MINUTE`: The current minute as two digits
    * `CURRENT_SECOND`: The current second as two digits

#### Example
- template
    ```md
    Today is <%=CURRENT_YEAR%>.<%= CURRENT_MONTH%>.<%= CURRENT_DAY%>,
    ```
- output
    ```
    Today is 2022.01.04
    ```
