import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroCardComponent } from "./hero-card/hero-card.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        HeroCardComponent,
        HeroesComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [HeroesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
