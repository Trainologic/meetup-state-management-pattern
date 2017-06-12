import {ApplicationRef, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {ContactEffects, contactsReducer} from "./app.state";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore({ contacts: contactsReducer }),
        EffectsModule.run(ContactEffects)
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
    ],
})
export class AppModule {
    constructor(applicationRef: ApplicationRef) {
        const original = applicationRef.tick;

        applicationRef.tick = function() {
            const before = performance.now();

            original.apply(this, arguments);

            const after = performance.now();

            console.log("tick", (after-before));
        }
    }
}
