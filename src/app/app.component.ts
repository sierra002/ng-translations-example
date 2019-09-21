import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs';
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

  constructor(private heroesService: HeroesService, @Inject(LOCALE_ID) protected localeId: string) {
  }

  ngOnInit() {
    this.heroes$ = <Observable<IHero[]>>this.heroesService.getHeroes();
  }
}
