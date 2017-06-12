export interface ContactsState {
    all: Contact[];
}

export class ContactService {
    state: ContactsState;

    constructor() {
        this.state = {
            all: [
                {"id": 1, "name": "Ori"},
                {"id": 2, "name": "Roni"},
                {"id": 3, "name": "Udi"},
                {"id": 4, "name": "Tommy"},
            ]
        };
    }

    refresh() {
        const rand = Math.floor(Math.random() * 10000);

        const updates = [
            {"id": 2, "name": `Roni-${rand}`},
            {"id": 3, "name": `Udi-${rand}`},
        ];

        const existing = this.state.all;

        for(let update of updates) {
            const index = existing.findIndex(c => c.id == update.id);
            if(index != -1) {
                Object.assign(existing[index], update);
            }
        }
    }
}

export interface Contact {
    id: number;
    name: string;
}
