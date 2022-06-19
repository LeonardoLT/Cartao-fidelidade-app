import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Cartao } from '../../models/cartao.model';
import { ClienteService } from '../../services/domain/cliente.service';

@IonicPage()
@Component({
  selector: 'page-cartoes',
  templateUrl: 'cartoes.html',
})
export class CartoesPage {

  cartoes: Cartao[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clienteService: ClienteService,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    this.clienteService.findAllCartoesByIdCliente()
      .subscribe(response => {
        this.cartoes = response;
      },
      error => {});
  }

  detalheCartao(cartaoObj: Cartao) {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 10000,
      dismissOnPageChange: true
    });
    loader.present();
    this.navCtrl.push('DetalheCartaoPage', {cartao: cartaoObj});
  }
}
