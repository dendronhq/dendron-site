---
id: dsc31fxcsq3bqsobntv7m8e
title: Find
desc: 'Find notes by note properties'
updated: 1657910074804
created: 1657909763384
---

## Summary

{{fm.desc}}
Currently supports finding notes by following properties (exact match):
- fname
- vault name

Returns list of notes that matches all properties. If no property is provided, return empty list

## Options

### fname
- type: string

Note fname

### vault

Note vault name

### output
- default: `json`
- values: `json|md_gfm|md_dendron`
    - json: JSON output
    - md_dendron: dendron markdown
    - md_gfm: github flavored markdown 

Controls how note is formatted

## Examples

```bash
dendron note find --fname "dendron.apples" 
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