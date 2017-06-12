import {Component, Input} from "@angular/core";
import {RootService} from "../services/root.service";

@Component({
    selector: "my-contact-search",
    templateUrl: "./contact-search.component.html",
    styleUrls: ["./contact-search.component.css"],
    moduleId: module.id,
})
export class ContactSearchComponent {
    constructor(private rootService: RootService) {
    }

    get state() {
        return this.rootService.state.search;
    }

    reset() {
        this.rootService.resetSearch();
    }

    onWhatChanged($event) {
        const what = $event.target.value;

        this.rootService.search(what);
    }
}
