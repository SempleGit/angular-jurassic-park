import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() item?: ShopItems;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    console.log("add to cart");
    console.log(this.item);
    // this.cart.push(item);
  }

}
