import { Component, Input, OnInit } from '@angular/core';

interface UserData {
    name: string;
    age: number;
}

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
    @Input() emailReceive: string = '';
    @Input() dataReceive!: UserData;

    constructor() {}

    ngOnInit(): void {}
}
