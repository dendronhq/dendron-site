---
id: ffe67303-57be-452c-aa73-f7d7e9c4f00f
title: Types
desc: ''
updated: 1620920046926
created: 1620582238808
---

## Goals

Creating the possibility to extend the functionality of schemas by introducing a type value on them.

## Proposal

Adding a type value to schemas, this value would be optional and default to the current functionality. 
The current functionality should be named `pattern` in my eyes and be the default value for this key in the yaml. 

These Types should implement a common Interface to be used by dendron, specifying the Keys of the schema Object they handle and Specify a Json Schema to validate against.
Dendron should provide ways for the diffrent types of extensions it recognizes to contribute their own types, that implement the common Interface.
A type registered this way would be used by `{extensionName}:{typeName}` inside the `*.schema.yaml` files. This allows for flexibility with extending the functionality of Dendron.


### Proposed Types

The following are Types that I would Propose to create as part of dendrons core functionality.

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

The purpose of segments could be twofold one would be to merge multiple hierarchy levels into one overall hierachy level. 

Or splitting one Hierachy level into multiple levels. 


##### Example


```yml
schemas:
  - id: date
    title: Example #defaults to the id
    type: segments 
    pattern: $0.$1.$2 # this Key would be optional and default would be to concate the Patterns of the schemas in the elements array, the ${digit} part describes the hierachy lvl in this scheme, but could use named identifiers as well or static pattern parts. A dot represents a Dot in the filename. 
    elements: # required for segments, order matters here if number references are used.    
      - id: year # this would match the reference $0 or $year
      - id: month # this would match the reference $1 or $month
      - id: day # this would match the reference $2 or $day        
```



#### Enum

This type extends the Pattern type with the option to map the matched values of the Pattern to a title that should be used in the UI.

Additionaly we Could extend it to provide a way to conditionaly change the Children depending on what gets matched. 
Exampel being here the pattern for the day to reflect the actual days of the month.

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



#### Extension:Type

This would be how an Extension provided Type could be used.

##### Example

```yaml
schemas:
    - id: jiraIssue
      type: 'jiraPod:issue'
      # here would then be a list of settings for this type 
      # example could be
      projectSlug: /[A-Z]{3}/ #The pattern to match the Project slug
      issueId: /[1-9][0-9]*/ #The Pattern to macht the Id
      issueState: # The States of the issue 
        - opened
        - in work
        - to review
        - done
```

### Common Interface

Each Type needs to implement a certain interface providing dendron with functionality to handle the nodes acordingly.

#### Example

Just an example how it could look, feel free to provide other implementation examples.
```ts
enum SortingDirections{
    ascending,
    decending
};
enum DNavigationType{
    sibling,
    level
};
enum SiblingNavigationDirection{
    previous,
    next
}
enum LevelNavigationDirection{
    up,
    down
}
type NavigationDirection = SiblingNavigationDirection|LevelNavigationDirection; 
type NavigationFunction<T> = (node:T, direction:NavigationDirection)=>T;

type SortingFunction<T> = (left:T,right:T)=> number;
type MatchFunction<T> = (hierachy:string, args:T)=>boolean;
interface Node {} // Placeholder 

interface ISchemaType {
        
    getTypeName() : string; // The Name of the Type
    
    getSchemaKeys() : string[]; // The Schema Keys that this Type requires for
    
    getSortingDirections():SortingDirections[]; // The Sort Directions this Type provides. Null for default behaviour
    getSortingFunctionForDirection<T>(direction:SortingDirections):SortingFunction<T>; // The function that would sort The Nodes acording to the direction
    getNavigateFunction<T>(navigationType:NavigationType):NavigationFunction<T>; // Returns a function to navigate the Notes, null for default behavior;    
    getMatcheFunction<T>():MatchFunction<T>; //Returns a function to check if the schema applies to the Hierachy.  
}

abstract class SchemaType implements ISchemaType {
    
    abstract getTypeName(): string;

    abstract getSchemaKeys(): string[];

    getSortingDirections(): SortingDirections[] {
        return [SortingDirections.ascending, SortingDirections.decending];
    }

    getSortingFunctionForDirection<T>(direction: SortingDirections): SortingFunction<T> {
        throw new Error("Method not implemented."); //Default
    }
    getNavigateFunction<T>(navigationType: NavigationType): NavigationFunction<T> {
        throw new Error("Method not implemented."); // Default
    }
    getMatcheFunction<T>(): MatchFunction<T> {
        throw new Error("Method not implemented."); // Default 
    }
}
```
