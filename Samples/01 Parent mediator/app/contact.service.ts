export class ContactService {
    contacts: Contact[];
    selected: Contact[];

    constructor() {
    }

    toggleSelection(contact) {
    }
}

export interface Contact {
    id: number;
    name: string;
    selected?: boolean;
}
