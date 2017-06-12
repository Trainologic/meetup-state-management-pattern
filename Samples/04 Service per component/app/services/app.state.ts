import {SelectionState} from "./selection.service";
import {ContactsState} from "./contact.service";
import {SearchState} from "./search.service";

export interface AppState {
    showList: boolean,
    contacts: ContactsState,
    selection: SelectionState,
    search: SearchState;
}
