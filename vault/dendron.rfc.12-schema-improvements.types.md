---
id: ffe67303-57be-452c-aa73-f7d7e9c4f00f
title: Types
desc: ''
updated: 1620588120384
created: 1620582238808
---

## Goals

Creating the possibility to extend the functionality of schemas by introducing a type value on them.

## Proposal

Adding a type value to schemas, this value would be optional and default to the current functionality. 
The current functionality should be named `pattern` in my eyes and be the default value for this key in the yaml. 


### Proposed Types

The following are Types that I would Propose to create as part of dendrons core functionality, while a pod should have the ability to extend the possible type list, creating a type name like `podname:typename` to prevent conflicts with other core or other types. 


#### Pattern

This would be the current functionality. The examples show that they are Equal 

##### Example

```yml
schemas:
  - id: example
    title: Example #defaults to the id
    pattern: e #defaults to the id if not set
```

```yml
schemas:
  - id: example
    title: Example #defaults to the id
    pattern: e #defaults to the id if not set
    type: pattern
```

#### Segments

This type would be used to merge multiple hierarchy segments into one for usage in Commands or in UI elements. 

##### Example


```yml
schemas:
  - id: date
    title: Example #defaults to the id
    type: segments 
    pattern: $0.$1.$2 # this value becomes required,  the ${digit} part describes the hierachy lvl in this scheme, but could use named identifiers as well or static pattern parts.
    elements: # required for segments, order matters here if number references are used.    
      - id: year # this would match the reference $0 or $year
      - id: month # this would match the reference $1 or $month
      - id: day # this would match the reference $2 or $day        
```



#### Enum

This type extends the Pattern type with the option to map the matched values of the Pattern to a title that should be used in the UI. 

##### Example

```yml
schemas:
   - id: numericMonth
     type: enum
     pattern: (0[1-9])|(1[0-2]) # A valid pattern is required that can match multiple things.
     matches: # each matchs entry is required to be a valid option for the pattern
        - 01: Januar # the first part is the matched value and the second part becomes the title
        - 02: Februar
        - 03: March  # not every possible match needs to be provided if no match is provided the matched value becomes the title.
```


#### Group

This type would allow someone to define multiple Schemas for one hierachy level That get grouped under a commen Key.

##### Example

```yml
schemas:
   - id: Month
     type: group
     schemas: # Requires a non empty list of either schema definitions or references. 
        - numericMonth # reference of a defined schema would be valid.
        - id: shortLetterMonth # can contain the specification of a new schema

```



#### Heading

This type is meant to specify the headings of a Note and would apply to Schemas that it is a child of. This should be seen like an interface for the developers. Multiple heading type schemas can exist on one schema. The Order of the Headings in the note is not Relevant. 

##### Example 

```yml
schemas:
   - id: tasklist
     type: headings
     children: # each children is either a direct match or a RegEx that must match
        - open 
        - planned
        - done
```