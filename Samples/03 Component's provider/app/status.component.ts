import {Component, Input} from "@angular/core";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-status",
    templateUrl: "./status.component.html",
    styleUrls: ["./status.component.css"],
    moduleId: module.id,
})
export class StatusComponent {
    constructor(private contactService: ContactService) {
    }

    get selected() {
        return this.contactService.selected.length;
    }

    get total() {
        return this.contactService.contacts.length;
    }
}
