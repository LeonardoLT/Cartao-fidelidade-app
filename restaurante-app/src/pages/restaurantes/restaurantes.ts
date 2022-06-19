import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestauranteService } from '../../services/domain/restaurante.service';
import { Restaurante } from '../../models/restaurante.model';
import { CartaoService } from '../../services/domain/cartao.service';

/**
 * Generated class for the RestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  restaurantes : Restaurante[];
  restaurantesCompleto : Restaurante[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restauranteService: RestauranteService,
    public cartaoService: CartaoService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {

    this.restauranteService.findAll().subscribe(result => {
      this.restaurantes = result;
      this.restaurantesCompleto = result;
      console.log(this.restaurantes);
    });

  }

  initializeItems() {
      this.restaurantes = this.restaurantesCompleto;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.restaurantes = this.restaurantes.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  detalheRestaurante(restauranteObj: Restaurante){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 10000,
      dismissOnPageChange: true
    });
    loader.present();
    this.navCtrl.push('DetalheRestaurantePage', {restaurante: restauranteObj});
  }

  addRestaurante(idRestaurante: number){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 10000,
      dismissOnPageChange: true
    });
    loader.present();
    this.cartaoService.addCartao(idRestaurante).subscribe(() => {
      console.log('ok');
      loader.dismiss();
    }, () => {
      console.log('nok');
      loader.dismiss();
    });
  }
}
