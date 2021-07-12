---
id: JE3t4O3SrKwTCCnWRhsL2
title: Seed
desc: ''
updated: 1625786167511
created: 1625786167512
---

## Summary

This goes over seeds

## Adding a seed


```ts
id = registry.get(id)
seedService.addSeed(id, seed)
```

- file: src/seed/service.ts
```ts
SeedService.addSeed(id, seed) {
	@addSeedMetadata {
		config.seeds[id] = seed
		config.vaults.add(seed)
	}
}
```