import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';
import { CartHandlerService } from '../cart-handler.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() item?: ShopItems; 
  
  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartHandler.addToCart(this.item).subscribe();
  }

}
