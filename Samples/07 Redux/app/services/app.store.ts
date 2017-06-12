import {createStore, applyMiddleware} from "redux";
import {InjectionToken} from "@angular/core";
import {rootReducer} from "./root.reducer";
import thunk  from 'redux-thunk'
import {Store} from "redux";
import {AppState} from "./app.state";

export const appStore: Store<AppState> = createStore(rootReducer, applyMiddleware(thunk)) as any;

export const APP_STORE = new InjectionToken("APP_STORE");

export const APPSTORE_PROVIDERS = [
    {provide: APP_STORE, useValue: appStore},
];
