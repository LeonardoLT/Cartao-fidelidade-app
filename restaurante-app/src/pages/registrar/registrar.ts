import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NovoCliente } from '../../models/novo-cliente.model';
import { AuthService } from '../../services/auth.service';
import { Credenciais } from '../../models/credenciais.model';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  novoCliente: NovoCliente = {
    nome: "",
    sobrenome: "",
    email: "",
    confirmarEmail: "",
    senha: "",
    confirmarSenha: "",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  confirmar() {
    let cred: Credenciais = {
      email: "",
      senha: "",
    }
    cred.email = this.novoCliente.email;
    cred.senha = this.novoCliente.senha;
    
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 10000,
      dismissOnPageChange: true
    });

    this.auth.authenticate(cred)
      .subscribe(response => {
        console.log(response);
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('TabsPage');
      },
      error => {});    
  }

}
