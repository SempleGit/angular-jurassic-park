import { Injectable } from '@angular/core';
import { ShopItems } from './shop-items';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShopItemsService {

  constructor(private http: HttpClient) { }

  private shopItemsUrl = 'api/shopitems';

  getShopItems(): Observable<ShopItems[]> {
    return this.http.get<ShopItems[]>(this.shopItemsUrl);
  }

  getShopItem(id: number): Observable<ShopItems> {
    const url = `${this.shopItemsUrl}/${id}`;
    return this.http.get<ShopItems>(url);
  }
}

