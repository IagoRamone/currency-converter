import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  amount: number = 0;  
  baseCurrency: string = 'USD'; 
  targetCurrency: string = 'BRL';  

  convertedValue: number | null = null;

 // Taxas de conversão fictícias
 taxas: { [key: string]: number } = {
  'BRL-USD': 0.19,
  'BRL-EUR': 0.16,
  'EUR-USD': 1.1,
  'EUR-BRL': 6.25,
  'USD-BRL': 5.25,
  'USD-EUR': 0.91,
};

  constructor() { }

  convert() {
    const taxaConversao = this.taxas[`${this.baseCurrency}-${this.targetCurrency}`];
    if (taxaConversao) {
      this.convertedValue = this.amount * taxaConversao;
    } else {
      // Se a moeda de origem e destino forem iguais, o valor convertido será o mesmo
      this.convertedValue = this.amount;
    }
  }  

}
