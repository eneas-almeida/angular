import { Injectable } from '@angular/core';
import { UserInterface } from '../contracts/User';

@Injectable({
    providedIn: 'root',
})
export class ListService {
    users: UserInterface[] = [
        { name: 'Tiago', email: 'tiago@gmail.com' },
        { name: 'Marcos', email: 'margos@gmail.com' },
    ];

    constructor() {}

    getList(): UserInterface[] {
        return this.users;
    }

    addUser(user: UserInterface): void {
        const exists =
            this.users.findIndex((u) => u.email === user.email) !== -1;

        if (exists) {
            return;
        }

        this.users.push(user);
    }

    removeAllUsers() {
        this.users = [];
    }
}
