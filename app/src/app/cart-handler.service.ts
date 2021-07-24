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

  addToCart(item?: ShopItems): void {
    this.http.post(this.addToCartUrl, item).subscribe();
    console.log(`add to cart:`, item);
  }
  
  removeOneFromCart(item?: ShopItems): void {
    this.http.post(this.removeOneFromCartUrl, item).subscribe();
    console.log(`remove from cart:`, item);
  }

  clearCart(): void {
    this.http.post(this.clearCartUrl, {}).subscribe();
    console.log(`clear cart:`);
  }

  getCart(): Observable<ShopItems[]> {
    console.log(`get cart:`);
    return this.http.post<ShopItems[]>(this.getCartUrl, {});
  }  

}
