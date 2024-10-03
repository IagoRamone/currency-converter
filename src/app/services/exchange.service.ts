import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private apiKey = 'da56419220f2dd5401195c0c'; 
  private apiUrl = 'https://v6.exchangerate-api.com/v6/da56419220f2dd5401195c0c';  

  constructor(private http: HttpClient) { }

  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest/${baseCurrency}`);
  }
}
