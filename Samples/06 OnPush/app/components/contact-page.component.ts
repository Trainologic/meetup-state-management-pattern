import {Component} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {RootService} from "../services/root.service";
import {SearchService} from "../services/search.service";
import {SelectionService} from "../services/selection.service";

@Component({
    selector: "my-contact-page",
    templateUrl: "./contact-page.component.html",
    styleUrls: ["./contact-page.component.css"],
    moduleId: module.id,
    providers: [
        // ContactService,
        // SearchService,
        // SelectionService,
        // RootService,
    ]
})
export class ContactPageComponent {
    constructor(private rootService: RootService) {
    }

    get state() {
        return this.rootService.state;
    }

    get contacts() {
        return this.state.search.filtered;
    }

    toggle() {
        this.rootService.toggle();
    }

    refresh() {
        this.rootService.refresh();
    }

    none() {
    }
}
