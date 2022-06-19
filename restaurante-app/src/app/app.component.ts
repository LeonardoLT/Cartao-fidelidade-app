import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'TabsPage';

  pages: any[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Entrar', component: 'LoginPage' },
      { title: 'Cartões', component: 'CartoesPage', index: 0 },
      { title: 'Restaurantes', component: 'RestaurantesPage', index: 1 },
      { title: 'Sair', component: 'LoginPage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    console.log(page);

    let params = {};

    if(page.title == 'Sair'){
      this.auth.logout();
    }

    if(page.index) {
      params = {tabIndex: page.index}; 
    }

    if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.component, params);
    }
  }
}
