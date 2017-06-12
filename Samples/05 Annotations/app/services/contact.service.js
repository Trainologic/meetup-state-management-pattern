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
var ContactService = (function () {
    function ContactService() {
        this.state = {
            all: [
                { "id": 1, "name": "Ori" },
                { "id": 2, "name": "Roni" },
                { "id": 3, "name": "Udi" },
                { "id": 4, "name": "Tommy" },
            ]
        };
    }
    ContactService.prototype.refresh = function () {
        var rand = Math.floor(Math.random() * 10000);
        var updates = [
            { "id": 2, "name": "Roni-" + rand },
            { "id": 3, "name": "Udi-" + rand },
        ];
        var existing = this.state.all;
        var _loop_1 = function (update) {
            var index = existing.findIndex(function (c) { return c.id == update.id; });
            if (index != -1) {
                Object.assign(existing[index], update);
            }
        };
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            _loop_1(update);
        }
    };
    return ContactService;
}());
__decorate([
    activity_1.Activity(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactService.prototype, "refresh", null);
exports.ContactService = ContactService;
