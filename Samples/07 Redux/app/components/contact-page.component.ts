import {Component, Inject} from "@angular/core";
import {Store} from "redux";
import {APP_STORE} from "../services/app.store";
import {AppState} from "../services/app.state";
import {refreshContacts} from "../services/root.reducer";

@Component({
    selector: "my-contact-page",
    templateUrl: "./contact-page.component.html",
    styleUrls: ["./contact-page.component.css"],
    moduleId: module.id,
    providers: [
    ]
})
export class ContactPageComponent {
    constructor(@Inject(APP_STORE) private appStore: Store<AppState>) {
    }

    get state() {
        return this.appStore.getState();
    }

    get contacts() {
        return this.state.search.filtered;
    }

    refresh() {
        this.appStore.dispatch(refreshContacts());
    }

    none() {
    }
}
