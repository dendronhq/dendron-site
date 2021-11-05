---
id: 9j2PfP1Naeja0nYAmeUT9
title: Search
desc: ''
updated: 1635961382144
created: 1634246395302
---

## Detail

- layout.tsx
```tsx
<DendronSearch {...props} />
```

- components/DendronSearch.tsx
```tsx

DebouncedDendronSearchComponent {

    debouncedSearch = debounce(..., SEARCH_DELAY)
    return DendronSearchComponent search=debouncedSearch
}

DendronSearchComponent(props) {
    search : = props

    value, search = useState(initValue)

    { noteBodies, requestNotes } = useNoteBodies();

    useEffect {
        search ? search(value, setSearchResults)
    }, [value, search]

    useEffect {
        requestNotes(searchResults)
    }, [searchResults]

    useEffect {
        value.startsWith "?" {
            setResults
        }
    }

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

## Fuse

- location: utils/fuse.ts

```tsx
useFuse {
    value = await provider
    if (value) {

    }
    
}

```





## Related
- [[Nextjs|pkg.pods-core.ref.nextjs]]
