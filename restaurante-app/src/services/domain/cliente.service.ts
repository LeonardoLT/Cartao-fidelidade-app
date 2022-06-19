import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cartao } from '../../models/cartao.model';
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient) {
    }

    findAllCartoesByIdCliente() : Observable<Cartao[]>  {
        return this.http.get<Cartao[]>(`${API_CONFIG.baseUrl}/clientes/cartoes`);
    }
}