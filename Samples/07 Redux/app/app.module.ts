import {ApplicationRef, Inject, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactListComponent} from "./components/contact-list.component";
import {ContactListItemComponent} from "./components/contact-list-item.component";
import {ContactPageComponent} from "./components/contact-page.component";
import {ContactSearchComponent} from "./components/contact-search.component";
import {APP_STORE, APPSTORE_PROVIDERS} from "./services/app.store";
import {Store} from "redux";
import {AppState} from "./services/app.state";
import {applyFilter} from "./services/root.reducer";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        APPSTORE_PROVIDERS
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactListItemComponent,
        ContactPageComponent,
        ContactSearchComponent
    ],
})
export class AppModule {
    constructor(applicationRef: ApplicationRef, @Inject(APP_STORE) appStore: Store<AppState>) {
        appStore.dispatch(applyFilter());

        const original = applicationRef.tick;

        applicationRef.tick = function() {
            const before = performance.now();

            original.apply(this, arguments);

            const after = performance.now();

            console.log("tick", (after-before));
        }
    }
}
