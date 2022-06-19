import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Cartao } from '../../../models/cartao.model';
import { CartaoService } from '../../../services/domain/cartao.service';

@IonicPage()
@Component({
  selector: 'app-detalhe-cartao',
  templateUrl: './detalhe-cartao.html',
})
export class DetalheCartaoPage implements OnInit {

  constructor(
    public navCtrl : NavController,
    public navParams: NavParams,
    public cartaoService: CartaoService,
  ) { }

  visitas = []
  cartao: Cartao

  async ngOnInit() {
      this.cartao = this.navParams.get('cartao');
      this.cartao = await this.cartaoService.findById(this.cartao.id).toPromise();
      this.preencherVisitasArray();
  }

  preencherVisitasArray() {
    if(this.cartao){
      let i = 0;
      while(i < this.cartao.restaurante.nmVisitaCartao){
        this.visitas.push(i);
        i++;
      }
    }
  }
}
