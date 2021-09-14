---
id: SaBKKTvkW1OLoBItJHHBP
title: Nav
desc: ''
updated: 1624853145846
created: 1624851967210
---

## Get Notes

- _data/notes.js
```js
getNotes {

}

```


## Gen Nav

```js
buildNav {
	let { notes, domains } = await require("../_data/notes.js")();
	...
	createNav {
		
	}
}
```

## Notes
- shortcode.js
```js
toMarkdown {
	navParent = getClosetNavVisibleParent
}


getClosetNavVisibleParent(fname, noteIndex) {
	maybeNote := getByFname(fname)
	if !maybeNote
		return noteIndex

	if maybeNote.permalink = '/'
		return 'root'

	if notes[maybeNote.parent].has_collection
		return notes[maybeNote.parent]
	else
		return maybeNote
}
```