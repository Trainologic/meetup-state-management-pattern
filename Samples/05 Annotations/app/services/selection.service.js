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
var activity_1 = require("../annotations/activity");
var query_1 = require("../annotations/query");
var reaction_1 = require("../annotations/reaction");
var SelectionService = (function () {
    function SelectionService() {
        this.state = new (function () {
            function class_1() {
                this.all = null;
                this.selected = new Set();
            }
            Object.defineProperty(class_1.prototype, "selectedCount", {
                get: function () {
                    return this.selected.size;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(class_1.prototype, "totalCount", {
                get: function () {
                    return this.all.length;
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }());
    }
    SelectionService.prototype.change = function (contact, selected) {
        if (selected) {
            this.state.selected.add(contact);
        }
        else {
            this.state.selected.delete(contact);
        }
    };
    SelectionService.prototype.isSelected = function (contact) {
        return this.state.selected.has(contact);
    };
    SelectionService.prototype.onContactsLoaded = function (all) {
        this.state.all = all;
    };
    return SelectionService;
}());
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], SelectionService.prototype, "change", null);
__decorate([
    query_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectionService.prototype, "isSelected", null);
__decorate([
    reaction_1.Reaction(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SelectionService.prototype, "onContactsLoaded", null);
exports.SelectionService = SelectionService;
