import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    name: string = 'Tiago';

    constructor() {}

    ngOnInit(): void {}

    onNameEmitted(name: string) {
        this.name = name;
    }
}
