import { NgModule } from '@angular/core';
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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ShopItemDetailComponent } from './shop-item-detail/shop-item-detail.component';

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
    ShopItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
