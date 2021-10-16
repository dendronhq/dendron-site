---
id: 9j2PfP1Naeja0nYAmeUT9
title: Search
desc: ''
updated: 1634255605881
created: 1634246395302
---


- layout.tsx
```tsx
<DendronSearch {...props} />
```

- components/DendronSearch.tsx
```tsx
DendronSearchComponent {
    useNoteBodies

    AutoComplete {
        results.map {
            AutoComplete {
                MatchBody {

                }
            }
        }
    }
}

MatchBody {
    
}

useNoteBodies {
    fetchNoteBodyWithId(id) {
        fetch /data/notes/${id}.md
    }
}
```



## Related
- [[Nextjs|pkg.pods-core.ref.nextjs]]
