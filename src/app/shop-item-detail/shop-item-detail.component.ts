import { Component, OnInit, Input } from '@angular/core';
import { ShopItems } from '../shop-items';
import { ActivatedRoute } from '@angular/router';
import { ShopItemsService } from '../shop-items.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shop-item-detail',
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.css']
})
export class ShopItemDetailComponent implements OnInit {

  @Input() shopItem?: ShopItems;

  constructor(
    private route: ActivatedRoute,
    private shopItemsService: ShopItemsService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getShopItem();
  }

  getShopItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shopItemsService.getShopItem(id).subscribe(shopItem => this.shopItem = shopItem);
  }

  returnToShop(): void {
    this.location.back();
  }

}
