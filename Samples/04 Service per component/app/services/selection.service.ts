import {Contact} from "./contact.service";

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

    onContactsLoaded(all: Contact[]) {
        this.state.all = all;
    }

    change(contact: Contact, selected: boolean) {
        if(selected) {
            this.state.selected.add(contact);
        }
        else {
            this.state.selected.delete(contact);
        }
    }

    isSelected(contact: Contact) {
        return this.state.selected.has(contact);
    }
}
