import {Component, Input} from "@angular/core";
import {Contact, ContactService} from "../services/contact.service";
import {SelectionService} from "../services/selection.service";
import {RootService} from "../services/root.service";

@Component({
    selector: "my-contact-list-item",
    templateUrl: "./contact-list-item.component.html",
    styleUrls: ["./contact-list-item.component.css"],
    moduleId: module.id,
})
export class ContactListItemComponent {
    @Input() contact: Contact;

    constructor(private rootService: RootService, private selectionService: SelectionService) {
    }

    changeSelection(contact: Contact, selected: boolean) {
        this.rootService.select(contact, selected);
    }

    isSelected(contact: Contact) {
        return this.selectionService.isSelected(contact);
    }
}
