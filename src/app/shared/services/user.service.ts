import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private backend_url: string = environment.backend_url;
    constructor(private http: HttpClient) {}

    register(username: string, cin: string, email: string, password: string, confirmPassword: string) {
        const user = {
            username, cin, email, password, confirmPassword
        }

        return this.http.post(`${this.backend_url}/user`, user);
    }

    editprofile() {

    }

    getProfile() {
        
    }


}