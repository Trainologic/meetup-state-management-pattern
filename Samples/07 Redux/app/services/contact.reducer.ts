import {AppState} from "./app.state";
import {applyFilter} from "./search.reducer";

export interface Contact {
    id: number;
    name: string;
}

export interface ContactsState {
    all: Contact[];
}

export function reducer(state: ContactsState, action) {
    if(state == undefined) {
        const all = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
            { "id": 3, "name": "Udi" },
            { "id": 4, "name": "Tommy" }
        ];

        return {
            all: all,
        }
    }

    if(action.type == "MERGE_UPDATES") {
        const clone = state.all.concat([]);

        for(let update of action.updates) {
            const index = clone.findIndex(c => c.id == update.id);
            if(index != -1) {
                clone[index] = Object.assign({}, clone[index], update);
            }
        }

        return {
            ... state,
            all: clone,
        }
    }

    return state;
}

function loadLatestUpdatesFromServer() {
    return Promise.resolve([
        {id:1, name: "Ori-X"},
        {id:3, name: "Udi-X"},
    ]);
}

export function refreshContacts() {
    return async function(dispatch) {
        const updates = await loadLatestUpdatesFromServer();

        dispatch({type: "MERGE_UPDATES", updates: updates});
    }
}
