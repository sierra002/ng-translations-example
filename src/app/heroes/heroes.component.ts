import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IHero } from "../heroes.interface";
import { HeroesService } from "../heroes.service";
import { Router } from "@angular/router";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-CO";
import localeEn from "@angular/common/locales/en";

@Component({
  selector: 'jhz-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title = 'translations';
  heroes$: Observable<IHero[]>
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];
  today: number = Date.now();
  currencySymbol: string;
  value: number = 2000.3495;

  constructor( private heroesService: HeroesService, @Inject(LOCALE_ID) protected localeId: string , private router: Router) {
    this.setLocale(localeId);
  }

  ngOnInit() {
    console.log(this.router);
    this.heroes$ = <Observable<IHero[]>>this.heroesService.getHeroes();
  }
  checkHero(heroId){
    console.log('nav');
    this.router.navigate(['/hero', heroId])
  }

  setLocale(localeId: string) {
    switch (localeId) {
      case 'es':
        registerLocaleData(localeEs, localeId);
        this.currencySymbol = 'COP';
        break;

      case 'en-US':
        registerLocaleData(localeEn, 'en');
        this.currencySymbol = 'USD';
        break;

      default:
        break;
    }

  }
}
