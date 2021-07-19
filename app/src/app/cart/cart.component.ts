import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  link = 'cart';

  constructor() { }

  ngOnInit(): void {
  }

}
