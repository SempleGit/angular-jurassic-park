import { Component, OnInit, Input } from '@angular/core';
import { CartItems } from '../cart-items';
import { CartHandlerService } from '../cart-handler.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  link = 'cart';
  cartItems: CartItems[] = [];
  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartHandler.getCart().subscribe(items => this.cartItems = items);
  }

}
