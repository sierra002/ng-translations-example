import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { registerLocaleData, getCurrencySymbol } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es-CO';

import { HeroesService } from './heroes.service';
import { IHero } from './heroes.interface';

@Component({
  selector: 'jhz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'translations';
  heroes$: Observable<IHero[]>
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];
  today: number = Date.now();
  currencySymbol: string;
  value: number = 2000.3495;

  constructor( private heroesService: HeroesService, @Inject(LOCALE_ID) protected localeId: string ) {
    this.setLocale(localeId);
  }

  ngOnInit() {
    this.heroes$ = <Observable<IHero[]>>this.heroesService.getHeroes();
  }

  setLocale(localeId: string) {
    switch (localeId) {
      case 'es':
        registerLocaleData(localeEs, localeId);
        this.currencySymbol = 'COP';
        break;
      
      case 'en-US':
        registerLocaleData(localeEs, 'en');
        this.currencySymbol = 'USD';
        break;
        
        default:
          break;
    }
    
  }
}
