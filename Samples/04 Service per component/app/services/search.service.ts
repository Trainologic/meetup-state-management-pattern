import {Contact} from "./contact.service";

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

    onContactsLoaded(all: Contact[]) {
        this.state.all = all;

        this.apply();
    }

    search(filter: string) {
        this.state.filter = filter;

        this.apply();
    }

    reset() {
        this.state.filter = "";

        this.apply();
    }

    private apply() {
        const filter = this.state.filter.toLowerCase();
        this.state.filtered = this.state.all.filter(c => c.name.toLowerCase().indexOf(filter)!=-1);
    }
}
