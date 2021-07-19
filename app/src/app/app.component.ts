import { Component } from '@angular/core';
import { ShopItems } from './shop-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jurassic Park';
  cart?: ShopItems[];
}
