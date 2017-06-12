"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var core_1 = require("@angular/core");
var root_reducer_1 = require("./root.reducer");
var redux_thunk_1 = require("redux-thunk");
exports.appStore = redux_1.createStore(root_reducer_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
exports.APP_STORE = new core_1.InjectionToken("APP_STORE");
exports.APPSTORE_PROVIDERS = [
    { provide: exports.APP_STORE, useValue: exports.appStore },
];
//# sourceMappingURL=app.store.js.map