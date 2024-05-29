import { Component } from '@angular/core';

interface UserData {
    name: string;
    age: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    emailSent: string = 'tiago@gmail.com';
    dataSent: UserData = { name: 'tiago', age: 10 };
}
