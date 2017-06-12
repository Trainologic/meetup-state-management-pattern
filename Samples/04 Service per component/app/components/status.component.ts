import {Component} from "@angular/core";
import {RootService} from "../services/root.service";

@Component({
    selector: "my-status",
    templateUrl: "./status.component.html",
    styleUrls: ["./status.component.css"],
    moduleId: module.id,
})
export class StatusComponent {
    constructor(private rootService: RootService) {
    }

    get state() {
        return this.rootService.state.selection;
    }
}
