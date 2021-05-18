---
id: 8a70e9c9-bf7e-4060-af79-abd206f288df
title: Reusability
desc: ''
updated: 1621088103149
created: 1620582413279
---

## Goal

Improvements to the Reusability of Schemas.

## Proposal

### Json reference

Make it possible to use JSON references and to improve the handlying of this turn the Id property value into a key for the schema object making it easier to reference them. Or allow the Usage of the $anchor keyword the following includes examples of booth.

#### Example

`foo.schema.yml`:
```yml
schemas:
  foo:
    parent: root
    children:
        - $ref: 'bar.schema.yml#/schemas/bar'
        - $ref: 'baz.schema.yml#baz'  
```
`bar.schema.yml`:
```yml
schemas:
  bar:
    parent: root
    children: 
        - $ref: '#/schemas/one'
  one: {}
```
`baz.schema.yml`:
```yml
schemas:
  baz:
    $anchor: baz
    title: baz
    children:
      - $ref: '#two'
  two: 
    $anchor: 'two'
    
```

### Extendability

To make it possible to extend a schema, we may want to intruduce certain Keywords inline with the composing of `json-schemas`:

- allOf
- oneOf
- anyOf

Additionaly we may want to think about using the `$dynamicRef` keyword in combination with the `$dynamicAnchor` keyword to allow the redirection of a `$dynamicRef` to a diffrent `$anchor`.


#### Example

`projects-base.schema.yml`:
```yaml
$defs:
    projects:
        $anchor: projectsBase
        title: Projects
        children:
        - $dynamicRef: '#project'
    project:
        base:
            $anchor: projectBase
            children: # shortened for example purpose
            - docu 
            - meetings
            - plan
            allOf:
            - $dynamicRef: '#projectPattern'
        pattern:
            $anchor: projectPattern
            pattern: '[a-z]{3}-(?:[0-9]{2}[1-9])|(?:[0-9][1-9][0-9])|(?:[1-9][0-9]{2})'
schemas:
  projects:
    id: projects
    allOf: 
    - $ref: '#projectsBase'
  project:
    $anchor: project
    id: project    
    allOf:
    - $ref: '#projectBase'    
```

`projects-development.schema.yml`:
```yaml    
schemas:
  developmentProjects:
    allOf:
    - $ref: 'projects-base.schema.yml#projecstBase'
    - id: developmentProjects
  developmentProject:
    $dynamicAnchor: project
    id: developmentProject
    allOf:
        - $ref:'projects-base.schema.yml#projectBase
        - children: 
            - architectur
            - build    
```


