import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const routes: Routes = [
  { path: "main", component: MainPageComponent },
  { path: "splash", component: SplashScreenComponent },
  { path: "", redirectTo: "/splash", pathMatch: "full" }, //Sets the default page to direct to the splash screen page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
