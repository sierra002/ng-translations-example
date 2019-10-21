import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCardComponent } from "./hero-card/hero-card.component";
import { HeroesComponent } from "./heroes/heroes.component";


const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    pathMatch: 'full'
  },
  {
    path: 'hero/:hero',
    component: HeroCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
