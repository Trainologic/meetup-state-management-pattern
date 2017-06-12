import {Component, ElementRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AppState, Contact} from "./app.state";
import { Store } from '@ngrx/store';

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Observable<Contact[]>;

    constructor(private store: Store<AppState>) {
        this.contacts = store.select("contacts");
    }

    refresh() {
        this.store.dispatch({type: "REFRESH"});
    }

    noop() {
    }
}
