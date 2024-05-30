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

    listAccounts(): Observable<AccountInterface[]> {
        return this.httpClient.get<AccountInterface[]>(this.api);
    }

    getAccount(id: number): Observable<AccountInterface> {
        return this.httpClient.get<AccountInterface>(`${this.api}/${id}`);
    }

    createAccount(account: AccountInterface): Observable<AccountInterface> {
        const configs = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        return this.httpClient.post<AccountInterface>(this.api, account, configs);
    }

    updateAccount(account: AccountInterface): Observable<AccountInterface> {
        const configs = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        return this.httpClient.put<AccountInterface>(`${this.api}/${account.id}`, account, configs);
    }

    deleteAccount(id: number): Observable<AccountInterface> {
        return this.httpClient.delete<AccountInterface>(`${this.api}/${id}`);
    }
}
