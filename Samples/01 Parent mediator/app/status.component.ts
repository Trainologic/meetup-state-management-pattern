import {Component, Input} from "@angular/core";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-status",
    templateUrl: "./status.component.html",
    styleUrls: ["./status.component.css"],
    moduleId: module.id,
})
export class StatusComponent {
    @Input() all: Contact[];
    @Input() selected: Contact[];

    constructor() {
    }
}
