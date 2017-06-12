import {SelectionService} from "./selection.service";
import {SearchService} from "./search.service";
import {Injectable} from "@angular/core";
import {Contact, ContactService} from "./contact.service";
import {AppState} from "./app.state";
import {Activity} from "../annotations/activity";
import {Reaction} from "../annotations/reaction";

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

        this.onContactsLoaded();
    }

    @Activity()
    select(contact, selected) {
        this.selectionService.change(contact, selected);
    }

    @Activity()
    search(filter: string) {
        this.searchService.search(filter);
    }

    @Activity()
    resetSearch() {
        this.searchService.reset();
    }

    @Activity()
    toggle() {
        this.state.showList = !this.state.showList;
    }

    @Activity()
    refresh() {
        this.contactService.refresh();

        this.onContactsLoaded();
    }

    @Reaction()
    private onContactsLoaded() {
        const all = this.state.contacts.all;
        this.searchService.onContactsLoaded(all);
        this.selectionService.onContactsLoaded(all)
    }
}
