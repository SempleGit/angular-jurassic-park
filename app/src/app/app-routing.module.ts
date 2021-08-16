import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/app/main-page/main-page.component';
import { SplashScreenComponent } from 'src/app/splash-screen/splash-screen.component';
import { CharactersComponent } from 'src/app/characters/characters.component';
import { CharacterDetailComponent } from 'src/app/character-detail/character-detail.component';
import { StoreComponent } from 'src/app/store/store.component';
import { ShopItemDetailComponent } from 'src/app/shop-item-detail/shop-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { ProcessOrderComponent } from './process-order/process-order.component';

const routes: Routes = [
  { path: "main", component: MainPageComponent },
  { path: "splash", component: SplashScreenComponent },
  { path: "characters", component: CharactersComponent },
  { path: "characters/:id", component: CharacterDetailComponent },
  { path: "store", component: StoreComponent },
  { path: "cart", component: CartComponent },
  { path: "details/:id", component: ShopItemDetailComponent },
  { path: "processOrder", component: ProcessOrderComponent },
  { path: "", redirectTo: "/splash", pathMatch: "full" }, //Sets the default page to direct to the splash screen page.
  { path: "**", component: PageNotFoundComponent }, //Any page that doesn't exist will route here.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
