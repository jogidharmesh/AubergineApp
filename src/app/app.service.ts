import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor( private http:HttpClient) { }

  getData()
  {
    return this.http.get('https://api.iextrading.com/1.0/stock/aapl/company')
  }

}
