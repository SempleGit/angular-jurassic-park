import { Component, OnInit } from '@angular/core';
import { ShopItemsService } from 'src/app/shop-items.service';
import { ShopItems } from 'src/app/shop-items';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  link = 'store';
  shopItems: ShopItems[] = [];
  constructor(private shopItemService: ShopItemsService) { }

  ngOnInit(): void {
    this.getShopItems();
  }

  getShopItems = (): void => {
    this.shopItemService.getShopItems().subscribe(shopItems => this.shopItems = shopItems);
  }
}
