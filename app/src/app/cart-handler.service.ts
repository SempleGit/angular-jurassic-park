import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItems } from './shop-items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartHandlerService {

  constructor(private http: HttpClient) { }
  private addToCartUrl = 'api/addToCart';
  private removeOneFromCartUrl = 'api/removeOneFromCart';
  private clearCartUrl = 'api/clearCart';
  private getCartUrl = 'api/getCartItems';
  private getTotalUrl = 'api/processOrder';

  addToCart(item?: ShopItems): any {
    return this.http.post(this.addToCartUrl, item);
  }
  
  removeOneFromCart(item?: ShopItems): any {
    return this.http.post(this.removeOneFromCartUrl, item);
  }

  clearCart(): any {
    return this.http.post(this.clearCartUrl, {});
  }

  getCart(): Observable<ShopItems[]> {
    return this.http.post<ShopItems[]>(this.getCartUrl, {});
  }  

  getTotal(): Observable<number> {
    return this.http.post<number>(this.getTotalUrl, {});
  }

}
