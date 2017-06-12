import {Component, Input, Inject} from "@angular/core";
import {Store} from "redux";
import {AppState} from "../services/app.state";
import {APP_STORE} from "../services/app.store";
import {resetFilter, search} from "../services/root.reducer";

@Component({
    selector: "my-contact-search",
    templateUrl: "./contact-search.component.html",
    styleUrls: ["./contact-search.component.css"],
    moduleId: module.id,
})
export class ContactSearchComponent {
    constructor(@Inject(APP_STORE) private appStore: Store<AppState>) {
    }

    get state() {
        return this.appStore.getState().search;
    }

    reset() {
        this.appStore.dispatch(resetFilter());
    }

    onChanged($event) {
        const what = $event.target.value;

        this.appStore.dispatch(search(what));
    }
}
