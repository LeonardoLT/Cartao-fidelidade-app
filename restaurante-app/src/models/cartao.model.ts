import { Restaurante } from './restaurante.model';

export interface Cartao {
    id: number,
    nmVisitaAtual: number,
    nmVisitaTotal: number,
    restaurante: Restaurante,
}