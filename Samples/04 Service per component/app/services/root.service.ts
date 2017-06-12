import {SelectionService} from "./selection.service";
import {SearchService} from "./search.service";
import {Injectable} from "@angular/core";
import {Contact, ContactService} from "./contact.service";
import {AppState} from "./app.state";

@Injectable()
export class RootService {
    state: AppState;

    constructor(private contactService: ContactService,
                private selectionService: SelectionService,
                private searchService: SearchService) {
        this.state = {
            showList: true,
            contacts: contactService.state,
            selection: selectionService.state,
            search: searchService.state,
        };

        this.onContactsLoaded(this.state.contacts.all);
    }

    select(contact, selected) {
        this.selectionService.change(contact, selected);
    }

    search(filter: string) {
        this.searchService.search(filter);
    }

    resetSearch() {
        this.searchService.reset();
    }

    toggle() {
        this.state.showList = !this.state.showList;
    }

    refresh() {
        this.contactService.refresh();

        this.onContactsLoaded(this.state.contacts.all);
    }

    private onContactsLoaded(all: Contact[]) {
        this.searchService.onContactsLoaded(all);
        this.selectionService.onContactsLoaded(all)
    }
}
