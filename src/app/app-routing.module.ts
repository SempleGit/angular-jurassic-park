import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CharactersComponent } from './characters/characters.component';
import { StoreComponent } from './store/store.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "main", component: MainPageComponent },
  { path: "splash", component: SplashScreenComponent },
  { path: "characters", component: CharactersComponent },
  { path: "store", component: StoreComponent },
  { path: "detail/:id", component: CharacterDetailComponent },
  { path: "", redirectTo: "/splash", pathMatch: "full" }, //Sets the default page to direct to the splash screen page.
  { path: "**", component: PageNotFoundComponent }, //Any page that doesn't exist will route here.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
