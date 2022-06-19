import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalheCartaoPage } from './detalhe-cartao';
import { IonicPageModule } from 'ionic-angular';
import { CartaoService } from '../../../services/domain/cartao.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicPageModule.forChild(DetalheCartaoPage),
  ],
  declarations: [
    DetalheCartaoPage
  ],
  providers: [
    CartaoService,
  ]
})
export class DetalheCartaoPageModule {}
