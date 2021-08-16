import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';
import { CartHandlerService } from '../cart-handler.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  link = 'cart';
  cartItems: ShopItems[] = [];
  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  

  getCartItems(): void {
    this.cartHandler.getCart().subscribe(items => this.cartItems = items);
  }

  clearCart(): void {
    this.cartHandler.clearCart().subscribe(items => this.cartItems = items);
  }

  addToCart(item: ShopItems): void {
    this.cartHandler.addToCart(item).subscribe(items => this.cartItems = items);
  }

  removeOneFromCart(item: ShopItems): void {
    this.cartHandler.removeOneFromCart(item).subscribe(items => this.cartItems = items)
  }

}
