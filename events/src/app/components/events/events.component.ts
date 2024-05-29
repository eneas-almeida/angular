import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
    show: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    showMessage() {
        this.show = true;
    }

    toggleMessage() {
        this.show = !this.show;
    }
}
