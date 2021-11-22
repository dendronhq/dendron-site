---
id: 0dHPoULBsEJLRO6iMnMZA
title: Error Reporting
desc: ''
updated: 1631541299224
created: 1631520222203
---

## Summary

To understand Dendron application behavior, certain error analytics are uploaded to a [sentry.io](https://sentry.io/welcome/) backend service. All executing code paths should report error data in the event of crashes or any error event that is not a direct result of invalid input. For example in the context of HTTP, all `500 Internal Error` code errors should be reported, whereas generally client 400's errors do not need to reported.

## Implementation Considerations

There are several stand alone processes involved with Dendron. Each one must have an active Sentry client in order for data to be reported.

### Plugin

Getting full reporting coverage in the Plugin is tricky. VS Code extensions run in a Node.JS environment within an Extension Host sandbox. There is no way to intercept all exceptions thrown by plugin code in one callback (see [this issue](https://github.com/Microsoft/vscode/issues/45264)). Therefore, all extension invocation points must be wrapped in a `try` block with the error reported in the `catch` block. There are many different invocation points in the VSCode API for an extension; all must be wrapped in order to have complete coverage. Currently, Dendron has the following entry points:

- [`activate()`](https://code.visualstudio.com/api/references/activation-events)
- [Commands](https://code.visualstudio.com/api/extension-guides/command)
- Window Events
    - `window.onDidChangeActiveTextEditor()`
    - `window.onDidChangeVisibleTextEditors()`
- Workspace Events
    - `workspace.onWillSaveTextDocument()`
    - `workspace.onDidChangeTextDocument()`
    - `workspace.onDidOpenTextDocument()`
- File System Watchers
    - `onDidChange()`
- Language Features
    - CodeActionProvider
    - HoverProvider
    - CompletionProvider
    - DefinitionProvider
    - FoldingRangeProvider

All callback invocation points in the plugin extension should be wrapped with a `sentryReportingCallback`:

```typescript
    window.onDidChangeVisibleTextEditors(
      sentryReportingCallback((editors: TextEditor[]) => {
        const ctx = "WindowWatcher:onDidChangeVisibleTextEditors";
        ...
      })
    );
```

There are two kinds of errors being reported in the plugin:
1. Unhandled Exceptions - any exception thrown in a block wrapped by `sentryReportingCallback`
1. `Logger.error()` - logging a message at the error level will also upload an event.

### Dendron Engine

The Dendron express server is configured to forward all errors to a special error handler that will upload error data to Sentry. However, special consideration is required for all `async` handlers. By default, if an asynchronous handler throws an exception resulting in a rejected promise, express will not handle this automatically (see [here](https://expressjs.com/en/guide/error-handling.html)). Therefore, all asynchronous handlers need to be wrapped with an `asyncHandler` that will forward exceptions to the error handler:

```typescript
router.post("/render", asyncHandler(async (req: Request, res: Response) => {
  const resp = await NoteController.instance().render(
    req.body as RenderNoteOpts & { ws: string }
  );
  ExpressUtils.setResponse(res, resp);
}));
```

### CLI

Error Reporting has not yet been implemented in the Dendron command line interface. See [[Plugging Existing Gaps|dendron.dev.errors.reporting#plugging-existing-gaps]] below.

## User Privacy

Dendron takes user privacy very seriously. Dendron will observe user's telemetry settings - if telemetry is disabled for the client, error data will not be uploaded.

Furthermore, special care must be taken to ensure that error messages do not include any [Personal Identifiable Information](https://en.wikipedia.org/wiki/Personal_data) or otherwise data that may be sensitive to a user.

## Future Enhancements

### Plugging Existing Gaps

There are some areas in the code that do not currently upload error reporting. These gaps are intended to be filled with future iterations:
- Dendron CLI
- Webviews (TreeView V2, Preview V2, Calendar View, Seed Browser)
- `logger.error()` occurrences on the Server side.

### Additional Data

There are also additional data points we can add to improve diagnostics and insights:
- Add Typescript Source Mapping for better callstack information.
- Give each thrown `DendronError` a unique ID for deterministic error bucketing and traceability
- Add Performance Metrics

## Related

[[RFC 19: Error Reporting|rfc.19-error-reporting]]

