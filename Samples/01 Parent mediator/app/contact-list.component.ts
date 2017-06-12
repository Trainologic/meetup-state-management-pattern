import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Contact, ContactService} from "./contact.service";
import {SelectionChanged} from "./contact-list-item.component";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrls: ["./contact-list.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    @Input() contacts: Contact[];
    @Output() selectionChanged: EventEmitter<SelectionChanged>;

    constructor() {
        this.selectionChanged = new EventEmitter<SelectionChanged>();
    }

    onSelectionChanged($event) {
        this.selectionChanged.emit($event);
    }
}
