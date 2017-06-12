import {Contact} from "./contact.reducer";

export interface SearchState {
    filtered: Contact[];
    filter: string;
}

export function reducer(state: SearchState, action) {
    if(state == undefined) {
        return {
            filter: "",
            filtered: [],
        }
    }

    if(action.type == "SET_FILTER") {
        return {
            ... state,
            filter: action.filter,
            filtered: [],
        }
    }
    else if(action.type == "APPLY_FILTER") {
        return {
            ... state,
            filtered: action.all.filter(c => c.name.toLowerCase().indexOf(state.filter.toLowerCase())!=-1),
        }
    }

    return state;
}

export function setFilter(filter: string) {
    return function(dispatch) {
        dispatch({type: "SET_FILTER", filter: filter});
    }
}

export function search(all: Contact[], filter: string) {
    return function(dispatch) {
        dispatch(setFilter(filter));

        dispatch(applyFilter(all));
    }
}

export function applyFilter(all: Contact[]) {
    return function(dispatch) {
        dispatch({type: "APPLY_FILTER", all: all});
    }
}
