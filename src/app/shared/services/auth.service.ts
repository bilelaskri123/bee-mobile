import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private backend_url: string = environment.backend_url;
    private token?: string;
    private isAuthenticated = false;
    constructor(private http: HttpClient, private router: Router) {

    }

    login(cin: string, password: string): Observable<{ token: string}> {
        const authData = { cin, password };
        return this.http.post<{ token: string }>(`${this.backend_url}/auth/login`, authData)
    }

    saveAuthData(token: string) {
        this.token = token;
        this.isAuthenticated = true;
        localStorage.setItem('token', token);
    }

    getAuthData() {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        return { token };
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            this.logout();
            return;
        }

        this.token = authInformation.token;
    }

    clearAuthData() {
        localStorage.removeItem('token');
    }

    logout() {
        this.token = undefined;
        this.isAuthenticated = false;
        this.clearAuthData();
        this.router.navigate(['/login']);
    }
}