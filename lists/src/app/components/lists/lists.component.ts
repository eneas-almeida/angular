import { Component, OnInit } from '@angular/core';

interface UserData {
    name: string;
    age: number;
}

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
    users: UserData[] = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 24 },
        { name: 'Jim', age: 26 },
        { name: 'Jill', age: 23 },
    ];

    constructor() {}

    ngOnInit(): void {}
}
