import {AppState} from "./app.state";
import {combineReducers} from "redux";
import * as searchReducer from "./search.reducer";
import * as contactsReducer from "./contact.reducer";
import {appStore} from "./app.store";

export const rootReducer = combineReducers({
    contacts: contactsReducer.reducer,
    search: searchReducer.reducer,
});

export function refreshContacts() {
    return async function(dispatch) {
        await dispatch(contactsReducer.refreshContacts());

        dispatch(applyFilter());
    }
}

export function applyFilter() {
    return async function(dispatch) {
        dispatch(searchReducer.applyFilter(appStore.getState().contacts.all));
    }
}

export function resetFilter() {
    return function(dispatch) {
        dispatch(searchReducer.setFilter(""));
        dispatch(searchReducer.applyFilter(appStore.getState().contacts.all));
    }
}

export function search(filter: string) {
    return async function(dispatch) {
        dispatch(searchReducer.setFilter(filter));
        dispatch(applyFilter());
    }
}
