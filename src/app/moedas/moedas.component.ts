import { Component } from '@angular/core';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent {
  real: number = 0;
  dolar : number = 0;
  euro: number = 0;
  libra: number = 0;
  resultadoD: number = 0;
  resultadoE: number = 0;
  resultadoL: number = 0;

  converter(){
   this.resultadoD = this.real / this.dolar;
   this.resultadoE = this.real / this.euro;
   this.resultadoL = this.real / this.libra;
  }
}
