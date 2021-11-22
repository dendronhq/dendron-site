---
id: fAVA1Vv5ihg4Nt9unsAMv
title: 19 Error Reporting
desc: ''
updated: 1628584227071
created: 1628581867878
---

## Goals

To improve the stability of Dendron and to create a better end-user experience, we would like to start monitoring errors that Dendron is encountering.

## Context

Error reporting is a critical component for every large scale software project. It allows engineers to identify which problems users are encountering, to understand the criticality and impact of those problems, and to diagnose the root cause of the issue for quick resolution.

## Proposal

We plan on using the [sentry.io](https://sentry.io/welcome/) platform as a our tool of choice for error data management. The way it works is that the Dendron client will contain a Sentry error watcher; upon hitting an exception, data around that exception will get uploaded to a Sentry hosted secure database. We can then use Sentry's tooling to analyze our user crashes and errors.

## Details

The types of errors we plan on capturing data for are exceptions and some non-exception induced errors.

### Privacy

We take user privacy very seriously at Dendron and will not use the collected error data for any purposes other than driving bug fixes in the Dendron product. All data uploaded will be [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) compliant.

- The data will not contain any Personally-Identifiable Information (PII) and will be completely anonymous.
- We will observe telemetry opt-out settings
- We have a data retention policy of at most 180 days.

An example error event payload can be found at the bottom of this document.

## Discussion 

Please leave feedback in [this Github discussion](https://github.com/dendronhq/dendron/discussions/1121)

## Example Error Upload


Below is an example error event that has been uploaded. Note: the local file paths in the stack trace for source maps will not appear in production; they are there in this example because I ran the test upload scenario using locally built code.

```json
{
    "event_id": "4e97f1adbc2c411cb750214c4dbc67f1",
    "project": 5898219,
    "release": null,
    "dist": null,
    "platform": "node",
    "message": "",
    "datetime": "2021-08-09T06:03:17.178000Z",
    "tags": [
        [
            "browser",
            "Edge 92.0.902"
        ],
        [
            "browser.name",
            "Edge"
        ],
        [
            "client_os",
            "Mac OS X 10.15.7"
        ],
        [
            "client_os.name",
            "Mac OS X"
        ],
        [
            "device",
            "Mac"
        ],
        [
            "device.family",
            "Mac"
        ],
        [
            "environment",
            "production"
        ],
        [
            "handled",
            "yes"
        ],
        [
            "level",
            "error"
        ],
        [
            "mechanism",
            "generic"
        ],
        [
            "runtime",
            "node v14.16.0"
        ],
        [
            "runtime.name",
            "node"
        ],
        [
            "transaction",
            "GET /debug-sentry"
        ],
        [
            "url",
            "http://localhost/debug-sentry"
        ]
    ],
    "_metrics": {
        "bytes.ingested.event": 13575,
        "bytes.stored.event": 20540
    },
    "breadcrumbs": {
        "values": [
            {
                "timestamp": 1628488836.456,
                "type": "http",
                "category": "http",
                "level": "info",
                "data": {
                    "method": "POST",
                    "status_code": 200,
                    "url": "http://localhost:60285/api/workspace/initialize?"
                }
            },
            {
                "timestamp": 1628488838.64,
                "type": "http",
                "category": "http",
                "level": "info",
                "data": {
                    "method": "POST",
                    "status_code": 200,
                    "url": "https://api.segment.io/v1/batch"
                }
            },
            {
                "timestamp": 1628488838.644,
                "type": "http",
                "category": "http",
                "level": "info",
                "data": {
                    "method": "POST",
                    "status_code": 200,
                    "url": "https://api.segment.io/v1/batch"
                }
            },
            {
                "timestamp": 1628488849.764,
                "type": "http",
                "category": "http",
                "level": "info",
                "data": {
                    "method": "POST",
                    "status_code": 200,
                    "url": "https://api.segment.io/v1/batch"
                }
            },
            {
                "timestamp": 1628488865.322,
                "type": "http",
                "category": "http",
                "level": "info",
                "data": {
                    "method": "POST",
                    "status_code": 200,
                    "url": "https://api.segment.io/v1/batch"
                }
            },
            {
                "timestamp": 1628488997.154,
                "type": "default",
                "category": "console",
                "level": "error",
                "message": "My first Sentry error! [Error: My first Sentry error!\n\tat /Users/jyeung/code/dendron/dendron/packages/api-server/lib/Server.js:110:15\n\tat Layer.handle [as handle_request] (/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/layer.js:95:5)\n\tat next (/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/route.js:137:13)\n\tat Route.dispatch (/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/route.js:112:3)\n\tat Layer.handle [as handle_request] (/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/layer.js:95:5)\n\tat /Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js:281:22\n\tat Function.process_params (/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js:335:12)\n\tat next (/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js:275:10)\n\tat /Users/jyeung/code/dendron/dendron/node_modules/@sentry/tracing/dist/integrations/express.js:87:31\n\tat SendStream.error (/Users/jyeung/code/dendron/dendron/node_modules/serve-static/index.js:121:7)\n\tat SendStream.emit (events.js:315:20)\n\tat SendStream.emit (domain.js:467:12)\n\tat SendStream.error (/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js:270:17)\n\tat SendStream.onStatError (/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js:421:12)\n\tat next (/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js:735:16)\n\tat onstat (/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js:724:14)\n\tat FSReqCallback.oncomplete (fs.js:183:21)\n\tat FSReqCallback.callbackTrampoline (internal/async_hooks.js:131:14)]"
            }
        ]
    },
    "contexts": {
        "browser": {
            "name": "Edge",
            "version": "92.0.902",
            "type": "browser"
        },
        "client_os": {
            "name": "Mac OS X",
            "version": "10.15.7",
            "type": "os"
        },
        "device": {
            "family": "Mac",
            "model": "Mac",
            "brand": "Apple",
            "type": "device"
        },
        "runtime": {
            "name": "node",
            "version": "v14.16.0",
            "type": "runtime"
        },
        "trace": {
            "trace_id": "668ca236b57948d687eacf61d31dc48c",
            "span_id": "b404eb7d213b7ba1",
            "op": "http.server",
            "status": "invalid_argument",
            "data": {
                "baseUrl": "",
                "query": {},
                "url": "/debug-sentry"
            },
            "tags": {
                "http.status_code": "400"
            },
            "type": "trace"
        }
    },
    "culprit": "GET /debug-sentry",
    "environment": "production",
    "exception": {
        "values": [
            {
                "type": "Error",
                "value": "My first Sentry error!",
                "stacktrace": {
                    "frames": [
                        {
                            "function": "FSReqCallback.callbackTrampoline",
                            "module": "async_hooks",
                            "filename": "internal/async_hooks.js",
                            "abs_path": "internal/async_hooks.js",
                            "lineno": 131,
                            "colno": 14,
                            "in_app": false
                        },
                        {
                            "function": "FSReqCallback.oncomplete",
                            "module": "fs",
                            "filename": "fs.js",
                            "abs_path": "fs.js",
                            "lineno": 183,
                            "colno": 21,
                            "in_app": false
                        },
                        {
                            "function": "onstat",
                            "module": "send:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "lineno": 724,
                            "colno": 14,
                            "pre_context": [
                                "  var i = 0",
                                "  var self = this",
                                "",
                                "  debug('stat \"%s\"', path)",
                                "  fs.stat(path, function onstat (err, stat) {",
                                "    if (err && err.code === 'ENOENT' && !extname(path) && path[path.length - 1] !== sep) {",
                                "      // not found, check extensions"
                            ],
                            "context_line": "      return next(err)",
                            "post_context": [
                                "    }",
                                "    if (err) return self.onStatError(err)",
                                "    if (stat.isDirectory()) return self.redirect(path)",
                                "    self.emit('file', path, stat)",
                                "    self.send(path, stat)",
                                "  })",
                                ""
                            ],
                            "in_app": false
                        },
                        {
                            "function": "next",
                            "module": "send:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "lineno": 735,
                            "colno": 16,
                            "pre_context": [
                                "    self.emit('file', path, stat)",
                                "    self.send(path, stat)",
                                "  })",
                                "",
                                "  function next (err) {",
                                "    if (self._extensions.length <= i) {",
                                "      return err"
                            ],
                            "context_line": "        ? self.onStatError(err)",
                            "post_context": [
                                "        : self.error(404)",
                                "    }",
                                "",
                                "    var p = path + '.' + self._extensions[i++]",
                                "",
                                "    debug('stat \"%s\"', p)",
                                "    fs.stat(p, function (err, stat) {"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "SendStream.onStatError",
                            "module": "send:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "lineno": 421,
                            "colno": 12,
                            "pre_context": [
                                " */",
                                "",
                                "SendStream.prototype.onStatError = function onStatError (error) {",
                                "  switch (error.code) {",
                                "    case 'ENAMETOOLONG':",
                                "    case 'ENOENT':",
                                "    case 'ENOTDIR':"
                            ],
                            "context_line": "      this.error(404, error)",
                            "post_context": [
                                "      break",
                                "    default:",
                                "      this.error(500, error)",
                                "      break",
                                "  }",
                                "}",
                                ""
                            ],
                            "in_app": false
                        },
                        {
                            "function": "SendStream.error",
                            "module": "send:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/node_modules/send/index.js",
                            "lineno": 270,
                            "colno": 17,
                            "pre_context": [
                                " * @param {Error} [err]",
                                " * @private",
                                " */",
                                "",
                                "SendStream.prototype.error = function error (status, err) {",
                                "  // emit if listeners instead of responding",
                                "  if (hasListeners(this, 'error')) {"
                            ],
                            "context_line": "    return this.emit('error', createError(status, err, {",
                            "post_context": [
                                "      expose: false",
                                "    }))",
                                "  }",
                                "",
                                "  var res = this.res",
                                "  var msg = statuses[status] || String(status)",
                                "  var doc = createHtmlDocument('Error', escapeHtml(msg))"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "SendStream.emit",
                            "module": "domain",
                            "filename": "domain.js",
                            "abs_path": "domain.js",
                            "lineno": 467,
                            "colno": 12,
                            "in_app": false
                        },
                        {
                            "function": "SendStream.emit",
                            "module": "events",
                            "filename": "events.js",
                            "abs_path": "events.js",
                            "lineno": 315,
                            "colno": 20,
                            "in_app": false
                        },
                        {
                            "function": "SendStream.error",
                            "module": "serve-static:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/serve-static/index.js",
                            "lineno": 121,
                            "colno": 7,
                            "pre_context": [
                                "    // forward errors",
                                "    stream.on('error', function error (err) {",
                                "      if (forwardError || !(err.statusCode < 500)) {",
                                "        next(err)",
                                "        return",
                                "      }",
                                ""
                            ],
                            "context_line": "      next()",
                            "post_context": [
                                "    })",
                                "",
                                "    // pipe",
                                "    stream.pipe(res)",
                                "  }",
                                "}",
                                ""
                            ],
                            "in_app": false
                        },
                        {
                            "function": "null.<anonymous>",
                            "module": "@sentry.tracing.dist.integrations:express",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/@sentry/tracing/dist/integrations/express.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/@sentry/tracing/dist/integrations/express.js",
                            "lineno": 87,
                            "colno": 31,
                            "pre_context": [
                                "                fn.call(this, req, res, function () {",
                                "                    var args = [];",
                                "                    for (var _i = 0; _i < arguments.length; _i++) {",
                                "                        args[_i] = arguments[_i];",
                                "                    }",
                                "                    var _a;",
                                "                    (_a = span) === null || _a === void 0 ? void 0 : _a.finish();"
                            ],
                            "context_line": "                    next.call.apply(next, tslib_1.__spread([this], args));",
                            "post_context": [
                                "                });",
                                "            };",
                                "        }",
                                "        case 4: {",
                                "            return function (err, req, res, next) {",
                                "                var _a;",
                                "                var transaction = res.__sentry_transaction;"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "next",
                            "module": "express.lib.router:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js",
                            "lineno": 275,
                            "colno": 10,
                            "pre_context": [
                                "    // Capture one-time layer values",
                                "    req.params = self.mergeParams",
                                "      ? mergeParams(layer.params, parentParams)",
                                "      : layer.params;",
                                "    var layerPath = layer.path;",
                                "",
                                "    // this should be done for the layer"
                            ],
                            "context_line": "    self.process_params(layer, paramcalled, req, res, function (err) {",
                            "post_context": [
                                "      if (err) {",
                                "        return next(layerError || err);",
                                "      }",
                                "",
                                "      if (route) {",
                                "        return layer.handle_request(req, res, next);",
                                "      }"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "Function.process_params",
                            "module": "express.lib.router:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js",
                            "lineno": 335,
                            "colno": 12,
                            "pre_context": [
                                "  var params = this.params;",
                                "",
                                "  // captured parameters from the layer, keys and values",
                                "  var keys = layer.keys;",
                                "",
                                "  // fast track",
                                "  if (!keys || keys.length === 0) {"
                            ],
                            "context_line": "    return done();",
                            "post_context": [
                                "  }",
                                "",
                                "  var i = 0;",
                                "  var name;",
                                "  var paramIndex = 0;",
                                "  var key;",
                                "  var paramVal;"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "null.<anonymous>",
                            "module": "express.lib.router:index",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/index.js",
                            "lineno": 281,
                            "colno": 22,
                            "pre_context": [
                                "    // this should be done for the layer",
                                "    self.process_params(layer, paramcalled, req, res, function (err) {",
                                "      if (err) {",
                                "        return next(layerError || err);",
                                "      }",
                                "",
                                "      if (route) {"
                            ],
                            "context_line": "        return layer.handle_request(req, res, next);",
                            "post_context": [
                                "      }",
                                "",
                                "      trim_prefix(layer, layerError, layerPath, path);",
                                "    });",
                                "  }",
                                "",
                                "  function trim_prefix(layer, layerError, layerPath, path) {"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "Layer.handle [as handle_request]",
                            "module": "express.lib.router:layer",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/layer.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/layer.js",
                            "lineno": 95,
                            "colno": 5,
                            "pre_context": [
                                "",
                                "  if (fn.length > 3) {",
                                "    // not a standard request handler",
                                "    return next();",
                                "  }",
                                "",
                                "  try {"
                            ],
                            "context_line": "    fn(req, res, next);",
                            "post_context": [
                                "  } catch (err) {",
                                "    next(err);",
                                "  }",
                                "};",
                                "",
                                "/**",
                                " * Check if this route matches `path`, if so"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "Route.dispatch",
                            "module": "express.lib.router:route",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/route.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/route.js",
                            "lineno": 112,
                            "colno": 3,
                            "pre_context": [
                                "  var method = req.method.toLowerCase();",
                                "  if (method === 'head' && !this.methods['head']) {",
                                "    method = 'get';",
                                "  }",
                                "",
                                "  req.route = this;",
                                ""
                            ],
                            "context_line": "  next();",
                            "post_context": [
                                "",
                                "  function next(err) {",
                                "    // signal to exit route",
                                "    if (err && err === 'route') {",
                                "      return done();",
                                "    }",
                                ""
                            ],
                            "in_app": false
                        },
                        {
                            "function": "next",
                            "module": "express.lib.router:route",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/route.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/route.js",
                            "lineno": 137,
                            "colno": 13,
                            "pre_context": [
                                "    if (layer.method && layer.method !== method) {",
                                "      return next(err);",
                                "    }",
                                "",
                                "    if (err) {",
                                "      layer.handle_error(err, req, res, next);",
                                "    } else {"
                            ],
                            "context_line": "      layer.handle_request(req, res, next);",
                            "post_context": [
                                "    }",
                                "  }",
                                "};",
                                "",
                                "/**",
                                " * Add a handler for all HTTP verbs to this route.",
                                " *"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "Layer.handle [as handle_request]",
                            "module": "express.lib.router:layer",
                            "filename": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/layer.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/node_modules/express/lib/router/layer.js",
                            "lineno": 95,
                            "colno": 5,
                            "pre_context": [
                                "",
                                "  if (fn.length > 3) {",
                                "    // not a standard request handler",
                                "    return next();",
                                "  }",
                                "",
                                "  try {"
                            ],
                            "context_line": "    fn(req, res, next);",
                            "post_context": [
                                "  } catch (err) {",
                                "    next(err);",
                                "  }",
                                "};",
                                "",
                                "/**",
                                " * Check if this route matches `path`, if so"
                            ],
                            "in_app": false
                        },
                        {
                            "function": "null.<anonymous>",
                            "module": "Server",
                            "filename": "/Users/jyeung/code/dendron/dendron/packages/api-server/lib/Server.js",
                            "abs_path": "/Users/jyeung/code/dendron/dendron/packages/api-server/lib/Server.js",
                            "lineno": 110,
                            "colno": 15,
                            "pre_context": [
                                "            throw Error(\"no pkg found\");",
                                "        }",
                                "        const version = fs_extra_1.default.readJSONSync(path_1.default.join(pkg, \"package.json\")).version;",
                                "        return res.json({ version });",
                                "    });",
                                "    app.use(\"/api\", routes_1.baseRouter);",
                                "    app.get(\"/debug-sentry\", (req, res) => {"
                            ],
                            "context_line": "        throw new Error(\"My first Sentry error!\");",
                            "post_context": [
                                "    });",
                                "    // The error handler must be before any other error middleware and after all controllers",
                                "    app.use(Sentry.Handlers.errorHandler());",
                                "    app.use((err, _req, res, _next) => {",
                                "        console.error(err.message, err);",
                                "        return res.status(http_status_codes_1.BAD_REQUEST).json({",
                                "            error: err.message,"
                            ],
                            "in_app": true
                        }
                    ]
                },
                "mechanism": {
                    "type": "generic",
                    "handled": true
                }
            }
        ]
    },
    "fingerprint": [
        "{{ default }}"
    ],
    "grouping_config": {
        "enhancements": "eJybzDRxY3J-bm5-npWRgaGlroGxrpHxBABcYgcZ",
        "id": "newstyle:2019-10-29"
    },
    "hashes": [
        "599bbfc2e3e5993211e50d0162ba5202",
        "90d44251ca81b43e268c822ec5dfee44"
    ],
    "key_id": "1744173",
    "level": "error",
    "location": "/Users/jyeung/code/dendron/dendron/packages/api-server/lib/Server.js",
    "logger": "",
    "metadata": {
        "filename": "/Users/jyeung/code/dendron/dendron/packages/api-server/lib/Server.js",
        "function": "null.<anonymous>",
        "type": "Error",
        "value": "My first Sentry error!"
    },
    "received": 1628488998.703633,
    "request": {
        "url": "http://localhost/debug-sentry",
        "method": "GET",
        "headers": [
            [
                "Accept",
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
            ],
            [
                "Accept-Encoding",
                "gzip, deflate, br"
            ],
            [
                "Accept-Language",
                "en-US,en;q=0.9"
            ],
            [
                "Connection",
                "keep-alive"
            ],
            [
                "Host",
                "localhost:60285"
            ],
            [
                "Sec-Ch-Ua",
                "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"92\""
            ],
            [
                "Sec-Ch-Ua-Mobile",
                "?0"
            ],
            [
                "Sec-Fetch-Dest",
                "document"
            ],
            [
                "Sec-Fetch-Mode",
                "navigate"
            ],
            [
                "Sec-Fetch-Site",
                "none"
            ],
            [
                "Sec-Fetch-User",
                "?1"
            ],
            [
                "Upgrade-Insecure-Requests",
                "1"
            ],
            [
                "User-Agent",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.67"
            ]
        ]
    },
    "sdk": {
        "name": "sentry.javascript.node",
        "version": "6.11.0",
        "integrations": [
            "InboundFilters",
            "FunctionToString",
            "Console",
            "OnUncaughtException",
            "OnUnhandledRejection",
            "LinkedErrors",
            "Http",
            "Express"
        ],
        "packages": [
            {
                "name": "npm:@sentry/node",
                "version": "6.11.0"
            }
        ]
    },
    "timestamp": 1628488997.178,
    "title": "Error: My first Sentry error!",
    "transaction": "GET /debug-sentry",
    "type": "error",
    "version": "7"
}
```
