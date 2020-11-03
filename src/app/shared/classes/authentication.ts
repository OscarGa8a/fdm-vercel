import {AUTH_TOKEN_STORAGE, AUTH_USER_ROLE, AUTH_USER_STORAGE} from '../../const';

export class Authentication {
    static getUser() {
        return JSON.parse(localStorage.getItem(AUTH_USER_STORAGE));
    }

    static getToken(): string {
        return localStorage.getItem(AUTH_TOKEN_STORAGE);
    }

    static setToken(token: string): void {
        localStorage.setItem(AUTH_TOKEN_STORAGE, token);
    }

    static setRole(role: string): void {
        localStorage.setItem(AUTH_USER_ROLE, role);
    }

    static isAuthenticated(): boolean {
        return !!(localStorage.getItem(AUTH_TOKEN_STORAGE));
    }

    static  getRole(): string {
        return localStorage.getItem(AUTH_USER_ROLE);
    }
}
