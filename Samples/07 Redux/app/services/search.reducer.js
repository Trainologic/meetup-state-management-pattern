"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function reducer(state, action) {
    if (state == undefined) {
        return {
            filter: "",
            filtered: [],
        };
    }
    if (action.type == "SET_FILTER") {
        return __assign({}, state, { filter: action.filter, filtered: [] });
    }
    else if (action.type == "APPLY_FILTER") {
        return __assign({}, state, { filtered: action.all.filter(function (c) { return c.name.toLowerCase().indexOf(state.filter.toLowerCase()) != -1; }) });
    }
    return state;
}
exports.reducer = reducer;
function setFilter(filter) {
    return function (dispatch) {
        dispatch({ type: "SET_FILTER", filter: filter });
    };
}
exports.setFilter = setFilter;
function search(all, filter) {
    return function (dispatch) {
        dispatch(setFilter(filter));
        dispatch(applyFilter(all));
    };
}
exports.search = search;
function applyFilter(all) {
    return function (dispatch) {
        dispatch({ type: "APPLY_FILTER", all: all });
    };
}
exports.applyFilter = applyFilter;
//# sourceMappingURL=search.reducer.js.map