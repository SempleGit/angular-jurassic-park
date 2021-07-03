import { Component, OnInit } from '@angular/core';
import { ShopItemsService } from '../shop-items.service';
import { ShopItems } from '../shop-items';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  shopItems: ShopItems[] = [];
  constructor(private shopItemService: ShopItemsService) { }

  ngOnInit(): void {
  }

  getShopItems(): void {
    this.shopItemService.getShopItems().subscribe(shopItems => this.shopItems = shopItems);
  }

}