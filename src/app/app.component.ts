import { Component, OnInit } from '@angular/core';
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

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroes$ = <Observable<IHero[]>>this.heroesService.getHeroes();
  }
}
