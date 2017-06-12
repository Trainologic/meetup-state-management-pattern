import {Component, Input} from "@angular/core";
import {ContactService} from "./contact.service";

@Component({
    selector: "my-contact-page",
    templateUrl: "./contact-page.component.html",
    styleUrls: ["./contact-page.component.css"],
    moduleId: module.id,
    providers: [ContactService]
})
export class ContactPageComponent {
    constructor() {
    }
}
