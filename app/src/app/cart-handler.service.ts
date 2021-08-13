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

  addToCart(item?: ShopItems): void;
  addToCart(item?: number): void;
  addToCart(item?: any): void {
    this.http.post(this.addToCartUrl, item).subscribe();
  }
  
  removeOneFromCart(item?: ShopItems): void {
    this.http.post(this.removeOneFromCartUrl, item).subscribe();
  }

  clearCart(): void {
    this.http.post(this.clearCartUrl, {}).subscribe();
  }

  getCart(): Observable<ShopItems[]> {
    return this.http.post<ShopItems[]>(this.getCartUrl, {});
  }  

}
