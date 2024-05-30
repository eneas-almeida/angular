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
        this.list();
    }

    list() {
        this.accountsService.listAccounts().subscribe((accounts) => (this.accounts = accounts));
    }

    delete(id: number) {
        this.accountsService.deleteAccount(id).subscribe(() => {
            this.accounts = this.accounts.filter((item) => item.id !== id);
        });
    }

    create(account: AccountInterface) {
        this.accountsService.createAccount(account).subscribe((account) => this.accounts.push(account));
    }

    update(account: AccountInterface) {
        this.accountsService.updateAccount(account).subscribe((account) => {
            const index = this.accounts.findIndex((item) => item.id === account.id);
            this.accounts[index] = account;
        });
    }
}
