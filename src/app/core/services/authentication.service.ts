import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IAuthResponse, ICredentials } from '../../shared/interfaces/auth';
import { tap } from 'rxjs/operators';
import { Authentication } from '../../shared/classes/authentication';
import { tokenAuthMutation } from '@saleor/auth/mutations';
import {BehaviorSubject} from 'rxjs';
import {AUTH_TOKEN_STORAGE, AUTH_USER_ROLE} from '../../const';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    /*Fake observable*/
    private rolUser = new BehaviorSubject<string>(localStorage.getItem(AUTH_USER_ROLE));
    rolUser$ = this.rolUser.asObservable();

    constructor(private apollo: Apollo) {
    }

    authenticate(credentials: ICredentials) {
        return this.apollo.mutate<IAuthResponse>({mutation: tokenAuthMutation, variables: credentials})
            .pipe(tap(response => {
                Authentication.setToken(response.data.tokenCreate.token);
            }));
    }

    /*-------------------------------Fake Functions-------------------------*/
    authFake(credentials: ICredentials) {
        if (credentials.email === 'desing@gmail.com' && credentials.password === 'desing') {
            this.rolUser.next('design');
            Authentication.setToken('sdsdfSFWASfEF454464dvaa4ad4ab4ad4g4');
            Authentication.setRole('design');
            return true;
        } else if (credentials.email === 'general@gmail.com' && credentials.password === 'general') {
            this.rolUser.next('');
            Authentication.setToken('sdsdfSFWASfEF45446dafabebsadsvsWRGGew4q2q');
            Authentication.setRole('');
            return true;
        } else {
            return false;
        }
    }

    fakeLogout() {
        localStorage.removeItem(AUTH_USER_ROLE);
        localStorage.removeItem(AUTH_TOKEN_STORAGE);
    }

    getrolUser () {
        return this.rolUser$;
    }
}
