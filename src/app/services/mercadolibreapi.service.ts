import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreapiService {

  constructor(private http: HttpClient) { }
   
  consultarProductos(query): Observable<any> {
    return (this.http.get ('https://api.mercadolibre.com/sites/MLA/search?q=:'+ query));
  }

}
