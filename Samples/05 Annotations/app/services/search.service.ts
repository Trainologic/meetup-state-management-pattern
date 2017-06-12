import {Contact} from "./contact.service";
import {Reaction} from "../annotations/reaction";
import {Activity} from "../annotations/activity";

export interface SearchState {
    all: Contact[];
    filtered: Contact[];
    filter: string;
}

export class SearchService {
    state: SearchState;

    constructor() {
        this.state = {
            all: null,
            filtered: [],
            filter: "",
        };
    }

    @Activity()
    search(filter: string) {
        this.state.filter = filter;

        this.apply();
    }

    @Activity()
    reset() {
        this.state.filter = "";

        this.apply();
    }

    @Reaction()
    onContactsLoaded(all: Contact[]) {
        this.state.all = all;

        this.apply();
    }

    private apply() {
        const filter = this.state.filter.toLowerCase();
        this.state.filtered = this.state.all.filter(c => c.name.toLowerCase().indexOf(filter)!=-1);
    }
}
