import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
    can: boolean = false;
    name: string = 'tiago';

    classes = ['green-title', 'bk-title'];

    constructor() {}

    ngOnInit(): void {}
}
