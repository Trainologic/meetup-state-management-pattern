import {ContactsState} from "./contact.reducer";
import {SearchState} from "./search.reducer";

export interface AppState {
    contacts: ContactsState,
    search: SearchState,
}
