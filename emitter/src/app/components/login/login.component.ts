import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    @Output()
    nameEmitted: EventEmitter<string> = new EventEmitter<string>();

    nameTemp: string = 'Daniel';

    constructor() {}

    ngOnInit(): void {}

    handleName(): void {
        this.nameEmitted.emit(this.nameTemp);
    }
}
