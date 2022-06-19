import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalheRestaurantePage } from './detalhe-restaurante';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicPageModule.forChild(DetalheRestaurantePage),
  ],
  declarations: [
    DetalheRestaurantePage
  ]
})
export class DetalheRestaurantePageModule {}
