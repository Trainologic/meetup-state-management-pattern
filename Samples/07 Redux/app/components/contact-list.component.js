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
var ContactListComponent = (function () {
    function ContactListComponent() {
    }
    ContactListComponent.prototype.trackFn = function (index) {
        return index;
    };
    return ContactListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ContactListComponent.prototype, "contacts", void 0);
ContactListComponent = __decorate([
    core_1.Component({
        selector: "my-contact-list",
        templateUrl: "./contact-list.component.html",
        styleUrls: ["./contact-list.component.css"],
        moduleId: module.id,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map