import {Component, Inject, Input} from "@angular/core";
import {AppState} from "../services/app.state";
import {APP_STORE} from "../services/app.store";
import {Store} from "redux";
import {Contact} from "../services/contact.reducer";

@Component({
    selector: "my-contact-list-item",
    templateUrl: "./contact-list-item.component.html",
    styleUrls: ["./contact-list-item.component.css"],
    moduleId: module.id,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListItemComponent {
    @Input() contact: Contact;

    constructor() {
    }
}
