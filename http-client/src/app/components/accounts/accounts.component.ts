import { Component, OnInit } from '@angular/core';
import { AccountInterface } from 'src/app/contracts/Account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
    accounts: AccountInterface[] = [];

    constructor(private accountsService: AccountsService) {}

    ngOnInit(): void {
        this.getAccounts();
    }

    getAccounts() {
        this.accountsService
            .getAccounts()
            .subscribe((accounts) => (this.accounts = accounts));
    }
}
