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

  constructor() { }
}
