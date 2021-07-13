---
id: KsOHg3lyn9iqKmiv
title: Cook
desc: ''
updated: 1626145309211
created: 1626145309211
---

### Adding a an async thunk

1. Navigate to the relevant `slice` where you want to add the feature
	- eg. `src/features/engine/slice.ts`
1. Create an async thunk
	- eg. example
	```ts
	export const initNotes = createAsyncThunk(
		"engine/init",
		async ({ port, ws }: { port: number; ws: string }, { dispatch }) => {
			const logger = createLogger("initNotesThunk");
			const endpoint = `http://localhost:${port}`;
			logger.info({ state: "enter", endpoint, port, ws });
			const api = new DendronApiV2({
				endpoint,
				apiPath: "api",
				logger,
			});
			logger.info({ state: "pre:workspaceSync" });
			const resp = await api.workspaceSync({ ws });
			logger.info({ state: "post:workspaceSync" });
			if (resp.error) {
				dispatch(setError(stringifyError(resp.error)));
				return resp;
			}
			const data = resp.data!;
			logger.info({ state: "pre:setNotes" });
			dispatch(setFromInit(data));
			logger.info({ state: "post:setNotes" });
			return resp;
		}
	);
	```