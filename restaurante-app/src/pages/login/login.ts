import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { AuthService } from '../../services/auth.service';
import { Credenciais } from '../../models/credenciais.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  creds : Credenciais = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService,
    public loadingCtrl: LoadingController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 10000,
      dismissOnPageChange: true
    });
    loader.present();
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response);
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('TabsPage');
      },
      error => {});    
  }

  registrar(){
    this.navCtrl.push('RegistrarPage');
  }
}
