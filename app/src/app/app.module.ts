import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CharactersComponent } from './characters/characters.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { ShopItemDetailComponent } from './shop-item-detail/shop-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RemoveFromCartComponent } from './remove-from-cart/remove-from-cart.component';
import { ItemQuantityComponent } from './item-quantity/item-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SplashScreenComponent,
    CharactersComponent,
    NavigationComponent,
    StoreComponent,
    PageNotFoundComponent,
    CharacterDetailComponent,
    ShopItemDetailComponent,
    CartComponent,
    AddToCartComponent,
    RemoveFromCartComponent,
    ItemQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
