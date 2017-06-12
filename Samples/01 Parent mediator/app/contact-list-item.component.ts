import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-contact-list-item",
    templateUrl: "./contact-list-item.component.html",
    styleUrls: ["./contact-list-item.component.css"],
    moduleId: module.id,
})
export class ContactListItemComponent {
    @Input() contact: Contact;
    @Output() selectionChanged: EventEmitter<SelectionChanged>;

    constructor() {
        this.selectionChanged = new EventEmitter<SelectionChanged>();
    }

    changeSelection(contact, selected) {
        this.selectionChanged.emit({
            contact: contact,
            selected: selected,
        })
    }
}

export interface SelectionChanged {
    contact: Contact;
    selected: boolean;
}

