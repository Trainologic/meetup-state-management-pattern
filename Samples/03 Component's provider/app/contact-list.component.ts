import {Component, Input} from "@angular/core";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    constructor(private contactService: ContactService) {
    }

    get contacts() {
        return this.contactService.contacts;
    }
}
