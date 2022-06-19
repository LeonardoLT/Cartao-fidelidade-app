import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartoesPage } from './cartoes';
import { ClienteService } from '../../services/domain/cliente.service';
import { CartaoService } from '../../services/domain/cartao.service';
import { BarraProgressoModule } from './barra-progresso/barra-progresso.module';

@NgModule({
  declarations: [
    CartoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CartoesPage),
    BarraProgressoModule
  ],
  providers: [
    ClienteService,
    CartaoService,
  ]
})
export class CartoesPageModule {}
