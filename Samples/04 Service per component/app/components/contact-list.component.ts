import {Component, Inject} from "@angular/core";
import {AppState} from "../services/app.state";
import {RootService} from "../services/root.service";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    constructor(private rootService: RootService) {
    }

    get state() {
        return this.rootService.state.search;
    }
}
