import { Component, OnInit } from '@angular/core';
import { ShopItemsService } from '../shop-items.service';
import { ShopItems } from '../shop-items';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  link = 'store';
  shopItems: ShopItems[] = [];
  cart: ShopItems[] = [];
  constructor(private shopItemService: ShopItemsService) { }

  ngOnInit(): void {
    this.getShopItems();
  }

  getShopItems(): void {
    this.shopItemService.getShopItems().subscribe(shopItems => this.shopItems = shopItems);
  }

  addToCart(item?: ShopItems): void {
    console.log("add to cart");
    // this.cart.push(item);
  }

}
