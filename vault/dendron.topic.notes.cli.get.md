---
id: 4ap62stgbm3fuesfhv10ps7
title: Get
desc: 'Get note by id from workspace'
updated: 1657649787248
created: 1657649504474
---

## Summary

{{fm.desc}}
Differs from [[dendron.topic.notes.cli.lookup.md]] in the following ways
1. Search by id instead of fname
2. No note gets created if note id is not found

## Options

### query
- type: string

Note id to get.

### output
- default: `json`
- values: `json|md_gfm|md_dendron`
    - json: JSON output
    - md_dendron: dendron markdown
    - md_gfm: github flavored markdown 

Controls how note is formatted

## Examples

```bash
dendron note get --query "apples" 
```

- output
    - NOTE: this is truncated for easy viewing

```json
[                                                                                                            
    {                                                                                                        
        "id": "apples",                                                                                      
        "title": "Apples",             
        "desc": "",                                                                                          
        "updated": 1598457956604,                                                                            
        "created": 1598457956604,                                                                            
        "custom": {},                            
        "fname": "dendron.apples",       
        "type": "note",                                                                                      
        "vault": {                                                                                                                                                                                                        
            "fsPath": "vault"                                                                                                                                                                                             
        },                                                                                                                                                                                                                
        "links": [                                                                                                                                                                                                        
            {                            
                "type": "wiki",                                                                              
                "from": {    
                    "fname": "dendron.apples",
                    "id": "apples",                                                                          
                    "vaultName": "vault"
                },                    
                "value": "dendron.boy",                                                                      
                "alias": "dendron.boy",                                                                                                                                                                                   
                "position": {                                                                                                                                                                                             
                    "start": {
                        "line": 4,
                        "column": 7,
                        "offset": 15
                    },
                    "end": {
                        "line": 4,
                        "column": 22,
                        "offset": 30
                    },
                    "indent": []
                },
                "xvault": false,
                "sameFile": false,
                "to": {
                    "fname": "dendron.boy"
                }
            },
    ...
]
```