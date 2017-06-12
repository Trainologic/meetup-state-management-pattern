"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ContactService = ContactService;
