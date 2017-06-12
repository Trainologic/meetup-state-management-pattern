export class ContactService {
    contacts: Contact[];
    selected: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];

        this.selected = [];
    }

    changeSelection(contact, selected) {
        contact.selected = selected;

        const index = this.selected.findIndex(c => c == contact);

        if(contact.selected) {
            if(index==-1) {
                this.selected.push(contact);
            }
        }
        else {
            if(index != -1) {
                this.selected.splice(index, 1);
            }
        }
    }
}

export interface Contact {
    id: number;
    name: string;
    selected?: boolean;
}
