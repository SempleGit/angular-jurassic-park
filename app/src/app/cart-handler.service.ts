import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopItems } from './shop-items';

@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  addToCartUrl = 'api/addToCart';
  constructor(private http: HttpClient) { }

  addToCart(item?: ShopItems): void {
    console.log("add to cart");
    console.log(item);
  }
}
