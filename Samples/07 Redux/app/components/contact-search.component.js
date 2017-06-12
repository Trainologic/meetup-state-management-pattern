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
var ContactSearchComponent = (function () {
    function ContactSearchComponent(appStore) {
        this.appStore = appStore;
    }
    Object.defineProperty(ContactSearchComponent.prototype, "state", {
        get: function () {
            return this.appStore.getState().search;
        },
        enumerable: true,
        configurable: true
    });
    ContactSearchComponent.prototype.reset = function () {
        this.appStore.dispatch(root_reducer_1.resetFilter());
    };
    ContactSearchComponent.prototype.onChanged = function ($event) {
        var what = $event.target.value;
        this.appStore.dispatch(root_reducer_1.search(what));
    };
    return ContactSearchComponent;
}());
ContactSearchComponent = __decorate([
    core_1.Component({
        selector: "my-contact-search",
        templateUrl: "./contact-search.component.html",
        styleUrls: ["./contact-search.component.css"],
        moduleId: module.id,
    }),
    __param(0, core_1.Inject(app_store_1.APP_STORE)),
    __metadata("design:paramtypes", [Object])
], ContactSearchComponent);
exports.ContactSearchComponent = ContactSearchComponent;
//# sourceMappingURL=contact-search.component.js.map