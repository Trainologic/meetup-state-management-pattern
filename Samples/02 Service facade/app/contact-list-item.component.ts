import {Component, Input} from "@angular/core";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-contact-list-item",
    templateUrl: "./contact-list-item.component.html",
    styleUrls: ["./contact-list-item.component.css"],
    moduleId: module.id,
})
export class ContactListItemComponent {
    @Input() contact: Contact;

    constructor(private contactService: ContactService) {
    }

    changeSelection(contact, selected) {
        this.contactService.changeSelection(contact, selected);
    }
}
