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
var selection_service_1 = require("./selection.service");
var search_service_1 = require("./search.service");
var core_1 = require("@angular/core");
var contact_service_1 = require("./contact.service");
var activity_1 = require("../annotations/activity");
var reaction_1 = require("../annotations/reaction");
var RootService = (function () {
    function RootService(contactService, selectionService, searchService) {
        this.contactService = contactService;
        this.selectionService = selectionService;
        this.searchService = searchService;
        this.state = {
            showList: true,
            contacts: contactService.state,
            selection: selectionService.state,
            search: searchService.state,
        };
        this.onContactsLoaded();
    }
    RootService.prototype.select = function (contact, selected) {
        this.selectionService.change(contact, selected);
    };
    RootService.prototype.search = function (filter) {
        this.searchService.search(filter);
    };
    RootService.prototype.resetSearch = function () {
        this.searchService.reset();
    };
    RootService.prototype.toggle = function () {
        this.state.showList = !this.state.showList;
    };
    RootService.prototype.refresh = function () {
        this.contactService.refresh();
        this.onContactsLoaded();
    };
    RootService.prototype.onContactsLoaded = function () {
        var all = this.state.contacts.all;
        this.searchService.onContactsLoaded(all);
        this.selectionService.onContactsLoaded(all);
    };
    return RootService;
}());
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RootService.prototype, "select", null);
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RootService.prototype, "search", null);
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootService.prototype, "resetSearch", null);
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootService.prototype, "toggle", null);
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootService.prototype, "refresh", null);
__decorate([
    reaction_1.Reaction(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootService.prototype, "onContactsLoaded", null);
RootService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        selection_service_1.SelectionService,
        search_service_1.SearchService])
], RootService);
exports.RootService = RootService;
