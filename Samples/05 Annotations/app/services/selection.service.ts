import {Contact} from "./contact.service";
import {Activity} from "../annotations/activity";
import {Query} from "../annotations/query";
import {Reaction} from "../annotations/reaction";

export interface SelectionState {
    selectedCount: number;
    totalCount: number;
    selected: Set<Contact>;
    all: Contact[];
}

export class SelectionService {
    state: SelectionState;

    constructor() {
        this.state = new class {
            all = null;

            get selectedCount() {
                return this.selected.size;
            }

            get totalCount() {
                return this.all.length;
            }

            selected = new Set<Contact>();
        }
    }

    @Activity()
    change(contact: Contact, selected: boolean) {
        if(selected) {
            this.state.selected.add(contact);
        }
        else {
            this.state.selected.delete(contact);
        }
    }

    @Query()
    isSelected(contact: Contact) {
        return this.state.selected.has(contact);
    }

    @Reaction()
    onContactsLoaded(all: Contact[]) {
        this.state.all = all;
    }
}
