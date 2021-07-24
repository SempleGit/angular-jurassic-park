import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';
import { CartHandlerService } from '../cart-handler.service';
import { Observable } from 'rxjs';

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

}
