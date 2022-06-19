import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Cartao } from '../../../models/cartao.model';
import { Restaurante } from '../../../models/restaurante.model';

@IonicPage()
@Component({
  selector: 'app-detalhe-restaurante',
  templateUrl: './detalhe-restaurante.html',
})
export class DetalheRestaurantePage implements OnInit {

  constructor(
    public navCtrl : NavController,
    public navParams: NavParams
  ) { }

  visitas = []
  restaurante: Restaurante

  ngOnInit() {
      this.restaurante = this.navParams.get('restaurante');
      console.log(this.restaurante);
  }
}
