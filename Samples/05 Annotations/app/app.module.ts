import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactListComponent} from "./components/contact-list.component";
import {ContactListItemComponent} from "./components/contact-list-item.component";
import {StatusComponent} from "./components/status.component";
import {ContactPageComponent} from "./components/contact-page.component";
import {ContactSearchComponent} from "./components/contact-search.component";
import {ContactService} from "./services/contact.service";
import {SearchService} from "./services/search.service";
import {SelectionService} from "./services/selection.service";
import {RootService} from "./services/root.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        ContactService,
        SearchService,
        SelectionService,
        RootService,
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactListItemComponent,
        StatusComponent,
        ContactPageComponent,
        ContactSearchComponent
    ],
})
export class AppModule {
    constructor() {
    }
}
