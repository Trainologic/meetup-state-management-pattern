import {ChangeDetectionStrategy, Component, Inject, Input} from "@angular/core";
import {AppState} from "../services/app.state";
import {RootService} from "../services/root.service";
import {Contact} from "../services/contact.service";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
    @Input() contacts: Contact[];

    constructor() {
    }

    // trackByFn(index, item) {
    //     console.log("trackBy");
    //     return index;
    // }

    // get state() {
    //     return this.rootService.state.search;
    // }
}
