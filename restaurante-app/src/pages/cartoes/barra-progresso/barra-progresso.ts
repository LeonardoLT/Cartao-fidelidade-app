import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progresso',
  templateUrl: './barra-progresso.html',
})
export class BarraProgresso implements OnInit {
    @Input() total;
    @Input() parcial;


  constructor(
  ) { }

  ngOnInit(){}

    get porcentagem(){
        return (this.parcial * 100) / this.total;
    }

}
