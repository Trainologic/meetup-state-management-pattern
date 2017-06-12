import {Activity} from "../annotations/activity";
export interface ContactsState {
    all: Contact[];
}

export class ContactService {
    state: ContactsState;

    constructor() {
        this.state = {
            all: []
        };

        const all = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
            { "id": 3, "name": "Udi" },
            { "id": 4, "name": "Tommy" }
        ];

        for (let i = 0; i < 1000; i++) {
            for (let contact of all) {
                this.state.all.push({
                    ...contact
                });
            }
        }

        //this.state.all = all;
    }

    @Activity()
    refresh() {
        const rand = Math.floor(Math.random() * 10000);

        const updates = [
            {"id": 2, "name": `Roni-${rand}`},
            {"id": 3, "name": `Udi-${rand}`},
        ];

        const clone = this.state.all.concat([]);

        for(let update of updates) {
            const index = clone.findIndex(c => c.id == update.id);
            if(index != -1) {
                clone[index] = Object.assign({}, clone[index], update);
            }
        }

        this.state.all = clone;
    }
}

export interface Contact {
    id: number;
    name: string;
}
