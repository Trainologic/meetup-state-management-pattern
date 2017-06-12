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
var core_1 = require("@angular/core");
var selection_service_1 = require("../services/selection.service");
var root_service_1 = require("../services/root.service");
var ContactListItemComponent = (function () {
    function ContactListItemComponent(rootService, selectionService) {
        this.rootService = rootService;
        this.selectionService = selectionService;
    }
    ContactListItemComponent.prototype.changeSelection = function (contact, selected) {
        this.rootService.select(contact, selected);
    };
    ContactListItemComponent.prototype.isSelected = function (contact) {
        return this.selectionService.isSelected(contact);
    };
    return ContactListItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactListItemComponent.prototype, "contact", void 0);
ContactListItemComponent = __decorate([
    core_1.Component({
        selector: "my-contact-list-item",
        templateUrl: "./contact-list-item.component.html",
        styleUrls: ["./contact-list-item.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [root_service_1.RootService, selection_service_1.SelectionService])
], ContactListItemComponent);
exports.ContactListItemComponent = ContactListItemComponent;
