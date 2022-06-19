import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cartao } from '../../models/cartao.model';
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class CartaoService {

    constructor(public http: HttpClient) {
    }

    findAllByCliente(id: number) : Observable<Cartao[]>  {
        return this.http.get<Cartao[]>(`${API_CONFIG.baseUrl}/cliente/${id}/cartoes`);
    }

    findById(id: number) : Observable<Cartao>  {
      return this.http.get<Cartao>(`${API_CONFIG.baseUrl}/cartoes/${id}`);
    }

    addCartao(idRestaurante: number) : Observable<Cartao[]>  {
      return this.http.post<any>(`${API_CONFIG.baseUrl}/cartoes/${idRestaurante}`, null);
    }
}
