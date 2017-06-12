"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var reaction_1 = require("../annotations/reaction");
var activity_1 = require("../annotations/activity");
var SearchService = (function () {
    function SearchService() {
        this.state = {
            all: null,
            filtered: [],
            filter: "",
        };
    }
    SearchService.prototype.search = function (filter) {
        this.state.filter = filter;
        this.apply();
    };
    SearchService.prototype.reset = function () {
        this.state.filter = "";
        this.apply();
    };
    SearchService.prototype.onContactsLoaded = function (all) {
        this.state.all = all;
        this.apply();
    };
    SearchService.prototype.apply = function () {
        var filter = this.state.filter.toLowerCase();
        this.state.filtered = this.state.all.filter(function (c) { return c.name.toLowerCase().indexOf(filter) != -1; });
    };
    return SearchService;
}());
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SearchService.prototype, "search", null);
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SearchService.prototype, "reset", null);
__decorate([
    reaction_1.Reaction(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SearchService.prototype, "onContactsLoaded", null);
exports.SearchService = SearchService;
