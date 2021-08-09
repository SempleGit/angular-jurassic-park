import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent implements OnInit {

  @Input() shopItem: ShopItems = {
      id: 1,
      itemName: '',
      price: 0,
      description: '',
      img: '',
      alt: '',
    };
  constructor() { }

  ngOnInit(): void {
    
  }

}
