import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

export interface Contact {
    id: number;
    name: string;
}

export interface AppState {
    contacts: Contact[],
}

export function contactsReducer(state: AppState, action) {
    if(state == undefined) {
        return [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    if(action.type == "SET") {
        return action.contacts;
    }

    return state;
}

function loadFromServer(): Observable<Contact[]> {
    return Observable.of([
        {id:1, name: "Ori-X"},
        {id:2, name: "Roni-X"},
    ]);
}

@Injectable()
export class ContactEffects {
    constructor(private actions$: Actions) {
    }

    @Effect() login$ = this.actions$
        .ofType('REFRESH')
        .switchMap(payload => loadFromServer().map(contacts => ({ type: 'SET', contacts: contacts })));
}
