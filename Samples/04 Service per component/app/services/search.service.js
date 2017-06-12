"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchService = (function () {
    function SearchService() {
        this.state = {
            all: null,
            filtered: [],
            filter: "",
        };
    }
    SearchService.prototype.onContactsLoaded = function (all) {
        this.state.all = all;
        this.apply();
    };
    SearchService.prototype.search = function (filter) {
        this.state.filter = filter;
        this.apply();
    };
    SearchService.prototype.reset = function () {
        this.state.filter = "";
        this.apply();
    };
    SearchService.prototype.apply = function () {
        var filter = this.state.filter.toLowerCase();
        this.state.filtered = this.state.all.filter(function (c) { return c.name.toLowerCase().indexOf(filter) != -1; });
    };
    return SearchService;
}());
exports.SearchService = SearchService;
