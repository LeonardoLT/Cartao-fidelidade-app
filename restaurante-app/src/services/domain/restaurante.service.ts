import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Restaurante } from '../../models/restaurante.model';
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class RestauranteService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<Restaurante[]>  {
        return this.http.get<Restaurante[]>(`${API_CONFIG.baseUrl}/restaurantes`);
    }
}