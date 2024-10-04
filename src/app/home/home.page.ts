import { Component } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  amount: number = 0;
  baseCurrency: string = 'BRL'; 
  targetCurrency: string = 'USD'; 
  convertedValue: number | null = null; 

  constructor(private exchangeService: ExchangeService) {}

  convert() {
    if (this.amount > 0) {  
      this.exchangeService.getExchangeRates(this.baseCurrency).subscribe(  
        (data) => {
          const rate = data.conversion_rates?.[this.targetCurrency];
          
          if (rate != null) { 
            this.convertedValue = this.amount * rate; 
          } else {
            console.error('Taxa de câmbio não encontrada para a moeda:', this.targetCurrency);
          }
        }, 
        (error) => {
          console.error('Erro na requisição:', error);  
        }
      );
    } else {
      console.error('O valor da quantidade deve ser maior que 0.');
    }
  }
}