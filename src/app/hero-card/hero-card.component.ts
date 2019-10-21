import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IHero } from "../heroes.interface";
import { HeroesService } from "../heroes.service";
import { LinkCardService } from "../shared/link-card.service";
import { map } from "rxjs/operators";
import { zip } from "rxjs";

@Component({
    selector: 'jhz-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
    public hero: IHero;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private heroesService: HeroesService,
                private linkCardService: LinkCardService) {
    }

    backClicked() {
        this.router.navigate([''])
    }

    ngOnInit() {
        zip(this.route.paramMap, this.heroesService.getHeroes())
            .pipe(map(([params, heroes]) => {
                return heroes.find((hero) => {
                    return hero.id === params.get('hero')
                }) || {};
            })).subscribe((hero) => {
            this.hero = hero;
            this.linkCardService.setMetaTags(this.hero.name, this.hero.about, this.hero.squarePic || this.hero.picture)
        });
        console.log('heroCardComponent');
    }

}
