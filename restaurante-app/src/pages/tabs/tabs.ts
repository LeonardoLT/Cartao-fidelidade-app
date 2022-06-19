import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'CartoesPage';
  tab2Root = 'RestaurantesPage';
  myIndex : number;

  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    if(!this.auth.isLogged()){
      this.navCtrl.setRoot('LoginPage');
    }
    console.log('ionViewDidLoad TabsPage');
  }

}
