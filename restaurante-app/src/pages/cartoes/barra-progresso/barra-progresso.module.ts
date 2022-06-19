import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartaoService } from '../../../services/domain/cartao.service';
import { BarraProgresso } from './barra-progresso';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports: [
    BarraProgresso
  ],
  declarations: [
    BarraProgresso
  ],
  providers: [
  ]
})
export class BarraProgressoModule {}
