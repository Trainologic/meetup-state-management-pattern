"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    SelectionService.prototype.onContactsLoaded = function (all) {
        this.state.all = all;
    };
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
    return SelectionService;
}());
exports.SelectionService = SelectionService;
