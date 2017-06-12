import {Component, ElementRef} from "@angular/core";
import {Contact} from "./contact.service";
import {SelectionChanged} from "./contact-list-item.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];
    selected: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];

        this.selected = [];
    }

    onSelectionChanged($event: SelectionChanged) {
        const {contact, selected} = $event;

        contact.selected = selected;
        const index = this.selected.findIndex(c => c == contact);

        if(contact.selected) {
            if(index==-1) {
                this.selected.push(contact);
            }
        }
        else {
            if(index != -1) {
                this.selected.splice(index, 1);
            }
        }
    }
}
