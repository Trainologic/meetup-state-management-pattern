import {ChangeDetectionStrategy, Component, Inject, Input} from "@angular/core";
import {AppState} from "../services/app.state";
import {Contact} from "../services/contact.reducer";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
    @Input() contacts: Contact[];

    constructor() {
    }

    trackFn(index) {
        return index;
    }
}
