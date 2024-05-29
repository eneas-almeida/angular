import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { UserInterface } from 'src/app/contracts/User';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
    users: UserInterface[] = [];

    constructor(private listService: ListService) {
        this.doGetList();
    }

    ngOnInit(): void {}

    doGetList() {
        this.users = this.listService.getList();
    }

    doAddUser() {
        this.listService.addUser({ name: 'João', email: 'joao@gmail.com' });
    }

    doRemoveAll() {
        this.users = [];
        this.listService.removeAllUsers();
    }
}
