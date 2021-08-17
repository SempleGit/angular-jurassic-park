import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItems } from './shop-items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartHandlerService {

  constructor(private http: HttpClient) { }
  private addToCartUrl = 'https://warm-reaches-88811.herokuapp.com/addToCart';
  private removeOneFromCartUrl = 'https://warm-reaches-88811.herokuapp.com/removeOneFromCart';
  private clearCartUrl = 'https://warm-reaches-88811.herokuapp.com/clearCart';
  private getCartUrl = 'https://warm-reaches-88811.herokuapp.com/getCartItems';
  private getTotalUrl = 'https://warm-reaches-88811.herokuapp.com/processOrder';

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
