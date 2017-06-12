import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactListComponent} from "./contact-list.component";
import {ContactListItemComponent} from "./contact-list-item.component";
import {StatusComponent} from "./status.component";
import {ContactService} from "./contact.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        ContactService,
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactListItemComponent,
        StatusComponent,
    ],
})
export class AppModule {
}
