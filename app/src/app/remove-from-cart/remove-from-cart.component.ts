import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';
import { CartHandlerService } from '../cart-handler.service';

@Component({
  selector: 'app-remove-from-cart',
  templateUrl: './remove-from-cart.component.html',
  styleUrls: ['./remove-from-cart.component.css']
})
export class RemoveFromCartComponent implements OnInit {

  @Input() item?: ShopItems;

  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
  }

  removeOneFromCart() {
    this.cartHandler.removeOneFromCart(this.item);
  }

}
