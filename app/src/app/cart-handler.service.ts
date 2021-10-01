import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItems } from './shop-items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartHandlerService {

  constructor(private http: HttpClient) { }
  // private api = 'https://warm-reaches-88811.herokuapp.com';
  private api = '/api';
  
  private addToCartUrl = `${this.api}/addToCart`;
  private removeOneFromCartUrl = `${this.api}/removeOneFromCart`;
  private clearCartUrl = `${this.api}/clearCart`;
  private getCartUrl = `${this.api}/getCartItems`;
  private getTotalUrl = `${this.api}/processOrder`;

  addToCart(item?: ShopItems): Observable<ShopItems[]> {
    return this.http.post<ShopItems[]>(this.addToCartUrl, item);
  }
  
  removeOneFromCart(item?: ShopItems): Observable<ShopItems[]> {
    return this.http.post<ShopItems[]>(this.removeOneFromCartUrl, item);
  }

  clearCart(): Observable<ShopItems[]> {
    return this.http.post<ShopItems[]>(this.clearCartUrl, {});
  }

  getCart(): Observable<ShopItems[]> {
    return this.http.post<ShopItems[]>(this.getCartUrl, {});
  }  

  getTotal(): Observable<number> {
    return this.http.post<number>(this.getTotalUrl, {});
  }

}
