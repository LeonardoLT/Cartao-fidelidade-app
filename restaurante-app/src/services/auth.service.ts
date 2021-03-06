import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular2-jwt';
import { Credenciais } from "../models/credenciais.model";

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    authenticate(creds : Credenciais) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
        let user : LocalUser = {
            token: authorizationValue,
            email: this.jwtHelper.decodeToken(authorizationValue).sub
        };
        this.storage.setLocalUser(user);
    }

    isLogged(){
      return !!this.storage.getLocalUser()
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}
