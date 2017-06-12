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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_store_1 = require("../services/app.store");
var root_reducer_1 = require("../services/root.reducer");
var ContactPageComponent = (function () {
    function ContactPageComponent(appStore) {
        this.appStore = appStore;
    }
    Object.defineProperty(ContactPageComponent.prototype, "state", {
        get: function () {
            return this.appStore.getState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactPageComponent.prototype, "contacts", {
        get: function () {
            return this.state.search.filtered;
        },
        enumerable: true,
        configurable: true
    });
    ContactPageComponent.prototype.refresh = function () {
        this.appStore.dispatch(root_reducer_1.refreshContacts());
    };
    ContactPageComponent.prototype.none = function () {
    };
    return ContactPageComponent;
}());
ContactPageComponent = __decorate([
    core_1.Component({
        selector: "my-contact-page",
        templateUrl: "./contact-page.component.html",
        styleUrls: ["./contact-page.component.css"],
        moduleId: module.id,
        providers: []
    }),
    __param(0, core_1.Inject(app_store_1.APP_STORE)),
    __metadata("design:paramtypes", [Object])
], ContactPageComponent);
exports.ContactPageComponent = ContactPageComponent;
//# sourceMappingURL=contact-page.component.js.map