import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantesPage } from './restaurantes';
import { RestauranteService } from '../../services/domain/restaurante.service';
import { CartaoService } from '../../services/domain/cartao.service';

@NgModule({
  declarations: [
    RestaurantesPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantesPage),
  ],
  providers: [
    RestauranteService,
    CartaoService,
  ]
})
export class RestaurantesPageModule {}
