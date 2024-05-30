import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountInterface } from '../contracts/Account';

@Injectable({
    providedIn: 'root',
})
export class AccountsService {
    private api = 'http://localhost:3000/accounts';

    constructor(private httpClient: HttpClient) {}

    getAccounts(): Observable<AccountInterface[]> {
        return this.httpClient.get<AccountInterface[]>(this.api);
    }
}
